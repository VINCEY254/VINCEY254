# Architecture Overview

## Layers
- **Presentation:** Next.js App Router + Tailwind + Redux.
- **API:** Express REST API with modular routes/controllers/services.
- **Data:** PostgreSQL with Prisma ORM.
- **Infra:** Docker Compose, Nginx reverse proxy, Redis cache.

## Scalability Design
- Stateless API pods for horizontal scaling.
- Redis for cache/session/rate-limit storage extension.
- Vendor model for marketplace/multi-vendor use cases.
- Service abstraction for event-driven transition (orders, payments, notifications).

## Security Controls
- JWT + RBAC authorization.
- CSRF protection for cookie-based interactions.
- Input validation via Zod.
- Password hashing with bcrypt.
- Security headers + rate limiting.
