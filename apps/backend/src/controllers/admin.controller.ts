import { Request, Response } from 'express';
import { prisma } from '../config/prisma.js';

export const salesAnalytics = async (_req: Request, res: Response): Promise<void> => {
  const [ordersCount, grossSales] = await Promise.all([
    prisma.order.count(),
    prisma.order.aggregate({ _sum: { total: true } })
  ]);

  res.json({ ordersCount, grossSales: grossSales._sum.total ?? 0 });
};

export const refundOrder = async (req: Request, res: Response): Promise<void> => {
  const updated = await prisma.order.update({
    where: { id: req.params.id },
    data: { status: 'REFUNDED' }
  });
  res.json(updated);
};
