# CreatorsMela – Payments & Payouts Screen

A clean, simple payments dashboard for creators to track earnings, payouts, and invoices.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Tech stack

- React 18 + Vite
- Tailwind CSS
- Mock data (no real API or banking details)

## Sections

- **Earnings summary** — total earned, pending payout, last paid, active campaigns
- **Filters** — by campaign and month (wired to transaction history)
- **Payouts** — pending and completed with status badges
- **Transaction history** — per-campaign earnings, filterable
- **Payout method** — display only, no real banking data stored
- **Invoices and statements** — monthly totals with mock PDF download

## Design decisions

- No fancy charts or animations — clarity first
- Status uses color only where it means something (green = paid, yellow = pending, red = failed)
- Filters are connected to transaction history only (payouts are always shown in full)
- All numbers formatted in Indian number system (₹1,24,500)

## What to add with more time

- Real API integration
- Actual PDF generation for invoices
- Push notifications for payout status changes
- CSV export for transaction history
- Chart showing monthly earnings trend
