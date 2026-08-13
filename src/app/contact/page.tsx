import type { Metadata } from "next";
import Link from "next/link";
import { AtSign, Mail, Phone } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { ContactForm } from "@/components/ContactForm";
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
            <Phone strokeWidth={1.5} className="mt-0.5 h-5 w-5 text-gold" />
            <div>
              <p className="font-semibold">Phone</p>
              <a
                href={`tel:+91${site.phone}`}
                className="text-muted transition-colors hover:text-burgundy"
              >
                {site.phoneDisplay}
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
        </div>

        <ContactForm />
      </div>
    </>
  );
}
