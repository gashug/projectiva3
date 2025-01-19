import pool from "../db/db.js";

class Analytics {
    // Method to get overall analytics data
  static async getDashboardAnalytics() {
    try {
      const query = `
        SELECT 
          COUNT(DISTINCT project_id) AS total_projects,
          SUM(completed_tasks) AS total_completed_tasks,
          SUM(in_progress_tasks) AS total_in_progress_tasks,
          SUM(todo_tasks) AS total_todo_tasks,
          AVG(task_completion_rate) AS average_task_completion_rate,
          MAX(total_technicians) AS total_technicians,
          MAX(total_equipment) AS total_equipment,
          MAX(total_tools) AS total_tools
        FROM analytics_view;
      `;
      const result = await pool.query(query);
      return result.rows[0];
    } catch (error) {
      console.error('Error fetching dashboard analytics:', error);
      throw error;
    }
  }

  // Method to get project-specific analytics
  static async getProjectAnalytics(projectId) {
    try {
      const query = `
        SELECT *
        FROM analytics_view
        WHERE project_id = $1;
      `;
      const result = await pool.query(query, [projectId]);
      return result.rows[0];
    } catch (error) {
      console.error('Error fetching project analytics:', error);
      throw error;
    }
  }

  // Method to get task analytics (overall or filtered)
  static async getTaskAnalytics(filter = {}) {
    try {
      let query = `
        SELECT 
          status,
          COUNT(*) AS count,
          AVG(CASE WHEN due_date < CURRENT_DATE AND status != 'Completed' THEN 1 ELSE 0 END) AS overdue_percentage
        FROM tasks
      `;

      const values = [];
      const conditions = [];
      let i = 1;

      // Example filters (add more as needed)
      if (filter.projectId) {
        conditions.push(`project_id = $${i++}`);
        values.push(filter.projectId);
      }
      if (filter.status) {
        conditions.push(`status = $${i++}`);
        values.push(filter.status);
      }
      // Add more filters as needed...

      if (conditions.length > 0) {
        query += ` WHERE ${conditions.join(' AND ')}`;
      }

      query += ` GROUP BY status;`;

      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      console.error('Error fetching task analytics:', error);
      throw error;
    }
  }

  // Method to get technician analytics
  static async getTechnicianAnalytics() {
    try {
      const query = `
      SELECT
        t.id AS technician_id,
        t.name AS technician_name,
        COUNT(ta.id) AS total_tasks_assigned,
        COUNT(ta.id) FILTER (WHERE ta.status = 'Completed') AS completed_tasks,
        AVG(CASE WHEN ta.status = 'Completed' THEN 100 ELSE 0 END) AS task_completion_rate
      FROM technicians t
      LEFT JOIN tasks ta ON t.id = ta.assigned_to
      GROUP BY t.id, t.name
      ORDER BY t.id;
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching technician analytics:', error);
      throw error;
    }
  }

  // Method to get inventory analytics
  static async getInventoryAnalytics() {
    try {
      const query = `
        SELECT
          'equipment' AS category,
          COUNT(*) AS total_items,
          COUNT(*) FILTER (WHERE condition = 'Good') AS good_condition,
          COUNT(*) FILTER (WHERE condition = 'Fair') AS fair_condition,
          COUNT(*) FILTER (WHERE condition = 'Poor') AS poor_condition,
          COUNT(*) FILTER (WHERE assigned_to_project IS NOT NULL) AS assigned_items
        FROM equipment
        UNION ALL
        SELECT
          'tools' AS category,
          COUNT(*) AS total_items,
          COUNT(*) FILTER (WHERE condition = 'Good') AS good_condition,
          COUNT(*) FILTER (WHERE condition = 'Fair') AS fair_condition,
          COUNT(*) FILTER (WHERE condition = 'Poor') AS poor_condition,
          COUNT(*) FILTER (WHERE assigned_to_project IS NOT NULL OR assigned_to_technician IS NOT NULL) AS assigned_items
        FROM tools;
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching inventory analytics:', error);
      throw error;
    }
  }
}

export default Analytics;