import { prisma } from '../config/prisma.js';
import { sendEmail } from '../services/email.service.js';

export const sendAbandonedCartEmails = async (): Promise<void> => {
  const carts = await prisma.cart.findMany({
    where: {
      updatedAt: { lt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
      items: { some: {} }
    },
    include: { user: true }
  });

  await Promise.all(
    carts.map((cart: { user: { email: string } }) =>
      sendEmail(cart.user.email, 'You left items in your cart', '<p>Complete your order now and enjoy your products.</p>')
    )
  );
};
