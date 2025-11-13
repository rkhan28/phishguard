# PhishGuard Frontend

PhishGuard is a next-generation AI-powered cybersecurity assistant for analyzing phishing and scam emails. This repository currently contains the frontend experience built with Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features
- Immersive hero section with animated particle background and live security stats
- Dashboard listing recent phishing analyses with color-coded risk indicators
- Detailed report view with risk scoring, red flags, and recommended actions
- Manual test area to simulate AI analysis against pasted email content
- Responsive layout with animated glassmorphism cards and dark/light themes

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to explore the interface.

### Bolt.new / Vercel Deployment
- Deploy directly on [Bolt.new](https://bolt.new) by importing this repository.
- For Vercel, click **New Project** and connect the repo; the default `npm run build` command works out of the box.
- Environment variables are not required yet—the dashboard is powered by mock data and placeholders. Backend endpoints will be introduced later.

## 🔌 Backend Integration Hooks
- Dashboard report list: replace the mock data in `app/dashboard/page.tsx` with a request to `/api/reports`.
- Manual test page: swap the timeout in `app/test/page.tsx` with a POST call to `/api/analyze`.
- Home page metrics: update the simulated counters in `app/page.tsx` with data from `/api/overview`.

## 🧪 Available Scripts
- `npm run dev` – Start the development server.
- `npm run build` – Create an optimized production build.
- `npm run lint` – Run ESLint with the Next.js config.

## 🗺️ Next Steps
Backend services (email ingestion, AI scoring, and outbound alerts) will be implemented in Python with Flask, then wired to these placeholder endpoints.
