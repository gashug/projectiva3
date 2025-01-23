// import React from 'react';
// import './ProjectOverview.css';

// function ProjectOverview({ data }) {
//   console.log("ProjectOverview data:", data); // Log the data received

//   if (!data) {
//     return <div className="project-overview">Loading Project Overview...</div>;
//   }

//   try {
//     return (
//       <div className="project-overview widget">
//         <h2>Project Overview</h2>
//         {/* Render project overview data using charts, tables, etc. */}
//         <div>
//           <p>Total Projects: {data.totalProjects}</p>
//           <p>Completed Tasks: {data.total_completed_tasks}</p>
//           <p>In Progress Tasks: {data.total_in_progress_tasks}</p>
//           <p>To Do Tasks: {data.total_todo_tasks}</p>
//           {/* Add more data display here as needed */}
//           {/* Add more data visualization here */}
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error rendering ProjectOverview:", error);
//     return (
//       <div className="project-overview">
//         Error loading project overview data.
//       </div>
//     );
//   }
// }

// export default ProjectOverview;

// import React from 'react';
// import './ProjectOverview.css';

// function ProjectOverview({ data }) {
//   if (!data) {
//     return <div className="project-overview widget">Loading Project Overview...</div>;
//   }

//   // Dummy data for the circular progress bar - replace with actual data
//   const progressPercentage = 75;

//   return (
//     <div className="project-overview widget">
//       <h2 className="widget-title">Project Overview</h2>
//       <div className='chart-placeholdrer'></div>
//       <div className="project-overview-content">
//         <div className="project-overview-item">
//             <div className="circle-progress">
//                 <div className="circle-progress-bar">
//                 <div 
//                     className="circle-progress-fill" 
//                     style={{ transform: `rotate(${progressPercentage / 100 * 360}deg)` }}
//                 ></div>
//                 </div>
//                 <span className="circle-progress-value">{progressPercentage}%</span>
//             </div>
//         </div>
//         <div className="project-overview-item">
//           <div className="project-overview-label">Total Projects:</div>
//           <div className="project-overview-value">{data.totalprojects}</div>
//         </div>
//         <div className="project-overview-item">
//           <div className="project-overview-label">Completed Tasks:</div>
//           <div className="project-overview-value">{data.total_completed_tasks}</div>
//         </div>
//         <div className="project-overview-item">
//           <div className="project-overview-label">In Progress Tasks:</div>
//           <div className="project-overview-value">{data.total_in_progress_tasks}</div>
//         </div>
//         <div className="project-overview-item">
//           <div className="project-overview-label">To Do Tasks:</div>
//           <div className="project-overview-value">{data.total_todo_tasks}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectOverview;

// import React from "react";
// import "./ProjectOverview.css";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// function ProjectOverview({ data }) {
//   // Check if data and projectOverview are available before accessing properties
//   if (!data || !data.projectOverview) {
//     return (
//       <div className="project-overview widget">
//         <h2 className="widget-title">Project Overview</h2>
//         <div>Loading Project Overview...</div>
//       </div>
//     );
//   }

//   const {
//     total_projects,
//     total_completed_tasks,
//     total_in_progress_tasks,
//     total_todo_tasks,
//   } = data.projectOverview;

//   const chartData = [
//     { name: "Total Projects", value: parseInt(total_projects, 10) },
//     {
//       name: "Completed Tasks",
//       value: parseInt(total_completed_tasks, 10),
//     },
//     {
//       name: "In Progress Tasks",
//       value: parseInt(total_in_progress_tasks, 10),
//     },
//     { name: "To Do Tasks", value: parseInt(total_todo_tasks, 10) },
//   ];

//   return (
//     <div className="project-overview widget">
//       <h2 className="widget-title">Project Overview</h2>
//       <div className="chart-container">
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="value" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//       <div>
//         <p>Total Projects: {total_projects}</p>
//         <p>Completed Tasks: {total_completed_tasks}</p>
//         <p>In Progress Tasks: {total_in_progress_tasks}</p>
//         <p>To Do Tasks: {total_todo_tasks}</p>
//       </div>
//     </div>
//   );
// }

// export default ProjectOverview;

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import "./ProjectOverview.css";

// function ProjectOverview({ data }) {
//   if (!data || !data.projectOverview) {
//     return (
//       <div className="project-overview widget">
//         <h2 className="widget-title">Project Overview</h2>
//         <div>Loading Project Overview...</div>
//       </div>
//     );
//   }

//   const {
//     total_projects,
//     total_completed_tasks,
//     total_in_progress_tasks,
//     total_todo_tasks,
//   } = data.projectOverview;

//   // Parse data to integers (if necessary) and handle potential errors
//   const chartData = [
//     {
//       name: "Total Projects",
//       value: parseInt(total_projects, 10) || 0,
//     },
//     {
//       name: "Completed Tasks",
//       value: parseInt(total_completed_tasks, 10) || 0,
//     },
//     {
//       name: "In Progress Tasks",
//       value: parseInt(total_in_progress_tasks, 10) || 0,
//     },
//     {
//       name: "To Do Tasks",
//       value: parseInt(total_todo_tasks, 10) || 0,
//     },
//   ];

//   return (
//     <div className="project-overview widget">
//       <h2 className="widget-title">Project Overview</h2>
//       <div className="chart-container">
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="value" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//       <div>
//         <p>Total Projects: {total_projects}</p>
//         <p>Completed Tasks: {total_completed_tasks}</p>
//         <p>In Progress Tasks: {total_in_progress_tasks}</p>
//         <p>To Do Tasks: {total_todo_tasks}</p>
//       </div>
//     </div>
//   );
// }

// export default ProjectOverview;

// src/components/dashboard/ProjectOverview.js
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import "./ProjectOverview.css";

// function ProjectOverview({ data }) {
//   // Hardcode chartData for testing
//   const chartData = [
//     { name: "Total Projects", value: 5 },
//     { name: "Completed Tasks", value: 2 },
//     { name: "In Progress Tasks", value: 1 },
//     { name: "To Do Tasks", value: 1 },
//   ];

//   console.log("ProjectOverview rendering. Chart data:", chartData);

//   return (
//     <div className="project-overview widget">
//       <h2 className="widget-title">Project Overview</h2>
//       <div className="chart-container">
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="value" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//       {/* Remove this for now to test only the chart
//       <div>
//         <p>Total Projects: {data.total_projects}</p>
//         <p>Completed Tasks: {data.total_completed_tasks}</p>
//         <p>In Progress Tasks: {data.total_in_progress_tasks}</p>
//         <p>To Do Tasks: {data.total_todo_tasks}</p>
//       </div>
//       */}
//     </div>
//   );
// }

// export default ProjectOverview;

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import "./ProjectOverview.css";

// function ProjectOverview({ data }) {
//   if (!data || !data.projectOverview) {
//     return (
//       <div className="project-overview widget">
//         <h2 className="widget-title">Project Overview</h2>
//         <div>Loading Project Overview...</div>
//       </div>
//     );
//   }

//   const {
//     total_projects,
//     total_completed_tasks,
//     total_in_progress_tasks,
//     total_todo_tasks,
//   } = data.projectOverview;

//   const chartData = [
//     { name: "Projects", value: parseInt(total_projects, 10) || 0 },
//     { name: "Completed", value: parseInt(total_completed_tasks, 10) || 0 },
//     { name: "In Progress", value: parseInt(total_in_progress_tasks, 10) || 0 },
//     { name: "To Do", value: parseInt(total_todo_tasks, 10) || 0 },
//   ];

//   return (
//     <div className="project-overview widget">
//       <h2 className="widget-title">Project Overview</h2>
//       <div className="chart-container">
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="value" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//       <div>
//         <p>Total Projects: {total_projects}</p>
//         <p>Completed Tasks: {total_completed_tasks}</p>
//         <p>In Progress Tasks: {total_in_progress_tasks}</p>
//         <p>To Do Tasks: {total_todo_tasks}</p>
//       </div>
//     </div>
//   );
// }

// export default ProjectOverview;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./ProjectOverview.css";

function ProjectOverview({ data }) {
  if (!data || !data.projectOverview) {
    return (
      <div className="project-overview widget">
        <h2 className="widget-title">Project Overview</h2>
        <div>Loading Project Overview...</div>
      </div>
    );
  }

  const {
    total_projects,
    total_completed_tasks,
    total_in_progress_tasks,
    total_todo_tasks,
  } = data.projectOverview;

  const chartData = [
    { name: "Projects", value: parseInt(total_projects, 10) || 0 },
    { name: "Completed", value: parseInt(total_completed_tasks, 10) || 0 },
    { name: "In Progress", value: parseInt(total_in_progress_tasks, 10) || 0 },
    { name: "To Do", value: parseInt(total_todo_tasks, 10) || 0 },
  ];

  return (
    <div className="project-overview widget">
      <h2 className="widget-title">Project Overview</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" 
            fill="#8884d8" 
            onMouseEnter={(data, index) => console.log("Mouse enter:", data, index)} // Do something on hover
  onMouseLeave={(data, index) => console.log("Mouse leave:", data, index)} // Do something on mouse leave
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <p>Total Projects: {total_projects}</p>
        <p>Completed Tasks: {total_completed_tasks}</p>
        <p>In Progress Tasks: {total_in_progress_tasks}</p>
        <p>To Do Tasks: {total_todo_tasks}</p>
      </div>
    </div>
  );
}

export default ProjectOverview;