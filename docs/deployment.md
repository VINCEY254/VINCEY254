# Deployment Guide

## Local Docker
1. Copy `.env.example` to `.env` and adjust secrets.
2. Run `docker compose up --build`.
3. Access frontend at `http://localhost:3000`, backend at `http://localhost:5000/health`.

## Production (AWS ECS/Fargate)
- Push images to ECR.
- Configure RDS PostgreSQL and Elasticache Redis.
- Deploy frontend container behind ALB + CloudFront CDN.
- Enforce HTTPS via ACM certificate and redirect HTTP->HTTPS.
- Use AWS Secrets Manager for env vars.

## Vercel + API Host Alternative
- Deploy `apps/frontend` to Vercel.
- Deploy `apps/backend` to Render/Fly/AWS App Runner.
- Set `NEXT_PUBLIC_API_URL` to hosted API endpoint.
