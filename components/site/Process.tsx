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
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="font-mono-label text-lime mb-8 flex items-center gap-2">
          <span className="h-2 w-2 bg-lime inline-block" /> Our Process
        </div>
        <h2 className="font-display text-balance text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.02em] max-w-4xl mb-20">
          Making business <span className="hl">placement magic</span> in four moves
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0">
          {steps.map((s, i) => (
            <div key={s.t} className="relative flex flex-col items-center text-center group">
              {/* Connector Line (Desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px bg-white/10 z-0" />
              )}
              
              {/* Connector Line (Mobile) */}
              {i < steps.length - 1 && (
                <div className="block md:hidden absolute left-1/2 top-[56px] bottom-[-48px] w-px bg-white/10 z-0" />
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center"
              >
                {/* Step Node */}
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-ink border border-lime text-lime font-display text-lg mb-6 group-hover:bg-lime group-hover:text-ink transition-all duration-300">
                  {i + 1}
                </div>
                
                {/* Title */}
                <h3 className="font-display text-lg md:text-xl text-white group-hover:text-lime transition-colors max-w-[160px]">
                  {s.t}
                </h3>
                <div className="mt-4 w-12 h-0.5 bg-lime/30 group-hover:w-16 transition-all duration-300" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
