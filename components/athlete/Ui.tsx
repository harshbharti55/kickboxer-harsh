import type { ReactNode } from "react";
import { PLANNED_NOTE, plannedGoals2027, competitionRecords } from "../../data/athlete";
import type { ResultKind } from "../../data/athlete";

/* Gold used across the new pages. Adjust here if your site's gold differs. */
export const GOLD = "#D4AF37";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-black px-4 pb-24 pt-28 text-neutral-200 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-[#D4AF37]/30 pb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
        {title}
      </h1>
      {intro ? <p className="mt-5 max-w-2xl text-base text-neutral-400 sm:text-lg">{intro}</p> : null}
      {children ? <div className="mt-6 flex flex-wrap gap-3">{children}</div> : null}
    </header>
  );
}

export function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-14">
      <h2 className="border-l-4 border-[#D4AF37] pl-4 text-2xl font-bold uppercase tracking-wide text-white">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function GoldButton({
  href,
  children,
  download,
  external,
}: {
  href: string;
  children: ReactNode;
  download?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      download={download ? true : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-md bg-[#D4AF37] px-5 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-[#e6c24f] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      {children}
    </a>
  );
}

export function OutlineButton({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-md border border-[#D4AF37] px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      {children}
    </a>
  );
}

const kindLabel: Record<ResultKind, string> = {
  gold: "Gold",
  silver: "Silver",
  bronze: "Bronze",
  placed: "5th place",
  participant: "Participant",
};

export function ResultBadge({ kind }: { kind: ResultKind }) {
  const strong = kind === "gold" || kind === "silver" || kind === "bronze";
  return (
    <span
      className={
        "inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider " +
        (strong
          ? "bg-[#D4AF37] text-black"
          : "border border-[#D4AF37]/60 text-[#D4AF37]")
      }
    >
      {kindLabel[kind]}
    </span>
  );
}

/** Timeline of the athlete's supplied competition records. */
export function RecordsList() {
  return (
    <ol className="space-y-4">
      {competitionRecords.map((r) => (
        <li
          key={`${r.year}-${r.headline}-${r.location}`}
          className="grid gap-3 rounded-lg border border-neutral-800 bg-neutral-950 p-5 sm:grid-cols-[5rem_1fr_auto] sm:items-center"
        >
          <span className="text-2xl font-black text-[#D4AF37]">{r.year}</span>
          <div>
            <p className="font-semibold text-white">{r.headline}</p>
            {r.event ? <p className="text-sm text-neutral-300">{r.event}</p> : null}
            <p className="text-sm text-neutral-500">
              {r.location}
              {r.category ? ` \u00b7 ${r.category}` : ""}
            </p>
          </div>
          <ResultBadge kind={r.kind} />
        </li>
      ))}
    </ol>
  );
}

/** The five 2027 planned goals. Never shows dates or confirmed participation. */
export function PlannedGoalsList() {
  return (
    <div>
      <p className="mb-5 rounded-md border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-4 text-sm text-[#e6c24f]">
        {PLANNED_NOTE}
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {plannedGoals2027.map((g) => (
          <li key={g.name} className="rounded-lg border border-neutral-800 bg-neutral-950 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              2027 &middot; {g.status}
            </p>
            <p className="mt-2 text-lg font-bold text-white">{g.name}</p>
            <p className="mt-1 text-sm text-neutral-500">Date: to be confirmed</p>
            <p className="text-sm text-neutral-500">Participation: unconfirmed</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
