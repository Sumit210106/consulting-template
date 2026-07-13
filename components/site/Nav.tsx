"use client"
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Cases", href: "#cases" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

import { Brand } from "@/lib/brands";

export function Nav({ brand }: { brand?: Brand }) {
  const [open, setOpen] = useState(false);
  const activeBrand = brand || { displayName: "CONSULT" };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/5`}
    >
      <div className="mx-auto max-w-[1400px] px-6 h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full border border-lime/60 flex items-center justify-center">
            <span className="h-3 w-3 rounded-full bg-lime" />
          </span>
          <span className="font-display text-[15px] tracking-tight text-cream">
            <span className="font-display text-[19px] text-cream/80 mr-0.5">{activeBrand.displayName}</span>
            <span className="ml-1 font-display"><span className="text-lime">.</span></span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-1 text-md text-cream/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-4 py-2 hover:text-lime transition">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-lime text-ink pl-4 pr-2 py-2 text-[13px] font-medium hover:opacity-90 transition group"
        >
          Get in Touch
          <span className="rounded-sm bg-ink/10 p-1.5">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-cream">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2.5 text-cream/80 hover:text-lime">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-lime text-ink px-4 py-2.5 text-sm font-medium text-center">
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
