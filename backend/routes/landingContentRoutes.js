import express from 'express';
import {
  getAllLandingContent,
  getLandingContentById,
  getLandingContentBySectionName,
  createLandingContent,
  updateLandingContent,
  deleteLandingContent,
} from '../controllers/landingContentController.js';

const router = express.Router();

router.get('/', getAllLandingContent);
router.get('/:id', getLandingContentById);
router.get('/section/:sectionName', getLandingContentBySectionName);
router.post('/', createLandingContent);
router.put('/:id', updateLandingContent);
router.delete('/:id', deleteLandingContent);

export default router;