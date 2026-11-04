# Nivas Interiors — Website

> **"Designing Spaces. Creating Stories."**

A premium, production-quality interior design website for Nivas Interiors — built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and an Express/Supabase backend.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 8, TypeScript |
| Styling | Tailwind CSS v4, Custom CSS design system |
| Animations | Framer Motion |
| Routing | React Router v7 |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| SEO | React Helmet Async |
| Backend | Node.js, Express.js |
| Database | Supabase (PostgreSQL) |
| Rate Limiting | express-rate-limit |

---

## Project Structure

```
nivas-interiors/
├── frontend/                  # React + Vite app
│   └── src/
│       ├── components/
│       │   ├── home/          # Home page sections
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   └── AnimationComponents.tsx
│       ├── pages/             # All 9 pages
│       ├── layouts/           # MainLayout (Navbar + Footer wrapper)
│       ├── data/              # siteData.ts — all content
│       ├── hooks/             # useScrollAnimation.ts
│       └── styles/            # globals.css — design system
├── backend/                   # Express API
│   └── src/
│       ├── config/supabase.js
│       ├── controllers/
│       ├── services/
│       ├── middleware/
│       └── routes/
└── README.md
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Home (Hero, About, Services, Projects, Why Us, Philosophy, Process, Testimonials, FAQ, CTA) |
| `/about` | About Us |
| `/services` | All 8 Services |
| `/projects` | Portfolio with category filters |
| `/projects/:id` | Individual Project Detail |
| `/gallery` | Masonry gallery with lightbox |
| `/process` | Our 4-step design process |
| `/testimonials` | Client testimonials grid |
| `/contact` | Contact + Enquiry form |

---

## Quick Start

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

Opens at: **http://localhost:5173**

### 2. Backend

```bash
cd backend
cp .env.example .env
# Fill in your Supabase credentials in .env
npm install
npm run dev
```

API runs at: **http://localhost:3001**

---

## Supabase Setup

### Step 1 — Create Project
1. Go to [supabase.com](https://supabase.com) → New Project
2. Copy your **Project URL** and **service_role key** (Settings → API)

### Step 2 — Create the enquiries table

Run this SQL in the Supabase SQL Editor:

```sql
CREATE TABLE enquiries (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name     TEXT NOT NULL,
  phone         TEXT NOT NULL,
  email         TEXT NOT NULL,
  service_required TEXT NOT NULL,
  property_type TEXT NOT NULL,
  budget        TEXT NOT NULL,
  consultation_date DATE,
  project_description TEXT NOT NULL,
  status        TEXT DEFAULT 'new' NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Row-level security (optional but recommended)
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
```

### Step 3 — Configure backend .env

```env
PORT=3001
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
FRONTEND_URL=http://localhost:5173
```

> ⚠️ **Never commit your `.env` file.** The service role key has full database access.

---

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `PORT` | Server port (default: 3001) |
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) |
| `FRONTEND_URL` | Frontend URL for CORS (production domain) |

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server health check |
| `POST` | `/api/enquiries` | Submit a new enquiry |

### POST /api/enquiries — Request Body

```json
{
  "full_name": "string (required)",
  "phone": "string — 10-digit Indian mobile (required)",
  "email": "string (required)",
  "service_required": "Living Room | Bedroom | Kitchen | Wardrobe | Complete Home | Office | Other",
  "property_type": "Apartment | Independent House | Villa | Office | Commercial Space | Other",
  "budget": "Under ₹2 Lakhs | ₹2–5 Lakhs | ₹5–10 Lakhs | ₹10–20 Lakhs | Above ₹20 Lakhs | Not Decided",
  "consultation_date": "YYYY-MM-DD (optional)",
  "project_description": "string, min 10 chars (required)"
}
```

---

## Customising Content

All site content lives in one file: [`frontend/src/data/siteData.ts`](frontend/src/data/siteData.ts)

Update these exports to reflect real business information:
- `SITE_CONFIG` — name, phone, email, address, social links
- `SERVICES` — service descriptions and images
- `PROJECTS` — portfolio projects and gallery images
- `TESTIMONIALS` — client reviews (with client permission only)
- `FAQS` — frequently asked questions

---

## Production Deployment

### Frontend (Vercel / Netlify)
```bash
cd frontend
npm run build
# Deploy the dist/ folder
```

Set `VITE_API_URL` if your API is on a different domain.

### Backend (Railway / Render / VPS)
```bash
cd backend
npm start
```

Set all environment variables in your hosting platform.

---

## Brand Colour Palette

| Token | Hex | Usage |
|---|---|---|
| Warm Ivory | `#F7F4EE` | Primary background |
| Soft Beige | `#E9E1D5` | Secondary background |
| Sandstone | `#C8B69E` | Accents, labels |
| Walnut Brown | `#80664F` | Primary buttons |
| Deep Charcoal | `#292824` | Text, footer |
| Warm Grey | `#777168` | Secondary text |

---

© 2026 Nivas Interiors. All Rights Reserved.
