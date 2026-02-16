import { Request, Response } from 'express';
import { respondToChat } from '../services/chatbot.service.js';

export const chat = (req: Request, res: Response): void => {
  res.json({ message: respondToChat(String(req.body.message ?? '')) });
};
