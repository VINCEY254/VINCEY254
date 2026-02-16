import { describe, expect, it } from 'vitest';
import { calculateTax } from '../src/services/payment.service.js';

describe('calculateTax', () => {
  it('calculates by country code', () => {
    expect(calculateTax(100, 'US')).toBeCloseTo(7, 5);
    expect(calculateTax(100, 'KE')).toBeCloseTo(16, 5);
  });
});
