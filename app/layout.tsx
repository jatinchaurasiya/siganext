import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    default: "Siganext | Internet, Solar & IT Solutions – Nashik & Maharashtra",
    template: "%s | Siganext",
  },
  description:
    "Carrier-grade fiber internet, enterprise rooftop solar, IT hardware & CCTV security, and managed hosting from one Nashik-based operator across Maharashtra & Goa.",
  keywords: [
    "Siganext",
    "Siganext Networks",
    "Solar Installation Nashik",
    "Fiber Broadband Nashik",
    "Leased Line Internet Maharashtra",
    "IT Hardware AMC Nashik",
    "CCTV Camera Installation Nashik",
    "Data Center Hosting Maharashtra",
    "Government Tender Solar Vendor",
  ],
  authors: [{ name: "Siganext Networks" }],
  creator: "Siganext Networks and Green Energy Solutions Private Limited",
  publisher: "Siganext Networks and Green Energy Solutions Private Limited",
  openGraph: {
    title: "Siganext | Internet, Solar & IT Solutions – Nashik & Maharashtra",
    description:
      "Carrier-grade fiber internet, enterprise rooftop solar, IT hardware & CCTV security, and managed hosting from one Nashik-based operator across Maharashtra & Goa.",
    url: "https://siganext.com",
    siteName: "Siganext",
    locale: "en_IN",
    type: "website",
    /* [OG IMAGE: Replace /og-default.jpg with production 1200x630 OpenGraph asset] */
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Siganext Integrated Networks, Solar & IT Infrastructure Nashik Maharashtra",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
  width: "device-width",
  initialScale: 1,
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Siganext Networks and Green Energy Solutions Private Limited",
  "alternateName": "Siganext",
  "url": "[CONFIRM final domain]",
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
    "value": "[CONFIRM]"
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
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          <main className="flex-1 pt-16 md:pt-18">{children}</main>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
