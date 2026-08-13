import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { BookCallButton } from "@/components/BookCallButton";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="SERVICES"
        title="Everything your brand needs to show up and grow."
        description="From strategy to shoot day to posting — we handle the full content loop so your brand stays consistent and memorable."
      />

      <div className="animate-fade-up-delay-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group overflow-hidden border border-burgundy/10 bg-white/40 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-cream-soft">
              <Image
                src={service.image}
                alt={service.title}
                fill
                unoptimized={service.image.endsWith(".svg")}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/50 via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-4 sm:p-5">
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-burgundy">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="animate-fade-up-delay-2 mt-10">
        <BookCallButton />
      </div>
    </>
  );
}
