import { NextResponse } from "next/server";
import { Resend } from "resend";

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

    const apiKey = cleanEnv(process.env.RESEND_API_KEY);
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email is not configured. Add RESEND_API_KEY in Vercel Environment Variables.",
        },
        { status: 500 },
      );
    }

    const recipients = (
      process.env.CONTACT_TO
        ? process.env.CONTACT_TO.split(",")
        : DEFAULT_RECIPIENTS
    )
      .map((value) => cleanEnv(value))
      .filter(Boolean);

    if (recipients.length === 0) {
      return NextResponse.json(
        { error: "No contact recipients configured." },
        { status: 500 },
      );
    }

    // Use your verified domain after setup, or Resend onboarding sender for testing
    const from =
      cleanEnv(process.env.RESEND_FROM) ||
      "Marketing Couple <onboarding@resend.dev>";

    const resend = new Resend(apiKey);
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

    // Separate sends so each inbox only sees itself
    for (const to of recipients) {
      const { error } = await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject,
        text,
        html,
      });

      if (error) {
        console.error("Resend error for", to, error);
        return NextResponse.json(
          { error: error.message || "Failed to send message." },
          { status: 500 },
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    const raw = error instanceof Error ? error.message : String(error);
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
