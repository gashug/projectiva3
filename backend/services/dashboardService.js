import ProjectService from './projectService.js';
import TaskService from './taskService.js';
import AnalyticsService from './analyticsService.js';
// ... import other services as needed

class DashboardService {
  static async getAdminDashboardData() {
    try {
      // Fetch data for Admin/Project Manager dashboard
      const projectOverview = await AnalyticsService.getDashboardData(); // Using analytics view
      const priorityProjects = await ProjectService.getAllProjects(); // Fetch all projects or filter as needed
      const taskSummary = await TaskService.getAllTasks(); // Fetch all tasks or filter as needed
      const overdueTasks = taskSummary.filter(task => task.status !== 'Completed' && new Date(task.due_date) < new Date());
      const upcomingDeadlines = priorityProjects
                .map(project => ({
                    name: project.name,
                    end_date: project.end_date,
                    type: 'project'
                }))
                .filter(project => project.end_date && new Date(project.end_date) >= new Date())
                .sort((a, b) => new Date(a.end_date) - new Date(b.end_date))
                .slice(0, 5); // Get top 5 projects with upcoming deadlines
      const notifications = []; // Fetch notifications or define static ones
      const quickActions = [
                { label: 'Create New Project', action: '/projects/create' },
                { label: 'Assign Task', action: '/tasks/assign' },
                { label: 'Upload Document', action: '/documents/upload' }
            ];

      return {
        projectOverview,
        priorityProjects,
        taskSummary: {
            allTasks: taskSummary,
            overdueTasks: overdueTasks,
        },
        upcomingDeadlines,
        notifications,
        quickActions
      };
    } catch (error) {
      console.error('Error fetching admin dashboard data:', error);
      throw new Error('Failed to fetch admin dashboard data.');
    }
  }

  static async getTechnicianDashboardData() {
    try {
      // Fetch data for Technician dashboard
      // ... (Implement logic to fetch relevant data for technicians)
      return {
                // ... technician-specific data
            };
    } catch (error) {
      console.error('Error fetching technician dashboard data:', error);
      throw new Error('Failed to fetch technician dashboard data.');
    }
  }

  static async getDashboardData(user) {
       const { role, id: userId } = user;
        const clerkUserId = user.id;

        try {
            let userProfile = await UserService.getUserByClerkId(clerkUserId);
            if (!userProfile) {
                userProfile = await UserService.createUser(clerkUserId);
            }

            const userId = userProfile.id;

            let dashboardData;
            if (role === 'Admin' || role === 'Project Manager') {
                dashboardData = await this.getAdminDashboardData();
            } else if (role === 'Technician') {
                dashboardData = await this.getTechnicianDashboardData();
            } else {
                throw new Error('Invalid user role');
            }

            return { userId, clerkUserId, ...dashboardData };
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            throw new Error('Failed to fetch dashboard data.');
        }
    }
}

export default DashboardService;