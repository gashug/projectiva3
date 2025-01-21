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

// Path: frontend/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import ProjectDetailsPage from './pages/ProjectDetailsPage.js';
import TasksPage from './pages/TasksPage.js';
import ResourcesPage from './pages/ResourcesPage.js';
import ClientsPage from './pages/ClientsPage.js';
import AnalyticsPage from './pages/AnalyticsPage.js';
import AdminPage from './pages/AdminPage.js';
import LandingPage  from './pages/LandingPage.js';
import FeaturesPage from './pages/FeaturesPage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';

// import './App.css';
function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add more routes for other pages */}
      </Routes>
  );
}

export default App;

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