# Hello Nalitabari

A bilingual local information portal for Nalitabari Upazila, built with Next.js and Tailwind CSS. The landing page is designed to help residents quickly find services, institutions, and emergency information in both Bangla and English.

## Features

- Bangla and English language toggle
- Dark/light theme support
- Local government and service discovery UI
- Healthcare, education, government, and emergency category cards
- Responsive hero section for desktop and mobile
- Clean modern design with shadcn-style UI components

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- next-themes

## Getting Started

Install dependencies:

```bash
npm install
```

Configure `MONGODB_URI` in `.env.local`. Route listings are stored in the `routeData` collection in the `Nalitabari-portal` database. To initialize them from the checked-in snapshot, run:

```bash
npm run seed:route-data
```

The seed command inserts missing records and leaves existing MongoDB records unchanged. Use `npm run seed:route-data -- --dry-run` to inspect the import without writing to the database.

Run the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run seed:route-data
```

## Project Structure

```bash
app/
  Home/
    hero.tsx
  page.tsx
components/
  ui/
  language-toggle.tsx
  theme-provider.tsx
  theme-toggle.tsx
lib/
  utils.ts
```

## Notes

Public listing pages load their records from MongoDB. The JSON seed snapshot is retained for initializing a new database; images and static page copy remain in the repository.

## License

This project is currently unlicensed unless you add a license file for deployment or distribution.
