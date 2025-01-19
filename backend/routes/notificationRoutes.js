import NotificationService from '../services/notificationService.js';

export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await NotificationService.getAllNotifications();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNotificationById = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await NotificationService.getNotificationById(id);
    res.status(200).json(notification);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getNotificationsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const notifications = await NotificationService.getNotificationsByUserId(userId);
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNotification = async (req, res) => {
  try {
    const notificationData = req.body;
    const newNotification = await NotificationService.createNotification(notificationData);
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const notificationData = req.body;
    const updatedNotification = await NotificationService.updateNotification(
      id,
      notificationData
    );
    res.status(200).json(updatedNotification);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    await NotificationService.deleteNotification(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};