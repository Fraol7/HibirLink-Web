import { Router } from 'express';
import { createBillingAddress, getBillingAddress, updateBillingAddress, deleteBillingAddress, fetchCartSummary } from '../controllers/billingAddressController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', protect, createBillingAddress);
router.get('/', protect, getBillingAddress);
router.patch('/:id', protect, updateBillingAddress);
router.delete('/:id', protect, deleteBillingAddress);
router.get('/summary', protect, fetchCartSummary)

export default router;
