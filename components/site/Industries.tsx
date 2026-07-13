"use client";
import { useEffect, useRef } from "react";
import {
  Rocket, Sprout, ShoppingBag, Factory, Building2, GraduationCap,
  Cpu, UtensilsCrossed, HeartPulse, Radio, LineChart, Zap,
} from "lucide-react";

const items = [
  { l: "Startups & Entrepreneurs", Icon: Rocket },
  { l: "Agribusiness", Icon: Sprout },
  { l: "Retail & E-commerce", Icon: ShoppingBag },
  { l: "Manufacturing & Industrial", Icon: Factory },
  { l: "Real Estate & Construction", Icon: Building2 },
  { l: "Education & Training", Icon: GraduationCap },
  { l: "Technology & Software", Icon: Cpu },
  { l: "Food & Hospitality", Icon: UtensilsCrossed },
  { l: "Healthcare & Wellness", Icon: HeartPulse },
  { l: "Telecommunication", Icon: Radio },
  { l: "Finance & Investment", Icon: LineChart },
  { l: "Energy & Natural Resources", Icon: Zap },
];

function MarqueeRow({
  rowItems,
  direction,
  speed = 0.45,
}: {
  rowItems: typeof items;
  direction: "left" | "right";
  speed?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const doubled = [...rowItems, ...rowItems];

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    if (direction === "right") el.scrollLeft = el.scrollWidth / 2;

    let raf: number;
    const tick = () => {
      if (!paused.current && el) {
        const half = el.scrollWidth / 2;
        if (direction === "left") {
          el.scrollLeft += speed;
          if (el.scrollLeft >= half) el.scrollLeft -= half;
        } else {
          el.scrollLeft -= speed;
          if (el.scrollLeft <= 0) el.scrollLeft += half;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [direction, speed]);

  const pause = () => (paused.current = true);
  const resume = () => setTimeout(() => (paused.current = false), 400);

  return (
    <div
      ref={scrollerRef}
      onTouchStart={pause}
      onTouchEnd={resume}
      onMouseDown={pause}
      onMouseUp={resume}
      className="flex overflow-x-auto gap-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {doubled.map(({ l, Icon }, i) => (
        <div
          key={i}
          className="shrink-0 flex items-center gap-2 whitespace-nowrap rounded-full bg-cream border border-foreground/10 pl-3 pr-4 py-2"
        >
          <Icon className="h-4 w-4 text-foreground/60 shrink-0" strokeWidth={1.5} />
          <span className="text-[13px] text-foreground/85">{l}</span>
        </div>
      ))}
    </div>
  );
}

export function Industries() {
  const rowA = items.slice(0, 6);
  const rowB = items.slice(6, 12);

  return (
    <section className="theme-cream-2 rule-top">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-32">
        <div className="font-mono-label text-foreground/70 mb-6 md:mb-8 flex items-center gap-2">
          <span className="h-2 w-2 bg-foreground inline-block" /> Industries
        </div>
        <h2 className="font-display text-balance text-[clamp(1.75rem,4.4vw,4rem)] leading-[1.05] tracking-[-0.02em] max-w-3xl">
          Helping organisations across industries hire, build and scale teams.
        </h2>

        {/* Mobile: two auto + manual scroll rows, opposite directions */}
        <div className="mt-10 md:hidden space-y-3 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <MarqueeRow rowItems={rowA} direction="left" />
          <MarqueeRow rowItems={rowB} direction="right" />
        </div>

        {/* Desktop: bordered grid, Stats-style */}
        <div className="hidden md:grid mt-16 md:grid-cols-3 border border-foreground/10 rounded-2xl overflow-hidden">
          {items.map(({ l, Icon }, i) => (
            <div
              key={l}
              className={`flex items-center gap-3.5 px-8 py-6 border-foreground/10
                ${i % 3 !== 2 ? "md:border-r" : ""} ${i < 9 ? "md:border-b" : ""}
              `}
            >
              <Icon className="h-5 w-5 text-foreground/60 shrink-0" strokeWidth={1.5} />
              <span className="text-[14.5px] text-foreground/85">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}