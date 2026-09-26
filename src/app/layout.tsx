import type { Metadata } from "next";
import { Anton, Archivo, IBM_Plex_Mono, Inter } from "next/font/google";
import { SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--vd-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--vd-ledger",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.defaultTitle,
    template: "%s | TTI Recruiting",
  },
  description: SITE.description,
  keywords: SITE.keywords,
  openGraph: {
    title: SITE.defaultTitle,
    description: "Helping CDL drivers connect with recruiting opportunities in the U.S. market.",
    url: SITE_URL,
    type: "website",
    siteName: "TTI Recruiting",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaultTitle,
    description: SITE.description,
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${anton.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
