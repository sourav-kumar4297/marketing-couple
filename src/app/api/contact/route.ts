import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEFAULT_RECIPIENTS = [
  "contact@marketingcouple.in",
  "souravkumar4297@gmail.com",
];

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 },
      );
    }

    const user = cleanEnv(process.env.SMTP_USER).toLowerCase();
    // Gmail App Passwords show as "xxxx xxxx xxxx xxxx" — keep letters only
    const pass = cleanEnv(process.env.SMTP_PASS).replaceAll(/[^a-zA-Z0-9]/g, "");

    const recipients = (
      process.env.CONTACT_TO
        ? process.env.CONTACT_TO.split(",")
        : DEFAULT_RECIPIENTS
    )
      .map((value) => cleanEnv(value))
      .filter(Boolean);

    if (!user || !pass) {
      return NextResponse.json(
        { error: "Email is not configured. Add SMTP_USER and SMTP_PASS on Vercel." },
        { status: 500 },
      );
    }

    if (pass.length !== 16) {
      return NextResponse.json(
        {
          error: `SMTP_PASS looks wrong (got ${pass.length} characters after cleaning, need exactly 16). Paste the Gmail App Password with no spaces.`,
        },
        { status: 500 },
      );
    }

    if (recipients.length === 0) {
      return NextResponse.json(
        { error: "No contact recipients configured." },
        { status: 500 },
      );
    }

    // Official Gmail transport — more reliable than manual host/port on Vercel
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.verify();

    const from = `"Marketing Couple" <${user}>`;
    const subject = `New enquiry from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #2a1216;">
        <h2 style="color: #5a0819; margin-bottom: 12px;">New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    // Send separately so each recipient only sees their own address
    for (const to of recipients) {
      await transporter.sendMail({
        from,
        to,
        replyTo: email,
        subject,
        text,
        html,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form SMTP error:", error);

    const raw = error instanceof Error ? error.message : String(error);
    const lower = raw.toLowerCase();

    if (
      lower.includes("invalid login") ||
      lower.includes("username and password") ||
      lower.includes("badcredentials") ||
      lower.includes("eauth") ||
      lower.includes("535")
    ) {
      return NextResponse.json(
        {
          error:
            "Gmail rejected login. 1) Create a new App Password at myaccount.google.com/apppasswords while logged into the SAME account as SMTP_USER. 2) Paste only the 16 letters into Vercel SMTP_PASS (Production). 3) Redeploy. Also open accounts.google.com/DisplayUnlockCaptcha once.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: `Failed to send message: ${raw}` },
      { status: 500 },
    );
  }
}

function cleanEnv(value?: string) {
  if (!value) return "";
  return value.trim().replace(/^["']|["']$/g, "");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
