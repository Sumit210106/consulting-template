import Image from "next/image";
import { ArrowRight } from "lucide-react";
import handshake from "@/assets/handshake.jpg";
import team from "@/assets/team.jpg";
import hero from "@/assets/hero.jpg";

const services = [
  { t: "Recruitment & talent acquisition", d: "End-to-end search across functions and seniority, from sourcing and screening to offer management.", img: hero },
  { t: "CV scrutiny", d: "Forensic résumé review and verifying credentials, mapping competencies and surfacing the signal hiring managers need.", img: team },
  { t: "Employer Branding", d: "We help you sound like a place top talent actually wants to work with a clear EVP and strong narrative.", img: handshake },
  { t: "Compensation guidance", d: "Calibrated, current benchmarks so your offer wins without overpaying.", img: hero },
  { t: "Onboarding support", d: "We stick around after signature so the first 90 days don't undo the search.", img: team },
];

export function Services() {
  return (
    <section id="services" className="theme-cream-2">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 md:pt-32 pb-10">
        <div className="font-mono-label text-foreground/70 mb-8 flex items-center gap-2">
          <span className="h-2 w-2 bg-foreground inline-block" /> Our Services
        </div>
        <h2 className="font-display text-balance text-[clamp(2rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.02em] max-w-5xl">
          No running around for different vendors.{" "}
          <span className="hl">We handle it all</span>, so you can focus on building the business.
        </h2>
      </div>

      {/* sticky-stack cards */}
      <div className="mx-auto max-w-[1400px] px-6 pb-32">
        {services.map((s, i) => (
          <div
            key={s.t}
            className="sticky"
            style={{ top: `calc(80px + ${i * 18}px)` }}
          >
            <article
              className="rounded-3xl bg-cream border border-foreground/10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] overflow-hidden mb-6"
            >
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between min-h-[420px]">
                  <div>
                    <div className="font-mono-label text-foreground/60 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-foreground inline-block" />
                      Service / {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-8 font-display text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
                      {s.t}
                    </h3>
                    <p className="mt-5 text-[15px] text-foreground/70 max-w-md leading-relaxed">{s.d}</p>
                  </div>
                  <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-md bg-foreground text-background pl-4 pr-2 py-2.5 text-sm font-medium w-fit group">
                    View Service
                    <span className="rounded-sm bg-background/10 p-1.5 group-hover:translate-x-0.5 transition">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </div>
                <div className="md:col-span-6 p-4 md:p-6">
                  <div className="rounded-2xl overflow-hidden h-full min-h-[300px] md:min-h-[400px] relative">
                    <Image src={s.img} alt={s.t} fill className="object-cover halftone" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
