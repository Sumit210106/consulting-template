"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const items = [
  { prefix: "$", target: 2.8, decimals: 1, suffix: "M", l: "Salary placed in year one" },
  { prefix: "", target: 120, decimals: 0, suffix: "K", l: "Combined LinkedIn reach" },
  { prefix: "$", target: 10, decimals: 0, suffix: "M+", l: "Comp managed across mandates" },
  { prefix: "", target: 200, decimals: 0, suffix: "+", l: "Calibrated shortlists delivered" },
  { prefix: "$", target: 20, decimals: 0, suffix: "M", l: "Pipeline value sourced" },
  { prefix: "", target: 300, decimals: 0, suffix: "%", l: "Avg. interview-to-offer lift" },
];

function StatValue({
  prefix,
  target,
  decimals,
  suffix,
  delay,
}: {
  prefix: string;
  target: number;
  decimals: number;
  suffix: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const duration = 1400;
    const start = performance.now() + delay;

    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, delay]);

  return (
    <div ref={ref} className="font-display text-[clamp(1.6rem,3.4vw,3rem)] text-cream tracking-tight tabular-nums">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 pb-24 md:pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-cream/10 rounded-2xl overflow-hidden">
          {items.map((it, i) => (
            <div
              key={it.l}
              className={`p-6 md:p-10 border-cream/10
                ${i % 2 !== 1 ? "border-r" : ""} ${i < 4 ? "border-b" : ""}
                ${i % 3 !== 2 ? "md:border-r" : "md:border-r-0"}
                ${i < 3 ? "md:border-b" : "md:border-b-0"}
              `}
            >
              <StatValue prefix={it.prefix} target={it.target} decimals={it.decimals} suffix={it.suffix} delay={i * 100} />
              <div className="mt-2 md:mt-3 text-[12px] md:text-[13px] text-cream/60">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}