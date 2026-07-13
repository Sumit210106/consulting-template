"use client";
import { motion } from "framer-motion";

const steps = [
  { t: "Get in touch", d: "Drop us a brief or jump on a call — share the role, the team, and the goals you're hiring against." },
  { t: "Calibration", d: "We agree a target market map, a candidate rubric, and the success measures before sourcing begins." },
  { t: "Search & shortlist", d: "Active sourcing, forensic CV scrutiny, structured assessments — we present 3–5 high-fit candidates." },
  { t: "Close & onboard", d: "Offer strategy, negotiation support, and a warm handover into onboarding. We don't disappear at signature." },
];

export function Process() {
  return (
    <section id="process" className="bg-ink text-cream relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-32">
        <div className="font-mono-label text-lime mb-6 md:mb-8 flex items-center gap-2">
          <span className="h-2 w-2 bg-lime inline-block" /> Our Process
        </div>
        <h2 className="font-display text-balance text-[clamp(1.9rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.02em] max-w-4xl mb-10 md:mb-20">
          Making business <span className="hl">placement magic</span> in four moves
        </h2>

        {/* Desktop / tablet — flex row, connector is its own element (no calc-based positioning) */}
        <div className="hidden md:flex items-start">
          {steps.map((s, i) => (
            <div key={s.t} className="flex items-start flex-1 last:flex-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group shrink-0 w-[160px]"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-ink border border-lime text-lime font-display text-lg mb-6 group-hover:bg-lime group-hover:text-ink transition-all duration-300">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg md:text-xl text-white group-hover:text-lime transition-colors">
                  {s.t}
                </h3>
                <div className="mt-4 w-12 h-0.5 bg-lime/30 group-hover:w-16 transition-all duration-300" />
              </motion.div>

              {i < steps.length - 1 && (
                <div className="flex-1 h-px bg-white/10 mt-7 mx-2" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile — compact horizontal timeline */}
        <div className="md:hidden flex flex-col">
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex gap-4 group"
            >
              {/* Node + connector column */}
              <div className="flex flex-col items-center shrink-0">
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-ink border border-lime text-lime font-display text-sm group-hover:bg-lime group-hover:text-ink transition-all duration-300">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[28px] bg-white/10 my-1" />
                )}
              </div>

              {/* Text */}
              <div className={i < steps.length - 1 ? "pb-6" : ""}>
                <h3 className="font-display text-base text-white group-hover:text-lime transition-colors leading-snug pt-1.5">
                  {s.t}
                </h3>
                <p className="mt-1.5 text-sm text-cream/60 leading-relaxed">
                  {s.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}