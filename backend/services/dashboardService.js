// import ProjectService from './projectsService.js';
// import TaskService from './taskService.js';
// import AnalyticsService from './analyticsService.js';
// // ... import other services as needed

// class DashboardService {
//   static async getAdminDashboardData() {
//     try {
//       // Fetch data for Admin/Project Manager dashboard
//       const projectOverview = await AnalyticsService.getDashboardData(); // Using analytics view
//       const priorityProjects = await ProjectService.getAllProjects(); // Fetch all projects or filter as needed
//       const taskSummary = await TaskService.getAllTasks(); // Fetch all tasks or filter as needed
//       const overdueTasks = taskSummary.filter(task => task.status !== 'Completed' && new Date(task.due_date) < new Date());
//       const upcomingDeadlines = priorityProjects
//                 .map(project => ({
//                     name: project.name,
//                     end_date: project.end_date,
//                     type: 'project'
//                 }))
//                 .filter(project => project.end_date && new Date(project.end_date) >= new Date())
//                 .sort((a, b) => new Date(a.end_date) - new Date(b.end_date))
//                 .slice(0, 5); // Get top 5 projects with upcoming deadlines
//       const notifications = []; // Fetch notifications or define static ones
//       const quickActions = [
//                 { label: 'Create New Project', action: '/projects/create' },
//                 { label: 'Assign Task', action: '/tasks/assign' },
//                 { label: 'Upload Document', action: '/documents/upload' }
//             ];

//       return {
//         projectOverview,
//         priorityProjects,
//         taskSummary: {
//             allTasks: taskSummary,
//             overdueTasks: overdueTasks,
//         },
//         upcomingDeadlines,
//         notifications,
//         quickActions
//       };
//     } catch (error) {
//       console.error('Error fetching admin dashboard data:', error);
//       throw new Error('Failed to fetch admin dashboard data.');
//     }
//   }

//   static async getTechnicianDashboardData() {
//     try {
//       // Fetch data for Technician dashboard
//       // ... (Implement logic to fetch relevant data for technicians)
//       return {
//                 // ... technician-specific data
//             };
//     } catch (error) {
//       console.error('Error fetching technician dashboard data:', error);
//       throw new Error('Failed to fetch technician dashboard data.');
//     }
//   }

//   static async getDashboardData(user) {
//        const { role, id: userId } = user;
//         const clerkUserId = user.id;

//         try {
//             let userProfile = await UserService.getUserByClerkId(clerkUserId);
//             if (!userProfile) {
//                 userProfile = await UserService.createUser(clerkUserId);
//             }

//             const userId = userProfile.id;

//             let dashboardData;
//             if (role === 'Admin' || role === 'Project Manager') {
//                 dashboardData = await this.getAdminDashboardData();
//             } else if (role === 'Technician') {
//                 dashboardData = await this.getTechnicianDashboardData();
//             } else {
//                 throw new Error('Invalid user role');
//             }

//             return { userId, clerkUserId, ...dashboardData };
//         } catch (error) {
//             console.error('Error fetching dashboard data:', error);
//             throw new Error('Failed to fetch dashboard data.');
//         }
//     }
// }

// export default DashboardService;

// backend/services/dashboardService.js
// import ProjectService from './projectsService.js';
// import TaskService from './taskService.js';
// import AnalyticsService from './analyticsService.js';
// import UserService from './userService.js';
// // ... import other services as needed

// class DashboardService {
//   static async getAdminDashboardData() {
//     try {
//       // Fetch data for Admin/Project Manager dashboard
//       console.log("Fetching dashboard data for admin...");

//       const projectOverview = await AnalyticsService.getDashboardData(); // Using analytics view
//       console.log("Project overview:", projectOverview);

//       const priorityProjects = await ProjectService.getAllProjects(); // Fetch all projects or filter as needed
//       console.log("Priority projects:", priorityProjects);

//       const taskSummary = await TaskService.getAllTasks(); // Fetch all tasks or filter as needed
//       console.log("Task summary:", taskSummary);

//       const overdueTasks = taskSummary.filter(
//         (task) =>
//           task.status !== "Completed" && new Date(task.due_date) < new Date()
//       );
//       console.log("Overdue tasks:", overdueTasks);

//       const upcomingDeadlines = priorityProjects
//         .map((project) => ({
//           name: project.name,
//           end_date: project.end_date,
//           type: "project",
//         }))
//         .filter(
//           (project) =>
//             project.end_date && new Date(project.end_date) >= new Date()
//         )
//         .sort((a, b) => new Date(a.end_date) - new Date(b.end_date))
//         .slice(0, 5); // Get top 5 projects with upcoming deadlines
//       console.log("Upcoming deadlines:", upcomingDeadlines);

//       const notifications = []; // Fetch notifications or define static ones
//       const quickActions = [
//         { label: "Create New Project", action: "/projects/create" },
//         { label: "Assign Task", action: "/tasks/assign" },
//         { label: "Upload Document", action: "/documents/upload" },
//       ];

//       return {
//         projectOverview,
//         priorityProjects,
//         taskSummary: {
//           allTasks: taskSummary,
//           overdueTasks: overdueTasks,
//         },
//         upcomingDeadlines,
//         notifications,
//         quickActions,
//       };
//     } catch (error) {
//       console.error("Error fetching admin dashboard data:", error);
//       throw new Error("Failed to fetch admin dashboard data.");
//     }
//   }

//   // ... other methods

//   static async getDashboardData(user) {
//   //   const { role, id: userId } = user;
//   //   const clerkUserId = user.id;
  
//   //   try {
//   //     console.log("Fetching user profile for Clerk ID:", clerkUserId);
//   //     let userProfile = await UserService.getUserByClerkId(clerkUserId);
//   //     if (!userProfile) {
//   //       console.log("User profile not found, creating a new one...");
//   //       userProfile = await UserService.createUser(clerkUserId);
//   //     }
  
//   //     const userId = userProfile.id;
//   //     console.log("User ID:", userId, "Role:", role);
  
//   //     let dashboardData;
//   //     if (role === "Admin" || role === "Project Manager") {
//   //       console.log("Fetching admin dashboard data...");
//   //       dashboardData = await this.getAdminDashboardData();
//   //     } else if (role === "Technician") {
//   //       console.log("Fetching technician dashboard data...");
//   //       dashboardData = await this.getTechnicianDashboardData();
//   //     } else {
//   //       throw new Error("Invalid user role");
//   //     }
  
//   //     console.log("Dashboard data fetched successfully.");
//   //     return { userId, clerkUserId, ...dashboardData };
//   //   } catch (error) {
//   //     console.error("Error fetching dashboard data:", error);
//   //     throw new Error("Failed to fetch dashboard data.");
//   //   }
//   // }
//   // Directly use user.id as clerkUserId since that's what you're setting in the middleware
//   const clerkUserId = user.id; 
//   const role = user.role; // Get the role from the user object

//   try {
//     console.log("Fetching user profile for Clerk ID:", clerkUserId);
//     let userProfile = await UserService.getUserByClerkId(clerkUserId);
//     if (!userProfile) {
//       console.log("User profile not found, creating a new one...");
//       userProfile = await UserService.createUser(clerkUserId);
//     }

//     // We don't need a separate userId here anymore, as we are using clerkUserId to fetch the user
//     // You can remove the line: const userId = userProfile.id;

//     let dashboardData;
//     if (role === "Admin" || role === "Project Manager") {
//       console.log("Fetching admin dashboard data...");
//       dashboardData = await this.getAdminDashboardData();
//     } else if (role === "Technician") {
//       console.log("Fetching technician dashboard data...");
//       dashboardData = await this.getTechnicianDashboardData();
//     } else {
//       throw new Error("Invalid user role");
//     }

//     console.log("Dashboard data fetched successfully.");
//     return { clerkUserId, role, ...dashboardData }; // Include clerkUserId and role in the response
//   } catch (error) {
//     console.error("Error fetching dashboard data:", error);
//     throw new Error("Failed to fetch dashboard data.");
//   }
// }
// }

// export default DashboardService;

import ProjectService from './projectsService.js';
import TaskService from './taskService.js';
import AnalyticsService from './analyticsService.js';
// ... import other services as needed (e.g., TechnicianService, if you have it)

class DashboardService {
  static async getAdminDashboardData() {
    try {
      // Fetch data for Admin/Project Manager dashboard
      console.log("Fetching dashboard data for admin...");

      const projectOverview = await AnalyticsService.getDashboardData(); // Using analytics view
      console.log("Project overview:", projectOverview);

      const priorityProjects = await ProjectService.getAllProjects(); // Fetch all projects or filter as needed
      console.log("Priority projects:", priorityProjects);

      const taskSummary = await TaskService.getAllTasks(); // Fetch all tasks or filter as needed
      console.log("Task summary:", taskSummary);

      const overdueTasks = taskSummary.filter(
        (task) =>
          task.status !== "Completed" && new Date(task.due_date) < new Date()
      );
      console.log("Overdue tasks:", overdueTasks);

      const upcomingDeadlines = priorityProjects
        .map((project) => ({
          name: project.name,
          end_date: project.end_date,
          type: "project",
        }))
        .filter(
          (project) =>
            project.end_date && new Date(project.end_date) >= new Date()
        )
        .sort((a, b) => new Date(a.end_date) - new Date(b.end_date))
        .slice(0, 5); // Get top 5 projects with upcoming deadlines
      console.log("Upcoming deadlines:", upcomingDeadlines);

      const notifications = []; // Fetch notifications or define static ones
      const quickActions = [
        { label: "Create New Project", action: "/projects/create" },
        { label: "Assign Task", action: "/tasks/assign" },
        { label: "Upload Document", action: "/documents/upload" },
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
        quickActions,
      };
    } catch (error) {
      console.error("Error fetching admin dashboard data:", error);
      throw new Error("Failed to fetch admin dashboard data.");
    }
  }

  static async getTechnicianDashboardData() {
    try {
      // Fetch data for Technician dashboard
      console.log("Fetching dashboard data for technician...");

      // Example: Fetch tasks assigned to a specific technician (replace with your actual logic)
      const assignedTasks = await TaskService.getAllTasks();

      // Example: Fetch tools checked out by the technician (replace with your actual logic)
      const checkedOutTools = []; // Fetch from your ToolService or relevant service

      // Add more technician-specific data fetching here

      return {
        assignedTasks,
        checkedOutTools,
        // ... other technician-specific data
      };
    } catch (error) {
      console.error("Error fetching technician dashboard data:", error);
      throw new Error("Failed to fetch technician dashboard data.");
    }
  }

  static async getDashboardData() {
    try {
      // Since we've removed authentication for now, you can decide:
      // 1. To show the admin dashboard to all users.
      // 2. To create a generic dashboard that doesn't depend on user roles.

      // For now, let's assume you want to show the admin dashboard (option 1):
      console.log("Fetching dashboard data (no authentication)...");
      const dashboardData = await this.getAdminDashboardData(); // Fetch admin dashboard data
      // If you had a generic, role-agnostic dashboard, you would fetch that data here

      console.log("Dashboard data fetched successfully.");
      return { ...dashboardData }; // You don't need userId or clerkUserId anymore
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      throw new Error("Failed to fetch dashboard data.");
    }
  }
}

export default DashboardService;