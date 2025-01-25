// import React from "react"; 
// import Header from "./Header.js";
// import Footer from "./Footer.js";
// import SearchBar from "./SearchBar.js";

// function Layout({ children }) {
//     return (
//         <div>
//             <Header />
//             <SearchBar />
//             {children}
//             <Footer />
//         </div>
//     );
// }

// export default Layout;
// src/components/common/Layout.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faProjectDiagram, faChartBar, faBoxes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Layout({ isSidebarOpen, children }) {
  return (
    <div className="page-content" style={{ display: 'flex', width: '100%' }}>
      {isSidebarOpen && (
        <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`} style={{ width: isSidebarOpen ? '200px' : '60px' }}>
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
        </div>
      )}
      <div style={{ flexGrow: 1, paddingLeft: isSidebarOpen ? '20px' : '0' }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;