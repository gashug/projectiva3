// import React from "react";
// import "./styles/AnalyticsDashboard.css"; // Import CSS file for styling

// function AnalyticsDashboard() {
//   return (
//     <div className="analytics-dashboard">
//       <div className="dashboard-header">
//         <h2>Analytics Dashboard</h2>
//       </div>
//       <div className="dashboard-content">
//         <div className="widget-container">
//           {/* Placeholder for Project Overview Widget */}
//           <div className="widget">
//             <h3>Project Overview</h3>
//             <p>Placeholder for project-related charts/data.</p>
//           </div>

//           {/* Placeholder for Task Progress Widget */}
//           <div className="widget">
//             <h3>Task Progress</h3>
//             <p>Placeholder for task-related charts/data.</p>
//           </div>

//           {/* Placeholder for Technician Performance Widget */}
//           <div className="widget">
//             <h3>Technician Performance</h3>
//             <p>Placeholder for technician-related charts/data.</p>
//           </div>

//           {/* Placeholder for Inventory Utilization Widget */}
//           <div className="widget">
//             <h3>Inventory Utilization</h3>
//             <p>Placeholder for inventory-related charts/data.</p>
//           </div>
//         </div>

//         <div className="detailed-reports">
//           {/* Placeholder for detailed reports */}
//           <h3>Detailed Reports</h3>
//           <p>Placeholder for tables and additional information.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AnalyticsDashboard;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import ProjectOverviewChart from "./ProjectOverviewChart";
// import TaskProgressChart from "./TaskProgressChart";
// import TechnicianPerformanceChart from "./TechnicianPerformanceChart";
// import InventoryUtilizationChart from "./InventoryUtilizationChart";
// import DetailedReports from "./DetailedReports";
// import API from "../../api/index";
// import "./styles/AnalyticsDashboard.css";

// function AnalyticsDashboard() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const response = await API.get("/api/analytics/dashboard");
//         setDashboardData(response.data);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//         setError("Failed to load dashboard data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="analytics-dashboard">
//       <div className="dashboard-header">
//         <h2>Analytics Dashboard</h2>
//       </div>
//       <div className="dashboard-content">
//         <div className="widget-container">
//           <div className="widget">
//             <ProjectOverviewChart data={dashboardData?.projectOverview} />
//           </div>

//           <div className="widget">
//             <TaskProgressChart data={dashboardData?.taskSummary?.allTasks} />
//           </div>

//           <div className="widget">
//             <TechnicianPerformanceChart data={dashboardData?.technicianSummary} />
//           </div>

//           <div className="widget">
//             <InventoryUtilizationChart data={dashboardData?.resourceManagement} />
//           </div>
//         </div>

//         <div className="detailed-reports">
//           <DetailedReports />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AnalyticsDashboard;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import ProjectOverviewChart from "./ProjectOverviewChart";
// import TaskProgressChart from "./TaskProgressChart";
// import TechnicianPerformanceChart from "./TechnicianPerformanceChart";
// import InventoryUtilizationChart from "./InventoryUtilizationChart";
// import DetailedReports from "./DetailedReports";
// import API from "../../api/index";
// import "./styles/AnalyticsDashboard.css";

// function AnalyticsDashboard() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const response = await API.get("/api/analytics/dashboard"); // Update with your actual endpoint
//         setDashboardData(response.data);
//         console.log("analytics:", response.data);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//         setError("Failed to load dashboard data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="analytics-dashboard">
//       <div className="dashboard-header">
//         <h2>Analytics Dashboard</h2>
//       </div>
//       <div className="dashboard-content">
//         <div className="widget-container">
//           <div className="widget">
//             <ProjectOverviewChart data={dashboardData?.projectOverview} />
//           </div>

//           <div className="widget">
//             <TaskProgressChart data={dashboardData?.taskSummary?.allTasks} />
//           </div>

//           <div className="widget">
//             <TechnicianPerformanceChart
//               data={dashboardData?.technicianSummary}
//             />
//           </div>

//           <div className="widget">
//             <InventoryUtilizationChart
//               data={dashboardData?.resourceManagement}
//             />
//           </div>
//         </div>

//         <div className="detailed-reports">
//           <DetailedReports />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AnalyticsDashboard;

// import React, { useState, useEffect } from "react";
// import ProjectOverviewChart from "./ProjectOverviewChart";
// import TaskProgressChart from "./TaskProgressChart";
// import TechnicianPerformanceChart from "./TechnicianPerformanceChart";
// import InventoryUtilizationChart from "./InventoryUtilizationChart";
// import DetailedReports from "./DetailedReports";
// import API from "../../api/index";
// import "./styles/AnalyticsDashboard.css";

// function AnalyticsDashboard() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const response = await API.get("/api/analytics/dashboard");
//         setDashboardData(response.data);
//         console.log("analytics:", response.data);
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//         setError("Failed to load dashboard data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="analytics-dashboard">
//       <div className="dashboard-header">
//         <h2>Analytics Dashboard</h2>
//       </div>
//       <div className="dashboard-content">
//         <div className="widget-container">
//           <div className="widget">
//             <ProjectOverviewChart data={dashboardData?.projectOverview} />
//           </div>

//           <div className="widget">
//             <TaskProgressChart data={dashboardData?.taskSummary} />
//           </div>

//           <div className="widget">
//             <TechnicianPerformanceChart data={dashboardData?.technicianSummary} />
//           </div>

//           <div className="widget">
//             <InventoryUtilizationChart data={dashboardData?.resourceManagement} />
//           </div>
//         </div>

//         <div className="detailed-reports">
//           <DetailedReports />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AnalyticsDashboard;

import React, { useState, useEffect } from "react";
import ProjectOverviewChart from "./ProjectOverviewChart";
import TaskProgressChart from "./TaskProgressChart";
import TechnicianPerformanceChart from "./TechnicianPerformanceChart";
import InventoryUtilizationChart from "./InventoryUtilizationChart";
import DetailedReports from "./DetailedReports";
import API from "../../api/index";
import "./styles/AnalyticsDashboard.css";

function AnalyticsDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await API.get("/api/analytics/dashboard"); // Update with your actual endpoint
        setDashboardData(response.data);
        console.log("analytics:", response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setError("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="analytics-dashboard">
      <div className="dashboard-content">
        <div className="widget-container">
          <div className="widget">
            <ProjectOverviewChart data={dashboardData?.projectOverview} />
          </div>

          <div className="widget">
            <TaskProgressChart data={dashboardData?.taskSummary} />
          </div>

          <div className="widget">
            <TechnicianPerformanceChart data={dashboardData?.technicianSummary} />
          </div>

          <div className="widget">
            <InventoryUtilizationChart data={dashboardData?.resourceManagement} />
          </div>
        </div>

        <div className="detailed-reports">
          <DetailedReports />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;