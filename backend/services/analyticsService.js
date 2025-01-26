// import Analytics from '../models/Analytics.js';

// class AnalyticsService {
//   static async getDashboardData() {
//     return Analytics.getDashboardAnalytics();
//   }

//   static async getProjectData(projectId) {
//     return Analytics.getProjectAnalytics(projectId);
//   }

//   static async getTaskData(filter) {
//     return Analytics.getTaskAnalytics(filter);
//   }

//   static async getTechnicianData() {
//     return Analytics.getTechnicianAnalytics();
//   }

//   static async getInventoryData() {
//     return Analytics.getInventoryAnalytics();
//   }
// }

// export default AnalyticsService;

// backend/services/analyticsService.js
import Analytics from '../models/Analytics.js';

class AnalyticsService {
  // ... other methods

  static async getProjectOverviewData() {
    try {
      const query = `
        SELECT
          COUNT(DISTINCT id) AS total_projects,
          COUNT(DISTINCT CASE WHEN status = 'Completed' THEN id END) AS total_completed_projects,
          COUNT(DISTINCT CASE WHEN status = 'In Progress' THEN id END) AS total_in_progress_projects,
          COUNT(DISTINCT CASE WHEN status = 'Pending' THEN id END) AS total_pending_projects
        FROM projects;
      `;
      const result = await pool.query(query);
      return result.rows[0];
    } catch (error) {
      console.error('Error fetching project overview data:', error);
      throw new Error('Failed to fetch project overview data');
    }
  }
  
  static async getTaskProgressData() {
    try {
      const query = `
        SELECT
          status,
          COUNT(*) AS count
        FROM tasks
        GROUP BY status;
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching task progress data:', error);
      throw new Error('Failed to fetch task progress data');
    }
  }
  
  static async getTechnicianPerformanceData() {
    try {
      const query = `
        SELECT
          t.name AS technician_name,
          COUNT(ta.id) AS total_tasks_assigned,
          COUNT(ta.id) FILTER (WHERE ta.status = 'Completed') AS completed_tasks,
          AVG(CASE WHEN ta.status = 'Completed' THEN 100 ELSE 0 END) AS task_completion_rate
        FROM technicians t
        LEFT JOIN tasks ta ON t.id = ta.assigned_to
        GROUP BY t.name
        ORDER BY t.id;
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching technician performance data:', error);
      throw new Error('Failed to fetch technician performance data');
    }
  }

  static async getInventoryUtilizationData() {
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
      console.error('Error fetching inventory utilization data:', error);
      throw new Error('Failed to fetch inventory utilization data');
    }
  }
  

  static async getAnalyticsDashboardData() {
    try {
      const projectOverview = await this.getProjectOverviewData();
      const taskSummary = await this.getTaskProgressData();
      const technicianSummary = await this.getTechnicianPerformanceData();
      const resourceManagement = await this.getInventoryUtilizationData();

      return {
        projectOverview,
        taskSummary,
        technicianSummary,
        resourceManagement,
      };
    } catch (error) {
      console.error('Error fetching analytics dashboard data:', error);
      throw new Error('Failed to fetch analytics dashboard data.');
    }
  }
}

export default AnalyticsService;