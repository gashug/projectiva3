import pool from '../db/db.js';

class User {
  // Static method to create a new user (when they sign up in Clerk)
  static async create(clerkUserId) {
    try {
      const query = `
        INSERT INTO users (clerk_user_id)
        VALUES ($1)
        RETURNING *;
      `;
      const result = await pool.query(query, [clerkUserId]);
      return result.rows[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // Static method to find a user by Clerk User ID
  static async findByClerkUserId(clerkUserId) {
    try {
      const query = `
        SELECT *
        FROM users
        WHERE clerk_user_id = $1;
      `;
      const result = await pool.query(query, [clerkUserId]);
      return result.rows[0];
    } catch (error) {
      console.error('Error fetching user by Clerk User ID:', error);
      throw error;
    }
  }
  // Static method to find a user by  ID
  static async findById(id) {
    try {
      const query = `
        SELECT *
        FROM users
        WHERE id = $1;
      `;
      const result = await pool.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw error;
    }
  }

  // Add other methods as needed for your application (e.g., updating user profile data)
}

export default User;