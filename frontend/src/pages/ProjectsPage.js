// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/common/Navbar';
// import Filters from '../components/projects/ProjectsFilters';
// import ProjectCard from '../components/projects/ProjectsCard';
// import API from '../api/index.js'; // Import the API file
// import '../styles/ProjectsPage.css'; // Import CSS file for styling

// function ProjectsPage() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await API.getProjects("/api/projects"); // Fetch projects from the API
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Error fetching projects: ", error);
//         setError("Failed to load projects.");
//       } finally {
//         setLoading(false);
//       }
//     }; 

//     fetchProjects();
//   }, []);

//   return (
//     <div className="projects-page">
//       <Navbar />

//       <main className="content">
//         <div className="page-title-section">
//           <h1>Project Overview</h1>
//           <p>Manage and track all projects in one place.</p>
//         </div>

//         <Filters />

//         <div className="projects-content">
//           {loading ? (
//             <div>Loading projects...</div>
//           ) : error ? (
//             <div>Error: {error}</div>
//           ) : (
//             <div className="project-cards">
//               {projects.map((project) => (
//                 <ProjectCard key={project.id} project={project} />
//               ))}
//             </div>
//           )}
//         </div>
//       </main>

//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} Projectiva. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default ProjectsPage;

// import React, { useState, useEffect } from "react";
// import Navbar from "../components/common/Navbar";
// import Filters from "../components/projects/ProjectsFilters.js";
// import ProjectCard from "../components/projects/ProjectsCard.js";
// import API from "../api/index.js";
// import "../styles/ProjectsPage.css";

// function ProjectsPage() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [statusFilter, setStatusFilter] = useState("");
//   const [departmentFilter, setDepartmentFilter] = useState("");
//   const [projectTypeFilter, setProjectTypeFilter] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await API.get("/api/projects");
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//         setError("Failed to load projects.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);
  
//   // Add filtering logic here
//   const filteredProjects = projects.filter((project) => {
//     return (
//       (!statusFilter || project.status === statusFilter) &&
//       (!departmentFilter || project.department === departmentFilter) &&
//       (!projectTypeFilter || project.type === projectTypeFilter)
//     );
//   });

//   return (
//     <div className="projects-container">
//       <Navbar
//         toggleSidebar={toggleSidebar}
//         isSidebarOpen={isSidebarOpen}
//         pageTitle="Project Overview"
//       />

//       <div className="projects-page">
//       <main className="content">
//         <div className="page-title-section">
//           <h1>Project Overview</h1>
//           <p>Manage and track all projects in one place.</p>
//         </div>

//         <Filters 
//           statusFilter={statusFilter}
//           setStatusFilter={setStatusFilter}
//           departmentFilter={departmentFilter}
//           setDepartmentFilter={setDepartmentFilter}
//           projectTypeFilter={projectTypeFilter}
//           setProjectTypeFilter={setProjectTypeFilter}
//         />

//         <div className="projects-content">
//           {loading ? (
//             <div>Loading projects...</div>
//           ) : error ? (
//             <div>Error: {error}</div>
//           ) : (
//             <div className="project-cards">
//               {filteredProjects.map((project) => (
//                 <ProjectCard key={project.id} project={project} />
//               ))}
//             </div>
//           )}
//         </div>
//       </main>
//       </div>

//       {/* <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} Projectiva. All Rights Reserved.</p>
//       </footer> */}
//     </div>
//   );
// }

// export default ProjectsPage;

// import React, { useState, useEffect } from "react";
// import Navbar from "../components/common/Navbar.js";
// import Filters from "../components/projects/ProjectsFilters.js";
// import ProjectCard from "../components/projects/ProjectsCard.js";
// import API from "../api/index.js";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faProjectDiagram, faTasks, faChartBar, faBoxes } from "@fortawesome/free-solid-svg-icons";
// import "../styles/ProjectsPage.css";

// function ProjectsPage() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [statusFilter, setStatusFilter] = useState("");
//   const [departmentFilter, setDepartmentFilter] = useState("");
//   const [projectTypeFilter, setProjectTypeFilter] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await API.get("/api/projects");
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//         setError("Failed to load projects.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   // Add filtering logic here
//   const filteredProjects = projects.filter((project) => {
//     return (
//       (!statusFilter || project.status === statusFilter) &&
//       (!departmentFilter || project.department === departmentFilter) &&
//       (!projectTypeFilter || project.type === projectTypeFilter)
//     );
//   });

//   return (
//     <div className="projects-container">
//       {/* <Navbar
//         toggleSidebar={toggleSidebar}
//         isSidebarOpen={isSidebarOpen}
//         pageTitle="Project Overview"
//       /> */}
//       <div className="projects-page">
//       <div className={`sidebar ${isSidebarOpen ? "" : "open"}`}>
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
//           <div className="page-content">
//             <div className="filters-section">
//               <Filters
//                 statusFilter={statusFilter}
//                 setStatusFilter={setStatusFilter}
//                 departmentFilter={departmentFilter}
//                 setDepartmentFilter={setDepartmentFilter}
//                 projectTypeFilter={projectTypeFilter}
//                 setProjectTypeFilter={setProjectTypeFilter}
//               />
//             </div>

//             <div className="projects-content">
//               {loading ? (
//                 <div>Loading projects...</div>
//               ) : error ? (
//                 <div>Error: {error}</div>
//               ) : (
//                 <div className="project-cards">
//                   {filteredProjects.map((project) => (
//                     <ProjectCard key={project.id} project={project} />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default ProjectsPage;

// import React, { useState, useEffect } from "react";
// import Filters from "../components/projects/ProjectsFilters";
// import ProjectCard from "../components/projects/ProjectsCard";
// import API from "../api/index.js";
// import "../styles/ProjectsPage.css";

// function ProjectsPage({ isSidebarOpen, setPageTitle }) {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [statusFilter, setStatusFilter] = useState("");
//   const [departmentFilter, setDepartmentFilter] = useState("");
//   const [projectTypeFilter, setProjectTypeFilter] = useState("");

//   useEffect(() => {
//     setPageTitle("Projects"); // Update the page title
//     const fetchProjects = async () => {
//       try {
//         const response = await API.get("/api/projects");
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//         setError("Failed to load projects.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, [setPageTitle]);

//   const filteredProjects = projects.filter((project) => {
//     return (
//       (!statusFilter || project.status === statusFilter) &&
//       (!departmentFilter || project.department === departmentFilter) &&
//       (!projectTypeFilter || project.type === projectTypeFilter)
//     );
//   });

//   return (
//     <div className="projects-container">
//         <div className="projects-page">
//             <main className={`content ${isSidebarOpen ? "" : "sidebar-closed"}`}>
//                 <div className="page-content">
//                     <div className="filters-section">
//                         <Filters
//                             statusFilter={statusFilter}
//                             setStatusFilter={setStatusFilter}
//                             departmentFilter={departmentFilter}
//                             setDepartmentFilter={setDepartmentFilter}
//                             projectTypeFilter={projectTypeFilter}
//                             setProjectTypeFilter={setProjectTypeFilter}
//                         />
//                     </div>

//                     <div className="projects-content">
//                         {loading ? (
//                             <div>Loading projects...</div>
//                         ) : error ? (
//                             <div>Error: {error}</div>
//                         ) : (
//                             <div className="project-cards">
//                             {filteredProjects.map((project) => (
//                                 <ProjectCard key={project.id} project={project} />
//                             ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </main>
//         </div>
//     </div>
//   );
// }

// export default ProjectsPage;

// import React, { useState, useEffect } from "react";
// import Filters from "../components/projects/ProjectsFilters";
// import ProjectCard from "../components/projects/ProjectsCard";
// import API from "../api/index.js";
// import "../styles/ProjectsPage.css";

// function ProjectsPage({ isSidebarOpen, setPageTitle }) {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [statusFilter, setStatusFilter] = useState("");
//   const [departmentFilter, setDepartmentFilter] = useState("");
//   const [projectTypeFilter, setProjectTypeFilter] = useState("");

//   useEffect(() => {
//     setPageTitle("Projects");
//     const fetchProjects = async () => {
//       try {
//         const response = await API.get("/api/projects");
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//         setError("Failed to load projects.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, [setPageTitle]);

//   // Add filtering logic here
//   const filteredProjects = projects.filter((project) => {
//     return (
//       (!statusFilter || project.status === statusFilter) &&
//       (!departmentFilter || project.department === departmentFilter) &&
//       (!projectTypeFilter || project.type === projectTypeFilter)
//     );
//   });

// //   return (
// //     <div className="projects-container">
// //       <div className="projects-page">
// //         <div className="content">
// //           <div className="page-content">
// //             <section className="filters-and-search">
// //               <Filters
// //                 statusFilter={statusFilter}
// //                 setStatusFilter={setStatusFilter}
// //                 departmentFilter={departmentFilter}
// //                 setDepartmentFilter={setDepartmentFilter}
// //                 projectTypeFilter={projectTypeFilter}
// //                 setProjectTypeFilter={setProjectTypeFilter}
// //               />
// //             </section>
// //             <section className="project-cards-section">
// //               <div className="projects-content">
// //                 {loading ? (
// //                   <div>Loading projects...</div>
// //                 ) : error ? (
// //                   <div>Error: {error}</div>
// //                 ) : (
// //                   <div className="project-cards">
// //                     {filteredProjects.map((project) => (
// //                       <ProjectCard key={project.id} project={project} />
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             </section>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProjectsPage;

// return (
//   <div className="projects-container">
//     <div className="projects-page">
//         <div className="page-content">
//           <section className="filters-and-search">
//             <Filters
//               statusFilter={statusFilter}
//               setStatusFilter={setStatusFilter}
//               departmentFilter={departmentFilter}
//               setDepartmentFilter={setDepartmentFilter}
//               projectTypeFilter={projectTypeFilter}
//               setProjectTypeFilter={setProjectTypeFilter}
//             />
//           </section>
//           <section className="project-cards-section">
//               {loading ? (
//                 <div>Loading projects...</div>
//               ) : error ? (
//                 <div>Error: {error}</div>
//               ) : (
//                 <div className="project-cards">
//                   {filteredProjects.map((project) => (
//                     <ProjectCard key={project.id} project={project} />
//                   ))}
//                   {[...Array(5 - (filteredProjects.length % 5))].map((_, index) => (
//                     <div key={`placeholder-${index}`} className="placeholder-card"></div>
//                   ))}
//                 </div>
//               )}
//           </section>
//         </div>
//     </div>
//   </div>
// );
// }

// export default ProjectsPage;


// import React, { useState, useEffect } from "react";
// import Filters from "../components/projects/ProjectsFilters";
// import ProjectCard from "../components/projects/ProjectsCard";
// import API from "../api/index.js";
// import "../styles/ProjectsPage.css";

// function ProjectsPage({ isSidebarOpen, setPageTitle }) {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [statusFilter, setStatusFilter] = useState("");
//   const [departmentFilter, setDepartmentFilter] = useState("");
//   const [projectTypeFilter, setProjectTypeFilter] = useState("");

//   useEffect(() => {
//     setPageTitle("Projects");
//     const fetchProjects = async () => {
//       try {
//         const response = await API.get("/api/projects");
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//         setError("Failed to load projects.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, [setPageTitle]);

//   const filteredProjects = projects.filter((project) => {
//     return (
//       (!statusFilter || project.status === statusFilter) &&
//       (!departmentFilter || project.department === departmentFilter) &&
//       (!projectTypeFilter || project.type === projectTypeFilter)
//     );
//   });

//   return (
//     <div className={`projects-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
//       <div className="projects-page">
//         <div className="page-content">
//           <section className="filters-and-search">
//             <Filters
//               statusFilter={statusFilter}
//               setStatusFilter={setStatusFilter}
//               departmentFilter={departmentFilter}
//               setDepartmentFilter={setDepartmentFilter}
//               projectTypeFilter={projectTypeFilter}
//               setProjectTypeFilter={setProjectTypeFilter}
//             />
//           </section>
//           <section className="project-cards-section">
//             {loading ? (
//               <div>Loading projects...</div>
//             ) : error ? (
//               <div>Error: {error}</div>
//             ) : (
//               <div className="project-cards">
//                 {filteredProjects.map((project) => (
//                   <ProjectCard key={project.id} project={project} />
//                 ))}
//                 {[...Array(5 - (filteredProjects.length % 5))].map((_, index) => (
//                   <div key={`placeholder-${index}`} className="placeholder-card"></div>
//                 ))}
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectsPage;

// import React, { useState, useEffect } from "react";
// import Filters from "../components/projects/ProjectsFilters";
// import ProjectCard from "../components/projects/ProjectsCard";
// import API from "../api/index.js";
// import "../styles/ProjectsPage.css";

// function ProjectsPage({ setPageTitle }) {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [statusFilter, setStatusFilter] = useState("");
//   const [departmentFilter, setDepartmentFilter] = useState("");
//   const [projectTypeFilter, setProjectTypeFilter] = useState("");

//   useEffect(() => {
//     setPageTitle("Projects");
//     const fetchProjects = async () => {
//       try {
//         const response = await API.get("/api/projects");
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//         setError("Failed to load projects.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, [setPageTitle]);

//   // Add filtering logic here
//   const filteredProjects = projects.filter((project) => {
//     return (
//       (!statusFilter || project.status === statusFilter) &&
//       (!departmentFilter || project.department === departmentFilter) &&
//       (!projectTypeFilter || project.type === projectTypeFilter)
//     );
//   });

//   return (
//     <div className="projects-container">
//       <div className="projects-page">
//         <main className="content">
//           <div className="page-content">
//             <section className="filters-section">
//               <Filters
//                 statusFilter={statusFilter}
//                 setStatusFilter={setStatusFilter}
//                 departmentFilter={departmentFilter}
//                 setDepartmentFilter={setDepartmentFilter}
//                 projectTypeFilter={projectTypeFilter}
//                 setProjectTypeFilter={setProjectTypeFilter}
//               />
//             </section>

//             <section className="project-cards-section">
//               <div className="projects-content">
//                 {loading ? (
//                   <div>Loading projects...</div>
//                 ) : error ? (
//                   <div>Error: {error}</div>
//                 ) : (
//                   <div className="project-cards">
//                     {filteredProjects.map((project) => (
//                       <ProjectCard key={project.id} project={project} />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </section>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default ProjectsPage;

import React, { useState, useEffect } from "react";
import Filters from "../components/projects/ProjectsFilters";
import ProjectCard from "../components/projects/ProjectsCard";
import API from "../api/index.js";
import "../styles/ProjectsPage.css";

function ProjectsPage({ setPageTitle }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [projectTypeFilter, setProjectTypeFilter] = useState("");

  useEffect(() => {
    setPageTitle("Projects");
    const fetchProjects = async () => {
      try {
        const response = await API.get("/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [setPageTitle]);

  // Add filtering logic here
  const filteredProjects = projects.filter((project) => {
    const matchesSearchQuery = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return (
      matchesSearchQuery &&
      (!statusFilter || project.status === statusFilter) &&
      (!departmentFilter || project.department === departmentFilter) &&
      (!projectTypeFilter || project.type === projectTypeFilter)
    );
  });

  return (
    <div className="projects-container">
      <div className="projects-page">
        <section className="filters-and-search">
          <Filters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            departmentFilter={departmentFilter}
            setDepartmentFilter={setDepartmentFilter}
            projectTypeFilter={projectTypeFilter}
            setProjectTypeFilter={setProjectTypeFilter}
          />
        </section>
        <main className="content">
          <div className="page-content">
            <section className="project-cards-section">
              <div className="projects-content">
                {loading ? (
                  <div>Loading projects...</div>
                ) : error ? (
                  <div>Error: {error}</div>
                ) : (
                  <div className="project-cards">
                    {filteredProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProjectsPage;