import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger.js';

export const notFound = (_req: Request, res: Response): void => {
  res.status(404).json({ message: 'Resource not found' });
};

export const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction): void => {
  logger.error(error.message, error.stack);
  res.status(500).json({ message: 'Unexpected server error' });
};
