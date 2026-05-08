import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "JRV Consulting | Premium Recruitment & Talent Acquisition",
    template: "%s | JRV Consulting",
  },
  description: "JRV Consulting helps organisations manage their most valuable asset — people. Quality candidate placement, calibrated to your culture and goals.",
  keywords: ["Recruitment", "Talent Acquisition", "CV Scrutiny", "HR Consulting", "JRV Consulting"],
  authors: [{ name: "JRV Consulting" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "JRV Consulting | Premium Recruitment & Talent Acquisition",
    description: "Quality candidate placement, calibrated to your culture and goals.",
    type: "website",
    locale: "en_US",
    siteName: "JRV Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "JRV Consulting | Premium Recruitment & Talent Acquisition",
    description: "Quality candidate placement, calibrated to your culture and goals.",
  },
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
