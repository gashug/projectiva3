import pool from '../db/db.js'; // Import the database connection pool

class LandingContent {
  // Static method to find all landing page content
  static async findAll() {
    try {
      const query = `
        SELECT *
        FROM landing_content
        ORDER BY updated_at DESC;
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching landing page content:', error);
      throw error;
    }
  }

  // Static method to find landing page content by ID
  static async findById(id) {
    try {
      const query = `
        SELECT *
        FROM landing_content
        WHERE id = $1;
      `;
      const result = await pool.query(query, [id]);
      return result.rows[0]; // Return the first row (content) or undefined if not found
    } catch (error) {
      console.error('Error fetching landing page content by ID:', error);
      throw error;
    }
  }

  // Static method to find landing page content by section name
  static async findBySectionName(sectionName) {
    try {
      const query = `
        SELECT *
        FROM landing_content
        WHERE section_name = $1;
      `;
      const result = await pool.query(query, [sectionName]);
      return result.rows;
    } catch (error) {
      console.error('Error fetching landing page content by section name:', error);
      throw error;
    }
  }

  // Static method to create new landing page content
  static async create(contentData) {
    try {
      const { section_name, content } = contentData;

      const query = `
        INSERT INTO landing_content (section_name, content)
        VALUES ($1, $2)
        RETURNING *;
      `;

      const result = await pool.query(query, [section_name, content]);

      return result.rows[0]; // Return the newly created content
    } catch (error) {
      console.error('Error creating landing page content:', error);
      throw error;
    }
  }

  // Static method to update landing page content
  static async update(id, contentData) {
    try {
      const { section_name, content } = contentData;

      const query = `
        UPDATE landing_content
        SET section_name = $1, content = $2, updated_at = CURRENT_TIMESTAMP
        WHERE id = $3
        RETURNING *;
      `;

      const result = await pool.query(query, [section_name, content, id]);

      return result.rows[0]; // Return the updated content
    } catch (error) {
      console.error('Error updating landing page content:', error);
      throw error;
    }
  }

  // Static method to delete landing page content
  static async delete(id) {
    try {
      const query = `
        DELETE FROM landing_content
        WHERE id = $1;
      `;
      await pool.query(query, [id]);
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error('Error deleting landing page content:', error);
      throw error;
    }
  }
}

export default LandingContent;