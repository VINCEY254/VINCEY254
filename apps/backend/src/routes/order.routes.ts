import { Router } from 'express';
import { checkout, orderHistory } from '../controllers/order.controller.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
router.post('/checkout', requireAuth, checkout);
router.get('/history', requireAuth, orderHistory);

export default router;
