import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { aboutStory, faqs, industries, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutStory.quickAnswer,
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT US"
        title="Strategy. Creativity. Execution. Under one roof."
        description={aboutStory.quickAnswer}
      />

      <div className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fade-up-delay-1 space-y-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold">
            FOUNDED BY {site.founders.toUpperCase()}
          </p>
          {aboutStory.howItStarted.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-sm leading-relaxed text-ink sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="animate-fade-up-delay-2 relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full bg-burgundy">
          <div className="story-ring absolute inset-0 rounded-full p-[4px]">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-burgundy">
              <Image
                src="/logo.png"
                alt={site.brand}
                fill
                className="object-cover"
                sizes="384px"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="animate-fade-up-delay-2 mb-12 border-t border-burgundy/10 pt-10">
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-3xl text-burgundy">
          What makes us different
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {aboutStory.differentiators.map((item) => (
            <article
              key={item.title}
              className="border-t border-gold/40 pt-4"
            >
              <h3 className="text-sm font-semibold text-burgundy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="animate-fade-up-delay-3 mb-12">
        <h2 className="mb-4 text-xs font-semibold tracking-[0.18em] text-burgundy">
          INDUSTRIES WE SERVE
        </h2>
        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="border border-burgundy/15 px-3 py-1.5 text-sm text-ink"
            >
              {industry}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          {aboutStory.closing}
        </p>
      </section>

      <section className="border-t border-burgundy/10 pt-10">
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-3xl text-burgundy">
          Frequently asked questions
        </h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-burgundy/10 pb-4"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-burgundy marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-gold transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
