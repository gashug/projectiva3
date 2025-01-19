import express from 'express';
import {
  getAllTasks,
  getTaskById,
  getTasksByProjectId,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.get('/project/:projectId', getTasksByProjectId);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;