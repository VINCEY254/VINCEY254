# Vincey Commerce - Production-Ready E-Commerce Platform

A full-stack e-commerce reference implementation with **Next.js frontend**, **Express API**, **PostgreSQL + Prisma**, **JWT security**, **admin/vendor dashboards**, **payments**, and **cloud deployment setup**.

## Monorepo Structure

```txt
.
├── apps/
│   ├── backend/
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   └── seed.ts
│   │   ├── src/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   └── jobs/
│   │   └── tests/
│   └── frontend/
│       ├── app/
│       ├── components/
│       └── store/
├── docs/
├── infra/nginx/
├── docker-compose.yml
├── Dockerfile
└── .github/workflows/ci.yml
```

## Features Included

### Customer Features
- JWT auth (register, login), password reset flow.
- Social login placeholders (Google/Facebook env + architecture).
- Profile-ready data model, wishlist, cart, reviews/ratings, order history/tracking.
- Product search/filtering.
- Email notification service (welcome, reset, abandoned cart).

### Product & Catalog
- Categories/subcategories.
- Variants (size/color/SKU/stock delta).
- Inventory fields and stock tracking.
- Coupons, featured products, related products.

### Payments
- Stripe payment intent integration.
- PayPal credentials + checkout method support.
- Cash-on-delivery support via payment method enum.
- Currency + tax calculation hooks.

### Admin + Vendor
- RBAC-protected admin analytics + refunds.
- Vendor role and vendor-product association.
- Dedicated frontend pages for admin and vendor dashboards.

### Security & Ops
- Helmet, CORS, rate limiting, CSRF middleware.
- Bcrypt password hashing.
- JWT authz middleware.
- Audit logging middleware.
- Dockerized services, Nginx reverse proxy, CI pipeline.

### Advanced Additions
- AI recommendation service placeholder.
- Chatbot support endpoint.
- Abandoned cart recovery job.
- Cloud deployment guide (AWS/Vercel style).
- SEO-ready Next.js app shell (metadata), image optimization, lazy loading via Next/Image.

## Setup

1. **Clone and configure env**
   ```bash
   cp .env.example .env
   ```
2. **Run with Docker**
   ```bash
   docker compose up --build
   ```
3. **Access**
   - Frontend: `http://localhost:3000`
   - Backend health: `http://localhost:5000/health`

## Backend Commands

```bash
cd apps/backend
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

## Frontend Commands

```bash
cd apps/frontend
npm install
npm run dev
```

## Key API Endpoints

See [docs/api.md](docs/api.md) for full list.

## Test Cases

- Unit test for tax calculation at `apps/backend/tests/payment.service.test.ts`.
- Extend with integration tests for auth/cart/checkout via supertest.

## Environment Variables

All required variables are in `.env.example`.

## Notes for Production Hardening

- Add Passport OAuth strategies and callback routes for Google/Facebook.
- Add webhook verification for Stripe/PayPal.
- Add queue (BullMQ) for emails and inventory sync.
- Add OpenTelemetry tracing and central log aggregation.
- Add Kubernetes manifests and service mesh if moving to microservices.
