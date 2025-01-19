import express from 'express';
import { getAboutContent, updateAboutContent } from '../controllers/aboutController.js';

const router = express.Router();

router.get('/', getAboutContent);
router.put('/', updateAboutContent);

export default router;