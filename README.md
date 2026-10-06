# Hello Nalitabari

Hello Nalitabari is a local information portal for Nalitabari Upazila. It combines public directory data, authentication, admin tools, email notifications, and an AI-powered assistant into a single Next.js application.

## Overview

The app helps residents discover local services and institutions such as:

- hospitals and clinics
- schools and colleges
- government offices and unions
- businesses and public places
- notices, news, and emergency information

It also includes user-authenticated flows for registration/login, password recovery, submissions, and a lightweight admin dashboard.

## Features

- Bilingual UI with Bangla/English switching
- Dark/light theme support
- Local directory pages for schools, colleges, hospitals, doctors, businesses, and places
- Searchable public listing data backed by MongoDB
- User authentication with email/mobile credentials
- Password reset and contact email actions via Resend
- AI chat endpoint for local data search and answer generation
- Admin views for managing users and submissions
- Responsive layout using Tailwind CSS and shadcn-style UI primitives

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- MongoDB
- NextAuth
- Resend
- AI SDK / OpenAI
- shadcn-style UI components

## Requirements

Before starting, make sure you have:

- Node.js 20+
- npm
- A MongoDB connection string
- An OpenAI API key if you want the AI chat route enabled
- A Resend API key if you want email features enabled

## Environment Variables

Create a `.env.local` file in the project root with values like:

```bash
MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>/..."
AUTH_SECRET="your-auth-secret"
AUTH_URL="http://localhost:3000"
RESEND_API_KEY="re_..."
OPENAI_API_KEY="sk-..."
```

Notes:

- `MONGODB_URI` is required for database access.
- `AUTH_SECRET` is required by NextAuth.
- `AUTH_URL` or `NEXTAUTH_URL` can be used for local auth callback URLs.
- `RESEND_API_KEY` is needed for password reset and contact email flows.
- `OPENAI_API_KEY` is needed for the AI chat API route.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Database Seed

The app expects route and listing records in the MongoDB database. The checked-in JSON snapshot is used to initialize missing data from the `routeData` collection in the `Nalitabari-portal` database.

Run the seed script:

```bash
npm run seed:route-data
```

Useful flag:

```bash
npm run seed:route-data -- --dry-run
```

This performs a no-write preview and helps confirm what would be inserted without changing the database.

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
  admin/
  api/
  auth/
  dashboard/
  ...
components/
  admin/
  auth/
  ui/
  ...
lib/
  ai/
  mongodb.ts
  route-data.ts
models/
providers/
public/
  colleges/
  doctors/
  hospitals/
  places/
  schools/
scripts/
  seed-route-data.mjs
types/
```

## Notes

- Public listing pages are backed by MongoDB data.
- The repository keeps static content and image assets in `public/` and data snapshots under `data/`.
- The app is designed for a local information portal and can be extended with additional admin workflows or data imports.

## License

This project does not currently include a license file. Add one before production deployment or public distribution if you need explicit open-source or commercial licensing.
