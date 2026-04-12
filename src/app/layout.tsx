import type { Metadata } from "next";
import { Playfair_Display, Raleway, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AccessibilityWidget from "@/components/ui/accessibility-widget";
import FloatingPhone from "@/components/ui/floating-phone";
import JsonLd from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { company, site } from "@/lib/config";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-raleway",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: site.title,
    template: `%s | ${company.brandName} Dachdecker Berlin`,
  },
  description: site.description,
  keywords:
    "Dachdecker Berlin, Dachsanierung Berlin, Photovoltaik Berlin, Fassade WDVS, Meisterbetrieb, Energieberater Berlin, BAFA Förderung, Enphase Solar Partner, Dachfenster VELUX",
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.baseUrl,
    siteName: company.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${company.name} — Meisterbetrieb in Berlin`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  alternates: {
    canonical: site.baseUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`h-full antialiased ${playfairDisplay.variable} ${raleway.variable} ${roboto.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd data={localBusinessSchema()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <AccessibilityWidget />
        <FloatingPhone />
      </body>
    </html>
  );
}
