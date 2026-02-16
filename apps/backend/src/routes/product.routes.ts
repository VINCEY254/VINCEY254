import { Router } from 'express';
import { createProduct, listProducts, recommendations } from '../controllers/product.controller.js';
import { authorize, requireAuth } from '../middleware/auth.js';

const router = Router();
router.get('/', listProducts);
router.post('/', requireAuth, authorize('ADMIN', 'VENDOR'), createProduct);
router.post('/recommendations', recommendations);

export default router;
