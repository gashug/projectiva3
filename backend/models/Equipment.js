import pool from "../db/db";

class Equipment {
    // Static method to find all equipment
    static async findAll() {
        try {
            const query = `
                SELECT * FROM equipment 
                ORDER BY created_at DESC;
            `;
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            console.error('Error fetching equipment:', error);
            throw error;
        }
    }

    // Static method to find equipment by id
    static async findById(id) {
        try {
            const query = `
                SELECT * FROM equipment 
                WHERE id = $1;
            `;
            const result = await pool.query(query, [id]);
            return result.rows[0]; // Return the first row (equipment) or undefined if no equipment was found
        } catch (error) {
            console.error('Error fetching equipment by ID:', error);
            throw error;
        }
    }

    // Static method to find all equipment for a project
    static async findByProjectId(project_id) {
        try {
            const query = `
                SELECT * FROM equipment 
                WHERE project_id = $1 
                ORDER BY created_at DESC;
            `;
            const result = await pool.query(query, [project_id]);
            return result.rows;
        } catch (error) {
            console.error('Error fetching equipment by project ID:', error);
            throw error;
        }
    }

    // Static method to create a new piece of equipment
  static async create(equipmentData) {
    try {
      const {
        name,
        manufacturer,
        model,
        serial_number,
        condition,
        quantity,
        assigned_to_project,
      } = equipmentData;

      const query = `
        INSERT INTO equipment (name, manufacturer, model, serial_number, condition, quantity, assigned_to_project)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `;

      const result = await pool.query(query, [
        name,
        manufacturer,
        model,
        serial_number,
        condition,
        quantity,
        assigned_to_project,
      ]);

      return result.rows[0]; // Return the newly created equipment
    } catch (error) {
      console.error('Error creating equipment:', error);
      throw error;
    }
  }

    // Static method to update equipment
    static async update(id, equipmentData) {
        try {
            const {
                name,
                manufacturer,
                model,
                serial_number,
                condition,
                quantity,
                assigned_to_project,
            } = equipmentData;
            
            const query = `
                UPDATE equipment
                SET name = $1,
                    manufacturer = $2,
                    model = $3,
                    serial_number = $4,
                    condition = $5,
                    quantity = $6,
                    assigned_to_project = $7
                WHERE id = $8
                RETURNING *;
            `;

            const result = await pool.query(query, [
                name,
                manufacturer,
                model,
                serial_number,
                condition,
                quantity,
                assigned_to_project,
                id,
            ]);

            return result.rows[0]; // Return the updated equipment
        } catch (error) {
            console.error('Error updating equipment:', error);
            throw error;
        }
    }

    // Static method to delete equipment
    static async delete(id) {
        try {
            const query = `
                DELETE FROM equipment
                WHERE id = $1;
            `;

            await pool.query(query, [id]);
            return true; // Return true if the equipment is successfully deleted
        } catch (error) {
            console.error('Error deleting equipment:', error);
            throw error;
        }
    }
};

export default Equipment; // Export the Equipment model for use in other modules