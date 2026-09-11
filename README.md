# Marketing Couple

Next.js marketing site for **marketing.couple** — Instagram-style layout, burgundy + gold brand system.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel (free)

1. Push this repo to GitHub.
2. Import the project on [vercel.com](https://vercel.com).
3. Deploy — Hobby plan is free for this site (root directory is the project root).
4. Add your custom domain in Vercel → Project → Settings → Domains.

## Edit content

Update copy, stats, work items, and links in `src/data/site.ts`.
Replace sample images later with your own assets in `public/`.

## Contact form email (Resend)

Gmail SMTP is unreliable on Vercel. This project uses [Resend](https://resend.com).

1. Create a free account at [resend.com](https://resend.com)
2. Create an API key
3. In **Vercel → Settings → Environment Variables (Production)** add:

```bash
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO=contact@marketingcouple.in,souravkumar4297@gmail.com
```

4. Optional later: verify `marketingcouple.in` in Resend, then add:

```bash
RESEND_FROM=Marketing Couple <contact@marketingcouple.in>
```

Until the domain is verified, Resend uses `onboarding@resend.dev` as sender (testing).

5. Redeploy Vercel after saving env vars.

Each address in `CONTACT_TO` gets a **separate** email, so recipients cannot see each other.

You can remove old `SMTP_*` variables from Vercel.
