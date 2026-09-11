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

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;

    const recipients = (
      process.env.CONTACT_TO
        ? process.env.CONTACT_TO.split(",")
        : DEFAULT_RECIPIENTS
    )
      .map((value) => value.trim())
      .filter(Boolean);

    if (!host || !user || !pass || !from) {
      return NextResponse.json(
        { error: "Email is not configured. Add SMTP settings on the server." },
        { status: 500 },
      );
    }

    if (recipients.length === 0) {
      return NextResponse.json(
        { error: "No contact recipients configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

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
    await Promise.all(
      recipients.map((to) =>
        transporter.sendMail({
          from,
          to,
          replyTo: email,
          subject,
          text,
          html,
        }),
      ),
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form SMTP error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
