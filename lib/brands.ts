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

  test: {
    id: "test",
    name: "test",
    displayName: "test",
    email: "hello@testconsulting.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "test Consulting helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  },

  pqsmitra: {
    id: "pqsmitra",
    name: "PQSMitra",
    displayName: "PQSMitra",
    email: "hello@pqsmitraconsulting.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "PQSMitra Consulting helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  },

  mangoconsulting: {
    id: "mangoconsulting",
    name: "Mango Consulting",
    displayName: "Mango Consulting",
    email: "hello@mangoconsulting.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "Mango Consulting helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  },

  "bmore-consulting": {
    id: "bmore-consulting",
    name: "B-More Consulting",
    displayName: "B-More Consulting",
    email: "hello@bmoreconsulting.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "B-More Consulting helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  },

  "kaizen-consultancy": {
    id: "kaizen-consultancy",
    name: "Kaizen Consultancy Services",
    displayName: "Kaizen Consultancy Services",
    email: "hello@kaizenconsultancy.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "Kaizen Consultancy Services helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  },

  "do-great-consulting": {
    id: "do-great-consulting",
    name: "Do-Great Consulting",
    displayName: "Do-Great Consulting",
    email: "hello@dogreatconsulting.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "Do-Great Consulting helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  },

  "laxmi-consultancy": {
    id: "laxmi-consultancy",
    name: "Laxmi Consultancy",
    displayName: "Laxmi Consultancy",
    email: "hello@laxmiconsultancy.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "Laxmi Consultancy helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  },

  "k-vigour-hr-consultant": {
    id: "k-vigour-hr-consultant",
    name: "K-Vigour HR Consultant",
    displayName: "K-Vigour HR Consultant",
    email: "hello@kvigourhrconsultant.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "K-Vigour HR Consultant helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  },

  "maa-consultancy": {
    id: "maa-consultancy",
    name: "Maa Consultancy",
    displayName: "Maa Consultancy",
    email: "hello@maaconsultancy.in",
    description: "Premium Recruitment & Talent Acquisition",
    tagline:
      "Maa Consultancy helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
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
