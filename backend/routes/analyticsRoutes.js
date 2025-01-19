import express from 'express';
import {
    getDashboardAnalytics,
    getProjectAnalytics,
    getTechnicianAnalytics,
    getInventoryAnalytics,
    getTaskAnalytics,
} from '../controllers/analyticsController.js';

const router = express.Router();

router.get('/dashboard', getDashboardAnalytics);
router.get('/project/:id', getProjectAnalytics);
router.get('/tasks', getTaskAnalytics);
router.get('/technicians', getTechnicianAnalytics);

export default router;