"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What kind of roles do you place?", a: "Across functions from individual contributors to senior leadership. We're at our best with calibrated, role-specific hires rather than volume recruiting." },
  { q: "How do you charge?", a: "Engagement-based retainers and success fees, scoped to the role. We share pricing transparently after a discovery call so there are no surprises." },
  { q: "How fast can you deliver a shortlist?", a: "Most mandates produce a calibrated 3–5 candidate shortlist within 10–14 days. Specialised executive searches can run longer." },
  { q: "What happens if a hire doesn't work out?", a: "Every placement is backed by a guarantee period and a single replacement at no additional fee, subject to engagement terms." },
  { q: "Do you support international hiring?", a: "Yes , we run searches across multiple geographies and partner with you on compliance, comp benchmarks and onboarding." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="theme-cream-2 rule-top">
      <div className="mx-auto max-w-[1100px] px-6 py-24 md:py-32">
        <div className="font-mono-label text-foreground/70 mb-8 flex items-center gap-2">
          <span className="h-2 w-2 bg-foreground inline-block" /> FAQ
        </div>
        <h2 className="font-display text-balance text-[clamp(2rem,4.4vw,4rem)] leading-[1.05] tracking-[-0.02em] mb-16 max-w-3xl">
          Questions, <span className="hl-ink">answered</span>.
        </h2>
        <div className="border-t border-foreground/15">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-foreground/15">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left">
                <span className="font-display text-lg md:text-xl">{f.q}</span>
                <Plus className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="pb-7 text-foreground/70 leading-relaxed max-w-2xl text-[14.5px]">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
