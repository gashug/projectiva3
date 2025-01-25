// // src/components/projects/ProjectCard.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "./styles/ProjectsCard.css"; // Import CSS file for styling

// function ProjectCard({ project }) {
//   return (
//     <div className="project-card">
//       <h3 className="project-name">
//         <Link to={`/projects/${project.id}`}>{project.name}</Link>
//       </h3>
//       <p className="project-info">
//         Type: <span className="project-type">{project.type}</span>
//       </p>
//       <p className="project-info">
//         Department:{" "}
//         <span className="project-department">{project.department}</span>
//       </p>
//       <p className="project-info">
//         Status:{" "}
//         <span className={`project-status status-${project.status}`}>
//           {project.status}
//         </span>
//       </p>
//       <p className="project-info">
//         Start Date:{" "}
//         <span className="project-start-date">
//           {new Date(project.start_date).toLocaleDateString()}
//         </span>
//       </p>
//       <p className="project-info">
//         End Date:{" "}
//         <span className="project-end-date">
//           {new Date(project.end_date).toLocaleDateString()}
//         </span>
//       </p>
//       {/* <button className="view-details-button">View Details</button> */}
//     </div>
//   );
// }

// export default ProjectCard;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './styles/ProjectsCard.css';

// function ProjectCard({ project }) {
//     return (
//       <Link to={`/projects/${project.id}`} className="project-card-link">
//         <div className="project-card">
//           <h3 className="project-name">{project.name}</h3>
//           <p className="project-info">
//             Type: <span className="project-type">{project.type}</span>
//           </p>
//           <p className="project-info">
//             Department: <span className="project-department">{project.department}</span>
//           </p>
//           <p className="project-info">
//             Status: <span className={`project-status status-${project.status.replace(/\s+/g, '-')}`}>{project.status}</span>
//           </p>
//           <p className="project-info">
//             Start Date: <span className="project-start-date">{new Date(project.start_date).toLocaleDateString()}</span>
//           </p>
//           <p className="project-info">
//             End Date: <span className="project-end-date">{new Date(project.end_date).toLocaleDateString()}</span>
//           </p>
//           <button className="view-details-button">View Details</button>
//         </div>
//       </Link>
//     );
//   }
  
//   export default ProjectCard;

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ProjectsCard.css';

function ProjectCard({ project }) {
    return (
        <Link to={`/projects/${project.id}`} className="project-card-link">
            <div className="project-card">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-info">
                    Type: <span className="project-type">{project.type}</span>
                </p>
                <p className="project-info">
                    Department: <span className="project-department">{project.department}</span>
                </p>
                <p className="project-info">
                    Status: <span className={`project-status status-${project.status.replace(/\s+/g, '-')}`}>{project.status}</span>
                </p>
                <p className="project-info">
                    Start Date: <span className="project-start-date">{new Date(project.start_date).toLocaleDateString()}</span>
                </p>
                <p className="project-info">
                    End Date: <span className="project-end-date">{new Date(project.end_date).toLocaleDateString()}</span>
                </p>
            </div>
        </Link>
    );
}

export default ProjectCard;