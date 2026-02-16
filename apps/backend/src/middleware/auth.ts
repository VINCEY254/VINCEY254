import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    req.user = jwt.verify(token, env.JWT_SECRET) as Express.User;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export const authorize = (...roles: string[]) => (req: Request, res: Response, next: NextFunction): void => {
  const role = (req.user as { role?: string } | undefined)?.role;
  if (!role || !roles.includes(role)) {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }
  next();
};
