import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { aboutPoints, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT US"
        title="A creative duo behind brands that grow."
        description="We’re Marketing Couple — strategists and storytellers helping founders turn content into connection across India and Canada."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fade-up-delay-1 space-y-4">
          {aboutPoints.map((point) => (
            <p
              key={point}
              className="border-l-2 border-gold pl-4 text-sm leading-relaxed text-ink sm:text-base"
            >
              {point}
            </p>
          ))}
          <p className="pt-2 text-sm text-muted">
            {site.tagline} {site.bio}
          </p>
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
    </>
  );
}
