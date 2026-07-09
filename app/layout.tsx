import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

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

  manifest: '/manifest.webmanifest',

  title: {
    default: 'Harsh Bharti | Indian Kickboxer',
    template: '%s | Harsh Bharti',
  },

  description:
    'Official website of Harsh Bharti, an Indian kickboxer, national medalist, international competitor, BPES student, and combat sports athlete from Himachal Pradesh, India.',

  keywords: [
    'Harsh Bharti',
    'Harsh Bharti Kickboxer',
    'Kickboxer Harsh',
    'Indian Kickboxer',
    'Kickboxing',
    'Combat Sports',
    'WAKO India',
    'Full Contact Kickboxing',
    'National Kickboxing Medalist',
    'International Kickboxer',
    'Athlete',
    'Sports',
    'BPES',
    'Himachal Pradesh',
    'Official Website',
    'Harsh Bharti Wiki',
    'Harsh Bharti Wikipedia',
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
    type: 'profile',
    locale: 'en_US',
    url: 'https://kickboxer-harsh.online',
    siteName: 'Harsh Bharti',

    title: 'Harsh Bharti | Indian Kickboxer',

    description:
      'Official website of Indian kickboxer Harsh Bharti featuring achievements, tournament results, media coverage, athlete profile, and latest updates.',

    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Harsh Bharti',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Harsh Bharti | Indian Kickboxer',

    description:
      'Official website of Indian kickboxer Harsh Bharti.',

    creator: '@Harsh_bharti5',

    images: ['/profile.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};


const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://kickboxer-harsh.online/#person",

  name: "Harsh Bharti",

  alternateName: [
    "Kickboxer Harsh",
    "Harsh Bharti Kickboxer"
  ],

  url: "https://kickboxer-harsh.online",

  image: "https://kickboxer-harsh.online/profile.jpg",

  description:
    "Harsh Bharti is an Indian kickboxer, national medalist, international competitor and BPES student from Himachal Pradesh, India.",

  birthDate: "2006-07-24",

  birthPlace: {
    "@type": "Place",
    name: "Shimla, Himachal Pradesh, India"
  },

  gender: "Male",

  nationality: {
    "@type": "Country",
    name: "India"
  },

  homeLocation: {
    "@type": "Place",
    name: "Shimla, Himachal Pradesh, India"
  },

  jobTitle: "Competitive Kickboxer",

  sport: "Kickboxing",

  hasOccupation: {
    "@type": "Occupation",
    name: "Competitive Kickboxer"
  },

  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Lamrin Tech Skills University"
  },

  knowsLanguage: [
    "English",
    "Hindi"
  ],

  knowsAbout: [
    "Kickboxing",
    "Combat Sports",
    "Full Contact Kickboxing",
    "Sports Marketing",
    "Athlete Sponsorship",
    "Physical Education",
    "Wushu"
  ],

  award: [
    "Gold Medal - Junior National Kickboxing Championship 2022",
    "Silver Medal - National Kickboxing Championship 2023",
    "Bronze Medal - National Kickboxing Championship 2024",
    "Silver Medal - Senior National Kickboxing Championship 2025"
  ],

  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "Wikidata",
      value: "Q138682935"
    }
  ],

  sameAs: [
    "https://www.wikidata.org/wiki/Q138682935",

    "https://www.instagram.com/harsh_bharti5",

    "https://youtube.com/@harsh_bharti_kickboxer",

    "https://www.linkedin.com/in/harsh-bharti-931b31251",

    "https://x.com/Harsh_bharti5",

    "https://www.facebook.com/share/1ERg1t4UHH/",

    "https://liquipedia.net/lab/Harsh_bharti",

    "https://sportsmatik.com/athlete/Harshbharti",

    "https://www.sportanddev.org/latest/news/blueprint-balancing-elite-training-higher-education",

    "https://hi.wikipedia.org/wiki/हर्ष_भारती",

    "https://mr.wikipedia.org/wiki/हर्ष_भारती",

    "https://te.wikipedia.org/wiki/హర్ష్_భారతి",

    "https://gu.wikipedia.org/wiki/હર્ષ_ભારતી",

    "https://bn.wikipedia.org/wiki/হর্ষ_ভারতী",

    "https://ta.wikipedia.org/wiki/ஹர்ஷ்_பாரதி",

    "https://ne.wikipedia.org/wiki/हर्ष_भारती"
  ],

  subjectOf: [
    {
      "@type": "NewsArticle",
      url: "https://www.firstverdict.com/harsh-bharti-won-gold-medal-in-junior-kick-boxing-competition"
    },
    {
      "@type": "Article",
      url: "https://www.sportanddev.org/latest/news/blueprint-balancing-elite-training-higher-education"
    }
  ],

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kickboxer-harsh.online"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": "https://kickboxer-harsh.online/#website",

  url: "https://kickboxer-harsh.online",

  name: "Harsh Bharti",

  description:
    "Official website of Indian Kickboxer Harsh Bharti.",

  inLanguage: "en",

  publisher: {
    "@id": "https://kickboxer-harsh.online/#person"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  "@id": "https://kickboxer-harsh.online/#organization",

  name: "Harsh Bharti",

  url: "https://kickboxer-harsh.online",

  logo: "https://kickboxer-harsh.online/profile.jpg",

  sameAs: [
    "https://www.instagram.com/harsh_bharti5",

    "https://youtube.com/@harsh_bharti_kickboxer",

    "https://x.com/Harsh_bharti5",

    "https://www.linkedin.com/in/harsh-bharti-931b31251",

    "https://www.facebook.com/share/1ERg1t4UHH/"
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
      </body>
    </html>
  );
}

