/**
 * Single source of truth for the athlete profile, CV, sponsorship and
 * 2027 goals pages.
 *
 * RULE: only facts supplied by the athlete are listed here. Do not add a
 * date of birth, medal totals, dates or participation for 2027 events
 * until they are officially verified.
 */

export const SITE_URL = "https://kickboxer-harsh.online";

export const athlete = {
  name: "Harsh Bharti",
  headline: "Indian Full Contact Kickboxer",
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
  /** Short result line, e.g. "National Silver Medal". */
  headline: string;
  kind: ResultKind;
  /** Event name, only where the athlete supplied one. */
  event?: string;
  location: string;
  category?: string;
}

/** Newest first. Exactly the records supplied by the athlete. */
export const competitionRecords: CompetitionRecord[] = [
  {
    year: 2026,
    headline: "Fifth Place",
    kind: "placed",
    event: "Senior National Kickboxing Championship",
    location: "Indore, Madhya Pradesh",
    category: "-54 kg Full Contact",
  },
  {
    year: 2025,
    headline: "Senior National Silver Medal",
    kind: "silver",
    location: "Raipur",
  },
  {
    year: 2025,
    headline: "Participant",
    kind: "participant",
    event: "Inter-University Kickboxing Championship",
    location: "Subharti University, Meerut",
  },
  {
    year: 2024,
    headline: "National Bronze Medal",
    kind: "bronze",
    location: "Siliguri",
  },
  {
    year: 2023,
    headline: "National Silver Medal",
    kind: "silver",
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
    location: "Shoolini University, Solan",
  },
];

export const PLANNED_NOTE =
  "Planned goal. Dates and participation are unconfirmed until officially verified.";

export interface PlannedGoal {
  name: string;
  status: "Planned goal";
}

/** The five 2027 goals. No dates, no confirmed participation. */
export const plannedGoals2027: PlannedGoal[] = [
  { name: "India Open 2027", status: "Planned goal" },
  { name: "Italy World Cup", status: "Planned goal" },
  { name: "Thailand World Cup", status: "Planned goal" },
  { name: "Uzbekistan World Cup", status: "Planned goal" },
  { name: "Senior World Championship", status: "Planned goal" },
];

/** Package wording is carried over from the existing /sponsors page. */
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
  /** Path the live site already links to (currently a 404). */
  athleteProfile: "/media/Harsh-Bharti-Athlete-Profile.pdf",
  /** Path the live /sponsors page already links to (currently a 404). */
  sponsorshipProposal: "/downloads/sponsorship-proposal.pdf",
} as const;
