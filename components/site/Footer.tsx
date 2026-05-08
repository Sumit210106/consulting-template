export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-10">
        <div className="font-display text-[clamp(4rem,18vw,18rem)] leading-[0.85] tracking-[-0.04em] text-cream">
          JRV<span className="text-lime">.</span>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 text-[12.5px] text-cream/55 border-t border-cream/10 pt-6">
          <div>© {new Date().getFullYear()} JRV Consulting. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-lime">About</a>
            <a href="#services" className="hover:text-lime">Services</a>
            <a href="#process" className="hover:text-lime">Process</a>
            <a href="#contact" className="hover:text-lime">Contact</a>
          </div>
          <div className="font-mono-label">PEOPLE · CULTURE · GROWTH</div>
        </div>
      </div>
    </footer>
  );
}
