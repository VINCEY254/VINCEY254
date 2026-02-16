# API Documentation (v1)

Base URL: `/api/v1`

## Authentication
- `POST /auth/register` - register user.
- `POST /auth/login` - issue access & refresh JWT.
- `POST /auth/reset-password` - password recovery email.

## Products
- `GET /products?search=&category=&minPrice=&maxPrice=` - search/filter products.
- `POST /products` (ADMIN|VENDOR) - create product.
- `POST /products/recommendations` - AI recommendations.

## Orders
- `POST /orders/checkout` - secure checkout (Stripe/PayPal/COD).
- `GET /orders/history` - order history.

## Admin
- `GET /admin/analytics/sales` - sales report.
- `POST /admin/orders/:id/refund` - refund order.

## Support
- `POST /support/chatbot` - customer chatbot response.
