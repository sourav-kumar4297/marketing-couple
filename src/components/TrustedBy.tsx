import Image from "next/image";
import { trustedBrands } from "@/data/site";

function BrandItem({
  brand,
}: {
  brand: (typeof trustedBrands)[number];
}) {
  return (
    <div className="flex w-[200px] shrink-0 flex-col items-center gap-2 sm:w-[240px]">
      <div className="relative flex h-32 w-full items-center justify-center overflow-hidden rounded-md border border-burgundy/10 bg-white shadow-sm sm:h-40">
        {brand.logo ? (
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            fill
            quality={100}
            className="object-contain p-1"
            sizes="240px"
          />
        ) : (
          <span className="px-2 text-center font-[family-name:var(--font-display)] text-base leading-tight text-burgundy">
            {brand.name}
          </span>
        )}
      </div>
      <span className="line-clamp-2 max-w-full text-center text-xs font-medium leading-tight text-burgundy/80 sm:text-sm">
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

        <div className="brand-marquee-track flex w-max items-start gap-3 sm:gap-4">
          {loop.map((brand, i) => (
            <BrandItem key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
