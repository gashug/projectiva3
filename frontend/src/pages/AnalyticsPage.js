// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import AnalyticsDashboard from "../components/analytics/AnalyticsDashboard";
// import ProjectAnalytics from "../components/analytics/ProjectAnalytics";
// import TaskAnalytics from "../components/analytics/TaskAnalytics";
// import TechnicianAnalytics from "../components/analytics/TechnicianAnalytics";
// import InventoryAnalytics from "../components/analytics/InventoryAnalytics";
// import "../styles/AnalyticsPage.css"; // Import CSS file for styling

// function AnalyticsPage({ isSidebarOpen, setPageTitle }) {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   useEffect(() => {
//     setPageTitle("Analytics");
//   }, [setPageTitle]);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="analytics-container">
//       <div className="analytics-page">
//         <main className="content">
//           <div className="page-header">
//             <div className="breadcrumb">
//               <Link to="/dashboard">Dashboard</Link> / Analytics
//             </div>
//           </div>
//           <div className="tabs">
//             <button
//               className={`tab ${activeTab === "dashboard" ? "active" : ""}`}
//               onClick={() => handleTabChange("dashboard")}
//             >
//               Analytics Dashboard
//             </button>
//             <button
//               className={`tab ${activeTab === "project" ? "active" : ""}`}
//               onClick={() => handleTabChange("project")}
//             >
//               Project Analytics
//             </button>
//             <button
//               className={`tab ${activeTab === "task" ? "active" : ""}`}
//               onClick={() => handleTabChange("task")}
//             >
//               Task List and Completion
//             </button>
//             <button
//               className={`tab ${activeTab === "inventory" ? "active" : ""}`}
//               onClick={() => handleTabChange("inventory")}
//             >
//               Inventory Summary
//             </button>
//             <button
//               className={`tab ${
//                 activeTab === "technician" ? "active" : ""
//               }`}
//               onClick={() => handleTabChange("technician")}
//             >
//               Technician Task Report
//             </button>
//           </div>

//           <div className="tab-content">
//             {/* Placeholder for tab content */}
//             {activeTab === "dashboard" && <div>Dashboard Analytics</div>}
//             {activeTab === "project" && <div>Project Analytics Content</div>}
//             {activeTab === "task" && <div>Task List and Completion Content</div>}
//             {activeTab === "inventory" && <div>Inventory Summary Content</div>}
//             {activeTab === "technician" && (
//               <div>Technician Task Report Content</div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// // export default AnalyticsPage;
// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import AnalyticsDashboard from '../components/analytics/AnalyticsDashboard';
// import ProjectAnalytics from '../components/analytics/ProjectAnalytics';
// import TaskAnalytics from '../components/analytics/TaskAnalytics';
// import TechnicianAnalytics from "../components/analytics/TechnicianAnalytics";
// import InventoryAnalytics from '../components/analytics/InventoryAnalytics';
// import "../styles/AnalyticsPage.css";

// function AnalyticsPage({ isSidebarOpen, setPageTitle }) {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   useEffect(() => {
//     setPageTitle("Analytics");
//   }, [setPageTitle]);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="analytics-container">
//       <div className="analytics-page">
//         <main className="content">
//           <div className="page-header">
//             <div className="page-title">Analytics</div>
//             <div className="breadcrumb">
//               <Link to="/dashboard">Dashboard</Link> / Analytics
//             </div>
//           </div>
//           <div className="tabs">
//             <button
//               className={`tab ${activeTab === "dashboard" ? "active" : ""}`}
//               onClick={() => handleTabChange("dashboard")}
//             >
//               Analytics Dashboard
//             </button>
//             <button
//               className={`tab ${activeTab === "project" ? "active" : ""}`}
//               onClick={() => handleTabChange("project")}
//             >
//               Project Analytics
//             </button>
//             <button
//               className={`tab ${activeTab === "task" ? "active" : ""}`}
//               onClick={() => handleTabChange("task")}
//             >
//               Task List and Completion
//             </button>
//             <button
//               className={`tab ${activeTab === "inventory" ? "active" : ""}`}
//               onClick={() => handleTabChange("inventory")}
//             >
//               Inventory Summary
//             </button>
//             <button
//               className={`tab ${
//                 activeTab === "technician" ? "active" : ""
//               }`}
//               onClick={() => handleTabChange("technician")}
//             >
//               Technician Task Report
//             </button>
//           </div>

//           <div className="tab-content">
//             {activeTab === "dashboard" && <AnalyticsDashboard />}
//             {activeTab === "project" && <ProjectAnalytics />}
//             {activeTab === "task" && <TaskAnalytics />}
//             {activeTab === "inventory" && <InventoryAnalytics />}
//             {activeTab === "technician" && <TechnicianAnalytics />}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AnalyticsPage;
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AnalyticsDashboard from '../components/analytics/AnalyticsDashboard';
import ProjectAnalytics from '../components/analytics/ProjectAnalytics';
import TaskAnalytics from '../components/analytics/TaskAnalytics';
import InventoryAnalytics from '../components/analytics/InventoryAnalytics';
import TechnicianAnalytics from "../components/analytics/TechnicianAnalytics";
import "../styles/AnalyticsPage.css";

function AnalyticsPage({ isSidebarOpen, setPageTitle }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    setPageTitle("Analytics");
  }, [setPageTitle]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="analytics-container">
      <div className="analytics-page">
        <main className="content">
          <div className="page-header">
            {/* <h2 className="page-title">Analytics</h2> */}
            <div className="breadcrumb">
              <Link to="/dashboard">Dashboard</Link> / Analytics
            </div>
          </div>
          <div className="tabs">
            <button
              className={`tab ${activeTab === "dashboard" ? "active" : ""}`}
              onClick={() => handleTabChange("dashboard")}
            >
              Analytics Dashboard
            </button>
            <button
              className={`tab ${activeTab === "project" ? "active" : ""}`}
              onClick={() => handleTabChange("project")}
            >
              Project Analytics
            </button>
            <button
              className={`tab ${activeTab === "task" ? "active" : ""}`}
              onClick={() => handleTabChange("task")}
            >
              Task List and Completion
            </button>
            <button
              className={`tab ${activeTab === "inventory" ? "active" : ""}`}
              onClick={() => handleTabChange("inventory")}
            >
              Inventory Summary
            </button>
            <button
              className={`tab ${activeTab === "technician" ? "active" : ""}`}
              onClick={() => handleTabChange("technician")}
            >
              Technician Task Report
            </button>
          </div>

          <div className="tab-content">
            {/* Render the AnalyticsDashboard component without header/title */}
            {activeTab === "dashboard" && <AnalyticsDashboard />}
            {activeTab === "project" && <ProjectAnalytics />}
            {activeTab === "task" && <TaskAnalytics />}
            {activeTab === "inventory" && <InventoryAnalytics />}
            {activeTab === "technician" && <TechnicianAnalytics />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AnalyticsPage;