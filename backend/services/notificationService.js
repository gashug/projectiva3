import Notification from '../models/Notification.js';

class NotificationService {
  static async getAllNotifications() {
    try {
      const notifications = await Notification.findAll();
      return notifications;
    } catch (error) {
      throw new Error('Failed to fetch notifications.');
    }
  }

  static async getNotificationById(id) {
    try {
      const notification = await Notification.findById(id);
      if (!notification) {
        throw new Error('Notification not found.');
      }
      return notification;
    } catch (error) {
      throw new Error('Failed to fetch notification.');
    }
  }

  static async getNotificationsByUserId(userId) {
    try {
      const notifications = await Notification.findByUserId(userId);
      return notifications;
    } catch (error) {
      throw new Error('Failed to fetch notifications by user ID.');
    }
  }

  static async createNotification(notificationData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const notification = await Notification.create(notificationData);
      return notification;
    } catch (error) {
      throw new Error('Failed to create notification.');
    }
  }

  static async updateNotification(id, notificationData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const notification = await Notification.update(id, notificationData);
      if (!notification) {
        throw new Error('Notification not found.');
      }
      return notification;
    } catch (error) {
      throw new Error('Failed to update notification.');
    }
  }

  static async deleteNotification(id) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const isDeleted = await Notification.delete(id);
      if (!isDeleted) {
        throw new Error('Notification not found.');
      }
      return true;
    } catch (error) {
      throw new Error('Failed to delete notification.');
    }
  }
}

export default NotificationService;