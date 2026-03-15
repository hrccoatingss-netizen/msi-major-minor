import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MSI Major Minor Services | Premium Painting & Property Services in Little Rock, AR",
    template: "%s | MSI Major Minor Services",
  },
  description:
    "Little Rock's trusted painting and property services team. Interior painting from $85/room, full exterior from $1,200. Cabinet refinishing, drywall repair, deck staining. 12+ years experience. Licensed & insured. Military discount. Call (501) 960-3578.",
  keywords: [
    "painting contractor Little Rock AR",
    "interior painting Little Rock",
    "exterior painting Arkansas",
    "cabinet refinishing Little Rock",
    "drywall repair Little Rock",
    "deck staining Arkansas",
    "affordable painter Little Rock",
    "property preservation Arkansas",
    "licensed painter Little Rock",
    "military discount painting Arkansas",
  ],
  openGraph: {
    title: "MSI Major Minor Services | Premium Painting in Little Rock, AR",
    description:
      "Professional painting starting at $85/room. Licensed & insured with 12+ years experience. Military discount available. Serving Little Rock, North Little Rock, Maumelle & Central Arkansas.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSI Major Minor Services | Premium Painting in Little Rock, AR",
    description:
      "Professional painting starting at $85/room. Licensed & insured. 12+ years experience. Military discount.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "#business",
  name: "MSI Major Minor Services",
  description:
    "Premium painting and property services in Little Rock, AR. Interior painting, exterior painting, cabinet refinishing, drywall repair, deck staining, and property preservation. Licensed & insured.",
  telephone: "+1-501-960-3578",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10601 Warren Dr",
    addressLocality: "Little Rock",
    addressRegion: "AR",
    postalCode: "72209",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.7465,
    longitude: -92.2896,
  },
  areaServed: [
    { "@type": "City", name: "Little Rock, AR" },
    { "@type": "City", name: "North Little Rock, AR" },
    { "@type": "City", name: "Maumelle, AR" },
    { "@type": "City", name: "Benton, AR" },
    { "@type": "City", name: "Conway, AR" },
    { "@type": "City", name: "Cabot, AR" },
    { "@type": "City", name: "Jacksonville, AR" },
    { "@type": "City", name: "Sherwood, AR" },
  ],
  foundingDate: "2018",
  paymentAccepted: "Cash, Credit Card, Cryptocurrency",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
