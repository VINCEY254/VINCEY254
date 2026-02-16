import { Request, Response } from 'express';
import { prisma } from '../config/prisma.js';
import { getAiRecommendations } from '../services/recommendation.service.js';

export const listProducts = async (req: Request, res: Response): Promise<void> => {
  const { search, category, minPrice, maxPrice } = req.query;
  const products = await prisma.product.findMany({
    where: {
      name: search ? { contains: String(search), mode: 'insensitive' } : undefined,
      category: category ? { slug: String(category) } : undefined,
      price: {
        gte: minPrice ? Number(minPrice) : undefined,
        lte: maxPrice ? Number(maxPrice) : undefined
      }
    },
    include: { variants: true, reviews: true }
  });
  res.json(products);
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const product = await prisma.product.create({ data: req.body });
  res.status(201).json(product);
};

export const recommendations = async (req: Request, res: Response): Promise<void> => {
  const ids = await getAiRecommendations(req.body.productIds ?? [], req.body.preferences ?? []);
  const products = await prisma.product.findMany({ where: { id: { in: ids } } });
  res.json(products);
};
