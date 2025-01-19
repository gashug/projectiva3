import pool from '../db/db.js'; // Import the database connection pool

class Notification {
  // Static method to find all notifications
  static async findAll() {
    try {
      const query = `
        SELECT *
        FROM notifications
        ORDER BY created_at DESC;
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw error;
    }
  }

  // Static method to find a notification by ID
  static async findById(id) {
    try {
      const query = `
        SELECT *
        FROM notifications
        WHERE id = $1;
      `;
      const result = await pool.query(query, [id]);
      return result.rows[0]; // Return the first row (notification) or undefined if not found
    } catch (error) {
      console.error('Error fetching notification by ID:', error);
      throw error;
    }
  }

    // Static method to find notifications by user ID
    static async findByUserId(userId) {
        try {
        const query = `
            SELECT *
            FROM notifications
            WHERE user_id = $1
            ORDER BY created_at DESC;
        `;
        const result = await pool.query(query, [userId]);
        return result.rows;
        } catch (error) {
        console.error('Error fetching notifications by user ID:', error);
        throw error;
        }
    }

  // Static method to create a new notification
  static async create(notificationData) {
    try {
      const { user_id, message, read = false } = notificationData;

      const query = `
        INSERT INTO notifications (user_id, message, read)
        VALUES ($1, $2, $3)
        RETURNING *;
      `;

      const result = await pool.query(query, [user_id, message, read]);

      return result.rows[0]; // Return the newly created notification
    } catch (error) {
      console.error('Error creating notification:', error);
      throw error;
    }
  }

  // Static method to update a notification
  static async update(id, notificationData) {
    try {
      const { user_id, message, read } = notificationData;

      const query = `
        UPDATE notifications
        SET user_id = $1, message = $2, read = $3, updated_at = CURRENT_TIMESTAMP
        WHERE id = $4
        RETURNING *;
      `;

      const result = await pool.query(query, [user_id, message, read, id]);

      return result.rows[0]; // Return the updated notification
    } catch (error) {
      console.error('Error updating notification:', error);
      throw error;
    }
  }

  // Static method to delete a notification
  static async delete(id) {
    try {
      const query = `
        DELETE FROM notifications
        WHERE id = $1;
      `;
      await pool.query(query, [id]);
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error('Error deleting notification:', error);
      throw error;
    }
  }
}

export default Notification;