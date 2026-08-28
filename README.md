# Tieto TV App

A TV series search and browsing app built with [Next.js](https://nextjs.org) and the [TVmaze API](https://www.tvmaze.com/api). Search for shows, browse what's popular, and explore detailed information about each series — all in a fast, responsive, and accessible interface.

## 🚀 Live demo

The app is deployed to Vercel: **[https://tieto-tv-app.vercel.app/](https://tieto-tv-app.vercel.app/)**

## ✨ Features

- **Search** — type a show name and press Enter (or hit the search button) to see matching results with poster, name, and air dates.
- **"What are people watching"** — a curated grid of popular shows, ranked by TVmaze's popularity metric (`weight`), each linking to its detail page.
- **Show detail page** — poster, title, and description, with tabs for:
  - **Cast** — actor photo, character name, and actor name.
  - **Seasons** — poster and description per season.
  - **Episodes** — image and description per episode.
  - Each listing links to its TVmaze page.
- **Slow-network detection** — a subtle, dismissible banner warns you when your connection is slow (using the Network Information API).
- **Responsive** — works on mobile and desktop.
- **Accessible** — semantic components, ARIA roles, and keyboard-friendly controls.

## 🧭 How to navigate

1. **Home (`/`)** — search for a show at the top, or browse the "What are people watching" grid below.
2. **Search** — press Enter (or the search icon) to expand results below the input, then click a result to open it.
3. **Show page (`/shows/[id]`)** — click any poster or title to see the detail view, then switch between the **Cast**, **Seasons**, and **Episodes** tabs.

## 🛠 Tech stack

- [Next.js](https://nextjs.org) (App Router) + [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Biome](https://biomejs.dev) for linting & formatting
- [Hugeicons](https://hugeicons.com) for icons
- [@uidotdev/usehooks](https://usehooks.com) for the network-state hook
- [TVmaze API](https://www.tvmaze.com/api) for show data

## 🚀 Getting started

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build for production

```bash
pnpm build
pnpm start
```

### Lint & format

```bash
pnpm lint
pnpm format
```

## 📝 Notes

The original assignment can be found in [`assignment.md`](./assignment.md).
