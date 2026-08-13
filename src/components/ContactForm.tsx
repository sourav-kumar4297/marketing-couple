"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FieldErrors {
    const next: FieldErrors = {};

    if (!name.trim()) {
      next.name = "Please enter your name.";
    } else if (name.trim().length < 2) {
      next.name = "Name must be at least 2 characters.";
    }

    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!emailPattern.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      next.message = "Please enter a message.";
    } else if (message.trim().length < 10) {
      next.message = "Message must be at least 10 characters.";
    }

    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const subject = encodeURIComponent(`Book a call — ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full border bg-white/60 px-3 py-2.5 text-sm text-ink outline-none transition focus:border-gold";

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="animate-fade-up-delay-2 scroll-mt-24 space-y-4 border-t border-burgundy/15 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-xs font-semibold tracking-wide text-burgundy"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
          }}
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${inputClass} ${
            errors.name ? "border-red-500" : "border-burgundy/15"
          }`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs font-semibold tracking-wide text-burgundy"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email)
              setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          placeholder="you@brand.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${inputClass} ${
            errors.email ? "border-red-500" : "border-burgundy/15"
          }`}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-semibold tracking-wide text-burgundy"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message)
              setErrors((prev) => ({ ...prev, message: undefined }));
          }}
          placeholder="Tell us about your brand and goals..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} resize-y ${
            errors.message ? "border-red-500" : "border-burgundy/15"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-burgundy px-4 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy-deep"
      >
        Send Message
      </button>

      {submitted && (
        <p className="text-xs text-emerald-700">
          Opening your email app to send the message to {site.email}…
        </p>
      )}
    </form>
  );
}
