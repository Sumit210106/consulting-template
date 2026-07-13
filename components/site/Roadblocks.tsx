"use client";
import { motion } from "framer-motion";

const chips = [
  "Which roles should I hire first?",
  "How do I screen for culture fit?",
  "Where do I find passive talent?",
  "How do I structure compensation?",
  "What does a strong JD look like?",
  "How fast can I close a senior role?",
  "How do I avoid mis-hires?",
  "When should I use a retainer?",
  "How do I onboard at speed?",
];

export function Roadblocks() {
  return (
    <section className="theme-cream relative">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-balance text-center text-[clamp(2rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.02em] max-w-4xl mx-auto"
        >
          Removing the roadblocks  to your <span className="font-normal text-[1.15em]">growth</span>
        </motion.h2>
        <p className="mt-6 md:mt-8 text-center text-[15px] leading-relaxed text-foreground/70 max-w-xl mx-auto">
          Hiring is full of conflicting advice and noisy opinions. We filter the noise, focus on what actually matters, and give you the kind of clarity that turns a vacancy into the right hire.
        </p>

        {/* Mobile: marquee */}
        <div className="mt-10 md:hidden relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-2.5">
            {[...chips, ...chips].map((c, i) => (
              <span
                key={i}
                className="shrink-0 whitespace-nowrap rounded-full bg-cream-2 text-foreground/85 text-[13px] px-4 py-2 border border-foreground/5"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop / tablet: original wrapped layout, unchanged */}
        <div className="mt-12 hidden md:flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {chips.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-full bg-cream-2 text-foreground/85 text-[13px] px-4 py-2 border border-foreground/5"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </section>
  );
}