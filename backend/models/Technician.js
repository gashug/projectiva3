import pool from "../db/db.js"; // Import the pool object from the db connection pool

class Technician {
    // Static method to find all technicians
    static async findAll() {
        try {
            const query = `
                SELECT * FROM technicians 
                ORDER BY created_at DESC;
            `;
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            console.error('Error fetching technicians:', error);
            throw error;
        }
    }

    // Static method to find a technician by id
    static async findById(id) {
        try {
            const query = `
                SELECT * FROM technicians 
                WHERE id = $1;
            `;
            const result = await pool.query(query, [id]);
            return result.rows[0]; // Return the first row (technician) or undefined if no technician was found
        } catch (error) {
            console.error('Error fetching technician by ID:', error);
            throw error;
        }
    }

    // Static method to find all technicians for a project
    static async findByProjectId(project_id) {
        try {
            const query = `
                SELECT * FROM technicians 
                WHERE project_id = $1 
                ORDER BY created_at DESC;
            `;
            const result = await pool.query(query, [project_id]);
            return result.rows;
        } catch (error) {
            console.error('Error fetching technicians by project ID:', error);
            throw error;
        }
    }

    // Static method to create a new technician
  static async create(technicianData) {
    try {
      const { name, role, availability, skills, contact_details } = technicianData;

      const query = `
        INSERT INTO technicians (name, role, availability, skills, contact_details)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;

      const result = await pool.query(query, [
        name,
        role,
        availability,
        skills,
        contact_details,
      ]);

      return result.rows[0]; // Return the newly created technician
    } catch (error) {
      console.error('Error creating technician:', error);
      throw error;
    }
  }

  // Static method to update a technician
  static async update(id, technicianData) {
    try {
      const { name, role, availability, skills, contact_details } = technicianData;

      const query = `
        UPDATE technicians
        SET name = $1, role = $2, availability = $3, skills = $4, contact_details = $5, updated_at = CURRENT_TIMESTAMP
        WHERE id = $6
        RETURNING *;
      `;

      const result = await pool.query(query, [
        name,
        role,
        availability,
        skills,
        contact_details,
        id,
      ]);

      return result.rows[0]; // Return the updated technician
    } catch (error) {
      console.error('Error updating technician:', error);
      throw error;
    }
  }

    // Static method to delete a technician
    static async delete(id) {
        try {
            const query = `
                DELETE FROM technicians 
                WHERE id = $1;
            `;

            await pool.query(query, [id]);
            return true; // Return true if the technician is successfully deleted
        } catch (error) {
            console.error('Error deleting technician:', error);
            throw error;
        }
    }
};

export default Technician;  // Export the Technician class for use in other modules