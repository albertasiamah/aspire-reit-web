# Aspire REIT — Next.js Website

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Import the repo in vercel.com → New Project
3. Vercel auto-detects Next.js — hit Deploy

## Project structure

```
app/
  layout.tsx          ← root layout: Header + Footer + Modal
  page.tsx            ← / (home)
  why-aspire/page.tsx
  aspire-greens/page.tsx
  about/page.tsx
  invest/page.tsx

components/
  Header/             ← sticky nav, active link state
  Footer/             ← links + contact info
  Modal/              ← waitlist form + success state

styles/
  globals.css         ← design tokens, resets, shared utilities, buttons

public/assets/        ← logo files + property photo
```
