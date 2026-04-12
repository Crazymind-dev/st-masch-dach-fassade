import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: {
    default: "St. Masch | Dach & Fassade | Meisterbetrieb Berlin",
    template: "%s | St. Masch Dach & Fassade",
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
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
