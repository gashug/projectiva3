// import React, { useState, useEffect } from "react";
// import Navbar from "../components/common/Navbar";
// import {
//   faTasks,
//   faProjectDiagram,
//   faChartBar,
//   faBoxes,
//   faUsers,
//   faTools,
//   faCogs,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import "../styles/ResourcesPage.css";

// function ResourcesPage({ isSidebarOpen, toggleSidebar, setPageTitle }) {
//   const [activeTab, setActiveTab] = useState("technicians"); // State to track active tab

//   useEffect(() => {
//     setPageTitle("Resources");
//   }, [setPageTitle]);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="resources-container">
//       <div className="resources-page">
//         <div className={`sidebar ${isSidebarOpen ? "" : "open"}`}>
//           <Link to="/projects" className="sidebar-item">
//             <FontAwesomeIcon icon={faProjectDiagram} className="sidebar-icon" />
//             {isSidebarOpen && <span>Projects</span>}
//           </Link>
//           <Link to="/tasks" className="sidebar-item">
//             <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
//             {isSidebarOpen && <span>Tasks</span>}
//           </Link>
//           <Link to="/analytics" className="sidebar-item">
//             <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
//             {isSidebarOpen && <span>Analytics</span>}
//           </Link>
//           <Link to="/inventory" className="sidebar-item">
//             <FontAwesomeIcon icon={faBoxes} className="sidebar-icon" />
//             {isSidebarOpen && <span>Inventory</span>}
//           </Link>
//         </div>
//         <main className="content">
//           <div className="page-header">
//             <div className="page-title">Resource Management</div>
//             <div className="breadcrumb">
//               <Link to="/dashboard">Dashboard</Link> / Resource Management
//             </div>
//           </div>
//           <div className="tabs">
//             <button
//               className={`tab ${
//                 activeTab === "technicians" ? "active" : ""
//               }`}
//               onClick={() => handleTabChange("technicians")}
//             >
//               Technician Management
//             </button>
//             <button
//               className={`tab ${
//                 activeTab === "equipment" ? "active" : ""
//               }`}
//               onClick={() => handleTabChange("equipment")}
//             >
//               Equipment Inventory
//             </button>
//             <button
//               className={`tab ${activeTab === "tools" ? "active" : ""}`}
//               onClick={() => handleTabChange("tools")}
//             >
//               Tools Inventory
//             </button>
//           </div>

//           <div className="tab-content">
//             {/* Placeholder for tab content */}
//             {activeTab === "technicians" && (
//               <div>Technician Management Content</div>
//             )}
//             {activeTab === "equipment" && (
//               <div>Equipment Inventory Content</div>
//             )}
//             {activeTab === "tools" && <div>Tools Inventory Content</div>}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default ResourcesPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TechnicianManagement from "../components/resources/TechnicianManagement";
import EquipmentInventory from "../components/resources/EquipmentInventory";
import ToolsInventory from "../components/resources/ToolsInventory";
import "../styles/ResourcesPage.css";

function ResourcesPage({ isSidebarOpen, setPageTitle }) {
  const [activeTab, setActiveTab] = useState("technicians"); // State to track active tab

  useEffect(() => {
    setPageTitle("Resources");
  }, [setPageTitle]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="resources-container">
      <div className="resources-page">
        {/* <div className={`sidebar ${isSidebarOpen ? "" : "open"}`}>
          <Link to="/projects" className="sidebar-item">
            <FontAwesomeIcon icon={faProjectDiagram} className="sidebar-icon" />
            {isSidebarOpen && <span>Projects</span>}
          </Link>
          <Link to="/tasks" className="sidebar-item">
            <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
            {isSidebarOpen && <span>Tasks</span>}
          </Link>
          <Link to="/analytics" className="sidebar-item">
            <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
            {isSidebarOpen && <span>Analytics</span>}
          </Link>
          <Link to="/inventory" className="sidebar-item">
            <FontAwesomeIcon icon={faBoxes} className="sidebar-icon" />
            {isSidebarOpen && <span>Inventory</span>}
          </Link>
        </div> */}
        <main className="content">
          <div className="page-header">
            {/* <div className="page-title">Resource Management</div> */}
            <div className="breadcrumb">
              <Link to="/dashboard">Dashboard</Link> / Resource Management
            </div>
          </div>
          <div className="tabs">
            <button
              className={`tab ${activeTab === "technicians" ? "active" : ""}`}
              onClick={() => handleTabChange("technicians")}
            >
              Technician Management
            </button>
            <button
              className={`tab ${activeTab === "equipment" ? "active" : ""}`}
              onClick={() => handleTabChange("equipment")}
            >
              Equipment Inventory
            </button>
            <button
              className={`tab ${activeTab === "tools" ? "active" : ""}`}
              onClick={() => handleTabChange("tools")}
            >
              Tools Inventory
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "technicians" && <TechnicianManagement />}
            {activeTab === "equipment" && <EquipmentInventory />}
            {activeTab === "tools" && <ToolsInventory />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default ResourcesPage;