import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { site } from "@/data/site";

export function ProfileHeader() {
  return (
    <section className="animate-fade-up flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
      <div className="mx-auto shrink-0 sm:mx-0">
        <div className="story-ring rounded-full p-[3px] shadow-sm transition-transform duration-500 hover:scale-[1.02]">
          <div className="rounded-full bg-cream p-[3px]">
            <div className="relative h-28 w-28 overflow-hidden rounded-full bg-burgundy sm:h-36 sm:w-36">
              <Image
                src="/logo.png"
                alt={`${site.brand} profile`}
                fill
                quality={100}
                className="object-contain"
                sizes="144px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-0 flex-1 text-center sm:text-left">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[28px]">
            {site.handle}
          </h1>
          <BadgeCheck className="h-5 w-5 fill-[#3897f0] text-white" />
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:justify-start">
          {site.stats.map((stat) => (
            <div key={stat.label} className="text-sm text-ink">
              <span className="font-semibold">{stat.value}</span>{" "}
              <span className="text-muted">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="space-y-1">
          <p className="font-[family-name:var(--font-display)] text-xl text-burgundy sm:text-2xl">
            {site.title}
          </p>
          <p className="text-sm font-medium text-ink">{site.tagline}</p>
          <p className="text-sm text-muted">{site.bio}</p>
        </div>
      </div>
    </section>
  );
}
