"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

const avatars = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=33",
  "https://i.pravatar.cc/80?img=15",
  "https://i.pravatar.cc/80?img=54",
  "https://i.pravatar.cc/80?img=8",
];

const tickerItems = [
  { icon: "🚀", t: "200+ BUSINESSES PLACED" },
  { icon: "📈", t: "$5M+ IN CLIENT REVENUE GENERATED" },
  { icon: "🤝", t: "12 COUNTRIES SERVED" },
  { icon: "✦", t: "100% BRIEFED ROLES CLOSED" },
];

export function Hero() {
  return (
    <section id="top" className="relative bg-ink overflow-hidden min-h-[100svh]">
      {/* background image */}
      <div className="absolute inset-0">
        <Image src={hero} alt="JRV Consulting" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.35),rgba(10,10,10,0.85))]" />
        <div className="absolute inset-0 bg-lime/[0.04] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pt-[120px] pb-16 min-h-[100svh] flex flex-col">
        <div className="flex-1" />

        {/* avatars */}
        <div className="flex -space-x-3 mb-3">
          {avatars.map((a, i) => (
            <span
              key={i}
              className="h-11 w-11 rounded-full ring-2 ring-lime overflow-hidden bg-ink shadow-[0_0_0_2px_rgba(10,10,10,0.6)]"
              style={{ zIndex: avatars.length - i }}
            >
              <img src={a} alt="" className="h-full w-full object-cover" />
            </span>
          ))}
        </div>

        {/* ticker */}
        <div className="overflow-hidden max-w-[640px] bg-ink/70 backdrop-blur-sm border border-cream/10 mb-10">
          <div className="flex marquee-track whitespace-nowrap py-2.5">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((it, i) => (
              <div key={i} className="flex items-center gap-2 px-5 font-display text-[11px] text-lime tracking-[0.18em]">
                <span>{it.icon}</span>
                <span>{it.t}</span>
                <span className="opacity-40 ml-3">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* headline + meta */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 font-display font-normal text-cream text-balance text-[clamp(2.6rem,7.2vw,6.8rem)] leading-[0.98] tracking-[-0.025em]"
          >
            We <span className="text-lime">place</span>, you <span className="text-lime">grow</span>
            <br />
            <span className="block pl-[0.6em]">— that's the deal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 text-cream/85 text-[15px] leading-relaxed lg:text-right max-w-sm lg:ml-auto"
          >
            JRV Consulting helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals, every step of the way.
          </motion.p>
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-md bg-lime text-ink pl-5 pr-2 py-3 text-sm font-medium hover:opacity-90 transition group"
          >
            Start a Search
            <span className="rounded-sm bg-ink/10 p-2 group-hover:translate-x-0.5 transition">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
