# Nivas Interiors — Website

**"Designing Spaces. Creating Stories."**

A premium interior design website for Nivas Interiors, built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and a Node.js/Express backend.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 8, TypeScript |
| Styling | Tailwind CSS v4, Custom CSS |
| Animations | Framer Motion |
| Routing | React Router v7 |
| Forms | React Hook Form, Zod |
| Icons | Lucide React |
| SEO | React Helmet Async |
| Backend | Node.js, Express.js |

## Project Structure

```text
nivas-interiors/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── home/
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   └── AnimationComponents.tsx
│       ├── pages/
│       ├── layouts/
│       ├── data/
│       ├── hooks/
│       └── styles/
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── services/
│       ├── middleware/
│       └── routes/
└── README.md
```

## Website Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/projects` | Portfolio with category filters |
| `/projects/:id` | Individual Project Details |
| `/gallery` | Image Gallery with Lightbox |
| `/process` | Design Process |
| `/testimonials` | Client Testimonials |
| `/contact` | Contact and Enquiry Form |

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/bushrashaikh2806-arch/nivas-interiors.git
cd nivas-interiors
```

### 2. Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the local development URL shown in your terminal, usually:

`http://localhost:5173`

### 3. Run the Backend

Open another terminal:

```bash
cd backend
npm install
npm run dev
```

The backend runs at:

`http://localhost:3001`

## Environment Variables

If the backend requires environment variables, create a `.env` file inside the `backend` folder.

Example:

```env
PORT=3001
FRONTEND_URL=http://localhost:5173
```

Never commit private API keys, passwords or `.env` files to GitHub.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Backend health check |
| `POST` | `/api/enquiries` | Submit a customer enquiry |

## Customising Website Content

Website content is maintained in:

`frontend/src/data/siteData.ts`

You can update:

- `SITE_CONFIG` — Business name, contact details and social links.
- `SERVICES` — Service descriptions and images.
- `PROJECTS` — Portfolio projects and gallery images.
- `TESTIMONIALS` — Client reviews, with permission.
- `FAQS` — Frequently asked questions.

## Production Build

To create a production build of the frontend:

```bash
cd frontend
npm install
npm run build
```

The production-ready files are generated in the `frontend/dist/` folder.

## Deployment

- **Frontend:** Vercel or Netlify
- **Backend:** Render, Railway or another Node.js-compatible hosting platform.

Configure the required environment variables and production API URL in your hosting platforms.

## Brand Colour Palette

| Token | Hex Code | Usage |
|---|---|---|
| Warm Ivory | `#F7F4EE` | Primary background |
| Soft Beige | `#E9E1D5` | Secondary background |
| Sandstone | `#C8B69E` | Accents and labels |
| Walnut Brown | `#80664F` | Primary buttons |
| Deep Charcoal | `#292824` | Text and footer |
| Warm Grey | `#777168` | Secondary text |

---

© 2026 Nivas Interiors. All Rights Reserved.