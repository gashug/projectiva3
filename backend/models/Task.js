import pool from "../db/db.js"; // Import the pool object from the db connection pool

class Task {
    // Static method to find all tasks
    static async findAll() {
        try {
            const query = `
                SELECT * FROM tasks 
                ORDER BY created_at DESC;
            `;
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            console.error('Error fetching tasks:', error);
            throw error;
        }
    }

    // Static method to find a task by id
    static async findById(id) {
        try {
            const query = `
                SELECT * FROM tasks 
                WHERE id = $1;
            `;
            const result = await pool.query(query, [id]);
            return result.rows[0]; // Return the first row (task) or undefined if no task was found
        } catch (error) {
            console.error('Error fetching task by ID:', error);
            throw error;
        }
    }

    // Static method to find all tasks for a project
    static async findByProjectId(project_id) {
        try {
            const query = `
                SELECT * FROM tasks 
                WHERE project_id = $1 
                ORDER BY created_at DESC;
            `;
            const result = await pool.query(query, [project_id]);
            return result.rows;
        } catch (error) {
            console.error('Error fetching tasks by project ID:', error);
            throw error;
        }
    }

    // Static method to create a new task
    static async create(taskData) {
        try {
            const {
                project_id,
                name,
                assigned_to,
                due_date,
                status = 'To Do',
                priority = 'Medium',
                description,
                attachments,
            } = taskData;

            const query = `
                INSERT INTO tasks (project_id, name, assigned_to, due_date, status, priority, description, attachments)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                RETURNING *;
            `;

            const result = await pool.query(query, [
                project_id, 
                name, 
                assigned_to, 
                due_date, 
                status, 
                priority, 
                description, 
                attachments,
            ]);

            return result.rows[0]; // Return the newly created task
        } catch (error) {
            console.error('Error creating task:', error);
            throw error;
        }
    }

    // Static method to update a task
    static async update(taskData) {
        try {
            const {
                project_id,
                name,
                assigned_to,
                due_date,
                status,
                priority,
                description,
                attachments,
            } = taskData;

            const query = `
                UPDATE tasks 
                SET project_id = $1, 
                    name = $2, 
                    assigned_to = $3, 
                    due_date = $4, 
                    status = $5, 
                    priority = $6, 
                    description = $7, 
                    attachments = $8
                WHERE id = $9 
                RETURNING *;
            `;

            const result = await pool.query(query, [
                project_id, 
                name, 
                assigned_to, 
                due_date, 
                status, 
                priority, 
                description, 
                attachments,
                id,
            ]);

            return result.rows[0]; // Return the updated task
        } catch (error) {
            console.error('Error updating task:', error);
            throw error;
        }
    }

    // Static method to delete a task
    static async delete(id) {
        try {
            const query = `
            DELETE FROM tasks WHERE id = $1;
            `;
            await pool.query(query, [id]);
            return true; // Return true if the task is successfully deleted
        } catch (error) {
            console.error('Error deleting task:', error);
            throw error;
        }
    }
};

export default Task;