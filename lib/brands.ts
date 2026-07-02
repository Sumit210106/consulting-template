export type Brand = {
  id: string;
  name: string;
  displayName: string;
  email: string;
  description: string;
  tagline: string;
};

export const BRANDS: Record<string, Brand> = {
  jrv: {
    id: "jrv",
    name: "JRV",
    displayName: "JRV",
    email: "hello@jrvconsulting.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "JRV Consulting helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  },
  anmol: {
    id: "anmol",
    name: "anmol",
    displayName: "anmol",
    email: "hello@anmolconsulting.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "anmol Consulting helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  },
  test: {
    id: "test",
    name: "test",
    displayName: "test",
    email: "hello@testconsulting.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "test Consulting helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  },
};

export function getBrandBySlug(slug: string): Brand | null {
  return BRANDS[slug] ?? null;
}

export function getAllBrandSlugs(): string[] {
  return Object.keys(BRANDS);
}

export function getDefaultBrand(): Brand {
  return BRANDS.jrv;
}
