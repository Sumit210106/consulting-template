const items = [
  { v: "$2.8M", l: "Salary placed in year one" },
  { v: "120K", l: "Combined LinkedIn reach" },
  { v: "$10M+", l: "Comp managed across mandates" },
  { v: "200+", l: "Calibrated shortlists delivered" },
  { v: "$20M", l: "Pipeline value sourced" },
  { v: "300%", l: "Avg. interview-to-offer lift" },
];

export function Stats() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 pb-24 md:pb-32">
        <div className="grid md:grid-cols-3 gap-0 border border-cream/10 rounded-2xl overflow-hidden">
          {items.map((it, i) => (
            <div key={it.l} className={`p-8 md:p-10 ${i % 3 !== 2 ? "md:border-r border-cream/10" : ""} ${i < 3 ? "border-b border-cream/10" : ""}`}>
              <div className="font-display text-[clamp(2rem,3.4vw,3rem)] text-cream tracking-tight">{it.v}</div>
              <div className="mt-3 text-[13px] text-cream/60">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
