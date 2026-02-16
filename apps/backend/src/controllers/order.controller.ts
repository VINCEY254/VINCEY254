import { Request, Response } from 'express';
import { prisma } from '../config/prisma.js';
import { calculateTax, createStripeIntent } from '../services/payment.service.js';

export const checkout = async (req: Request, res: Response): Promise<void> => {
  const { items, currency = 'usd', countryCode = 'US', paymentMethod = 'stripe' } = req.body;
  const subtotal = items.reduce((sum: number, item: { quantity: number; price: number }) => sum + item.quantity * item.price, 0);
  const tax = calculateTax(subtotal, countryCode);
  const total = subtotal + tax;

  const order = await prisma.order.create({
    data: {
      userId: req.user!.id,
      subtotal,
      tax,
      total,
      status: 'PENDING',
      paymentMethod,
      currency: currency.toUpperCase()
    }
  });

  if (paymentMethod === 'stripe') {
    const clientSecret = await createStripeIntent(Math.round(total * 100), currency);
    res.status(201).json({ order, clientSecret });
    return;
  }

  res.status(201).json({ order });
};

export const orderHistory = async (req: Request, res: Response): Promise<void> => {
  const orders = await prisma.order.findMany({ where: { userId: req.user!.id }, orderBy: { createdAt: 'desc' } });
  res.json(orders);
};
