import { Router } from 'express';
import { refundOrder, salesAnalytics } from '../controllers/admin.controller.js';
import { authorize, requireAuth } from '../middleware/auth.js';

const router = Router();
router.use(requireAuth, authorize('ADMIN'));
router.get('/analytics/sales', salesAnalytics);
router.post('/orders/:id/refund', refundOrder);

export default router;
