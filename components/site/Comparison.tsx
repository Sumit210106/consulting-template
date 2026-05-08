"use client"
import { useState } from "react";
import { Check, X } from "lucide-react";

const rows = [
  { tag: "TIME TO SHORTLIST", without: "Weeks of inbox triage and irrelevant CVs", with: "Calibrated 3–5 candidate shortlist in days" },
  { tag: "ROLE CLARITY", without: "Vague JD, no agreed rubric", with: "Working JD and scoring rubric agreed up front" },
  { tag: "MARKET INSIGHT", without: "Guessing on comp and titles", with: "Live benchmarks for comp and seniority" },
  { tag: "EMPLOYER BRAND", without: "Generic outreach, weak conversion", with: "Crafted narrative that lands with senior talent" },
  { tag: "FEEDBACK LOOPS", without: "Silence between interview rounds", with: "Structured feedback after every conversation" },
  { tag: "POST-OFFER", without: "Ghosted offers and slow starts", with: "Offer strategy and onboarding support" },
  { tag: "DECISION-MAKING", without: "Doubt and second-guessing", with: "Confident, evidence-led hiring" },
];

export function Comparison() {
  const [tab, setTab] = useState<"with" | "without">("with");
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="font-mono-label text-lime mb-8 flex items-center gap-2">
          <span className="h-2 w-2 bg-lime inline-block" /> The Difference
        </div>
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <h2 className="lg:col-span-7 font-display text-balance text-[clamp(2rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
            Side-by-side, <span className="hl">the choice is easy</span>
          </h2>
          <p className="lg:col-span-5 text-cream/70 text-[15px] leading-relaxed">
            Two ways to fill a critical role. One feels like an extension of your team. The other feels like an inbox you can never clear. We know which one we'd choose.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 border border-cream/15 rounded-md overflow-hidden">
            <button onClick={() => setTab("without")} className={`py-3 font-mono-label flex items-center justify-center gap-2 transition ${tab==="without"?"bg-cream/10 text-lime":"text-cream/60"}`}>
              <X className="h-3.5 w-3.5" /> WITHOUT US
            </button>
            <button onClick={() => setTab("with")} className={`py-3 font-mono-label flex items-center justify-center gap-2 transition ${tab==="with"?"bg-cream/10 text-lime":"text-cream/60"}`}>
              <Check className="h-3.5 w-3.5" /> WITH US
            </button>
          </div>
          <div className="mt-8 space-y-7">
            {rows.map((r) => (
              <div key={r.tag}>
                <div className="font-mono-label text-lime mb-2">{r.tag}</div>
                <div className={`rounded-md px-5 py-4 text-[14.5px] ${tab==="with"?"bg-lime/10 text-cream border border-lime/20":"bg-cream/[0.04] text-cream/70 border border-cream/10"}`}>
                  {tab === "with" ? r.with : r.without}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
