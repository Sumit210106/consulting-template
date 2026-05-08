const items = [
  { tag: "EXPERIENCE", v: "8+", l: "Years across HR & talent", sub: ["8+ industries served", "5+ countries reached"] },
  { tag: "CLIENT SUCCESS", v: "100+", l: "Mandates closed", sub: ["90% client satisfaction", "10–14 day avg shortlist"] },
  { tag: "IMPACT", v: "$12M+", l: "Compensation placed", sub: ["80% client return rate", "300+ placements made"] },
];

export function Numbers() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="font-mono-label text-lime mb-8 flex items-center gap-2">
          <span className="h-2 w-2 bg-lime inline-block" /> By the Numbers
        </div>
        <h2 className="font-display text-balance text-[clamp(2rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.02em] max-w-3xl">
          Numbers don't lie — and ours say <span className="hl-ink">you're in good hands</span>.
        </h2>
        <div className="mt-16 grid md:grid-cols-3 rounded-2xl overflow-hidden border border-cream/10">
          {items.map((it, i) => (
            <div key={it.tag} className={`p-8 md:p-10 ${i !== 2 ? "md:border-r border-cream/10" : ""}`}>
              <div className="font-mono-label text-lime flex items-center gap-2 mb-8">
                <span className="h-2 w-2 bg-lime inline-block" /> {it.tag}
              </div>
              <div className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-none text-lime tracking-tight">{it.v}</div>
              <div className="mt-3 font-display text-xl text-cream">{it.l}</div>
              <ul className="mt-10 space-y-2 text-[13.5px] text-cream/65">
                {it.sub.map((s) => <li key={s}>· {s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
