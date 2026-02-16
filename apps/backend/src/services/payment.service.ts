import Stripe from 'stripe';
import { env } from '../config/env.js';

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

export const createStripeIntent = async (amount: number, currency: string): Promise<string> => {
  const intent = await stripe.paymentIntents.create({ amount, currency, automatic_payment_methods: { enabled: true } });
  return intent.client_secret ?? '';
};

export const calculateTax = (subtotal: number, countryCode = 'US'): number => {
  const rates: Record<string, number> = { US: 0.07, UK: 0.2, KE: 0.16 };
  return subtotal * (rates[countryCode] ?? 0.1);
};
