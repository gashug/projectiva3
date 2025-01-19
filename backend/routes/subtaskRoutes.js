import express from 'express';
import {
    getAllSubtasksByTaskId,
  getSubtaskById,
  createSubtask,
  updateSubtask,
  deleteSubtask,
} from '../controllers/subTaskController.js';

const router = express.Router();

router.get('/task/:taskId', getAllSubtasksByTaskId);
router.get('/:id', getSubtaskById);
router.post('/', createSubtask);
router.put('/:id', updateSubtask);
router.delete('/:id', deleteSubtask);

export default router;