import Analytics from '../models/Analytics.js';

class AnalyticsService {
  static async getDashboardData() {
    return Analytics.getDashboardAnalytics();
  }

  static async getProjectData(projectId) {
    return Analytics.getProjectAnalytics(projectId);
  }

  static async getTaskData(filter) {
    return Analytics.getTaskAnalytics(filter);
  }

  static async getTechnicianData() {
    return Analytics.getTechnicianAnalytics();
  }

  static async getInventoryData() {
    return Analytics.getInventoryAnalytics();
  }
}

export default AnalyticsService;