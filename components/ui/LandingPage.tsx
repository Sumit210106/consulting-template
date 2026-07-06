import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Roadblocks } from "@/components/site/Roadblocks";
import { Features } from "@/components/site/Features";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { Process } from "@/components/site/Process";
import { Numbers } from "@/components/site/Numbers";
import { Comparison } from "@/components/site/Comparison";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Brand } from "@/lib/brands";
import { Country } from "@/lib/countries";


export default function LandingPage({ brand, country }: { brand: Brand; country: Country }) {
  return (
    <main className="bg-ink text-cream antialiased">
      <Nav brand={brand} />
      <Hero brand={brand} />
      <Roadblocks />
      <Features />
      <About brand={brand} />
      <Stats />
      <Marquee />
      <Services />
      <Industries />
      <Process />
      <Numbers />
      <Comparison />
      <Testimonials brand={brand} />
      <FAQ />
      <Contact brand={brand} country={country} />
      <Footer brand={brand} />
    </main>
  );
}
