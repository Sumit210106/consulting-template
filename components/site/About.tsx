import Image from "next/image";
import team from "@/assets/team.jpg";
import { ArrowRight } from "lucide-react";

const cards = [
  { t: "We adapt to you", d: "No cookie-cutter searches , every engagement is shaped around your role and culture." },
  { t: "We make it human", d: "Hiring is personal. We treat candidates like future colleagues, not line items." },
  { t: "We keep it honest", d: "Clear scopes, transparent feedback, no resume spam, no theatrics." },
];

import { Brand } from "@/lib/brands";

export function About({ brand }: { brand?: Brand }) {
  const activeBrand = brand || { displayName: "JRV" };

  return (
    <section id="about" className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="font-mono-label text-lime mb-10 flex items-center gap-2">
          <span className="h-2 w-2 bg-lime inline-block" /> About {activeBrand.displayName}
        </div>
        <div className="grid lg:grid-cols-12 gap-10 items-start rule-bottom pb-16">
          <h2 className="lg:col-span-7 font-display text-balance text-[clamp(2rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.02em]">
            We're <span className="hl">{activeBrand.displayName}</span>, placing the right people in the right roles since day one.
          </h2>
          <div className="lg:col-span-5 text-cream/70 text-[15px] leading-relaxed">
            <p>
              Our consultants bring specialised knowledge to address specific challenges , placing top talent, ensuring compliance with employment laws, and fostering a positive work culture for organisations of every size.
            </p>
            <a href="#services" className="inline-flex items-center gap-2 mt-8 rounded-md bg-lime text-ink pl-4 pr-2 py-2.5 text-sm font-medium group">
              More about us
              <span className="rounded-sm bg-ink/10 p-1.5"><ArrowRight className="h-3.5 w-3.5" /></span>
            </a>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-0 grid-lines-x rule-bottom">
          {cards.map((c) => (
            <div key={c.t} className="py-8 md:px-8 first:md:pl-0 last:md:pr-0">
              <div className="rounded-md bg-cream/[0.04] border border-cream/10 px-4 py-2 inline-block font-mono-label text-lime">
                {c.t}
              </div>
              <p className="mt-5 text-cream/70 text-[14.5px] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative rounded-2xl overflow-hidden border border-cream/10">
          <Image src={team} alt={`${activeBrand.displayName} team`} className="w-full h-[420px] md:h-[560px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          <div className="absolute bottom-6 left-6 font-display text-3xl md:text-5xl text-cream">
            BOLD<span className="text-cream/60">PLACE</span><span className="text-lime">.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
