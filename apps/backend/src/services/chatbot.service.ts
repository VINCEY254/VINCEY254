const intents: Record<string, string> = {
  shipping: 'Standard shipping takes 3-5 business days. Express options are available at checkout.',
  refund: 'You can request a refund from your order history within 14 days of delivery.',
  default: 'I can help with shipping, refunds, product details, and payment questions.'
};

export const respondToChat = (message: string): string => {
  const normalized = message.toLowerCase();
  if (normalized.includes('ship')) return intents.shipping;
  if (normalized.includes('refund')) return intents.refund;
  return intents.default;
};
