import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageProgressRail from "@/components/PageProgressRail";
import { Analytics } from "@vercel/analytics/next";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siganext.com"),
  title: {
    default: "Siganext | Connectivity. Power. Technology. – Nashik & Maharashtra",
    template: "%s | Siganext Networks",
  },
  description:
    "One provider for broadband & network infrastructure, rooftop solar & green energy, and enterprise IT, software & security across Maharashtra & Goa.",
  keywords: [
    "Siganext",
    "Siganext Networks and Green Energy Solutions Private Limited",
    "Solar Installation Nashik",
    "Fiber Broadband Leased Line Nashik",
    "IT Hardware Security AMC Nashik",
    "Data Center Managed Hosting Maharashtra",
    "Government Tender Eligible Solar Vendor",
  ],
  authors: [{ name: "Siganext Networks" }],
  creator: "Siganext Networks and Green Energy Solutions Private Limited",
  publisher: "Siganext Networks and Green Energy Solutions Private Limited",
  openGraph: {
    title: "Siganext | Connectivity. Power. Technology.",
    description:
      "Integrated broadband ISP, solar green energy EPC, and enterprise IT security solutions from one Nashik-based operator across Maharashtra & Goa.",
    url: "https://siganext.com",
    siteName: "Siganext",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#101012",
  width: "device-width",
  initialScale: 1,
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Siganext Networks and Green Energy Solutions Private Limited",
  "alternateName": "Siganext",
  "url": "https://siganext.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nashik",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "areaServed": [
    "Nashik",
    "Mumbai",
    "Thane",
    "Pune",
    "Nagpur",
    "Chhatrapati Sambhajinagar",
    "Goa"
  ],
  "identifier": {
    "@type": "PropertyValue",
    "name": "CIN",
    "value": "[CONFIRM: CIN pending confirmation]"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${fraunces.variable} ${manrope.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bone text-obsidian font-body" suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        <PageProgressRail />
        <Analytics />
      </body>
    </html>
  );
}
