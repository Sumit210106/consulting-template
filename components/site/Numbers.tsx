import { Counter } from "@/components/ui/Counter";
import { motion } from "framer-motion";


const items = [
  { tag: "PLACEMENTS", v: 250, prefix: "", suffix: "+", l: "Quality candidates placed", sub: ["95% success rate", "Diverse industry reach"] },
  { tag: "EFFICIENCY", v: 12, prefix: "", suffix: " Days", l: "Avg. time to shortlist", sub: ["Rigorous CV scrutiny", "Calibrated talent matching"] },
  { tag: "NETWORK", v: 10, prefix: "", suffix: "k+", l: "Vetted professionals", sub: ["Expert HR consulting", "Interview coordination"] },
];

export function Numbers() {
  return (
    <section id="numbers" className="bg-cream text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        {/* tag */}
        <div className="font-mono-label mb-8 flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-ink inline-block" /> BY THE NUMBERS
        </div>

        {/* heading */}
        <h2 className="font-display text-balance text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.03em] max-w-3xl">
          Numbers don&apos;t lie — and ours say <span className="hl-ink">you&apos;re in good hands.</span>
        </h2>

        {/* stats card */}
        <div className="mt-16 relative bg-ink rounded-[4px] shadow-2xl overflow-hidden p-0.5">
          {/* pixel decoration top-left */}
          <div className="absolute top-0 left-0 flex flex-wrap w-8 h-8">
            <div className="w-4 h-4 bg-cream" />
            <div className="w-4 h-4 bg-ink" />
            <div className="w-4 h-4 bg-ink" />
            <div className="w-4 h-4 bg-cream" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 bg-ink">
            {items.map((it, i) => (
              <div 
                key={it.tag} 
                className={`p-10 md:p-12 relative ${
                  i < 2 ? "md:border-r border-white/10" : ""
                } ${
                  i === 0 ? "border-b md:border-b-0 border-white/10" : ""
                } ${
                  i === 1 ? "border-b md:border-b-0 border-white/10" : ""
                }`}
              >
                {/* cell tag */}
                <div className="font-mono-label text-lime flex items-center gap-2 mb-8 opacity-80">
                  <span className="h-1.5 w-1.5 bg-lime inline-block" /> {it.tag}
                </div>

                {/* value with counter */}
                <div className="font-display text-[clamp(2.8rem,5vw,4.8rem)] leading-none text-lime tracking-tighter">
                  <Counter value={it.v} suffix={it.suffix} prefix={it.prefix} />
                </div>

                {/* label */}
                <div className="mt-3 font-display text-lg md:text-xl text-white tracking-tight">
                  {it.l}
                </div>

                {/* sub points */}
                <ul className="mt-10 space-y-3">
                  {it.sub.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-[13px] text-white/60 font-medium">
                      <div className="h-4 w-4 rounded-full bg-lime/10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-lime" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
