"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { athlete, sponsorPackages } from "../../data/athlete";

/**
 * Sponsor inquiry form with NO backend and NO external service.
 * It validates the input, then opens the visitor's email app addressed to
 * the athlete (mailto:). The public contact method is email only.
 *
 * Limitation: this depends on the visitor having an email app configured.
 * A server-side option can be added later with the athlete's approval.
 */

interface FormState {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  interest: "Not sure yet",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildText(f: FormState): string {
  return [
    "Hello Harsh,",
    "",
    "I would like to discuss a sponsorship opportunity.",
    "",
    `Name: ${f.name.trim()}`,
    `Email: ${f.email.trim()}`,
    `Company / brand: ${f.company.trim() || "-"}`,
    `Package interest: ${f.interest}`,
    "",
    f.message.trim(),
  ].join("\n");
}

export default function SponsorInquiryForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [error, setError] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  const onChange =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      setError("");
    };

  function validate(): string {
    if (form.name.trim().length < 2) return "Please enter your name.";
    if (!EMAIL_RE.test(form.email.trim())) return "Please enter a valid email address.";
    if (form.message.trim().length < 10) return "Please write a short message (at least 10 characters).";
    return "";
  }

  function onEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }
    const subject = `Sponsorship inquiry from ${form.name.trim()}`;
    const href =
      `mailto:${athlete.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(buildText(form))}`;
    setSent(true);
    window.location.href = href;
  }

  const field =
    "mt-1 w-full rounded-md border border-neutral-700 bg-black px-3 py-3 text-base text-white placeholder-neutral-600 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]";
  const label = "block text-sm font-semibold text-neutral-300";

  return (
    <form
      onSubmit={onEmail}
      noValidate
      className="rounded-xl border border-[#D4AF37]/40 bg-neutral-950 p-6 sm:p-8"
      aria-labelledby="sponsor-form-title"
    >
      <h3 id="sponsor-form-title" className="text-xl font-bold uppercase tracking-wide text-white">
        Sponsor Inquiry
      </h3>
      <p className="mt-2 text-sm text-neutral-400">
        Tell me about your brand. Your message opens in your email app, addressed to {athlete.email}.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="si-name" className={label}>
            Your name
          </label>
          <input
            id="si-name"
            className={field}
            value={form.name}
            onChange={onChange("name")}
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label htmlFor="si-email" className={label}>
            Your email
          </label>
          <input
            id="si-email"
            type="email"
            className={field}
            value={form.email}
            onChange={onChange("email")}
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor="si-company" className={label}>
            Company or brand (optional)
          </label>
          <input
            id="si-company"
            className={field}
            value={form.company}
            onChange={onChange("company")}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="si-interest" className={label}>
            Package interest
          </label>
          <select
            id="si-interest"
            className={field}
            value={form.interest}
            onChange={onChange("interest")}
          >
            <option>Not sure yet</option>
            {sponsorPackages.map((p) => (
              <option key={p.tier}>{`${p.tier} - ${p.name}`}</option>
            ))}
            <option>Custom partnership</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="si-message" className={label}>
          Message
        </label>
        <textarea
          id="si-message"
          rows={5}
          className={field}
          value={form.message}
          onChange={onChange("message")}
          required
        />
      </div>

      <p role="alert" aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm text-red-400">
        {error}
      </p>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="rounded-md bg-[#D4AF37] px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-[#e6c24f] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Send by email
        </button>
      </div>

      {sent ? (
        <p className="mt-4 text-sm text-neutral-400" role="status">
          If nothing opened, email{" "}
          <a className="text-[#D4AF37] underline" href={`mailto:${athlete.email}`}>
            {athlete.email}
          </a>{" "}
          directly.
        </p>
      ) : null}
    </form>
  );
}
