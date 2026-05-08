"use client";
import { motion } from "framer-motion";

const items = [
  {
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80",
    quote: "Our hiring plan was a notebook full of scribbles. In a few weeks JRV turned it into a clear strategy with a real funnel and a launch date — I went from feeling like an imposter to feeling like a proper founder.",
    name: "Cassian Holt",
    title: "FOUNDER, HARBOR & GRAIN",
  },
  {
    img: "https://images.unsplash.com/photo-1604754742629-3e0498a8d76c?w=1200&q=80",
    quote: "I thought hiring senior leaders meant endless calls and stress. JRV broke it down into simple steps, ran the process for us, and we closed two execs faster than I thought possible.",
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

export function Testimonials() {
  return (
    <section id="reviews" className="theme-cream-2">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="font-mono-label text-foreground/70 mb-8 flex items-center gap-2">
          <span className="h-2 w-2 bg-foreground inline-block" /> Testimonials
        </div>
        <h2 className="font-display text-balance text-[clamp(2rem,4.4vw,4rem)] leading-[1.05] tracking-[-0.02em] max-w-4xl">
          From "can we really hire for this?" to <span className="hl-ink">"I can't believe they started Monday"</span> — clients share their journeys
        </h2>
        <div className="mt-16 space-y-8">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl bg-cream border border-foreground/10 overflow-hidden"
            >
              <img src={t.img} alt="" className="w-full h-[300px] md:h-[420px] object-cover" />
              <div className="p-6 md:p-10">
                <div className="text-lime text-lg">★★★★★</div>
                <blockquote className="mt-4 text-[15.5px] md:text-base leading-relaxed text-foreground/85 max-w-2xl">"{t.quote}"</blockquote>
                <figcaption className="mt-6">
                  <div className="font-display text-lg">{t.name}</div>
                  <div className="font-mono-label text-foreground/60 mt-1">{t.title}</div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
