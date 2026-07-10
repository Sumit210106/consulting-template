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
  "anmol-kanodia": {
    // 1. URL ka path badalne ke liye is key ko badlein (e.g., website.com/anmol-kanodia)
    id: "anmol-kanodia", // Isko upar ki key ke sath hamesha match rakhin taaki dynamic route load ho sake
    name: "Anmol Kanodia", // Short ya default brand name
    displayName: "Anmol Kanodia", // Page heading aur titles mein display hone wala naam
    email: "hello@anmolconsulting.in", // Form aur dynamic contacts ke liye email
    description: "Premium Recruitment & Talent Acquisition", // Header text ke niche ka short description
    tagline:
      "Anmol Kanodia Consulting helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.", // Detail text ya hero page introduction description
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
  // newton : {
  //   id: "newton",
  //   name: "newton",
  //   displayName: "newton",
  //   email: "hello@testconsulting.in",
  //   description: "Premium Recruitment & Talent Acquisition",
  //   tagline:
  //     "Newton helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  // },
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
