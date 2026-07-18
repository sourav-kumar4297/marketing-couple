import { trustedBrands } from "@/data/site";

export function TrustedBy() {
  return (
    <section className="animate-fade-up-delay-3 mt-10 border-t border-burgundy/10 pt-8 pb-4 sm:mt-14">
      <h2 className="mb-6 text-center text-xs font-semibold tracking-[0.18em] text-burgundy">
        TRUSTED BY BRANDS THAT GROW
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {trustedBrands.map((brand) => (
          <span
            key={brand}
            className="font-[family-name:var(--font-display)] text-sm tracking-[0.08em] text-burgundy/80 sm:text-base"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
