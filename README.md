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

## Contact form SMTP

1. Copy `.env.example` to `.env.local`.
2. Fill in your SMTP values:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM="Marketing Couple <your-email@gmail.com>"
CONTACT_TO=contact@marketingcouple.in,souravkumar4297@gmail.com
```

3. Restart `npm run dev`.
4. On Vercel, add the same variables in **Project → Settings → Environment Variables**.

Each address in `CONTACT_TO` gets a **separate** email, so recipients cannot see each other.

For Gmail, use an [App Password](https://myaccount.google.com/apppasswords), not your normal password.