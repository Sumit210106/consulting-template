"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80",
    quote: "Our hiring plan was a notebook full of scribbles. In a few weeks  turned it into a clear strategy with a real funnel and a launch date — I went from feeling like an imposter to feeling like a proper founder.",
    name: "Cassian Holt",
    title: "FOUNDER, HARBOR & GRAIN",
  },
  {
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80",
    quote: "I thought hiring senior leaders meant endless calls and stress , broke it down into simple steps, ran the process for us, and we closed two execs faster than I thought possible.",
    name: "Ryan Martinez",
    title: "CEO, IRONLEAF VENTURES",
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
    quote: "I had a million to-dos and no clue where to start with our HR build-out. They sorted the chaos and gave me a plan so clear my team is finally running smoothly without me babysitting it.",
    name: "Leander Cross",
    title: "COO, NORTHWIND OUTFITTERS",
  },
];

import { Brand } from "@/lib/brands";

function StarRow() {
  return (
    <div className="text-lime text-lg mb-6 tracking-widest flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function PixelDecoration() {
  return (
    <div className="absolute top-0 right-0 grid grid-cols-3 w-12 h-12 opacity-30 group-hover:opacity-100 transition-opacity">
      <div className="w-4 h-4 invisible" />
      <div className="w-4 h-4 invisible" />
      <div className="w-4 h-4 bg-white/20" />

      <div className="w-4 h-4 invisible" />
      <div className="w-4 h-4 bg-white/20" />
      <div className="w-4 h-4 bg-lime" />

      <div className="w-4 h-4 bg-white/20" />
      <div className="w-4 h-4 bg-lime" />
      <div className="w-4 h-4 bg-cream" />
    </div>
  );
}

function TestimonialCard({
  t,
  i,
  activeBrand,
}: {
  t: (typeof items)[number];
  i: number;
  activeBrand: Brand | { displayName: string };
}) {
  return (
    <motion.figure
      key={t.name}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: i * 0.1 }}
      className="relative p-8 md:p-10 rounded-[4px] bg-ink border border-ink/5 flex flex-col h-full group overflow-hidden shadow-xl shadow-ink/5"
    >
      <PixelDecoration />
      <StarRow />

      <blockquote className="flex-1 text-[15px] md:text-[17px] leading-relaxed text-white/80 italic font-medium">
        &ldquo;{t.quote.replaceAll("CONSULT", activeBrand.displayName)}&rdquo;
      </blockquote>

      <figcaption className="mt-10 pt-8 border-t border-white/5 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full overflow-hidden border border-lime/20 bg-lime/10 grayscale group-hover:grayscale-0 transition-all duration-500">
          <img src={t.img} alt="" className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="font-display text-lg text-white group-hover:text-lime transition-colors">{t.name}</div>
          <div className="font-mono-label text-[11px] text-white/50 mt-0.5">{t.title}</div>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export function Testimonials({ brand }: { brand?: Brand }) {
  const activeBrand = brand || { displayName: "CONSULT" };
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + items.length) % items.length);
  };

  const goTo = (target: number) => {
    setDirection(target > index ? 1 : -1);
    setIndex(target);
  };

  return (
    <section id="reviews" className="bg-cream text-ink relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="font-mono-label text-ink mb-8 flex items-center gap-2">
          <span className="h-2 w-2 bg-ink inline-block" /> Testimonials
        </div>
        <h2 className="font-display text-balance text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] tracking-[-0.04em] max-w-4xl">
          From "can we really hire for this?" to <span className="hl">"they started Monday"</span>   clients share their journeys
        </h2>

        {/* Desktop / tablet grid — unchanged */}
        <div className="hidden md:grid mt-20 grid-cols-3 gap-8">
          {items.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} activeBrand={activeBrand} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mt-16">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <TestimonialCard t={items[index]} i={0} activeBrand={activeBrand} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: dots + prev/next */}
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="h-11 w-11 flex items-center justify-center rounded-full border border-ink/15 text-ink active:scale-95 transition-transform"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2]">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-2.5">
              {items.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-ink" : "w-2.5 bg-ink/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="h-11 w-11 flex items-center justify-center rounded-full border border-ink/15 text-ink active:scale-95 transition-transform"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2]">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}