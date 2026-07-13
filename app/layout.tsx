import type { Metadata, Viewport } from "next";
import "./globals.css";

import { BRANDS } from "@/lib/brands";

const defaultBrand = BRANDS.test;

export const metadata: Metadata = {
  title: {
    default: `${defaultBrand.displayName} Consulting | ${defaultBrand.description}`,
    template: ``,
  },
  // description: defaultBrand.tagline,
  // keywords: ["Recruitment", "Talent Acquisition", "CV Scrutiny", "HR Consulting", `${defaultBrand.displayName} Consulting`],
  // authors: [{ name: `${defaultBrand.displayName} Consulting` }],
  // robots: {
  //   index: true,
  //   follow: true,
  // },
  // openGraph: {
  //   title: `${defaultBrand.displayName} Consulting | ${defaultBrand.description}`,
  //   description: defaultBrand.tagline,
  //   type: "website",
  //   locale: "en_US",
  //   siteName: `${defaultBrand.displayName} Consulting`,
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: `${defaultBrand.displayName} Consulting | ${defaultBrand.description}`,
  //   description: defaultBrand.tagline,
  // },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans selection:bg-lime selection:text-ink">
        {children}
      </body>
    </html>
  );
}
