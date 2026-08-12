"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/site";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 8000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const goTo = (next: number) => {
    setIndex((next + total) % total);
  };

  const active = testimonials[index];

  return (
    <div
      className="animate-fade-up-delay-1 flex h-full flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative flex min-h-[min(58vh,520px)] flex-1 flex-col justify-center overflow-hidden border border-burgundy/10 bg-gradient-to-br from-cream via-white/70 to-cream-soft px-6 py-10 sm:min-h-[min(62vh,580px)] sm:px-10 sm:py-14">
        <Quote
          strokeWidth={1}
          className="absolute right-6 top-6 h-14 w-14 text-gold/30 sm:right-10 sm:top-8 sm:h-16 sm:w-16"
        />

        <div
          key={active.name}
          className="relative mx-auto max-w-3xl text-center transition-opacity duration-500"
        >
          <p className="font-[family-name:var(--font-display)] text-lg leading-relaxed text-burgundy sm:text-2xl sm:leading-relaxed">
            “{active.quote}”
          </p>
          <footer className="mt-8">
            <p className="text-sm font-semibold tracking-wide text-ink">
              — {active.name}
            </p>
          </footer>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="inline-flex h-10 w-10 items-center justify-center border border-burgundy/20 text-burgundy transition-colors hover:border-burgundy hover:bg-burgundy hover:text-cream"
          >
            <ChevronLeft strokeWidth={1.5} className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to testimonial from ${item.name}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-burgundy"
                    : "w-2 bg-burgundy/25 hover:bg-burgundy/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="inline-flex h-10 w-10 items-center justify-center border border-burgundy/20 text-burgundy transition-colors hover:border-burgundy hover:bg-burgundy hover:text-cream"
          >
            <ChevronRight strokeWidth={1.5} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-6 overflow-x-auto pb-1">
        {testimonials.map((item, i) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setIndex(i)}
            className={`shrink-0 border-b-2 pb-1 text-xs tracking-wide transition-colors ${
              i === index
                ? "border-gold font-semibold text-burgundy"
                : "border-transparent text-muted hover:text-burgundy"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
