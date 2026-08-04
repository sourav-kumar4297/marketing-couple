import Image from "next/image";
import { trustedBrands } from "@/data/site";

function BrandItem({
  brand,
}: {
  brand: (typeof trustedBrands)[number];
}) {
  return (
    <div className="flex w-[180px] shrink-0 flex-col items-center gap-3 sm:w-[220px]">
      <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border border-burgundy/10 bg-white shadow-sm sm:h-44 sm:w-44">
        {brand.logo ? (
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            fill
            className="object-contain p-3 sm:p-4"
            sizes="176px"
          />
        ) : (
          <span className="px-3 text-center font-[family-name:var(--font-display)] text-sm leading-tight text-burgundy">
            {brand.name}
          </span>
        )}
      </div>
      <span className="line-clamp-2 max-w-[180px] text-center text-xs font-medium leading-tight text-burgundy/75 sm:text-sm">
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

      <div className="brand-marquee relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-cream to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream to-transparent sm:w-20" />

        <div className="brand-marquee-track flex w-max gap-8 sm:gap-12">
          {loop.map((brand, i) => (
            <BrandItem key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
