import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Inter, Kaushan_Script } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin"] });
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], axes: ["wdth"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const script = Kaushan_Script({ variable: "--font-script", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${site.fullName} | Flutter Developer`,
  description: site.bio.join(" "),
  openGraph: {
    title: `${site.fullName} — Portfolio`,
    description: site.bio.join(" "),
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable} ${inter.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
