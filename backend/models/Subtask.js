import pool from "../db/db";

class Subtask {
    // Static method to find all subtasks for a task
    static async findAllByTaskId(task_id) {
        try {
            const query = `
                SELECT * 
                FROM subtasks
                WHERE task_id = $1 
                ORDER BY created_at ASC;
            `;
            const result = await pool.query(query, [task_id]);
            return result.rows;
        } catch (error) {
            console.error('Error fetching subtasks:', error);
            throw error;
        }
    }

    // Static method to find a subtask by id
    static async findById(id) {
        try {
            const query = `
                SELECT * 
                FROM subtasks 
                WHERE id = $1;
            `;
            const result = await pool.query(query, [id]);
            return result.rows[0]; // Return the first row (subtask) or undefined if no subtask was found
        } catch (error) {
            console.error('Error fetching subtask by ID:', error);
            throw error;
        }
    }

    // Static method to create a new subtask
    static async create(subtaskData) {
        try {
            const { task_id, name, is_completed = false } = subtaskData;

            const query = `
                INSERT INTO subtasks (task_id, name, is_completed)
                VALUES ($1, $2, $3)
                RETURNING *;
            `;

            const result = await pool.query(query, [task_id, name, is_completed]);
            
            return result.rows[0];
        } catch (error) {
            console.error('Error creating subtask:', error);
            throw error;
        }
    }

    // Static method to update a subtask
    static async update(id, subtaskData) {
        try {
            const { task_id, name, is_completed } = subtaskData;

            const query = `
                UPDATE subtasks 
                SET task_id = $1, name = $2, is_completed = $3, updated_at = CURRENT_TIMESTAMP
                WHERE id = $4
                RETURNING *;
            `;

            const result = await pool.query(query, [task_id, name, is_completed, id]);

            return result.rows[0]; // Return the updated subtask
        } catch (error) {
            console.error('Error updating subtask:', error);
            throw error;
        }
    }

    // Static method to delete a subtask
    static async delete(id) {
        try {
            const query = `
                DELETE FROM subtasks 
                WHERE id = $1
                RETURNING *;
            `;

            await pool.query(query, [id]);
            return true; // Return true if the subtask is successfully deleted
        } catch (error) {
            console.error('Error deleting subtask:', error);
            throw error;
        }
    }
};

export default Subtask;