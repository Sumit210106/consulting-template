import LandingPage from "@/components/ui/LandingPage";
import { getDefaultBrand } from "@/lib/brands";

export default function HomePage() {
  const brand = getDefaultBrand();
  return <LandingPage brand={brand} />;
}