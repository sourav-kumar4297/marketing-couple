import Image from "next/image";
import { trustedBrands } from "@/data/site";

function BrandItem({
  brand,
}: {
  brand: (typeof trustedBrands)[number];
}) {
  return (
    <div className="flex w-[150px] shrink-0 flex-col items-center gap-2.5 sm:w-[170px]">
      <div className="relative h-28 w-28 overflow-hidden rounded-full border border-burgundy/10 bg-cream-soft shadow-sm sm:h-32 sm:w-32">
        {brand.logo ? (
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            fill
            quality={100}
            className="object-cover"
            sizes="128px"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-white px-3 text-center font-[family-name:var(--font-display)] text-sm leading-tight text-burgundy">
            {brand.name}
          </span>
        )}
      </div>
      <span className="line-clamp-2 max-w-[150px] text-center text-xs font-medium leading-tight text-burgundy/80 sm:text-sm">
        {brand.name}
      </span>
    </div>
  );
}

export function TrustedBy() {
  const loop = [...trustedBrands, ...trustedBrands];

  return (
    <section className="animate-fade-up-delay-3 mt-10 border-t border-burgundy/10 pt-8 pb-4 sm:mt-14">
      <h2 className="mb-8 text-center text-xs font-semibold tracking-[0.18em] text-burgundy">
        BRANDS WE&apos;VE WORKED WITH
      </h2>

      <div className="brand-marquee relative overflow-hidden py-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cream to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent sm:w-16" />

        <div className="brand-marquee-track flex w-max items-start gap-6 sm:gap-8">
          {loop.map((brand, i) => (
            <BrandItem key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
