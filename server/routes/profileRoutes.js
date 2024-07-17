import { Router } from 'express';
import {create, getProfile, updateProfile} from '../controllers/profileController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/')
    .post(protect, create)
    .get(protect, getProfile)
    .patch(protect, updateProfile);

export default router;
