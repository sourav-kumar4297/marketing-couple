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

## Contact form — Gmail SMTP

Add these in **Vercel → Settings → Environment Variables (Production)**:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=souravkumar4297@gmail.com
SMTP_PASS=your16charapppassword
CONTACT_TO=contact@marketingcouple.in,souravkumar4297@gmail.com
```

### Create Gmail App Password
1. Login to Gmail as `souravkumar4297@gmail.com`
2. Enable 2-Step Verification
3. Open https://myaccount.google.com/apppasswords
4. Create password for Mail → copy 16 characters (no spaces)
5. Paste into `SMTP_PASS` on Vercel
6. Redeploy

Each address in `CONTACT_TO` gets a separate email (recipients cannot see each other).
