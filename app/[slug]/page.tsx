import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LandingPage from "@/components/ui/LandingPage";
import { getBrandBySlug, getAllBrandSlugs } from "@/lib/brands";

export function generateStaticParams() {
  const brandParams = getAllBrandSlugs().map((slug) => ({ slug }));
  return brandParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const foundBrand = getBrandBySlug(slug);
  if (!foundBrand) return { title: "Item not found" };
  return {
    title: `${foundBrand.displayName} Consulting | ${foundBrand.description}`,
    description: foundBrand.tagline,
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const foundBrand = getBrandBySlug(slug);
  if (!foundBrand) notFound();
  
  return <LandingPage brand={foundBrand} />;
}
