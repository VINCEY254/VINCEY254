import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export const hashPassword = (password: string): Promise<string> => bcrypt.hash(password, 12);
export const comparePassword = (password: string, hash: string): Promise<boolean> => bcrypt.compare(password, hash);

export const signAccessToken = (payload: Record<string, string>): string =>
  jwt.sign(payload, env.JWT_SECRET, { expiresIn: '15m' });

export const signRefreshToken = (payload: Record<string, string>): string =>
  jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
