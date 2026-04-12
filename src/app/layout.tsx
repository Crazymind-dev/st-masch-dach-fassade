import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Masch | Dach & Fassade | Meisterbetrieb Berlin",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
