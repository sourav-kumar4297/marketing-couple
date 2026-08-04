import type { Metadata } from "next";
import Image from "next/image";
import {
  Camera,
  Clapperboard,
  FileText,
  Search,
  Send,
  Target,
  TrendingUp,
} from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { BookCallButton } from "@/components/BookCallButton";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Process",
};

const icons = {
  search: Search,
  target: Target,
  file: FileText,
  camera: Camera,
  clapper: Clapperboard,
  send: Send,
  growth: TrendingUp,
};

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow="PROCESS"
        title="A clear path from idea to organic growth."
        description="Seven steps. One loop. Built to take brands from research to results without the chaos."
      />

      <div className="animate-fade-up-delay-1 relative">
        <div className="pointer-events-none absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-gold via-burgundy/25 to-gold md:left-1/2 md:-translate-x-1/2" />

        <ol className="space-y-10 md:space-y-16">
          {processSteps.map((step, index) => {
            const Icon = icons[step.icon];
            const reverse = index % 2 === 1;
            const number = String(index + 1).padStart(2, "0");

            return (
              <li
                key={step.label}
                className="relative grid items-center gap-5 md:grid-cols-2 md:gap-x-20"
              >
                {/* Center timeline icon — desktop */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-cream text-burgundy shadow-sm md:flex">
                  <Icon strokeWidth={1.5} className="h-5 w-5" />
                </div>

                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-cream-soft md:aspect-[5/3] ${
                    reverse ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.label}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-burgundy/20 mix-blend-multiply" />
                  <span className="absolute bottom-3 left-3 font-[family-name:var(--font-display)] text-5xl text-cream/90 sm:text-6xl">
                    {number}
                  </span>
                </div>

                <div
                  className={`relative pl-14 md:pl-0 ${
                    reverse
                      ? "md:order-1 md:pr-4 md:text-right"
                      : "md:order-2 md:pl-4"
                  }`}
                >
                  {/* Mobile timeline icon */}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-cream text-burgundy shadow-sm md:hidden">
                    <Icon strokeWidth={1.5} className="h-4 w-4" />
                  </div>

                  <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-gold">
                    STEP {number}
                  </p>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl text-burgundy sm:text-4xl">
                    {step.label}
                  </h2>
                  <p
                    className={`mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base ${
                      reverse ? "md:ml-auto" : ""
                    }`}
                  >
                    {step.detail}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="animate-fade-up-delay-2 mt-12 flex flex-col items-start gap-3 border-t border-burgundy/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm text-muted">
          Ready to start the loop? Book a call and we’ll map your first 30 days.
        </p>
        <BookCallButton />
      </div>
    </>
  );
}
