import type { Metadata } from "next";
import { Anton, Archivo, IBM_Plex_Mono, Inter } from "next/font/google";
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
  title: {
    default: "TTI Recruiting | Flatbed. Regional. Reliable.",
    template: "%s | TTI Recruiting",
  },
  description:
    "TTI Recruiting helps CDL drivers find trucking opportunities in the U.S. market. OTR, regional, local, and dedicated lanes across the Midwest.",
  keywords: ["CDL jobs", "truck driver jobs", "TTI Recruiting", "flatbed driver", "trucking opportunities"],
  openGraph: {
    title: "TTI Recruiting | Flatbed. Regional. Reliable.",
    description: "Helping CDL drivers find trucking opportunities in the U.S. market.",
    type: "website",
    siteName: "TTI Recruiting",
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