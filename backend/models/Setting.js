import pool from '../db/db.js'; // Import the database connection pool

class Setting {
  // Static method to find all settings
  static async findAll() {
    try {
      const query = `
        SELECT *
        FROM settings;
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching settings:', error);
      throw error;
    }
  }

  // Static method to find a setting by ID
  static async findById(id) {
    try {
      const query = `
        SELECT *
        FROM settings
        WHERE id = $1;
      `;
      const result = await pool.query(query, [id]);
      return result.rows[0]; // Return the first row (setting) or undefined if not found
    } catch (error) {
      console.error('Error fetching setting by ID:', error);
      throw error;
    }
  }

  // Static method to find a setting by name
  static async findByName(name) {
    try {
      const query = `
        SELECT *
        FROM settings
        WHERE name = $1;
      `;
      const result = await pool.query(query, [name]);
      return result.rows[0]; // Return the first row (setting) or undefined if not found
    } catch (error) {
      console.error('Error fetching setting by name:', error);
      throw error;
    }
  }

  // Static method to create a new setting
  static async create(settingData) {
    try {
      const { name, value, default_value, description } = settingData;

      const query = `
        INSERT INTO settings (name, value, default_value, description)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;

      const result = await pool.query(query, [name, value, default_value, description]);

      return result.rows[0]; // Return the newly created setting
    } catch (error) {
      console.error('Error creating setting:', error);
      throw error;
    }
  }

  // Static method to update a setting
  static async update(id, settingData) {
    try {
      const { name, value, default_value, description } = settingData;

      const query = `
        UPDATE settings
        SET name = $1, value = $2, default_value = $3, description = $4, updated_at = CURRENT_TIMESTAMP
        WHERE id = $5
        RETURNING *;
      `;
      const result = await pool.query(query, [name, value, default_value, description, id]);
      return result.rows[0]; // Return the updated setting
    } catch (error) {
      console.error('Error updating setting:', error);
      throw error;
    }
  }

  // Static method to delete a setting
  static async delete(id) {
    try {
      const query = `
        DELETE FROM settings
        WHERE id = $1;
      `;
      await pool.query(query, [id]);
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error('Error deleting setting:', error);
      throw error;
    }
  }
    // Static method to reset a setting to its default value
    static async resetToDefault(id) {
        try {
          const query = `
            UPDATE settings
            SET value = default_value
            WHERE id = $1
            RETURNING *;
          `;
          const result = await pool.query(query, [id]);
          return result.rows[0]; // Return the updated setting
        } catch (error) {
          console.error('Error resetting setting to default:', error);
          throw error;
        }
      }
    
      // Static method to reset all settings to their default values
      static async resetAllToDefault() {
        try {
          const query = `
            UPDATE settings
            SET value = default_value;
          `;
          await pool.query(query);
          return true; // Return true to indicate successful reset
        } catch (error) {
          console.error('Error resetting all settings to default:', error);
          throw error;
        }
      }
}

export default Setting;