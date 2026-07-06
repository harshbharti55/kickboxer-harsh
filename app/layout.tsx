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
    default: 'Harsh Bharti | Kickboxer',
    template: '%s | Harsh Bharti',
  },

  description:
    'Harsh Bharti is an Indian kickboxer, national medalist, international competitor, and BPES student pursuing a career in professional combat sports.',

  keywords: [
    'Harsh Bharti',
    'Kickboxer Harsh',
    'Indian Kickboxer',
    'Kickboxing Athlete',
    'National Medalist',
    'Combat Sports',
    'WAKO India',
    'Professional Kickboxer',
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
    'Indian kickboxer, national medalist, international competitor, and BPES student pursuing a career in professional combat sports.',

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

  // Removed 'sport' to fix the validator warning shown in 78773.jpg
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
    'Gold Medal - Open International Kickboxing Championship 2023',
    'Silver Medal - Senior National Kickboxing Championship (Raipur)',
    'Bronze Medal - National Kickboxing Championship 2024',
    'Silver Medal - National Kickboxing Championship 2023',
    'Gold Medal - Junior National Kickboxing Championship 2022',
  ],

  sameAs: [
    'https://www.wikidata.org/wiki/Q138682935',
    'https://youtube.com/@kickboxerharsh',
    'https://www.instagram.com/harsh_bharti5',
    'https://x.com/Harsh_bharti5',
    'https://www.linkedin.com/in/harsh-bharti-931b31251',
    'https://www.facebook.com/share/197uuUAZuV/',
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
