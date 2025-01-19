import pool from '../db/db.js'; // Import the database connection pool

class Client {
  // Static method to find all clients
  static async findAll() {
    try {
      const query = `
        SELECT *
        FROM clients
        ORDER BY created_at DESC;
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching clients:', error);
      throw error;
    }
  }

  // Static method to find a client by ID
  static async findById(id) {
    try {
      const query = `
        SELECT *
        FROM clients
        WHERE id = $1;
      `;
      const result = await pool.query(query, [id]);
      return result.rows[0]; // Return the first row (client) or undefined if not found
    } catch (error) {
      console.error('Error fetching client by ID:', error);
      throw error;
    }
  }

  // Static method to create a new client
  static async create(clientData) {
    try {
      const { name, industry, contact_info, location, notes } = clientData;

      const query = `
        INSERT INTO clients (name, industry, contact_info, location, notes)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;

      const result = await pool.query(query, [
        name,
        industry,
        contact_info,
        location,
        notes,
      ]);

      return result.rows[0]; // Return the newly created client
    } catch (error) {
      console.error('Error creating client:', error);
      throw error;
    }
  }

  // Static method to update a client
  static async update(id, clientData) {
    try {
      const { name, industry, contact_info, location, notes } = clientData;

      const query = `
        UPDATE clients
        SET name = $1, industry = $2, contact_info = $3, location = $4, notes = $5, updated_at = CURRENT_TIMESTAMP
        WHERE id = $6
        RETURNING *;
      `;

      const result = await pool.query(query, [
        name,
        industry,
        contact_info,
        location,
        notes,
        id,
      ]);

      return result.rows[0]; // Return the updated client
    } catch (error) {
      console.error('Error updating client:', error);
      throw error;
    }
  }

  // Static method to delete a client
  static async delete(id) {
    try {
      const query = `
        DELETE FROM clients
        WHERE id = $1;
      `;
      await pool.query(query, [id]);
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error('Error deleting client:', error);
      throw error;
    }
  }
}

export default Client; // Export the Client model for use in other modules