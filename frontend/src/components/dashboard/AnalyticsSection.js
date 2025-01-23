// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from 'recharts';
// import "./AnalyticsSection.css";

// function AnalyticsSection({ data }) {
//   // Dummy data for demonstration purposes
//   const projectCompletionData = [
//     { name: "Project A", completionRate: 80 },
//     { name: "Project B", completionRate: 55 },
//     { name: "Project C", completionRate: 90 },
//   ];

//   const topPerformingProjects = [
//     { name: "Project X", performance: "High" },
//     { name: "Project Y", performance: "Medium" },
//     { name: "Project Z", performance: "High" },
//   ];

//   return (
//     <div className="analytics-section widget">
//       <h3 className="widget-title">Analytics Section</h3>

//       {/* Project Analytics */}
//       <h4>Project Completion Rates</h4>
//       <div className="analytics-content">
//         {projectCompletionData.map((project) => (
//           <div key={project.name}>
//             <span>{project.name}:</span>
//             <progress
//               value={project.completionRate}
//               max="100"
//             ></progress>
//             <span>{project.completionRate}%</span>
//           </div>
//         ))}
//       </div>

//       <h4>Top 5 Performing Projects</h4>
//       <ul className="analytics-list">
//         {topPerformingProjects.map((project) => (
//           <li key={project.name}>
//             {project.name} - {project.performance}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AnalyticsSection;

// // src/components/dashboard/AnalyticsSection.js (updated with Recharts)
// // import React from 'react';
// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// // } from 'recharts';
// // import './AnalyticsSection.css';

// // function AnalyticsSection({ data }) {
// //   // Dummy data for demonstration purposes
// //   const projectCompletionData = [
// //     { name: 'Project A', completionRate: 80 },
// //     { name: 'Project B', completionRate: 55 },
// //     { name: 'Project C', completionRate: 90 },
// //   ];

// //   const topPerformingProjects = [
// //     { name: 'Project X', performance: 'High' },
// //     { name: 'Project Y', performance: 'Medium' },
// //     { name: 'Project Z', performance: 'High' },
// //   ];

// //   return (
// //     <div className="analytics-section widget">
// //       <h3 className="widget-title">Analytics Section</h3>

// //       {/* Project Analytics */}
// //       <h4>Project Completion Rates</h4>
// //       <div className="analytics-content">
// //         <BarChart width={400} height={250} data={projectCompletionData}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="name" />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />
// //           <Bar dataKey="completionRate" fill="#8884d8" />
// //         </BarChart>
// //       </div>

// //       {/* ... rest of your AnalyticsSection component */}
// //     </div>
// //   );
// // }

// // export default AnalyticsSection;

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
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";
// import "./AnalyticsSection.css";

// function AnalyticsSection({ data }) {
//     const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
//     const projectCompletionData = [
//       { name: "Project A", completionRate: 80 },
//       { name: "Project B", completionRate: 55 },
//       { name: "Project C", completionRate: 90 },
//     ];
  
//     const topPerformingProjects = [
//       { name: "Project X", performance: "High" },
//       { name: "Project Y", performance: "Medium" },
//       { name: "Project Z", performance: "High" },
//     ];
  
//     return (
//       <div className="analytics-section widget">
//         <h3 className="widget-title">Analytics Section</h3>
  
//         {/* Project Completion Rates */}
//         <h4>Project Completion Rates</h4>
//         <div className="analytics-content">
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={projectCompletionData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="completionRate" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
  
//         {/* Top 5 Performing Projects */}
//         <h4>Top 5 Performing Projects</h4>
//         <ul className="analytics-list">
//           {topPerformingProjects.map((project) => (
//             <li key={project.name}>
//               {project.name} - {project.performance}
//             </li>
//           ))}
//         </ul>
  
//         {/* Placeholder for Donut Chart */}
//         <h4>Project Status Distribution</h4>
//         <div className="analytics-content">
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={projectCompletionData}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="completionRate"
//                 label={({ name, percent }) =>
//                   `${name} ${(percent * 100).toFixed(0)}%`
//                 }
//               >
//                 {projectCompletionData.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     );
//   }
  
//   export default AnalyticsSection;

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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./AnalyticsSection.css";

function AnalyticsSection({ data }) {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
    // Check if data is available before accessing properties
    const projectCompletionData = data?.projectCompletionRates || [
      { name: "Project A", completionRate: 80 },
      { name: "Project B", completionRate: 55 },
      { name: "Project C", completionRate: 90 },
    ];
  
    const topPerformingProjects = data?.topPerformingProjects || [
      { name: "Project X", performance: "High" },
      { name: "Project Y", performance: "Medium" },
      { name: "Project Z", performance: "High" },
    ];
  
    return (
      <div className="analytics-section widget">
        <h3 className="widget-title">Analytics Section</h3>
  
        {/* Project Completion Rates */}
        <h4>Project Completion Rates</h4>
        <div className="analytics-content">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={projectCompletionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar 
              dataKey="completionRate" 
              fill="#8884d8" 
              onMouseEnter={(data, index) => console.log("Mouse enter:", data, index)} // Do something on hover
  onMouseLeave={(data, index) => console.log("Mouse leave:", data, index)} // Do something on mouse leave
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
  
        {/* Top 5 Performing Projects */}
        <h4>Top 5 Performing Projects</h4>
        <ul className="analytics-list">
          {topPerformingProjects.map((project) => (
            <li key={project.name}>
              {project.name} - {project.performance}
            </li>
          ))}
        </ul>
  
        {/* Placeholder for Donut Chart */}
        <h4>Project Status Distribution</h4>
        <div className="analytics-content">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={projectCompletionData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="completionRate"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {projectCompletionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  
  export default AnalyticsSection;