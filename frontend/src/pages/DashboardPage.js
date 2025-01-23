// import React, { useState, useEffect } from "react";
// import API from "axios";
// import ProjectOverview from "../components/dashboard/ProjectOverview";
// import TaskSummary from "../components/dashboard/TaskSummary";
// import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
// import AnalyticsSection from "../components/dashboard/AnalyticsSection";
// import ResourceManagement from "../components/dashboard/ResourceManagement";
// import QuickActions from "../components/dashboard/QuickActions";
// import NotificationsPanel from "../components/dashboard/NotificationsPanel.js";
// import "./styles/Dashboard.css";// import ResourceManagement from '../components/dashboard/ResourceManagement';

// function DashboardPage() {
//     const [dashboardData, setDashboardData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//             API.get("/api/dashboard")
//             .then((response) => {
//                 setDashboardData(response.data);
//                 console.log("Dashboard Data:", response.data); // Inspect this object
//             })
//             .catch((error) => {
//                 console.error('Error fetching dashboard data:', error);
//                 setError('Failed to load dashboard data.');
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>; // Show a loading indicator
//     }

//     if (error) {
//         return <div>{error}</div>; // Show an error message
//     }

//     return (
//         <div className="dashboard">
//             <h1 className="dashboard-title">Dashboard</h1>
//             <div className="dashboard-widgets">
//             {/* Placeholder for widgets */}
//             <ProjectOverview data={dashboardData?.projectOverview} />
//             <TaskSummary data={dashboardData?.taskSummary} /> 
//             <UpcomingDeadlines data={dashboardData?.upcomingDeadlines} />
//             <AnalyticsSection data={dashboardData?.analytics} />
//             <ResourceManagement data={dashboardData?.resourceManagement} />
//             <QuickActions data={dashboardData} />
//             <NotificationsPanel data={dashboardData?.notifications} />
//             </div>
//         </div>
//     );
// }

// export default DashboardPage;

// import React, { useState, useEffect } from "react";
// import API from "../api/index.js";
// import ProjectOverview from "../components/dashboard/ProjectOverview";
// import TaskSummary from "../components/dashboard/TaskSummary";
// import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
// import AnalyticsSection from "../components/dashboard/AnalyticsSection";
// import ResourceManagement from "../components/dashboard/ResourceManagement";
// import QuickActions from '../components/dashboard/QuickActions';
// import NotificationsPanel from '../components/dashboard/NotificationsPanel.js';
// import "./styles/Dashboard.css";

// function DashboardPage() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

// //   // Add placeholder data for development
// //   const placeholderData = {
// //     projectOverview: {
// //       total_projects: 10,
// //       total_completed_tasks: 5,
// //       total_in_progress_tasks: 3,
// //       total_todo_tasks: 2,
// //     },
// //     // ... other placeholder data for other widgets
// //   };

//   useEffect(() => {
//     API.get("/api/dashboard")
//       .then((response) => {
//         setDashboardData(response.data);
//         console.log("Dashboard Data:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching dashboard data:", error);
//         setError("Failed to load dashboard data.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="dashboard">
//       <div className="sidebar">
//         {/* Placeholder for Sidebar content */}
//         <div className="sidebar-item">Projects</div>
//         <div className="sidebar-item">Tasks</div>
//         <div className="sidebar-item">Analytics</div>
//         <div className="sidebar-item">Inventory</div>
//       </div>
//       <div className="main-content">
//         <h1 className="dashboard-title">Dashboard</h1>
//         <div className="dashboard-widgets">
//           <ProjectOverview data={dashboardData?.projectOverview} />
//           <TaskSummary data={dashboardData?.taskSummary} />
//           <UpcomingDeadlines data={dashboardData?.upcomingDeadlines} />
//           <AnalyticsSection data={dashboardData?.analytics} />
//           <ResourceManagement data={dashboardData?.resourceManagement} />
//           <QuickActions data={dashboardData} />
//           <NotificationsPanel data={dashboardData?.notifications} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;

// import React, { useState, useEffect } from "react";
// import API from "../api/index.js";
// import ProjectOverview from "../components/dashboard/ProjectOverview";
// import TaskSummary from "../components/dashboard/TaskSummary";
// import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
// import AnalyticsSection from "../components/dashboard/AnalyticsSection";
// import ResourceManagement from "../components/dashboard/ResourceManagement";
// // import QuickActions from '../components/dashboard/QuickActions';
// // import NotificationsPanel from '../components/dashboard/NotificationsPanel.js';
// import Navbar from "../components/common/Navbar.js";
// import WelcomeBanner from '../components/dashboard/WelcomeBanner';
// import "./styles/Dashboard.css";

// function DashboardPage() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

//   useEffect(() => {
//     API.get("/api/dashboard")
//       .then((response) => {
//         setDashboardData(response.data);
//         console.log("Dashboard Data:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching dashboard data:", error);
//         setError("Failed to load dashboard data.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//     };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="dashboard">
//       <Navbar toggleSidebar={toggleSidebar} /> 
//       <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//         {/* Sidebar content */}
//         <div className="sidebar-item">Projects</div>
//         <div className="sidebar-item">Tasks</div>
//         <div className="sidebar-item">Analytics</div>
//         <div className="sidebar-item">Inventory</div>
//       </div>
//       <div className="main-content">
//         <WelcomeBanner userName="User" />
//         <h1 className="dashboard-title">Dashboard</h1>
//         <div className="dashboard-widgets">
//           <ProjectOverview data={dashboardData} />
//           <TaskSummary data={dashboardData?.taskSummary} />
//           <UpcomingDeadlines data={dashboardData?.upcomingDeadlines} />
//           <AnalyticsSection data={dashboardData?.analytics} />
//           <ResourceManagement data={dashboardData?.resourceManagement} />
//           {/* <QuickActions data={dashboardData} /> */}
//           {/* <NotificationsPanel data={dashboardData?.notifications} /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;

// import React, { useState, useEffect } from "react";
// import API from "../api/index.js";
// import ProjectOverview from "../components/dashboard/ProjectOverview";
// import TaskSummary from "../components/dashboard/TaskSummary";
// import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
// import AnalyticsSection from "../components/dashboard/AnalyticsSection";
// import ResourceManagement from "../components/dashboard/ResourceManagement";
// import Navbar from "../components/common/Navbar.js";
// import WelcomeBanner from '../components/dashboard/WelcomeBanner';
// import "./styles/Dashboard.css";

// function DashboardPage() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     API.get("/api/dashboard")
//       .then((response) => {
//         setDashboardData(response.data);
//         console.log("Dashboard Data:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching dashboard data:", error);
//         setError("Failed to load dashboard data.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="dashboard-container">
//       <Navbar toggleSidebar={toggleSidebar} />
//       <div className="dashboard">
//         <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//           <div className="sidebar-item">Projects</div>
//           <div className="sidebar-item">Tasks</div>
//           <div className="sidebar-item">Analytics</div>
//           <div className="sidebar-item">Inventory</div>
//         </div>
//         <div className="main-content">
//           <WelcomeBanner userName="User" />
//           <h1 className="dashboard-title">Dashboard</h1>
//           <div className="dashboard-widgets">
//             <ProjectOverview data={dashboardData?.projectOverview} />
//             <TaskSummary data={dashboardData?.taskSummary} />
//             <UpcomingDeadlines data={dashboardData?.upcomingDeadlines} />
//             <AnalyticsSection data={dashboardData?.analytics} />
//             <ResourceManagement data={dashboardData?.resourceManagement} />
//             {/* <QuickActions data={dashboardData} />
//             <NotificationsPanel data={dashboardData?.notifications} /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;

// import React, { useState, useEffect } from "react";
// import API from "../api/index.js";
// import ProjectOverview from "../components/dashboard/ProjectOverview";
// import TaskSummary from "../components/dashboard/TaskSummary";
// import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
// import AnalyticsSection from "../components/dashboard/AnalyticsSection";
// import ResourceManagement from "../components/dashboard/ResourceManagement";
// import Navbar from "../components/common/Navbar.js";
// import WelcomeBanner from '../components/dashboard/WelcomeBanner';
// import "./styles/Dashboard.css";

// function DashboardPage() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [sidebarWidth, setSidebarWidth] = useState(200); // Add state for sidebar width

//   useEffect(() => {
//     API.get("/api/dashboard")
//       .then((response) => {
//         setDashboardData(response.data);
//         console.log("Dashboard Data:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching dashboard data:", error);
//         setError("Failed to load dashboard data.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//     setSidebarWidth(isSidebarOpen ? 200 : 0); // Update sidebar width on toggle
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="dashboard-container">
//       <Navbar toggleSidebar={toggleSidebar} />
//       <div className="dashboard">
//         <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} style={{ width: sidebarWidth }}>
//           <div className="sidebar-item">Projects</div>
//           <div className="sidebar-item">Tasks</div>
//           <div className="sidebar-item">Analytics</div>
//           <div className="sidebar-item">Inventory</div>
//         </div>
//         <div className="main-content">
//           <WelcomeBanner userName="User" />
//           <div className="dashboard-widgets">
//             <ProjectOverview data={dashboardData?.projectOverview} />
//             <TaskSummary data={dashboardData?.taskSummary} />
//             <UpcomingDeadlines data={dashboardData?.upcomingDeadlines} />
//             <AnalyticsSection data={dashboardData?.analytics} />
//             <ResourceManagement data={dashboardData?.resourceManagement} />
//             {/* <QuickActions data={dashboardData} />
//             <NotificationsPanel data={dashboardData?.notifications} /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;

// import React, { useState, useEffect } from "react";
// import API from "../api/index.js";
// import ProjectOverview from "../components/dashboard/ProjectOverview";
// import TaskSummary from "../components/dashboard/TaskSummary";
// import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
// import AnalyticsSection from "../components/dashboard/AnalyticsSection";
// import ResourceManagement from "../components/dashboard/ResourceManagement";
// import Navbar from "../components/common/Navbar.js";
// import WelcomeBanner from '../components/dashboard/WelcomeBanner';
// import "./styles/Dashboard.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTasks, faProjectDiagram, faChartBar, faBoxes } from '@fortawesome/free-solid-svg-icons';

// function DashboardPage() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isIconMode, setIsIconMode] = useState(false);

//   useEffect(() => {
//     API.get("/api/dashboard")
//       .then((response) => {
//         setDashboardData(response.data);
//         console.log("Dashboard Data:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching dashboard data:", error);
//         setError("Failed to load dashboard data.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//     setIsIconMode(!isIconMode);
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="dashboard-container">
//       <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//       <div className="dashboard">
//       <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//           <div className="sidebar-item">
//             {isIconMode ? <FontAwesomeIcon icon={faProjectDiagram} className="sidebar-icon" /> : 'Projects'}
//           </div>
//           <div className="sidebar-item">
//             {isIconMode ? <FontAwesomeIcon icon={faTasks} className="sidebar-icon" /> : 'Tasks'}
//           </div>
//           <div className="sidebar-item">
//             {isIconMode ? <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" /> : 'Analytics'}
//           </div>
//           <div className="sidebar-item">
//             {isIconMode ? <FontAwesomeIcon icon={faBoxes} className="sidebar-icon" /> : 'Inventory'}
//           </div>
//         </div>
//         <div className="main-content">
//           <WelcomeBanner userName="User" />
//           <div className="dashboard-widgets">
//             <ProjectOverview data={dashboardData?.projectOverview} />
//             <TaskSummary data={dashboardData?.taskSummary} />
//             <UpcomingDeadlines data={dashboardData?.upcomingDeadlines} />
//             <AnalyticsSection data={dashboardData?.analytics} />
//             <ResourceManagement data={dashboardData?.resourceManagement} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;

import React, { useState, useEffect } from "react";
import API from "../api/index.js";
import ProjectOverview from "../components/dashboard/ProjectOverview";
import TaskSummary from "../components/dashboard/TaskSummary";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
import AnalyticsSection from "../components/dashboard/AnalyticsSection";
import ResourceManagement from "../components/dashboard/ResourceManagement";
import Navbar from "../components/common/Navbar.js";
import WelcomeBanner from '../components/dashboard/WelcomeBanner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faProjectDiagram, faChartBar, faBoxes } from '@fortawesome/free-solid-svg-icons';
import "./styles/Dashboard.css";

function DashboardPage() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // const [isIconMode, setIsIconMode] = useState(false);

  useEffect(() => {
    API.get("/api/dashboard")
      .then((response) => {
        setDashboardData(response.data);
        console.log("Dashboard Data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
        setError("Failed to load dashboard data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        
      };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="dashboard-container">
      <Navbar 
      toggleSidebar={toggleSidebar} 
      isSidebarOpen={isSidebarOpen}
      />
      <div className="dashboard">
        <div className={`sidebar ${!isSidebarOpen ? "" : "open"}`}>
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faProjectDiagram} className="sidebar-icon" />
            {!isSidebarOpen && <span>Projects</span>}
          </div>
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
            {!isSidebarOpen && <span>Tasks</span>}
          </div>
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
            {!isSidebarOpen && <span>Analytics</span>}
          </div>
          <div className="sidebar-item">
            <FontAwesomeIcon icon={faBoxes} className="sidebar-icon" />
            {!isSidebarOpen && <span>Inventory</span>}
          </div>
        </div>
        <div className="main-content">
          <WelcomeBanner userName="User" />
          <div className="dashboard-widgets">
            <ProjectOverview data={dashboardData} />
            <TaskSummary data={dashboardData} />
            <UpcomingDeadlines data={dashboardData?.upcomingDeadlines} />
            <AnalyticsSection data={dashboardData?.analytics} />
            <ResourceManagement data={dashboardData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;