# Athlete site upgrade: apply guide

This patch only ADDS files. It does not edit or delete anything that exists, so production behaviour is unchanged until you merge.

## Apply on a separate branch

```bash
git checkout main && git pull
git checkout -b feature/athlete-upgrade

# from the folder where you unzipped/downloaded "patch":
cp -r patch/data patch/components patch/app patch/public patch/tools .

npm install
npm run build        # must pass before you push
npm run dev          # check the pages below locally

git add data components app public tools
git commit -m "Add athlete profile, CV, sponsorship, 2027 goals and PDFs"
git push -u origin feature/athlete-upgrade
```

Vercel builds every non-production branch automatically. Open the preview URL from the Vercel dashboard (Deployments, branch `feature/athlete-upgrade`) or from the GitHub PR. Open a Pull Request and review it there. Do not merge until you approve.

## Files added

| Path | Purpose |
|---|---|
| `data/athlete.ts` | Single source of truth: only your supplied records, the five 2027 planned goals, package wording copied from the existing /sponsors page |
| `app/athlete-profile/page.tsx` | /athlete-profile |
| `app/cv/page.tsx` | /cv with PDF download |
| `app/sponsorship/page.tsx` | /sponsorship with packages and inquiry form |
| `app/calendar/2027/page.tsx` | /calendar/2027, the 2027 goals calendar (existing /calendar untouched) |
| `components/athlete/Ui.tsx` | Shared black-and-gold components |
| `components/athlete/SponsorInquiryForm.tsx` | Form: opens email app to kickboxerharsh@gmail.com, or WhatsApp. No backend, no paid service, no secrets |
| `public/downloads/Harsh-Bharti-CV.pdf` | The CV (1 page) |
| `public/media/Harsh-Bharti-Athlete-Profile.pdf` | Fixes the existing 404 on "Download Profile" / "Download Media Kit" |
| `public/downloads/sponsorship-proposal.pdf` | Fixes the existing 404 on /sponsors "Download Proposal" |
| `tools/build_pdfs.py` | Regenerates the PDFs if a record changes |

## What to check on the preview

1. `/athlete-profile`, `/cv`, `/sponsorship`, `/calendar/2027` load and look right on a phone.
2. The CV, profile and proposal PDFs download and open.
3. On the homepage, "Download Profile" and "Download Media Kit" now work; on `/sponsors`, "Download Proposal" works.
4. Existing pages still work: `/`, `/about`, `/achievements`, `/gallery`, `/calendar`, `/media`, `/sponsors`, `/contact`, `/articles`.
5. The sponsor form: submit with empty fields (should show an error), then with valid data (should open your email app / WhatsApp).
6. All five 2027 events show "Planned goal", "Date: to be confirmed", "Participation: unconfirmed".

## Known limits

- **Not build-tested against your real project.** I type-checked in strict mode and rendered the four pages to HTML in an offline sandbox, but I could not run `next build` on your repo. Run it locally; if it fails, send me the error.
- **Tailwind:** the new files use Tailwind classes. If `tailwind.config.ts` `content` doesn't include `./app/**` and `./components/**`, add them or the styling won't generate.
- **Gold colour:** `#D4AF37` is used throughout. If your site uses a different gold, change it in one place (`GOLD` in `Ui.tsx`) and search/replace `#D4AF37`.
- **Navbar and footer overlap:** pages use `pt-28` to clear a fixed navbar. Adjust if yours is a different height.
- **Email form:** `mailto:` depends on the visitor having an email app. The WhatsApp button and plain email address are shown as fallbacks. A server-side option needs your approval first.

## Not done yet (needs your existing files)

I could not see `app/layout.tsx`, the Navbar/Footer, the homepage, the gallery or `data/site.ts`, so these are NOT changed:

- Adding Athlete Profile, CV and Sponsorship links to the nav and footer
- Pointing homepage buttons at /cv and /sponsorship
- Gallery alt text and image `sizes` for mobile
- Per-page metadata and canonical fix on existing pages (all currently canonical to the homepage)
- `/sponsors` redirect: left as is, because I can't verify nothing depends on it
- Stale/inconsistent existing content: "WAKO World Cup, October 2026" shown as upcoming; medal counts (5+ / 10+ / 18); timeline entries not in your records

Send those files and I'll prepare exact edits as a second commit.
