import { Router } from 'express';
import { chat } from '../controllers/support.controller.js';

const router = Router();
router.post('/chatbot', chat);

export default router;
