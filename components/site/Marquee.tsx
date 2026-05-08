const items = ["Recruitment", "Talent Acquisition", "CV Scrutiny", "Executive Search", "Compensation", "Onboarding", "Workforce Planning", "Culture Strategy"];
export function Marquee() {
  return (
    <section className="bg-ink border-y border-cream/10 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap py-6">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-8 pr-8 font-display text-2xl md:text-4xl text-cream/80">
            <span>{it}</span>
            <span className="text-lime">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
