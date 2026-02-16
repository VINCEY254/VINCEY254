import { Request, Response } from 'express';
import { prisma } from '../config/prisma.js';
import { comparePassword, hashPassword, signAccessToken, signRefreshToken } from '../services/auth.service.js';
import { sendEmail } from '../services/email.service.js';
import { loginSchema, registerSchema } from '../validators/auth.validator.js';

export const register = async (req: Request, res: Response): Promise<void> => {
  const body = registerSchema.parse(req.body);
  const existing = await prisma.user.findUnique({ where: { email: body.email } });
  if (existing) {
    res.status(409).json({ message: 'Email already exists' });
    return;
  }

  const user = await prisma.user.create({
    data: { email: body.email, passwordHash: await hashPassword(body.password), name: body.name }
  });

  await sendEmail(user.email, 'Welcome to Vincey Commerce', `<h1>Hello ${user.name}</h1><p>Your account is ready.</p>`);
  res.status(201).json({ message: 'Registered successfully' });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const body = loginSchema.parse(req.body);
  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (!user || !(await comparePassword(body.password, user.passwordHash))) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const payload = { id: user.id, role: user.role, email: user.email };
  res.json({ accessToken: signAccessToken(payload), refreshToken: signRefreshToken(payload) });
};

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;
  await sendEmail(email, 'Reset Password', '<p>Use reset link valid for 30 minutes.</p>');
  res.json({ message: 'Password reset email sent' });
};
