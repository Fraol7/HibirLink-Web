import { Router } from 'express';
import { createCartItem, getCartItemsByUserId, updateCartItem, deleteCart, getCartSummary} from '../controllers/cartController.js';

const router = Router();

router.post('/cart', createCartItem);

router.get('/cart/:userId', getCartItemsByUserId);

router.patch('/cart/:id', updateCartItem);

router.delete('/cart/:id', deleteCart);

router.get('/cart/summary/:userId', getCartSummary);

export default router;
