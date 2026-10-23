import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import Script from "next/script";



const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
});

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

  description:
    'Official website of Harsh Bharti, an Indian kickboxer, national medalist, international competitor, BPES student, and combat sports athlete from Himachal Pradesh, India.',

  keywords: [
    'Harsh Bharti',
    'Harsh Bharti kickboxer',
    'Kickboxer Harsh',
    'Harsh Bharti official website',
    'Harsh Bharti athlete profile',
    'Indian kickboxer',
    'Indian kickboxing athlete',
    'WAKO India Open National Tournament',
    'Full Contact Kickboxing',
    'national kickboxing championship',
    'Harsh Bharti kickboxing achievements',
    'Harsh Bharti competition results',
    'Harsh Bharti sponsorship',
    'sponsor an Indian athlete',
    'Himachal Pradesh kickboxer',
    'BPES student and kickboxer',
  ],

  authors: [
    {
      name: 'Harsh Bharti',
      url: 'https://kickboxer-harsh.online',
    },
  ],

  creator: 'Harsh Bharti',

  publisher: 'Harsh Bharti',

  alternates: {
    canonical: 'https://kickboxer-harsh.online',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    url: 'https://kickboxer-harsh.online',
    siteName: 'Harsh Bharti',

    title: 'Harsh Bharti | Indian Kickboxer',

    description:
      'Official website of Indian kickboxer Harsh Bharti featuring achievements, tournament results, media coverage, athlete profile, and latest updates.',

  images: [
  {
    url: '/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Harsh Bharti | Indian Kickboxer',
  },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Harsh Bharti | Indian Kickboxer',

    description:
      'Official website of Indian kickboxer Harsh Bharti.',

    creator: '@Harsh_bharti5',

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
  email: "kickboxerharsh@gmail.com",
  image: "https://kickboxer-harsh.online/profile.jpg",
  description:
    "Harsh Bharti is an Indian competitive kickboxer from Himachal Pradesh. His athlete profile documents national kickboxing competition results, medals, training, and sponsorship goals.",
  nationality: {
    "@type": "Country",
    name: "India"
  },
  jobTitle: "Competitive Kickboxer",
  sport: "Kickboxing",
  hasOccupation: {
    "@type": "Occupation",
    name: "Competitive Kickboxer"
  },
  knowsAbout: [
    "Kickboxing",
    "Full Contact Kickboxing",
    "Combat Sports",
    "Athlete Sponsorship"
  ],
  award: [
    "Two gold medals - WAKO India Open National Tournament, New Delhi (2022)",
    "Silver medal - National Kickboxing Championship, Ranchi (2023)",
    "Bronze medal - National Kickboxing Championship, Siliguri (2024)",
    "Silver medal - Senior National Kickboxing Championship, Raipur (2025)",
    "Fifth place - National Kickboxing Championship, Seniors & Masters, Indore (2026), -54 kg"
  ],
  sameAs: [
    "https://www.instagram.com/harsh_bharti5?vrfl=NmhnZ3M3MWdhbDMw",
    "https://www.facebook.com/share/1ERw93PBWt/",
    "https://youtube.com/@kickboxerharsh?si=wMdeCiRbkroEMKWb",
    "https://www.linkedin.com/in/harsh-bharti-931b31251?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  ]
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    personSchema,
    websiteSchema,
    organizationSchema,
  ];

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebas.variable} font-sans antialiased bg-black`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <TopNav />

        <main className="pt-20">
          {children}
        </main>

        <Footer />
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-4NW5L754S1"
  strategy="afterInteractive"
/>

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-4NWSL7S4S1"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-4NWSL7S4S1');
  `}
</Script>
      </body>
    </html>
  );
}

