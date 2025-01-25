// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import API from "../api/index.js";
// import "../styles/ProjectDetailsPage.css"; // Import CSS file for styling

// function ProjectDetailsPage() {
//   const { id } = useParams(); // Get the project ID from the URL
//   const [project, setProject] = useState(null);
//   const [projectStages, setProjectStages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const projectResponse = await API.get(`/api/projects/${id}`);
//         setProject(projectResponse.data);
//         setProjectStages(projectResponse.data.stages); // Fetch stages from project data
//         // ... other data fetching
//       } catch (error) {
//         // ... error handling
//       } finally {
//         // ...
//       }
//     };


//     fetchProject();
//   }, [id]); // Re-fetch when the project ID changes

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   if (!project) {
//     return <div className="not-found">Project not found.</div>;
//   }

//   return (
//     <div className="project-details-page">
//       <div className="project-details-content">
//         <div className="project-details-header">
//           <h2>{project.name}</h2>
//         </div>

//         <div className="project-details-body">
//           <div className="project-info">
//             {/* Left Column: Project Overview */}
//             <div className="project-overview-section">
//               <h3>Project Overview</h3>
//               <ul>
//                 <li>
//                   <strong>Type:</strong> {project.type}
//                 </li>
//                 <li>
//                   <strong>Client:</strong> {project.client_id}
//                 </li>
//                 <li>
//                   <strong>Location:</strong> {project.location}
//                 </li>
//                 <li>
//                   <strong>Start Date:</strong> {project.start_date}
//                 </li>
//                 <li>
//                   <strong>End Date:</strong> {project.end_date}
//                 </li>
//                 <li>
//                   <strong>Status:</strong> {project.status}
//                 </li>
//                 {/* Add more fields as needed */}
//               </ul>
//             </div>

//             {/* Left Column: Quick Stats */}
//             <div className="quick-stats-section">
//               <h3>Quick Stats</h3>
//               <ul>
//                 <li>
//                   <strong>Completion:</strong> 80%
//                 </li>{" "}
//                 {/* Example data */}
//                 <li>
//                   <strong>Tasks:</strong> 15/20
//                 </li>{" "}
//                 {/* Example data */}
//                 <li>
//                   <strong>Resources Allocated:</strong> 8
//                 </li>{" "}
//                 {/* Example data */}
//                 {/* Add more stats as needed */}
//               </ul>
//             </div>
//           </div>

//           <div className="project-details">
//             {/* Right Column: Project Stages and Progress */}
//             <div className="project-stages-section">
//               <h3>Project Stages and Progress</h3>
//               {/* Add a component or section for displaying project stages here */}
//             </div>

//             {/* Right Column: Task Management */}
//             <div className="task-management-section">
//               <h3>Task Management</h3>
//               {/* Add a component or section for managing tasks here */}
//             </div>

//             {/* Right Column: Document Upload */}
//             <div className="document-upload-section">
//               <h3>Document Upload</h3>
//               {/* Add a component or section for document uploading here */}
//             </div>

//             {/* Right Column: Activity Log */}
//             <div className="activity-log-section">
//               <h3>Activity Log</h3>
//               {/* Add a component or section for displaying activity logs here */}
//             </div>

//             {/* Right Column: Comments */}
//             <div className="comments-section">
//               <h3>Comments</h3>
//               {/* Add a component or section for comments here */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetailsPage;

// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import API from "../api/index.js";
// import ProjectStages from "../components/projects/ProjectStages.js";
// // import {
// //   faTasks,
// //   faProjectDiagram,
// //   faChartBar,
// //   faBoxes,
// // } from "@fortawesome/free-solid-svg-icons";
// // import { Link } from "react-router-dom";
// import "../styles/ProjectDetailsPage.css"; // Import CSS file for styling

// function ProjectDetailsPage({ isSidebarOpen }) {
//   const { id } = useParams(); // Get the project ID from the URL
//   const [project, setProject] = useState(null);
//   const [projectStages, setProjectStages] = useState([]); // State for project stages
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const projectResponse = await API.get(`/api/projects/${id}`);
//         setProject(projectResponse.data);
//         console.log("Project Data:", projectResponse.data);
//         setProjectStages(projectResponse.data.stages); // Fetch stages from project data
//       } catch (error) {
//         console.error("Error fetching project details:", error);
//         setError("Failed to load project details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProject();
//   }, [id]); // Re-fetch when the project ID changes

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   if (!project) {
//     return <div className="not-found">Project not found.</div>;
//   }

//   return (
//     <div className="project-details-page">
//       {/* <div className={`sidebar ${isSidebarOpen ? "" : "open"}`}>
//         <Link to="/projects" className="sidebar-item">
//           <FontAwesomeIcon icon={faProjectDiagram} className="sidebar-icon" />
//           {isSidebarOpen && <span>Projects</span>}
//         </Link>
//         <Link to="/tasks" className="sidebar-item">
//           <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
//           {isSidebarOpen && <span>Tasks</span>}
//         </Link>
//         <Link to="/analytics" className="sidebar-item">
//           <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
//           {isSidebarOpen && <span>Analytics</span>}
//         </Link>
//         <Link to="/inventory" className="sidebar-item">
//           <FontAwesomeIcon icon={faBoxes} className="sidebar-icon" />
//           {isSidebarOpen && <span>Inventory</span>}
//         </Link>
//       </div> */}
//       <div className="project-details-content">
//         <div className="project-details-header">
//           <h2>{project.name}</h2>
//         </div>

//         <div className="project-details-body">
//           <div className="project-info">
//             {/* Left Column: Project Overview */}
//             <div className="project-overview-section">
//               <h3>Project Overview</h3>
//               <ul>
//                 <li>
//                   <strong>Type:</strong> {project.type}
//                 </li>
//                 <li>
//                   <strong>Client:</strong> {project.client_id}
//                 </li>
//                 <li>
//                   <strong>Location:</strong> {project.location}
//                 </li>
//                 <li>
//                   <strong>Start Date:</strong> {project.start_date}
//                 </li>
//                 <li>
//                   <strong>End Date:</strong> {project.end_date}
//                 </li>
//                 <li>
//                   <strong>Status:</strong> {project.status}
//                 </li>
//                 {/* Add more fields as needed */}
//               </ul>
//             </div>

//             {/* Left Column: Quick Stats */}
//             <div className="quick-stats-section">
//               <h3>Quick Stats</h3>
//               <ul>
//                 <li>
//                   <strong>Completion:</strong> 80%
//                 </li>
//                 <li>
//                   <strong>Tasks:</strong> 15/20
//                 </li>
//                 <li>
//                   <strong>Resources Allocated:</strong> 8
//                 </li>
//                 {/* Add more stats as needed */}
//               </ul>
//             </div>
//           </div>

//           <div className="project-details">
//             {/* Right Column: Project Stages and Progress */}
//             <div className="project-stages-section">
//               <ProjectStages stages={projectStages} />
//             </div>

//             {/* Right Column: Task Management */}
//             <div className="task-management-section">
//               <h3>Task Management</h3>
//               {/* Add a component or section for managing tasks here */}
//             </div>

//             {/* Right Column: Document Upload */}
//             <div className="document-upload-section">
//               <h3>Document Upload</h3>
//               {/* Add a component or section for document uploading here */}
//             </div>

//             {/* Right Column: Activity Log */}
//             <div className="activity-log-section">
//               <h3>Activity Log</h3>
//               {/* Add a component or section for displaying activity logs here */}
//             </div>

//             {/* Right Column: Comments */}
//             <div className="comments-section">
//               <h3>Comments</h3>
//               {/* Add a component or section for comments here */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetailsPage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import API from "../api/index.js";
// import ProjectStages from "../components/projects/ProjectStages.js";
// import {
//   faTasks,
//   faProjectDiagram,
//   faChartBar,
//   faBoxes,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../styles/ProjectDetailsPage.css";

// function ProjectDetailsPage({ isSidebarOpen }) {
//   const { id } = useParams();
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const projectResponse = await API.get(`/api/projects/${id}`);
//         setProject(projectResponse.data);
//         console.log("Project Data:", projectResponse.data);
//       } catch (error) {
//         console.error("Error fetching project details:", error);
//         setError("Failed to load project details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProject();
//   }, [id]);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   if (!project) {
//     return <div className="not-found">Project not found.</div>;
//   }

//   return (
//     <div className="project-details-container">
//       <div className="project-details-page">
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
//         <div className="project-details-main">
//           <div className="project-details-content">
//             <div className="project-details-header">
//               <h2>{project.name}</h2>
//             </div>

//             <div className="project-details-body">
//               <div className="project-info">
//                 {/* Left Column: Project Overview */}
//                 <div className="project-overview-section">
//                   <h3>Project Overview</h3>
//                   <ul>
//                     <li>
//                       <strong>Type:</strong> {project.type}
//                     </li>
//                     <li>
//                       <strong>Client:</strong> {project.client_id}
//                     </li>
//                     <li>
//                       <strong>Location:</strong> {project.location}
//                     </li>
//                     <li>
//                       <strong>Start Date:</strong> {project.start_date}
//                     </li>
//                     <li>
//                       <strong>End Date:</strong> {project.end_date}
//                     </li>
//                     <li>
//                       <strong>Status:</strong> {project.status}
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Left Column: Quick Stats */}
//                 <div className="quick-stats-section">
//                   <h3>Quick Stats</h3>
//                   <ul>
//                     <li>
//                       <strong>Completion:</strong> 80%
//                     </li>
//                     <li>
//                       <strong>Tasks:</strong> 15/20
//                     </li>
//                     <li>
//                       <strong>Resources Allocated:</strong> 8
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="project-details">
//                 {/* Right Column: Project Stages and Progress */}
//                 <div className="project-stages-section">
//                   <ProjectStages stages={project.stages} />
//                 </div>

//                 {/* Right Column: Task Management */}
//                 <div className="task-management-section">
//                   <h3>Task Management</h3>
//                 </div>

//                 {/* Right Column: Document Upload */}
//                 <div className="document-upload-section">
//                   <h3>Document Upload</h3>
//                 </div>

//                 {/* Right Column: Activity Log */}
//                 <div className="activity-log-section">
//                   <h3>Activity Log</h3>
//                 </div>

//                 {/* Right Column: Comments */}
//                 <div className="comments-section">
//                   <h3>Comments</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetailsPage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import API from "../api/index.js";
// import ProjectStages from "../components/projects/ProjectStages.js";
// import {
//   faTasks,
//   faProjectDiagram,
//   faChartBar,
//   faBoxes,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../styles/ProjectDetailsPage.css";

// function ProjectDetailsPage({ isSidebarOpen }) {
//   const { id } = useParams(); // Get the project ID from the URL
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const projectResponse = await API.get(`/api/projects/${id}`);
//         setProject(projectResponse.data);
//         console.log("Project Data:", projectResponse.data);
//       } catch (error) {
//         console.error("Error fetching project details:", error);
//         setError("Failed to load project details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProject();
//   }, [id]); // Re-fetch when the project ID changes

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   if (!project) {
//     return <div className="not-found">Project not found.</div>;
//   }

//   return (
//     <div className="project-details-page">
//       <div className={`sidebar ${isSidebarOpen ? "" : "open"}`}>
//         <Link to="/projects" className="sidebar-item">
//           <FontAwesomeIcon icon={faProjectDiagram} className="sidebar-icon" />
//           {isSidebarOpen && <span>Projects</span>}
//         </Link>
//         <Link to="/tasks" className="sidebar-item">
//           <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
//           {isSidebarOpen && <span>Tasks</span>}
//         </Link>
//         <Link to="/analytics" className="sidebar-item">
//           <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
//           {isSidebarOpen && <span>Analytics</span>}
//         </Link>
//         <Link to="/inventory" className="sidebar-item">
//           <FontAwesomeIcon icon={faBoxes} className="sidebar-icon" />
//           {isSidebarOpen && <span>Inventory</span>}
//         </Link>
//       </div>
//       <div className="project-details-container">
//         <div className="project-details-header">
//           <h2>{project.name}</h2>
//         </div>

//         <div className="project-details-body">
//           <div className="project-stages-section">
//             <ProjectStages stages={project.stages} />
//           </div>

//           <div className="project-info-grid">
//             {/* Project Overview */}
//             <div className="project-info-section">
//               <h3>Project Overview</h3>
//               <ul>
//                 <li>
//                   <strong>Type:</strong> {project.type}
//                 </li>
//                 <li>
//                   <strong>Client:</strong> {project.client_id}
//                 </li>
//                 <li>
//                   <strong>Location:</strong> {project.location}
//                 </li>
//                 <li>
//                   <strong>Start Date:</strong> {project.start_date}
//                 </li>
//                 <li>
//                   <strong>End Date:</strong> {project.end_date}
//                 </li>
//                 <li>
//                   <strong>Status:</strong> {project.status}
//                 </li>
//               </ul>
//             </div>

//             {/* Quick Stats */}
//             <div className="quick-stats-section">
//               <h3>Quick Stats</h3>
//               <ul>
//                 <li>
//                   <strong>Completion:</strong> 80%
//                 </li>
//                 <li>
//                   <strong>Tasks:</strong> 15/20
//                 </li>
//                 <li>
//                   <strong>Resources Allocated:</strong> 8
//                 </li>
//               </ul>
//             </div>

//             {/* Task Management */}
//             <div className="task-management-section">
//               <h3>Task Management</h3>
//             </div>

//             {/* Document Upload */}
//             <div className="document-upload-section">
//               <h3>Document Upload</h3>
//             </div>

//             {/* Activity Log */}
//             <div className="activity-log-section">
//               <h3>Activity Log</h3>
//             </div>

//             {/* Comments */}
//             <div className="comments-section">
//               <h3>Comments</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetailsPage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import API from "../api/index.js";
// import ProjectStages from "../components/projects/ProjectStages.js";
// import {
//   faTasks,
//   faProjectDiagram,
//   faChartBar,
//   faBoxes,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../styles/ProjectDetailsPage.css";

// function ProjectDetailsPage({ isSidebarOpen, setPageTitle }) {
//   const { id } = useParams();
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const projectResponse = await API.get(`/api/projects/${id}`);
//         setProject(projectResponse.data);
//         setPageTitle(projectResponse.data.name); // Update the page title in App.js
//         console.log("Project Data:", projectResponse.data);
//       } catch (error) {
//         console.error("Error fetching project details:", error);
//         setError("Failed to load project details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProject();
//   }, [id]);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   if (!project) {
//     return <div className="not-found">Project not found.</div>;
//   }

//   return (
//     <div className="project-details-page">
//       <div className={`sidebar ${isSidebarOpen ? "" : "open"}`}>
//         <Link to="/projects" className="sidebar-item">
//           <FontAwesomeIcon icon={faProjectDiagram} className="sidebar-icon" />
//           {isSidebarOpen && <span>Projects</span>}
//         </Link>
//         <Link to="/tasks" className="sidebar-item">
//           <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
//           {isSidebarOpen && <span>Tasks</span>}
//         </Link>
//         <Link to="/analytics" className="sidebar-item">
//           <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
//           {isSidebarOpen && <span>Analytics</span>}
//         </Link>
//         <Link to="/inventory" className="sidebar-item">
//           <FontAwesomeIcon icon={faBoxes} className="sidebar-icon" />
//           {isSidebarOpen && <span>Inventory</span>}
//         </Link>
//       </div>
//       <div className="project-details-container">
//         {/* <div className="project-details-header">
//           <h2>{project.name}</h2>
//         </div> */}

//         <div className="project-details-body">
//           <div className="project-stages-section">
//             <ProjectStages stages={project.stages} />
//           </div>

//           <div className="project-info-grid">
//             {/* Project Overview */}
//             <div className="project-info-section">
//               <h3>Project Overview</h3>
//               <ul>
//                 <li>
//                   <strong>Type:</strong> {project.type}
//                 </li>
//                 <li>
//                   <strong>Client:</strong> {project.client_id}
//                 </li>
//                 <li>
//                   <strong>Location:</strong> {project.location}
//                 </li>
//                 <li>
//                   <strong>Start Date:</strong> {project.start_date}
//                 </li>
//                 <li>
//                   <strong>End Date:</strong> {project.end_date}
//                 </li>
//                 <li>
//                   <strong>Status:</strong> {project.status}
//                 </li>
//               </ul>
//             </div>

//             {/* Quick Stats */}
//             <div className="quick-stats-section">
//               <h3>Quick Stats</h3>
//               <ul>
//                 <li>
//                   <strong>Completion:</strong> 80%
//                 </li>
//                 <li>
//                   <strong>Tasks:</strong> 15/20
//                 </li>
//                 <li>
//                   <strong>Resources Allocated:</strong> 8
//                 </li>
//               </ul>
//             </div>

//             {/* Task Management */}
//             <div className="task-management-section">
//               <h3>Task Management</h3>
//             </div>

//             {/* Document Upload */}
//             <div className="document-upload-section">
//               <h3>Document Upload</h3>
//             </div>

//             {/* Activity Log */}
//             <div className="activity-log-section">
//               <h3>Activity Log</h3>
//             </div>

//             {/* Comments */}
//             <div className="comments-section">
//               <h3>Comments</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetailsPage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import API from "../api/index.js";
// import ProjectStages from "../components/projects/ProjectStages.js";
// import "../styles/ProjectDetailsPage.css";

// function ProjectDetailsPage({ setPageTitle }) {
//   const { id } = useParams(); // Get the project ID from the URL
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const projectResponse = await API.get(`/api/projects/${id}`);
//         setProject(projectResponse.data);
//         setPageTitle(projectResponse.data.name);
//         console.log("Project Data:", projectResponse.data);
//       } catch (error) {
//         console.error("Error fetching project details:", error);
//         setError("Failed to load project details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProject();
//   }, [id, setPageTitle]);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   if (!project) {
//     return <div className="not-found">Project not found.</div>;
//   }

//   return (
//     <div className="project-details-page">
//       <div className="project-details-container">
//         {/* <div className="project-details-header">
//           <h2>{project.name}</h2>
//         </div> */}

//         <div className="project-details-body">
//           <div className="project-stages-section">
//             <ProjectStages stages={project.stages} />
//           </div>

//           <div className="project-info-grid">
//             {/* Project Overview */}
//             <div className="project-info-section">
//               <h3>Project Overview</h3>
//               <ul>
//                 <li>
//                   <strong>Type:</strong> {project.type}
//                 </li>
//                 <li>
//                   <strong>Client:</strong> {project.client_id}
//                 </li>
//                 <li>
//                   <strong>Location:</strong> {project.location}
//                 </li>
//                 <li>
//                   <strong>Start Date:</strong> {project.start_date}
//                 </li>
//                 <li>
//                   <strong>End Date:</strong> {project.end_date}
//                 </li>
//                 <li>
//                   <strong>Status:</strong> {project.status}
//                 </li>
//               </ul>
//             </div>

//             {/* Quick Stats */}
//             <div className="quick-stats-section">
//               <h3>Quick Stats</h3>
//               <ul>
//                 <li>
//                   <strong>Completion:</strong> 80%
//                 </li>
//                 <li>
//                   <strong>Tasks:</strong> 15/20
//                 </li>
//                 <li>
//                   <strong>Resources Allocated:</strong> 8
//                 </li>
//               </ul>
//             </div>

//             {/* Task Management */}
//             <div className="task-management-section">
//               <h3>Task Management</h3>
//             </div>

//             {/* Document Upload */}
//             <div className="document-upload-section">
//               <h3>Document Upload</h3>
//             </div>

//             {/* Activity Log */}
//             <div className="activity-log-section">
//               <h3>Activity Log</h3>
//             </div>

//             {/* Comments */}
//             <div className="comments-section">
//               <h3>Comments</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetailsPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../api/index.js";
import ProjectStages from "../components/projects/ProjectStages.js";
import TaskManagement from "../components/projects/TaskManagement";
import DocumentUpload from "../components/projects/DocumentUpload";
import ActivityLog from "../components/projects/ActivityLog";
import CommentsSection from "../components/projects/CommentsSection";
import "../styles/ProjectDetailsPage.css";

function ProjectDetailsPage({ isSidebarOpen, setPageTitle, toggleSidebar }) {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectResponse = await API.get(`/api/projects/${id}`);
        setProject(projectResponse.data);
        setPageTitle(projectResponse.data.name); // Update the page title in App.js
        console.log("Project Data:", projectResponse.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
        setError("Failed to load project details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, setPageTitle]); // Add setPageTitle to dependency array

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!project) {
    return <div className="not-found">Project not found.</div>;
  }

  return (
    <div className="project-details-container">
      <div className="project-details-body">
        <div className="project-stages-section">
          <ProjectStages stages={project.stages} />
        </div>

        <div className="project-info-grid">
          {/* Project Overview */}
          <div className="project-info-section">
            <h3>Project Overview</h3>
            <ul>
              <li>
                <strong>Type:</strong> {project.type}
              </li>
              <li>
                <strong>Client:</strong> {project.client_id}
              </li>
              <li>
                <strong>Location:</strong> {project.location}
              </li>
              <li>
                <strong>Start Date:</strong> {project.start_date}
              </li>
              <li>
                <strong>End Date:</strong> {project.end_date}
              </li>
              <li>
                <strong>Status:</strong> {project.status}
              </li>
            </ul>
          </div>

          {/* Quick Stats */}
          <div className="quick-stats-section">
            <h3>Quick Stats</h3>
            <ul>
              <li>
                <strong>Completion:</strong> 80%
              </li>
              <li>
                <strong>Tasks:</strong> 15/20
              </li>
              <li>
                <strong>Resources Allocated:</strong> 8
              </li>
            </ul>
          </div>

          {/* Task Management */}
          <div className="task-management-section">
          <TaskManagement projectId={project?.id} />
          </div>

          {/* Document Upload */}
          <div className="document-upload-section">
          <DocumentUpload projectId={project.id} />
          </div>

          {/* Activity Log */}
          <div className="activity-log-section">
            <ActivityLog projectId={project.id}/>
          </div>

          {/* Comments */}
          <div className="comments-section">
          <CommentsSection projectId={project.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;