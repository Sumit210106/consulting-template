const items = [
  "Startups & Entrepreneurs", "Agribusiness", "Retail & E-commerce",
  "Manufacturing & Industrial", "Real Estate & Construction", "Education & Training",
  "Technology & Software", "Food & Hospitality", "Healthcare & Wellness",
  "Telecommunication", "Finance & Investment", "Energy & Natural Resources",
];

export function Industries() {
  return (
    <section className="theme-cream-2 rule-top">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="font-mono-label text-foreground/70 mb-8 flex items-center gap-2">
          <span className="h-2 w-2 bg-foreground inline-block" /> Industries
        </div>
        <h2 className="font-display text-balance text-[clamp(2rem,4.4vw,4rem)] leading-[1.05] tracking-[-0.02em] max-w-3xl">
          Helping organisations across industries hire, build and scale teams.
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it} className="flex items-center gap-4 rounded-md bg-cream border border-foreground/10 px-4 py-4">
              <span className="h-7 w-7 bg-foreground/85 rounded-sm" />
              <span className="text-[14.5px] text-foreground/85">{it}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
