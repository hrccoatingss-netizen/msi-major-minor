import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MSI Major Minor Services - Professional Painting in Little Rock, AR | 26 Years Experience",
    template: "%s | MSI Major Minor Services",
  },
  description:
    "Affordable professional painting services in Little Rock, AR. Interior painting from $85/room, full exterior from $1,200. Cabinet refinishing, drywall repair, deck staining. 26 years experience. Military discount. Call (501) 960-3578.",
  keywords: [
    "painting contractor Little Rock AR",
    "interior painting Little Rock",
    "exterior painting Arkansas",
    "cabinet refinishing Little Rock",
    "drywall repair Little Rock",
    "deck staining Arkansas",
    "affordable painter Little Rock",
    "property preservation Arkansas",
  ],
  openGraph: {
    title: "MSI Major Minor Services - Professional Painting in Little Rock, AR",
    description:
      "Affordable professional painting starting at $85/room. 26 years experience. Military discount available. Serving Little Rock, North Little Rock, Maumelle & Central Arkansas.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSI Major Minor Services - Professional Painting in Little Rock, AR",
    description:
      "Affordable professional painting starting at $85/room. 26 years experience. Military discount available.",
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
    "Professional painting and property services in Little Rock, AR. Interior painting, exterior painting, cabinet refinishing, drywall repair, deck staining, and property preservation.",
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
  ],
  foundingDate: "2018",
  paymentAccepted: "Cash, Credit Card, Cryptocurrency",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
