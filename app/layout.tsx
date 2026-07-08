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
  manifest: "/manifest.webmanifest",

 title: {
  default: 'Harsh Bharti | Indian Kickboxer',
  template: '%s | Harsh Bharti',
},

description:
  'Official website of Harsh Bharti, an Indian kickboxer, national medalist, international competitor, and BPES student. Explore competition results, achievements, media coverage, and athlete updates.',

keywords: [
  'Harsh Bharti',
  'Harsh Bharti Kickboxer',
  'Indian Kickboxer',
  'Kickboxer Harsh',
  'Kickboxing Athlete',
  'Combat Sports',
  'WAKO India',
  'National Kickboxing Medalist',
  'Professional Kickboxer',
  'Official Website'
],

  authors: [
    {
      name: 'Harsh Bharti',
      url: 'https://kickboxer-harsh.online',
    },
  ],

  creator: 'Harsh Bharti',

  openGraph: {
    title: 'Harsh Bharti | Kickboxer',
    description:
      'Indian kickboxer, national medalist, international competitor, and combat sports athlete.',
    url: 'https://kickboxer-harsh.online',
    siteName: 'Harsh Bharti',
    locale: 'en_US',
    type: 'profile',
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
    title: 'Harsh Bharti | Kickboxer',
    description:
      'Indian kickboxer, national medalist, international competitor.',
    images: ['/profile.jpg'],
  },

  alternates: {
    canonical: 'https://kickboxer-harsh.online',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://kickboxer-harsh.online/#person',

  name: 'Harsh Bharti',
  alternateName: 'Kickboxer Harsh',

  birthDate: '2006-07-24',

  url: 'https://kickboxer-harsh.online',

  image: 'https://kickboxer-harsh.online/profile.jpg',

  jobTitle: 'Competitive Kickboxer',

  description:
    'Official website of Harsh Bharti, an Indian kickboxer, national medalist, international competitor, and BPES student.',

  gender: 'Male',

  nationality: {
    '@type': 'Country',
    name: 'India',
  },

  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Himachal Pradesh',
    addressCountry: 'India',
  },

  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kickboxer-harsh.online',
  },

  hasOccupation: {
    '@type': 'Occupation',
    name: 'Competitive Kickboxer',
  },

  identifier: {
  '@type': 'PropertyValue',
  propertyID: 'Wikidata',
  value: 'Q138682935',
  }
  {
    '@type': 'PropertyValue',
    propertyID: 'YouTube Channel',
    value: '@harsh_bharti_kickboxer'
}
},

  knowsLanguage: [
    'English',
    'Hindi',
  ],

  knowsAbout: [
    'Kickboxing',
    'Combat Sports',
    'Full Contact Kickboxing',
    'Sports Marketing',
    'Athlete Sponsorship',
    'Physical Education',
    'Wushu',
  ],

  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Lamrin Tech Skills University',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Punjab',
      addressCountry: 'India',
    },
  },

  award: [
    'Gold Medal - Junior National Kickboxing Championship 2022',
    'Silver Medal - National Kickboxing Championship 2023',
    'Bronze Medal - National Kickboxing Championship 2024',
    'Silver Medal - Senior National Kickboxing Championship 2025',
  ],

  sameAs: [
    'https://www.wikidata.org/wiki/Q138682935',
    'https://www.instagram.com/harsh_bharti5',
    'https://youtube.com/@harsh_bharti_kickboxer',
    'https://www.linkedin.com/in/harsh-bharti-931b31251',
    'https://x.com/Harsh_bharti5',
    'https://www.facebook.com/share/1ERg1t4UHH/',
    'https://liquipedia.net/lab/Harsh_bharti',
    'https://sportsmatik.com/athlete/Harshbharti',
  ],

  subjectOf: [
  {
    '@type': 'NewsArticle',
    url: 'https://www.firstverdict.com/...'
  },
  {
    '@type': 'Article',
    url: 'https://www.sportanddev.org/...'
  }, 
],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 <body className={`${inter.variable} ${bebas.variable} font-sans antialiased bg-black`}>
  <TopNav />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
    }}
  />

  <main className="pt-20">
    {children}
  </main>

  <Footer />
</body>
    </html>
  );
}
