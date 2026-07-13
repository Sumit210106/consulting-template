const features = [
  { t: "We listen first", d: "We start with your business, your team, and the texture of the role , not a generic JD." },
  { t: "We focus on fit", d: "Every candidate is screened against your culture and role rubric, not just keywords." },
  { t: "We move with care", d: "Calibrated shortlists in days, not months. Quality of attention over volume of CVs." },
  { t: "With you all the way", d: "From kickoff to onboarding, we stay close , through offer, signature and start date." },
];

function Glyph({ i }: { i: number }) {
  const variants = [
    <svg key="0" viewBox="0 0 60 60" className="h-12 w-12"><circle cx="20" cy="20" r="8" /><circle cx="40" cy="20" r="8" /><circle cx="20" cy="40" r="8" /><circle cx="40" cy="40" r="8" /></svg>,
    <svg key="1" viewBox="0 0 60 60" className="h-12 w-12">{Array.from({length:8}).map((_,k)=>(<circle key={k} cx="30" cy="30" r={5+k*3} fill="none" stroke="currentColor" strokeWidth="1" />))}</svg>,
    <svg key="2" viewBox="0 0 60 60" className="h-12 w-12">{Array.from({length:6}).map((_,k)=>(<circle key={k} cx="30" cy="30" r={6+k*4} fill="none" stroke="currentColor" strokeWidth="1" />))}<line x1="30" y1="0" x2="30" y2="60" stroke="currentColor" strokeWidth="1" /></svg>,
    <svg key="3" viewBox="0 0 60 60" className="h-12 w-12"><line x1="30" y1="4" x2="30" y2="56" stroke="currentColor" strokeWidth="1.2" /><line x1="4" y1="30" x2="56" y2="30" stroke="currentColor" strokeWidth="1.2" />{Array.from({length:4}).map((_,k)=>(<circle key={k} cx="30" cy="30" r={6+k*6} fill="none" stroke="currentColor" strokeWidth="1" />))}</svg>,
  ];
  return <span className="text-foreground/70">{variants[i]}</span>;
}

export function Features() {
  return (
    <section className="theme-cream rule-top">
      <div className="mx-auto max-w-[1400px]">
        {/* Mobile: Apple-style snap carousel */}
        <div
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-0 px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollPaddingLeft: "1.5rem" }}
        >
          {features.map((f, i) => (
            <div
              key={f.t}
              className="snap-start shrink-0 w-[82%] first:pl-0 pr-4"
            >
              <div className="p-8">
                <Glyph i={i} />
                <h3 className="mt-6 font-display text-xl text-foreground">{f.t}</h3>
                <p className="mt-3 text-[14px] text-foreground/70 leading-relaxed">{f.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop / tablet: original grid, unchanged */}
        <div className="hidden md:grid px-6 md:grid-cols-2 lg:grid-cols-4 grid-lines-x grid-lines">
          {features.map((f, i) => (
            <div key={f.t} className="p-8 md:p-10">
              <Glyph i={i} />
              <h3 className="mt-6 font-display text-xl text-foreground">{f.t}</h3>
              <p className="mt-3 text-[14px] text-foreground/70 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}