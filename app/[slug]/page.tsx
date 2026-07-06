import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LandingPage from "@/components/ui/LandingPage";
import { getBrandBySlug, getAllBrandSlugs } from "@/lib/brands";
import { getCountryByCode } from "@/lib/countries";


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
    title: `${foundBrand.displayName} | ${foundBrand.description}`,
    description: foundBrand.tagline,
  };
}

export default async function DynamicPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const countryCode = typeof resolvedSearchParams.country === "string" ? resolvedSearchParams.country : undefined;
  const country = getCountryByCode(countryCode);
  
  if (!country) notFound();

  const foundBrand = getBrandBySlug(slug);
  if (!foundBrand) notFound();
  
  return <LandingPage brand={foundBrand} country={country} />;
}
