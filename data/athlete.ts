/**
 * Athlete-supplied competition record and site content.
 * Planned events remain explicitly unconfirmed until verified.
 */
export const SITE_URL = "https://kickboxer-harsh.online";

export const athlete = {
  name: "Harsh Bharti",
  headline: "Indian Competitive Kickboxer",
  region: "Himachal Pradesh, India",
  discipline: "Full Contact Kickboxing",
  email: "kickboxerharsh@gmail.com",
  phone: "+91 9816875780",
  whatsapp: "https://wa.me/919816875780",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/harsh_bharti5" },
    { label: "Facebook", href: "https://www.facebook.com/share/1Dw6ZKqKyE/" },
    { label: "X", href: "https://x.com/Harsh_bharti5" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-bharti-931b31251" },
  ],
} as const;

export type ResultKind = "gold" | "silver" | "bronze" | "placed" | "participant";

export interface CompetitionRecord {
  year: number;
  headline: string;
  kind: ResultKind;
  event: string;
  location: string;
  category?: string;
  date?: string;
}

/** Newest first. Records and qualifiers supplied by the athlete. */
export const competitionRecords: CompetitionRecord[] = [
  {
    year: 2026,
    headline: "5th Place",
    kind: "placed",
    event: "National Kickboxing Championship — Seniors & Masters",
    location: "Indore, Madhya Pradesh",
    category: "−54 kg Full Contact",
    date: "8–12 September",
  },
  {
    year: 2025,
    headline: "Silver Medal",
    kind: "silver",
    event: "Senior National Kickboxing Championship",
    location: "Raipur",
  },
  {
    year: 2025,
    headline: "Participant",
    kind: "participant",
    event: "Kickboxing Inter-University Championship",
    location: "Swami Vivekanand Subharti University, Meerut",
    date: "12–16 March",
  },
  {
    year: 2024,
    headline: "Bronze Medal",
    kind: "bronze",
    event: "National Kickboxing Championship",
    location: "Siliguri",
  },
  {
    year: 2023,
    headline: "Silver Medal",
    kind: "silver",
    event: "National Kickboxing Championship",
    location: "Ranchi",
  },
  {
    year: 2022,
    headline: "Two Gold Medals",
    kind: "gold",
    event: "WAKO India Open National Tournament",
    location: "New Delhi",
  },
  {
    year: 2018,
    headline: "Participant",
    kind: "participant",
    event: "Junior National Kickboxing Championship",
    location: "Shoolini University, Solan, Himachal Pradesh",
  },
];

export const PLANNED_NOTE =
  "Planned goal. Dates and participation are unconfirmed until officially verified.";

export interface PlannedGoal {
  name: string;
  status: "Planned goal";
}

/** Goals only: dates and participation have not been confirmed. */
export const plannedGoals2027: PlannedGoal[] = [
  { name: "India Open 2027", status: "Planned goal" },
  { name: "Italy World Cup", status: "Planned goal" },
  { name: "Thailand World Cup", status: "Planned goal" },
  { name: "Uzbekistan World Cup", status: "Planned goal" },
  { name: "Senior World Championship", status: "Planned goal" },
];

export const sponsorPackages = [
  {
    tier: "Bronze",
    name: "Support Partner",
    perks: ["Website logo", "Social media mention", "Appreciation certificate", "Event recognition"],
  },
  {
    tier: "Silver",
    name: "Official Partner",
    perks: ["Everything in Bronze", "Jersey logo", "Media mentions", "Event photos", "Brand promotion"],
  },
  {
    tier: "Gold",
    name: "Premium Partner",
    perks: [
      "Everything in Silver",
      "Training gear branding",
      "Promotional videos",
      "Campaign collaboration",
      "Social campaigns",
      "Priority exposure",
    ],
  },
  {
    tier: "Title",
    name: "Exclusive Partner",
    perks: [
      "Everything included",
      "Front jersey branding",
      "International exposure",
      "Press conference branding",
      "Exclusive campaigns",
      "Long-term partnership",
      "Highest brand visibility",
    ],
  },
] as const;

export const downloads = {
  cv: "/downloads/Harsh-Bharti-CV.pdf",
  athleteProfile: "/media/Harsh-Bharti-Athlete-Profile.pdf",
  sponsorshipProposal: "/downloads/sponsorship-proposal.pdf",
} as const;
