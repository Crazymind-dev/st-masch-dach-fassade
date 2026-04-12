import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AccessibilityWidget from "@/components/ui/accessibility-widget";
import FloatingPhone from "@/components/ui/floating-phone";

export const metadata: Metadata = {
  title: {
    default: "St. Masch | Dach, Fassade & Solar | Meisterbetrieb Berlin",
    template: "%s | St. Masch Dach, Fassade & Solar",
  },
  description:
    "Dachdecker-Meisterbetrieb in Berlin. Dachsanierung, Flachdach, Fassade, Photovoltaik — alles aus einer Hand. Ihr Partner für nachhaltige Gebäudelösungen in Berlin und Brandenburg.",
  keywords: "Dachdecker Berlin, Dachsanierung, Photovoltaik, Fassade, WDVS, Meisterbetrieb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <AccessibilityWidget />
        <FloatingPhone />
      </body>
    </html>
  );
}
