import pool from "../db/db.js"; // Import the pool object from the db connection pool

// Define the Project model
class Project {
    // Static method to find all projects
    static async findAll() {
        try {
            const query = `SELECT * FROM projects ORDER BY created_at DESC;`;
            const result = await pool.query(query);
            return result.rows
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw error;
        }
    }

    // Static method to find a project by id
    static async findById(id) {
        try {
            const query = `SELECT * FROM projects WHERE id = $1;`;
            const result = await pool.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Error fetching project by ID:', error);
            throw error;
        }
    }

    // Static method to find all projects for a client
    static async findByClientId(client_id) {
        try {
            const query = `
            SELECT * FROM projects 
            WHERE client_id = $1 
            ORDER BY created_at DESC;
        `;
            const result = await pool.query(query, [client_id]);
            return result.rows;
        } catch (error) {
            console.error('Error fetching projects by client ID:', error);
            throw error;
        }
    }
    
    // Static method to create a new project
    static async create(projectData) {
        try {
            const {
                name, 
                type, 
                department, 
                client_id, 
                location, 
                start_date, 
                end_date, 
                status='Pending',
                stages = {},
             } = projectData;
            
             const query = `
                INSERT INTO projects (name, type, department, client_id, location, start_date, end_date, status, stages) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
                RETURNING *;
            `;
            const result = await pool.query(query, [
                name, 
                type, 
                department, 
                client_id, 
                location, 
                start_date, 
                end_date, 
                status,
                JSON.stringify(stages), // Convert the stages object to a JSON string
            ]);

            return result.rows[0]; // Return the newly created project
        } catch (error) {
            console.error('Error creating project:', error);
            throw error;
        }
    }

    // Static method to update a project
    static async update(id, projectData) {
        try {
            const {
                name, 
                type, 
                department, 
                client_id, 
                location, 
                start_date, 
                end_date, 
                status,
                stages,
            } = projectData;
            
            const query = `
                UPDATE projects 
                SET name = $1, type = $2, department = $3, client_id = $4, location = $5, start_date = $6, end_date = $7, status = $8, stages= $9, updated_at = CURRENT_TIMESTAMP
                WHERE id = $9
                RETURNING *;
            `;

            const result = await pool.query(query, [
                name, 
                type, 
                department, 
                client_id, 
                location, 
                start_date, 
                end_date, 
                status,
                JSON.stringify(stages), // Convert the stages object to a JSON string
                id,
            ]);

            return result.rows[0]; // Return the updated project
        } catch (error) {
            console.error('Error updating project:', error);
            throw error;
        }
    }

    // Static method to delete a project
    static async delete(id) {
        try {
            const query = `
            DELETE FROM projects 
            WHERE id = $1;
        `;
        await pool.query(query, [id]);
        return true; // Return true if the project is successfully deleted
        } catch (error) {
            console.error('Error deleting project:', error);
            throw error;
        }
    }
}

export default Project; // Export the Project model for use in other modules