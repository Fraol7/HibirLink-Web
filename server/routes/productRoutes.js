import { Router } from 'express';
import {create, getProduct, updateProduct, deleteProduct, getFilteredProducts, getProductByName} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/')
    .post(protect, create);

router.route('/:id')
    .get(protect, getProduct)
    .patch(protect, updateProduct)
    .delete(protect, deleteProduct);

router.get('/', getFilteredProducts);
router.get('/search', getProductByName);

export default router;
