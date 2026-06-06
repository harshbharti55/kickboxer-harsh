import { boxer } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/45">
          © {new Date().getFullYear()} {boxer.name} — Athlete Portfolio.
        </p>
        <p className="text-sm text-white/45">Built for sponsors, media, and fans.</p>
      </div>
    </footer>
  );
}
