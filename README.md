# Hello Nalitabari

A local information portal for Nalitabari Upazila built with Next.js. The application brings together community directories, public service listings, user authentication, admin workflows, and AI assistance in one place.

## Overview

Hello Nalitabari helps residents discover nearby services and institutions, including:

- hospitals, clinics, and pharmacies
- schools, colleges, and universities
- government offices, unions, and public offices
- businesses, local places, and community resources
- news, notices, and emergency information

The app also supports authenticated user actions such as registration, login, password recovery, submissions, and an admin dashboard for reviewing content and user activity.

## Features

- Bangla/English interface toggle
- Light/dark theme support
- Responsive pages for schools, colleges, hospitals, doctors, businesses, and places
- Searchable public listings backed by MongoDB
- User authentication with NextAuth
- Email-powered password reset and contact flows using Resend
- AI chat integration for local information lookup and answers
- Admin management screens for users and submissions
- Tailwind + shadcn-style UI components

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- MongoDB
- NextAuth
- Resend
- OpenAI / AI SDK
- Cloudinary

## Project Structure

```bash
app/
  about/
  admin/
  ai/
  api/
  auth/
  businesses/
  colleges/
  community/
  contact/
  dashboard/
  directory/
  doctors/
  education/
  emergency/
  events/
  government/
  health/
  hospitals/
  news/
  notices/
  pharmacies/
  places/
  schools/
  submit/
  transport/
  unions/
components/
  admin/
  auth/
  data/
  doctors/
  Home/
  layout/
  ui/
lib/
  ai/
  auth-utils.ts
  google-news.ts
  mongodb.ts
  route-data.ts
  route-data-keys.ts
  utils.ts
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

## Prerequisites

Before running the project locally, make sure you have:

- Node.js 20+
- npm
- A MongoDB connection string
- An OpenAI API key for AI features
- A Resend API key for email-based flows
- Optional Cloudinary credentials for submission image uploads

## Environment Variables

Create a `.env.local` file in the project root with values like the following:

```bash
MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>/..."
AUTH_SECRET="your-auth-secret"
AUTH_URL="http://localhost:3000"
NEXTAUTH_URL="http://localhost:3000"
RESEND_API_KEY="re_..."
OPENAI_API_KEY="sk-..."
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

### Notes

- `MONGODB_URI` is required for data access.
- `AUTH_SECRET` is required by NextAuth.
- `AUTH_URL` / `NEXTAUTH_URL` are used for auth callback generation in local development.
- `RESEND_API_KEY` is required for password reset and contact email flows.
- `OPENAI_API_KEY` is required for the AI route.
- `CLOUDINARY_*` parameters enable image upload support for submissions.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Then open the app in your browser:

```text
http://localhost:3000
```

## Database and Seed Data

This project expects route and listing data to exist in MongoDB. The repository includes a seed script and JSON snapshot data for initializing core directory records.

### Seed route data

```bash
npm run seed:route-data
```

### Dry run preview

```bash
npm run seed:route-data -- --dry-run
```

This previews what would be inserted without writing to the database.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run seed:route-data
```

## Deployment Notes

- This app is designed for deployment on platforms like Vercel.
- Ensure all environment variables are configured in the hosting environment.
- For production, use secure values for `AUTH_SECRET`, API keys, and database credentials.

## License

This project does not currently include a license file. If you plan to distribute or deploy it publicly, add a license before release.
