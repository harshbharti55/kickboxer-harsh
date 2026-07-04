import { boxer } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container-page py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          
          <div>
            <h3 className="text-lg font-semibold text-white">
              {boxer.name}
            </h3>
            <p className="text-sm text-white/50">
              Professional Athlete Portfolio
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} {boxer.name}. All Rights Reserved.
            </p>
            <p className="mt-1 text-sm text-white/40">
              Built for sponsors, media, and fans.
            </p>
          </div>

    </footer>
  );
}
