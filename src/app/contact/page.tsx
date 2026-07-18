import type { Metadata } from "next";
import Link from "next/link";
import { AtSign, Mail, MapPin } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { BookCallButton } from "@/components/BookCallButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Let's Talk",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="LET'S TALK"
        title="Ready to build a brand people remember?"
        description="Tell us about your brand, your goals, and where you want to grow. We’ll take it from strategy to content that performs."
      />

      <div className="animate-fade-up-delay-1 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <div className="flex items-start gap-3 text-sm text-ink">
            <MapPin strokeWidth={1.5} className="mt-0.5 h-5 w-5 text-gold" />
            <div>
              <p className="font-semibold">Based in</p>
              <p className="text-muted">{site.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm text-ink">
            <Mail strokeWidth={1.5} className="mt-0.5 h-5 w-5 text-gold" />
            <div>
              <p className="font-semibold">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="text-muted transition-colors hover:text-burgundy"
              >
                {site.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm text-ink">
            <AtSign strokeWidth={1.5} className="mt-0.5 h-5 w-5 text-gold" />
            <div>
              <p className="font-semibold">Instagram</p>
              <Link
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-burgundy"
              >
                @{site.handle}
              </Link>
            </div>
          </div>
          <BookCallButton className="mt-2" />
        </div>

        <form className="animate-fade-up-delay-2 space-y-4 border-t border-burgundy/15 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-semibold tracking-wide text-burgundy">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full border border-burgundy/15 bg-white/60 px-3 py-2.5 text-sm text-ink outline-none transition focus:border-gold"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold tracking-wide text-burgundy">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@brand.com"
              className="w-full border border-burgundy/15 bg-white/60 px-3 py-2.5 text-sm text-ink outline-none transition focus:border-gold"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-semibold tracking-wide text-burgundy">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your brand and goals..."
              className="w-full resize-y border border-burgundy/15 bg-white/60 px-3 py-2.5 text-sm text-ink outline-none transition focus:border-gold"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-burgundy px-4 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy-deep"
          >
            Send Message
          </button>
          <p className="text-xs text-muted">
            Form is visual for now — connect Formspree, Resend, or your email later.
          </p>
        </form>
      </div>
    </>
  );
}
