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
        <h2 className="font-display text-balance text-[clamp(2rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.02em] max-w-4xl">
          Making business <span className="hl">placement magic</span><br /> in four moves
        </h2>

        <div className="mt-20 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cream/10 hidden md:block" />
          <div className="space-y-20">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="font-mono-label text-cream/60 bg-cream/5 px-3 py-1 rounded-sm">STEP</span>
                  <span className="mt-3 h-9 w-9 rounded-full border border-lime text-lime flex items-center justify-center font-display text-sm">
                    {i + 1}
                  </span>
                  <div className="w-px h-6 bg-lime/60 mt-1" />
                  <h3 className="mt-4 font-display text-2xl text-lime">{s.t}</h3>
                  <p className="mt-3 max-w-xs text-[14px] text-cream/70 leading-relaxed">{s.d}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-32 w-[680px] max-w-[90vw] h-[280px] rounded-t-[100%] border-t border-x border-cream/10 -z-0 hidden md:block bg-gradient-to-b from-cream/[0.02] to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
