# PhishGuard

A phishing-awareness interface built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## What works

- Browse sample email reports on the dashboard.
- Open individual report pages.
- Paste text into a local keyword checker and see which configured phrases occur.
- Switch between light and dark themes.

The checker is a deterministic demonstration. There is no trained model, inbox integration, sender verification, URL scanning, or email-blocking service. A low keyword score does not establish that a message is safe.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. No credentials are required.

```bash
npm run typecheck
npm run build
```

The project uses Next.js static export; the build produces `out/`. Serve that folder with a static host. `next start` is not the preview command for a static export.

## Deployment

Import into Vercel using the Next.js preset. The export configuration is in `next.config.js`; report paths are generated from `data/mockReports.ts`.

## Structure

- `app/test/page.tsx`: keyword demonstration.
- `app/dashboard/page.tsx`: sample report dashboard.
- `app/report/[id]/page.tsx`: exported report pages.
- `data/mockReports.ts`: example data.

## Next steps

Add evaluation cases, improve accessibility, and design a secure backend before considering any real email-analysis integration. Theme and implementation notes are in `docs/`.
