"use client"
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="font-mono-label text-lime mb-8 flex items-center gap-2">
          <span className="h-2 w-2 bg-lime inline-block" /> Contact
        </div>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <h2 className="font-display text-balance text-[clamp(2rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
              Let's place the <span className="hl">right person</span> in your team.
            </h2>
            <p className="mt-6 text-cream/70 max-w-md text-[15px] leading-relaxed">
              Tell us about the role. We'll respond within one business day with a calibration call and a clear next step.
            </p>
            <div className="mt-10 grid sm:grid-cols-1 gap-3 text-[13.5px] text-cream/70">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-lime" /><span>hello@jrvconsulting.in</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-lime" /><span>+91 00000 00000</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-lime" /><span>Remote-first · India</span></div>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-6 rounded-2xl border border-cream/10 p-6 md:p-10 bg-cream/[0.03] grid gap-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Your name" className="rounded-md bg-ink border border-cream/15 px-4 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-lime transition" />
              <input required type="email" placeholder="Work email" className="rounded-md bg-ink border border-cream/15 px-4 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-lime transition" />
            </div>
            <input placeholder="Company" className="rounded-md bg-ink border border-cream/15 px-4 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-lime transition" />
            <textarea required rows={5} placeholder="Tell us about the role you're hiring for…" className="rounded-md bg-ink border border-cream/15 px-4 py-3.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-lime transition resize-none" />
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-lime text-ink py-3.5 text-sm font-medium hover:opacity-90 transition group">
              {sent ? "Thanks — we'll be in touch ✓" : (<>Send message <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
