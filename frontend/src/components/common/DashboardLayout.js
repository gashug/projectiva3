// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from 'react-router-dom';

// function DashboardLayout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="dashboard-layout">
//       <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//       <div className="page-content" style={{ display: "flex", width: "100%" }}>
//         {isSidebarOpen && (
//           <div
//             className={`sidebar ${isSidebarOpen ? "" : "closed"}`}
//             style={{ width: isSidebarOpen ? "200px" : "60px" }}
//           >
//             <Link to="/projects" className="sidebar-item">
//               <FontAwesomeIcon
//                 icon="fa-solid fa-diagram-project"
//                 className="sidebar-icon"
//               />
//               {isSidebarOpen && <span>Projects</span>}
//             </Link>
//             <Link to="/tasks" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-tasks" className="sidebar-icon" />
//               {isSidebarOpen && <span>Tasks</span>}
//             </Link>
//             <Link to="/analytics" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-chart-bar" className="sidebar-icon" />
//               {isSidebarOpen && <span>Analytics</span>}
//             </Link>
//             <Link to="/inventory" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-boxes" className="sidebar-icon" />
//               {isSidebarOpen && <span>Inventory</span>}
//             </Link>
//           </div>
//         )}
//         <div
//           className="main-content"
//           style={{
//             flexGrow: 1,
//             paddingLeft: isSidebarOpen ? "20px" : "0",
//             width: '100%'
//           }}
//         >
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

// function DashboardLayout({ isSidebarOpen, toggleSidebar, setPageTitle, children }) {
//   return (
//     <div className="dashboard-layout">
//       <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} setPageTitle={setPageTitle} />
//       <div className="page-content" style={{ display: 'flex', width: '100%' }}>
//         {isSidebarOpen && (
//           <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`} style={{ width: isSidebarOpen ? '200px' : '60px' }}>
//             <Link to="/projects" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-diagram-project" className="sidebar-icon" />
//               {isSidebarOpen && <span>Projects</span>}
//             </Link>
//             <Link to="/tasks" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-tasks" className="sidebar-icon" />
//               {isSidebarOpen && <span>Tasks</span>}
//             </Link>
//             <Link to="/analytics" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-chart-bar" className="sidebar-icon" />
//               {isSidebarOpen && <span>Analytics</span>}
//             </Link>
//             <Link to="/inventory" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-boxes" className="sidebar-icon" />
//               {isSidebarOpen && <span>Inventory</span>}
//             </Link>
//           </div>
//         )}
//         <div style={{ flexGrow: 1, paddingLeft: isSidebarOpen ? '20px' : '0' }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

// function DashboardLayout({ isSidebarOpen, toggleSidebar, setPageTitle, children }) {
//   return (
//     <div className="dashboard-layout">
//       <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} pageTitle={setPageTitle} />
//       <div className="page-content" style={{ display: 'flex', width: '100%' }}>
//         {isSidebarOpen && (
//           <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`} style={{ width: isSidebarOpen ? '200px' : '60px' }}>
//             <Link to="/projects" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-diagram-project" className="sidebar-icon" />
//               {isSidebarOpen && <span>Projects</span>}
//             </Link>
//             <Link to="/tasks" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-tasks" className="sidebar-icon" />
//               {isSidebarOpen && <span>Tasks</span>}
//             </Link>
//             <Link to="/analytics" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-chart-bar" className="sidebar-icon" />
//               {isSidebarOpen && <span>Analytics</span>}
//             </Link>
//             <Link to="/inventory" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-boxes" className="sidebar-icon" />
//               {isSidebarOpen && <span>Inventory</span>}
//             </Link>
//           </div>
//         )}
//         <div style={{ flexGrow: 1, paddingLeft: isSidebarOpen ? '20px' : '0' }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

// function DashboardLayout({ isSidebarOpen, toggleSidebar, setPageTitle, children }) {
//   return (
//     <div className="dashboard-layout">
//       <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} pageTitle={setPageTitle} />
//       <div className="page-content" style={{ display: 'flex', width: '100%' }}>
//         {isSidebarOpen && (
//           <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`} style={{ width: isSidebarOpen ? '200px' : '60px' }}>
//             <Link to="/projects" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-diagram-project" className="sidebar-icon" />
//               {isSidebarOpen && <span>Projects</span>}
//             </Link>
//             <Link to="/tasks" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-tasks" className="sidebar-icon" />
//               {isSidebarOpen && <span>Tasks</span>}
//             </Link>
//             <Link to="/analytics" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-chart-bar" className="sidebar-icon" />
//               {isSidebarOpen && <span>Analytics</span>}
//             </Link>
//             <Link to="/inventory" className="sidebar-item">
//               <FontAwesomeIcon icon="fa-solid fa-boxes" className="sidebar-icon" />
//               {isSidebarOpen && <span>Inventory</span>}
//             </Link>
//           </div>
//         )}
//         <div style={{ flexGrow: 1, paddingLeft: isSidebarOpen ? '20px' : '0' }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import './styles/DashboardLayout.css';

// function DashboardLayout({ isSidebarOpen, toggleSidebar, setPageTitle, children }) {
//   return (
//     <div className="dashboard-layout">
//       <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} pageTitle={setPageTitle} />
//       <div className="page-content">
//         <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`} style={{ width: isSidebarOpen ? '200px' : '60px' }}>
//           <Link to="/projects" className="sidebar-item">
//             <FontAwesomeIcon icon="fa-solid fa-diagram-project" className="sidebar-icon" />
//             {isSidebarOpen && <span>Projects</span>}
//           </Link>
//           <Link to="/tasks" className="sidebar-item">
//             <FontAwesomeIcon icon="fa-solid fa-tasks" className="sidebar-icon" />
//             {isSidebarOpen && <span>Tasks</span>}
//           </Link>
//           <Link to="/analytics" className="sidebar-item">
//             <FontAwesomeIcon icon="fa-solid fa-chart-bar" className="sidebar-icon" />
//             {isSidebarOpen && <span>Analytics</span>}
//           </Link>
//           <Link to="/inventory" className="sidebar-item">
//             <FontAwesomeIcon icon="fa-solid fa-boxes" className="sidebar-icon" />
//             {isSidebarOpen && <span>Inventory</span>}
//           </Link>
//         </div>
//         <div className="main-content" style={{ paddingLeft: '20px', width: '100%' }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import './styles/DashboardLayout.css';

// function DashboardLayout({ isSidebarOpen, toggleSidebar, setPageTitle, children }) {
//   return (
//     <div className="dashboard-layout">
//       <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} pageTitle={setPageTitle} />
//       <div className="page-wrapper">
//         <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`} style={{ width: isSidebarOpen ? '200px' : '60px' }}>
//         <Link to="/dashboard" className="sidebar-item">
//             <FontAwesomeIcon icon="fa-solid fa-diagram-home" className="sidebar-icon" />
//             {isSidebarOpen && <span>Dashboard</span>}
//           </Link>
//           <Link to="/projects" className="sidebar-item">
//             <FontAwesomeIcon icon="fa-solid fa-diagram-project" className="sidebar-icon" />
//             {isSidebarOpen && <span>Projects</span>}
//           </Link>
//           <Link to="/tasks" className="sidebar-item">
//             <FontAwesomeIcon icon="fa-solid fa-tasks" className="sidebar-icon" />
//             {isSidebarOpen && <span>Tasks</span>}
//           </Link>
//           <Link to="/analytics" className="sidebar-item">
//             <FontAwesomeIcon icon="fa-solid fa-chart-bar" className="sidebar-icon" />
//             {isSidebarOpen && <span>Analytics</span>}
//           </Link>
//           <Link to="/resources" className="sidebar-item">
//             <FontAwesomeIcon icon="fa-solid fa-boxes" className="sidebar-icon" />
//             {isSidebarOpen && <span>Inventory</span>}
//           </Link>
//         </div>
//         <div className="content-wrapper" style={{ paddingLeft: '20px', width: '100%' }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/DashboardLayout.css";

function DashboardLayout({
  isSidebarOpen,
  toggleSidebar,
  setPageTitle,
  children,
}) {
  return (
    <div className="dashboard-layout">
      <Navbar
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        setPageTitle={setPageTitle}
      />
      <div className="page-wrapper">
        <div
          className={`sidebar ${isSidebarOpen ? "" : "closed"}`}
          style={{ width: isSidebarOpen ? "" : "open" }}
        >
          <Link to="/dashboard" className="sidebar-item">
            <FontAwesomeIcon
              icon="fa-solid fa-house"
              className="sidebar-icon"
            />
            {isSidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link to="/projects" className="sidebar-item">
            <FontAwesomeIcon
              icon="fa-solid fa-diagram-project"
              className="sidebar-icon"
            />
            {isSidebarOpen && <span>Projects</span>}
          </Link>
          <Link to="/tasks" className="sidebar-item">
            <FontAwesomeIcon icon="fa-solid fa-tasks" className="sidebar-icon" />
            {isSidebarOpen && <span>Tasks</span>}
          </Link>
          <Link to="/analytics" className="sidebar-item">
            <FontAwesomeIcon
              icon="fa-solid fa-chart-bar"
              className="sidebar-icon"
            />
            {isSidebarOpen && <span>Analytics</span>}
          </Link>
          <Link to="/resources" className="sidebar-item">
            <FontAwesomeIcon icon="fa-solid fa-boxes" className="sidebar-icon" />
            {isSidebarOpen && <span>Inventory</span>}
          </Link>
        </div>
        <div
          className="main-content"
          style={{
            paddingLeft: "20px",
            width: isSidebarOpen ? "calc(100% - 200px)" : "calc(100% - 60px)",
            marginLeft: isSidebarOpen ? "200px" : "60px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;