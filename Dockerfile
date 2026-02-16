FROM node:20-alpine AS base
WORKDIR /app

FROM base AS backend
COPY apps/backend/package.json apps/backend/package-lock.json* ./apps/backend/
WORKDIR /app/apps/backend
RUN npm install
COPY apps/backend .
RUN npm run build
EXPOSE 5000
CMD ["npm", "run", "start"]

FROM base AS frontend
COPY apps/frontend/package.json apps/frontend/package-lock.json* ./apps/frontend/
WORKDIR /app/apps/frontend
RUN npm install
COPY apps/frontend .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
