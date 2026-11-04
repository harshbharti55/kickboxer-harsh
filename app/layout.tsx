import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kickboxer-harsh.online'),
  verification: {
    google: "LTDs5YFw033xWbomaMJ02IX1EGHQl9QbblH-xRsHAPs",
  },
  manifest: '/manifest.webmanifest',
  title: {
    default: 'Harsh Bharti | Indian Kickboxer',
    template: '%s | Harsh Bharti',
  },
  description: 'Official athlete website of Harsh Bharti, an Indian competitive full contact kickboxer from Himachal Pradesh, India. Explore his athlete profile, competition record, national medals, media and sponsorship opportunities.',
  keywords: [
    'Harsh Bharti', 'Harsh Bharti Kickboxer', 'Kickboxer Harsh',
    'Indian Kickboxer', 'Full Contact Kickboxing', 'WAKO India',
    'National Kickboxing Medalist', 'Himachal Pradesh Athlete',
  ],
  authors: [{ name: 'Harsh Bharti', url: 'https://kickboxer-harsh.online' }],
  creator: 'Harsh Bharti',
  publisher: 'Harsh Bharti',
  alternates: { canonical: 'https://kickboxer-harsh.online/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kickboxer-harsh.online/',
    siteName: 'Harsh Bharti',
    title: 'Harsh Bharti | Indian Kickboxer',
    description: 'Official athlete profile, national competition record, kickboxing media and sponsorship information for Harsh Bharti.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Harsh Bharti | Indian Kickboxer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Bharti | Indian Kickboxer',
    description: 'Official website of Indian kickboxer Harsh Bharti.',
    images: ['/og-image.jpg'],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://kickboxer-harsh.online/#person",
  name: "Harsh Bharti",
  alternateName: ["Kickboxer Harsh", "Harsh Bharti Kickboxer"],
  url: "https://kickboxer-harsh.online/",
  image: [
    "https://kickboxer-harsh.online/media/hero.png",
  ],
  email: "kickboxerharsh@gmail.com",
  description: "Harsh Bharti is an Indian competitive full contact kickboxer from Himachal Pradesh. His official website presents his athlete profile, competition record, media and sponsorship enquiries.",
  nationality: { "@type": "Country", name: "India" },
  jobTitle: "Competitive Kickboxer",
  knowsAbout: ["Kickboxing", "Full Contact Kickboxing", "Combat sports"],
  sameAs: [
    "https://www.instagram.com/harsh_bharti5?vrfl=NmhnZ3M3MWdhbDMw",
    "https://www.facebook.com/share/1ERw93PBWt/",
    "https://youtube.com/@kickboxerharsh?si=wMdeCiRbkroEMKWb",
    "https://www.linkedin.com/in/harsh-bharti-931b31251?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  ],
  mainEntityOfPage: { "@id": "https://kickboxer-harsh.online/#webpage" }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kickboxer-harsh.online/#website",
  url: "https://kickboxer-harsh.online/",
  name: "Harsh Bharti | Indian Kickboxer",
  alternateName: "Kickboxer Harsh",
  description: "Official athlete website of Indian kickboxer Harsh Bharti, with competition results, career profile, media and sponsorship information.",
  inLanguage: "en-IN",
  publisher: { "@id": "https://kickboxer-harsh.online/#person" }
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://kickboxer-harsh.online/#webpage",
  url: "https://kickboxer-harsh.online/",
  name: "Harsh Bharti | Indian Kickboxer",
  description: "Official athlete profile, kickboxing achievements, competition record and sponsorship enquiries for Harsh Bharti.",
  isPartOf: { "@id": "https://kickboxer-harsh.online/#website" },
  about: { "@id": "https://kickboxer-harsh.online/#person" },
  mainEntity: { "@id": "https://kickboxer-harsh.online/#person" },
  inLanguage: "en-IN"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [personSchema, websiteSchema, webpageSchema];
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <TopNav />
        <main className="pt-20">{children}</main>
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4NW5L754S1" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4NW5L754S1');
          `}
        </Script>
      </body>
    </html>
  );
}
