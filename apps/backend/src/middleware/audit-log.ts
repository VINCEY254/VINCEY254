import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger.js';

export const auditLog = (req: Request, _res: Response, next: NextFunction): void => {
  logger.info('audit', {
    method: req.method,
    path: req.path,
    ip: req.ip,
    userAgent: req.headers['user-agent']
  });
  next();
};
