export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="animate-fade-up mb-8 max-w-2xl sm:mb-10">
      <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-burgundy/70">
        {eyebrow}
      </p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl text-burgundy sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        {description}
      </p>
    </header>
  );
}
