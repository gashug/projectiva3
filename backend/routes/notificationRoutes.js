import express from 'express';
import {
  getAllNotifications,
  getNotificationById,
  getNotificationsByUserId,
  createNotification,
  updateNotification,
  deleteNotification,
} from '../controllers/notificationController.js';

const router = express.Router();

router.get('/', getAllNotifications);
router.get('/:id', getNotificationById);
router.get('/user/:userId', getNotificationsByUserId);
router.post('/', createNotification);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);

export default router;