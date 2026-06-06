import SectionHeading from './SectionHeading';
import { contact } from '@/data/site';
import { MessageCircle, Mail, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="container-page py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Booking, sponsorships, and media inquiries."
        subtitle="Connect through WhatsApp, email, or social links. You can replace the placeholders later with real contact details."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass rounded-[2rem] p-8">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-gold/30"
          >
            <div className="flex items-center gap-4">
              <MessageCircle className="h-6 w-6 text-gold" />
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/45">WhatsApp</p>
                <p className="font-semibold text-white">Book or inquire instantly</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-white/70" />
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="mt-4 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-redbrand/30"
          >
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-redbrand" />
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/45">Email</p>
                <p className="font-semibold text-white">{contact.email}</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-white/70" />
          </a>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              ['Instagram', contact.instagram, Instagram],
              ['YouTube', contact.youtube, Youtube],
            ].map(([label, href, Icon]: any) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1"
              >
                <Icon className="h-6 w-6 text-gold" />
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/45">{label}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="glass rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-gold/80">Booking Form</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <input placeholder="Your Name" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/30" />
            <input placeholder="Email / Phone" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/30" />
            <input placeholder="Event / Sponsor Name" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/30 sm:col-span-2" />
            <textarea placeholder="Your message" rows={6} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-white/30 sm:col-span-2" />
            <button className="sm:col-span-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.01]">
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
