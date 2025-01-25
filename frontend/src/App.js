// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// // Path: frontend/src/App.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import DashboardPage from './pages/DashboardPage.js';
// import ProjectsPage from './pages/ProjectsPage.js';
// import ProjectDetailsPage from './pages/ProjectDetailsPage.js';
// import TasksPage from './pages/TasksPage.js';
// import ResourcesPage from './pages/ResourcesPage.js';
// import ClientsPage from './pages/ClientsPage.js';
// import AnalyticsPage from './pages/AnalyticsPage.js';
// import AdminPage from './pages/AdminPage.js';
// import LandingPage  from './pages/LandingPage.js';
// import FeaturesPage from './pages/FeaturesPage.js';
// import AboutPage from './pages/AboutPage.js';
// import ContactPage from './pages/ContactPage.js';

// // import './App.css';
// function App() {
//   return (
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/projects" element={<ProjectsPage />} />
//         <Route path="/projects/:id" element={<ProjectDetailsPage />} />
//         <Route path="/tasks" element={<TasksPage />} />
//         <Route path="/resources" element={<ResourcesPage />} />
//         <Route path="/clients" element={<ClientsPage />} />
//         <Route path="/analytics" element={<AnalyticsPage />} />
//         <Route path="/admin" element={<AdminPage />} />
//         <Route path="/features" element={<FeaturesPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         {/* Add more routes for other pages */}
//       </Routes>
//   );
// }

// export default App;

// // src/App.js (Revised)
// import React from 'react';
// import { Routes, Route, Outlet } from 'react-router-dom';
// import DashboardPage from './pages/DashboardPage.js';
// import ProjectsPage from './pages/ProjectsPage.js'; // Assuming you rename ProjectDetailsPage.js
// import ProjectDetailsPage from './pages/ProjectDetailsPage.js';
// import TasksPage from './pages/TasksPage.js';
// import ResourcesPage from './pages/ResourcesPage.js';
// import ClientsPage from './pages/ClientsPage.js';
// import AnalyticsPage from './pages/AnalyticsPage.js';
// import AdminPage from './pages/AdminPage.js';
// import LandingPage from './pages/LandingPage.js';
// import FeaturesPage from './pages/FeaturesPage.js';
// import AboutPage from './pages/AboutPage.js';
// import ContactPage from './pages/ContactPage.js';
// import Layout from './components/common/Layout.js';

// function App() {
//   return (
//       <Routes>
//         <Route path="/" element={<Layout><LandingPage /></Layout>} />
//           {/* Nested routes within Layout */}
//           <Route path="/" element={<Layout><Outlet /></Layout>}>
//           <Route path="dashboard" element={<DashboardPage />} />
//           <Route path="projects" element={<ProjectsPage />} />
//           <Route path="projects/:id" element={<ProjectDetailsPage />} />
//           <Route path="tasks" element={<TasksPage />} />
//           <Route path="resources" element={<ResourcesPage />} />
//           <Route path="clients" element={<ClientsPage />} />
//           <Route path="analytics" element={<AnalyticsPage />} />
//           <Route path="admin" element={<AdminPage />} />
//           <Route path="features" element={<FeaturesPage />} />
//           <Route path="about" element={<AboutPage />} />
//           <Route path="contact" element={<ContactPage />} />
//         </Route>
//       </Routes>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import DashboardPage from "./pages/DashboardPage.js";
// import ProjectsPage from "./pages/ProjectsPage.js";
// import ProjectDetailsPage from "./pages/ProjectDetailsPage.js";
// // import CreateProjectPage from "./pages/CreateProjectPage.js";
// import TasksPage from "./pages/TasksPage.js";
// import ResourcesPage from "./pages/ResourcesPage.js";
// import ClientsPage from "./pages/ClientsPage.js";
// import AnalyticsPage from "./pages/AnalyticsPage.js";
// import AdminPage from "./pages/AdminPage.js";
// import LandingPage from "./pages/LandingPage.js";
// import FeaturesPage from "./pages/FeaturesPage.js";
// import AboutPage from "./pages/AboutPage.js";
// import ContactPage from "./pages/ContactPage.js";
// import Navbar from "./components/common/Navbar.js";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faTasks,
//   faProjectDiagram,
//   faChartBar,
//   faBoxes,
// } from "@fortawesome/free-solid-svg-icons";

// library.add(faTasks, faProjectDiagram, faChartBar, faBoxes);

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="app-container">
//       <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
//       <div className="page-content" style={{ display: "flex" }}>
//         <div
//           className={`sidebar ${isSidebarOpen ? "" : "closed"}`}
//           style={{ width: isSidebarOpen ? "200px" : "60px" }}
//         >
//           {/* Your sidebar items here */}
//         </div>
//         <div
//           className="main-content"
//           style={{ flexGrow: 1, paddingLeft: isSidebarOpen ? "20px" : "0" }}
//         >
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route
//               path="/dashboard"
//               element={<DashboardPage isSidebarOpen={isSidebarOpen} />}
//             />
//             <Route
//               path="/projects"
//               element={<ProjectsPage isSidebarOpen={isSidebarOpen} />}
//             />
//             <Route
//               path="/projects/:id"
//               element={<ProjectDetailsPage isSidebarOpen={isSidebarOpen} />}
//             />
//             {/* <Route
//               path="/projects/create"
//               element={<CreateProjectPage />}
//             /> */}
//             <Route path="/tasks" element={<TasksPage />} />
//             <Route path="/resources" element={<ResourcesPage />} />
//             <Route path="/clients" element={<ClientsPage />} />
//             <Route path="/analytics" element={<AnalyticsPage />} />
//             <Route path="/admin" element={<AdminPage />} />
//             <Route path="/features" element={<FeaturesPage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import DashboardPage from "./pages/DashboardPage.js";
// import ProjectsPage from "./pages/ProjectsPage.js";
// import ProjectDetailsPage from "./pages/ProjectDetailsPage.js";
// // import CreateProjectPage from "./pages/CreateProjectPage.js";
// import TasksPage from "./pages/TasksPage.js";
// import ResourcesPage from "./pages/ResourcesPage.js";
// import ClientsPage from "./pages/ClientsPage.js";
// import AnalyticsPage from "./pages/AnalyticsPage.js";
// import AdminPage from "./pages/AdminPage.js";
// import LandingPage from "./pages/LandingPage.js";
// import FeaturesPage from "./pages/FeaturesPage.js";
// import AboutPage from "./pages/AboutPage.js";
// import ContactPage from "./pages/ContactPage.js";
// import Navbar from "./components/common/Navbar.js";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faTasks,
//   faProjectDiagram,
//   faChartBar,
//   faBoxes,
// } from "@fortawesome/free-solid-svg-icons";
// import Layout from "./components/common/Layout.js";

// library.add(faTasks, faProjectDiagram, faChartBar, faBoxes);

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [pageTitle, setPageTitle] = useState("");
  
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="app-container">
//       <Navbar
//         toggleSidebar={toggleSidebar}
//         isSidebarOpen={isSidebarOpen}
//         pageTitle={pageTitle}
//       />
//       <div className="page-content" style={{ display: "flex", width: "100%" }}>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route
//             path="/api/dashboard"
//             element={
//               <DashboardPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//               />
//             }
//           />
//           <Route
//             path="/api/projects"
//             element={
//               <ProjectsPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//               />
//             }
//           />
//           <Route
//             path="/api/projects/:id"
//             element={
//               <ProjectDetailsPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//               />
//             }
//           />
//           {/* <Route path="/projects/create" element={<CreateProjectPage />} /> */}
//           <Route path="/tasks" element={<TasksPage />} />
//           <Route path="/resources" element={<ResourcesPage />} />
//           <Route path="/clients" element={<ClientsPage />} />
//           <Route path="/analytics" element={<AnalyticsPage />} />
//           <Route path="/admin" element={<AdminPage />} />
//           <Route path="/features" element={<FeaturesPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }


// export default App;

// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import DashboardPage from "./pages/DashboardPage.js";
// import ProjectsPage from "./pages/ProjectsPage.js";
// import ProjectDetailsPage from "./pages/ProjectDetailsPage.js";
// import TasksPage from "./pages/TasksPage.js";
// import ResourcesPage from "./pages/ResourcesPage.js";
// import ClientsPage from "./pages/ClientsPage.js";
// import AnalyticsPage from "./pages/AnalyticsPage.js";
// import AdminPage from "./pages/AdminPage.js";
// import LandingPage from "./pages/LandingPage.js";
// import FeaturesPage from "./pages/FeaturesPage.js";
// import AboutPage from "./pages/AboutPage.js";
// import ContactPage from "./pages/ContactPage.js";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faTasks,
//   faProjectDiagram,
//   faChartBar,
//   faBoxes,
// } from "@fortawesome/free-solid-svg-icons";
// import DashboardLayout from "./components/common/DashboardLayout.js";

// library.add(faTasks, faProjectDiagram, faChartBar, faBoxes);

// function App() {
//   return (
//     <div className="app-container">
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/dashboard" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />
//         <Route path="/projects" element={<DashboardLayout><ProjectsPage /></DashboardLayout>} />
//         <Route path="/projects/:id" element={<DashboardLayout><ProjectDetailsPage /></DashboardLayout>} />
//         {/* <Route path="/projects/create" element={<CreateProjectPage />} /> */}
//         <Route path="/tasks" element={<DashboardLayout><TasksPage /></DashboardLayout>} />
//         <Route path="/resources" element={<DashboardLayout><ResourcesPage /></DashboardLayout>} />
//         <Route path="/clients" element={<DashboardLayout><ClientsPage /></DashboardLayout>} />
//         <Route path="/analytics" element={<DashboardLayout><AnalyticsPage /></DashboardLayout>} />
//         <Route path="/admin" element={<DashboardLayout><AdminPage /></DashboardLayout>} />
//         <Route path="/features" element={<DashboardLayout><FeaturesPage /></DashboardLayout>} />
//         <Route path="/about" element={<DashboardLayout><AboutPage /></DashboardLayout>} />
//         <Route path="/contact" element={<DashboardLayout><ContactPage /></DashboardLayout>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import DashboardPage from "./pages/DashboardPage.js";
// import ProjectsPage from "./pages/ProjectsPage.js";
// import ProjectDetailsPage from "./pages/ProjectDetailsPage.js";
// import TasksPage from "./pages/TasksPage.js";
// import ResourcesPage from "./pages/ResourcesPage.js";
// import ClientsPage from "./pages/ClientsPage.js";
// import AnalyticsPage from "./pages/AnalyticsPage.js";
// import AdminPage from "./pages/AdminPage.js";
// import LandingPage from "./pages/LandingPage.js";
// import FeaturesPage from "./pages/FeaturesPage.js";
// import AboutPage from "./pages/AboutPage.js";
// import ContactPage from "./pages/ContactPage.js";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faTasks,
//   faProjectDiagram,
//   faChartBar,
//   faBoxes,
// } from "@fortawesome/free-solid-svg-icons";
// import DashboardLayout from "./components/common/DashboardLayout.js";

// library.add(faTasks, faProjectDiagram, faChartBar, faBoxes);

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [pageTitle, setPageTitle] = useState("");

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="app-container">
//       <DashboardLayout toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} setPageTitle={setPageTitle}>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route
//             path="/dashboard"
//             element={
//               <DashboardPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//               />
//             }
//           />
//           <Route
//             path="/projects"
//             element={
//               <ProjectsPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//               />
//             }
//           />
//           <Route
//             path="/projects/:id"
//             element={
//               <ProjectDetailsPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//               />
//             }
//           />
//           {/* <Route path="/projects/create" element={<CreateProjectPage />} /> */}
//           <Route path="/tasks" element={<TasksPage />} />
//           <Route path="/resources" element={<ResourcesPage />} />
//           <Route path="/clients" element={<ClientsPage />} />
//           <Route path="/analytics" element={<AnalyticsPage />} />
//           <Route path="/admin" element={<AdminPage />} />
//           <Route path="/features" element={<FeaturesPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>
//       </DashboardLayout>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import DashboardPage from "./pages/DashboardPage.js";
// import ProjectsPage from "./pages/ProjectsPage.js";
// import ProjectDetailsPage from "./pages/ProjectDetailsPage.js";
// import TasksPage from "./pages/TasksPage.js";
// import ResourcesPage from "./pages/ResourcesPage.js";
// import ClientsPage from "./pages/ClientsPage.js";
// import AnalyticsPage from "./pages/AnalyticsPage.js";
// import AdminPage from "./pages/AdminPage.js";
// import LandingPage from "./pages/LandingPage.js";
// import FeaturesPage from "./pages/FeaturesPage.js";
// import AboutPage from "./pages/AboutPage.js";
// import ContactPage from "./pages/ContactPage.js";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faTasks,
//   faProjectDiagram,
//   faChartBar,
//   faBoxes,
// } from "@fortawesome/free-solid-svg-icons";
// import DashboardLayout from "./components/common/DashboardLayout.js";

// library.add(faTasks, faProjectDiagram, faChartBar, faBoxes);

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [pageTitle, setPageTitle] = useState("");

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="app-container">
//       <DashboardLayout
//         toggleSidebar={toggleSidebar}
//         isSidebarOpen={isSidebarOpen}
//         setPageTitle={setPageTitle}
//       >
//         <Routes>
//           <Route path="/" element={<LandingPage setPageTitle={setPageTitle} />} />
//           <Route
//             path="/dashboard"
//             element={
//               <DashboardPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//               />
//             }
//           />
//           <Route
//             path="/projects"
//             element={
//               <ProjectsPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//               />
//             }
//           />
//           <Route
//             path="/projects/:id"
//             element={
//               <ProjectDetailsPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//                 toggleSidebar={toggleSidebar}
//               />
//             }
//           />
//           {/* <Route path="/projects/create" element={<CreateProjectPage />} /> */}
//           <Route path="/tasks" element={<TasksPage setPageTitle={setPageTitle} />} />
//           <Route
//             path="/resources"
//             element={<ResourcesPage setPageTitle={setPageTitle} />}
//           />
//           <Route
//             path="/clients"
//             element={<ClientsPage setPageTitle={setPageTitle} />}
//           />
//           <Route
//             path="/analytics"
//             element={<AnalyticsPage setPageTitle={setPageTitle} />}
//           />
//           <Route path="/admin" element={<AdminPage setPageTitle={setPageTitle} />} />
//           <Route
//             path="/features"
//             element={<FeaturesPage setPageTitle={setPageTitle} />}
//           />
//           <Route
//             path="/about"
//             element={<AboutPage setPageTitle={setPageTitle} />}
//           />
//           <Route
//             path="/contact"
//             element={<ContactPage setPageTitle={setPageTitle} />}
//           />
//         </Routes>
//       </DashboardLayout>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import DashboardPage from "./pages/DashboardPage.js";
// import ProjectsPage from "./pages/ProjectsPage.js";
// import ProjectDetailsPage from "./pages/ProjectDetailsPage.js";
// import TasksPage from "./pages/TasksPage.js";
// import ResourcesPage from "./pages/ResourcesPage.js";
// import ClientsPage from "./pages/ClientsPage.js";
// import AnalyticsPage from "./pages/AnalyticsPage.js";
// import AdminPage from "./pages/AdminPage.js";
// import LandingPage from "./pages/LandingPage.js";
// import FeaturesPage from "./pages/FeaturesPage.js";
// import AboutPage from "./pages/AboutPage.js";
// import ContactPage from "./pages/ContactPage.js";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faTasks,
//   faProjectDiagram,
//   faChartBar,
//   faBoxes,
// } from "@fortawesome/free-solid-svg-icons";
// import DashboardLayout from "./components/common/DashboardLayout.js";

// library.add(faTasks, faProjectDiagram, faChartBar, faBoxes);

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [pageTitle, setPageTitle] = useState("");

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="app-container">
//       <Routes>
//       <Route path="/" element={<LandingPage />} />
//       </ Routes>
//       <DashboardLayout
//         toggleSidebar={toggleSidebar}
//         isSidebarOpen={isSidebarOpen}
//         setPageTitle={setPageTitle}
//       >
//         <Routes>
//           <Route
//             path="/dashboard"
//             element={
//               <DashboardPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//               />
//             }
//           />
//           <Route
//             path="/projects"
//             element={
//               <ProjectsPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//               />
//             }
//           />
//           <Route
//             path="/projects/:id"
//             element={
//               <ProjectDetailsPage
//                 isSidebarOpen={isSidebarOpen}
//                 setPageTitle={setPageTitle}
//                 toggleSidebar={toggleSidebar}
//               />
//             }
//           />
//           {/* <Route path="/projects/create" element={<CreateProjectPage />} /> */}
//           <Route 
//             path="/tasks" 
//             element={<TasksPage setPageTitle={setPageTitle} />}
//           />
//           <Route
//             path="/resources"
//             element={<ResourcesPage setPageTitle={setPageTitle} />}
//           />
//           <Route
//             path="/clients"
//             element={<ClientsPage setPageTitle={setPageTitle} />}
//           />
//           <Route
//             path="/analytics"
//             element={<AnalyticsPage setPageTitle={setPageTitle} />}
//           />
//           <Route
//             path="/admin"
//             element={<AdminPage setPageTitle={setPageTitle} />}
//           />
//           <Route
//             path="/features"
//             element={<FeaturesPage setPageTitle={setPageTitle} />}
//           />
//           <Route
//             path="/about"
//             element={<AboutPage setPageTitle={setPageTitle} />}
//           />
//           <Route
//             path="/contact"
//             element={<ContactPage setPageTitle={setPageTitle} />}
//           />
//         </Routes>
//       </DashboardLayout>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import ProjectDetailsPage from "./pages/ProjectDetailsPage.js";
import TasksPage from "./pages/TasksPage.js";
import ResourcesPage from "./pages/ResourcesPage.js";
import ClientsPage from "./pages/ClientsPage.js";
import AnalyticsPage from "./pages/AnalyticsPage.js";
import AdminPage from "./pages/AdminPage.js";
import LandingPage from "./pages/LandingPage.js";
import FeaturesPage from "./pages/FeaturesPage.js";
import AboutPage from "./pages/AboutPage.js";
import ContactPage from "./pages/ContactPage.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTasks,
  faProjectDiagram,
  faChartBar,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons";
import DashboardLayout from "./components/common/DashboardLayout.js";

library.add(faTasks, faProjectDiagram, faChartBar, faBoxes);

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [pageTitle, setPageTitle] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LandingPage setPageTitle={setPageTitle} />} />
        <Route
          path="*"
          element={
            <DashboardLayout
              toggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
              setPageTitle={setPageTitle}
            >
              <Routes>
                <Route
                  path="/dashboard"
                  element={
                    <DashboardPage
                      isSidebarOpen={isSidebarOpen}
                      setPageTitle={setPageTitle}
                    />
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <ProjectsPage
                      isSidebarOpen={isSidebarOpen}
                      setPageTitle={setPageTitle}
                    />
                  }
                />
                <Route
                  path="/projects/:id"
                  element={
                    <ProjectDetailsPage
                      isSidebarOpen={isSidebarOpen}
                      setPageTitle={setPageTitle}
                      toggleSidebar={toggleSidebar}
                    />
                  }
                />
                <Route path="/tasks" element={<TasksPage setPageTitle={setPageTitle} isSidebarOpen={isSidebarOpen} />} />
                <Route
                  path="/resources"
                  element={<ResourcesPage setPageTitle={setPageTitle} />}
                />
                <Route
                  path="/clients"
                  element={<ClientsPage setPageTitle={setPageTitle} />}
                />
                <Route
                  path="/analytics"
                  element={<AnalyticsPage setPageTitle={setPageTitle} />}
                />
                <Route
                  path="/admin"
                  element={<AdminPage setPageTitle={setPageTitle} />}
                />
                <Route
                  path="/features"
                  element={<FeaturesPage setPageTitle={setPageTitle} />}
                />
                <Route
                  path="/about"
                  element={<AboutPage setPageTitle={setPageTitle} />}
                />
                <Route
                  path="/contact"
                  element={<ContactPage setPageTitle={setPageTitle} />}
                />
              </Routes>
            </DashboardLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;