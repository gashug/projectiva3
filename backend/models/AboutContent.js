import pool from '../db/db.js'; // Import the database connection pool

class About {
  // Static method to get the about content
  static async getAboutContent() {
    try {
      // For simplicity, let's assume you have a single row in a table called 'about'
      // that stores your about content. You might need to adjust this if you have a
      // different structure.
      const query = `
        SELECT *
        FROM about
        LIMIT 1; 
      `;
      const result = await pool.query(query);
      return result.rows[0]; // Return the about content
    } catch (error) {
      console.error('Error fetching about content:', error);
      throw error;
    }
  }

  // Static method to update the about content
  static async updateAboutContent(content) {
    try {
      // Again, assuming a simple table structure for the 'about' content.
      const query = `
        UPDATE about
        SET content = $1, updated_at = CURRENT_TIMESTAMP
        RETURNING *; 
      `;
      const result = await pool.query(query, [content]);
      return result.rows[0]; // Return the updated about content
    } catch (error) {
      console.error('Error updating about content:', error);
      throw error;
    }
  }
}

export default About;