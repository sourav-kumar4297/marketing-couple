import Image from "next/image";
import { trustedBrands } from "@/data/site";

function BrandItem({
  brand,
}: {
  brand: (typeof trustedBrands)[number];
}) {
  return (
    <div className="flex w-[160px] shrink-0 flex-col items-center gap-2.5 sm:w-[180px]">
      <div className="relative h-[120px] w-[120px] overflow-hidden rounded-xl border border-burgundy/10 bg-white shadow-sm sm:h-[140px] sm:w-[140px]">
        {brand.logo ? (
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            fill
            quality={100}
            className="object-contain p-3"
            sizes="140px"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center px-3 text-center font-[family-name:var(--font-display)] text-sm leading-tight text-burgundy">
            {brand.name}
          </span>
        )}
      </div>
      <span className="line-clamp-2 min-h-[2.5rem] max-w-full text-center text-xs font-medium leading-tight text-burgundy/80 sm:text-sm">
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
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-cream to-transparent sm:w-6" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-l from-cream to-transparent sm:w-6" />

        <div className="brand-marquee-track flex w-max items-start gap-4 sm:gap-5">
          {loop.map((brand, i) => (
            <BrandItem key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
