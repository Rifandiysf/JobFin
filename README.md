<div align="center">

<img src="public/jobfin.svg" alt="JobFin logo" width="72" />

# JobFin

**Track every job application, and see how far each office really is from home.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-radix--nova-000000)](https://ui.shadcn.com)

</div>

---

## About

Job hunting shouldn't mean losing track of where you applied, or realizing too late that the office is two hours from home. **JobFin** brings your applications, commute distances, and progress into one clear view, so you can stay organized and focus on opportunities that fit both your career and your everyday life.

This repository contains the **frontend** (single-page app). It talks to a separate REST API, which is configured through an environment variable (see [Environment Variables](#environment-variables)).

<!--
  Add screenshots here, e.g.
  ![Dashboard](docs/screenshots/dashboard.png)
  ![Route map](docs/screenshots/route-map.png)
-->

## Features

- **Authentication**: email and password sign-up and login, plus **Login with Google** (OAuth). Protected routes for signed-in users, guest-only routes for login and sign-up.
- **Application tracker**: full CRUD for job applications (company, position, status, applied date, company address, notes).
- **Status pipeline**: `Applied` → `Interview` → `Offer` → `Accepted` / `Rejected`, with color-coded badges.
- **Search, filter and pagination**: debounced search, filter by status, server-side pagination.
- **Dashboard**: total applications with month-over-month trend, average distance to workplace, most common status, applications-by-status bar chart, and a monthly trend line chart.
- **Route map (beta)**: for each application, an estimated route from your home to the company on an interactive map (MapLibre GL), with home and company markers.
- **Account settings**: update your home address (used for distance and route calculation) and change your password.
- **Light and dark theme**: saved to your profile and applied on load.
- **Responsive UI** with a collapsible sidebar, drawers and toast notifications.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev), [React Router 7](https://reactrouter.com) |
| Build tool | [Vite 8](https://vite.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com), [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) |
| UI components | [shadcn/ui](https://ui.shadcn.com) (radix-nova style) on [Radix UI](https://www.radix-ui.com), [Vaul](https://vaul.emilkowal.ski), [Sonner](https://sonner.emilkowal.ski) |
| Icons | [Lucide](https://lucide.dev) |
| Data and tables | [Axios](https://axios-http.com), [TanStack Table](https://tanstack.com/table), [Zod](https://zod.dev) |
| Charts | [Recharts](https://recharts.org) |
| Maps | [MapLibre GL](https://maplibre.org) (via the [mapcn](https://mapcn.dev) component registry) |
| Fonts | [Satoshi](https://www.fontshare.com/fonts/satoshi), [Manrope](https://fontsource.org/fonts/manrope) |
| Linting | ESLint 10 with React Hooks and React Refresh plugins |

## Getting Started

### Prerequisites

- **Node.js** 20.19+ (or 22.12+)
- **npm**
- A running instance of the JobFin backend API

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Rifandiysf/JobFin.git
cd JobFin

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env

# 4. Start the dev server
npm run dev
```

The app will be available at the URL printed by Vite (by default `http://localhost:5173`).

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

| Variable | Description | Default |
| --- | --- | --- |
| `VITE_API_URL` | Base URL of the JobFin REST API | `http://localhost:5000/api/v1` |

> **Note:** "Login with Google" redirects to `${VITE_API_URL}/auth/google`, so set `VITE_API_URL` explicitly if you use Google sign-in.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
JobFin/
├── public/                  # Static assets (fonts, images, videos, logo)
├── src/
│   ├── components/
│   │   ├── account/         # Profile, home address, change password
│   │   ├── application/     # Job form, delete dialog, route map
│   │   ├── common/          # Sidebar, header, auth forms, route guards
│   │   ├── dashboard/       # Summary card, empty state
│   │   ├── home/            # Landing page sections
│   │   ├── layout/          # App and settings layouts
│   │   └── ui/              # shadcn/ui components
│   ├── constants/           # Status options, colors, navigation data
│   ├── context/             # AuthContext and AuthProvider
│   ├── hooks/               # use-auth, use-debounce, use-mobile
│   ├── lib/
│   │   ├── service/         # API modules (auth, jobs, dashboard, users, setting)
│   │   ├── axiosInstance.js # Axios instance with auth interceptor
│   │   └── utils.js
│   ├── pages/               # Route-level pages
│   ├── App.jsx              # Router setup
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind and theme tokens
├── components.json          # shadcn/ui configuration
├── vite.config.js           # Vite config (React, Tailwind, "@" alias)
└── .env.example
```

The `@` import alias points to `src/` (for example `@/components/ui/button`).

## Author

**Rifandi**, [@Rifandiysf](https://github.com/Rifandiysf)
