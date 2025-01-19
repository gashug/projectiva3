import pool from "../db/db";

class Tool {
    // Static method to find all tools
    static async findAll() {
        try {
            const query = `
                SELECT * FROM tools 
                ORDER BY created_at DESC;
            `;
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            console.error('Error fetching tools:', error);
            throw error;
        }
    }

    // Static method to find a tool by id
    static async findById(id) {
        try {
            const query = `
                SELECT * FROM tools 
                WHERE id = $1;
            `;
            const result = await pool.query(query, [id]);
            return result.rows[0]; // Return the first row (tool) or undefined if no tool was found
        } catch (error) {
            console.error('Error fetching tool by ID:', error);
            throw error;
        }
    }

    // Static method to find all tools for a project
    static async findByProjectId(project_id) {
        try {
            const query = `
                SELECT * FROM tools 
                WHERE project_id = $1 
                ORDER BY created_at DESC;
            `;
            const result = await pool.query(query, [project_id]);
            return result.rows;
        } catch (error) {
            console.error('Error fetching tools by project ID:', error);
            throw error;
        }
    }

    // Static method to create a new tool
    static async create(toolData) {
        try {
            const {
                name,
                type,
                condition,
                purchase_date,
                assigned_to_project,
                assigned_to_technician,
              } = toolData;

            const query = `
                INSERT INTO tools (name, type, condition, purchase_date, assigned_to_project, assigned_to_technician)
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING *;
            `;

            const result = await pool.query(query, [
                name, 
                type, 
                condition, 
                purchase_date, 
                assigned_to_project, 
                assigned_to_technician
            ]);

            return result.rows[0]; // Return the newly created tool
        } catch (error) {
            console.error('Error creating tool:', error);
            throw error;
        }
    }

    // Static method to update a tool
    static async update(id, toolData) {
        try {
          const {
            name,
            type,
            condition,
            purchase_date,
            assigned_to_project,
            assigned_to_technician,
          } = toolData;
    
          const query = `
            UPDATE tools
            SET name = $1, type = $2, condition = $3, purchase_date = $4, assigned_to_project = $5, assigned_to_technician = $6, updated_at = CURRENT_TIMESTAMP
            WHERE id = $7
            RETURNING *;
          `;
    
          const result = await pool.query(query, [
            name,
            type,
            condition,
            purchase_date,
            assigned_to_project,
            assigned_to_technician,
            id,
          ]);
    
          return result.rows[0]; // Return the updated tool
        } catch (error) {
          console.error('Error updating tool:', error);
          throw error;
        }
      }

    // Static method to delete a tool
    static async delete(id) {
        try {
            const query = `
                DELETE FROM tools 
                WHERE id = $1;
            `;
            await pool.query(query, [id]);
            return true; // Return true if the tool is successfully deleted
        } catch (error) {
            console.error('Error deleting tool:', error);
            throw error;
        }
    }
};

export default Tool;