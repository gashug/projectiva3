// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// function ProjectOverviewChart({ data }) {
//   if (!data) {
//     return <div>Loading Project Overview...</div>;
//   }

//   const projectData = [
//     { name: "Completed", value: parseInt(data.total_completed_tasks, 10) || 0 },
//     {
//       name: "In Progress",
//       value: parseInt(data.total_in_progress_tasks, 10) || 0,
//     },
//     { name: "To Do", value: parseInt(data.total_todo_tasks, 10) || 0 },
//   ];

//   return (
//     <div className="widget">
//       <h3>Project Overview</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             data={projectData}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             label={({ name, percent }) =>
//               `${name} ${(percent * 100).toFixed(0)}%`
//             }
//           >
//             {projectData.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default ProjectOverviewChart;

// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// function ProjectOverviewChart({ data }) {
//   if (!data) {
//     return <div>Loading Project Overview...</div>;
//   }

//   const projectData = [
//     {
//       name: "Completed Projects",
//       value: parseInt(data.total_completed_projects, 10) || 0,
//     },
//     {
//       name: "In Progress Projects",
//       value: parseInt(data.total_in_progress_projects, 10) || 0,
//     },
//     {
//       name: "Pending Projects",
//       value: parseInt(data.total_pending_projects, 10) || 0,
//     },
//   ];

//   return (
//     <div className="project-overview-chart">
//       <h4>Project Overview</h4>
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             data={projectData}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             label={({ name, percent }) =>
//               `${name} ${(percent * 100).toFixed(0)}%`
//             }
//           >
//             {projectData.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default ProjectOverviewChart;

// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// function ProjectOverviewChart({ data }) {
//   if (!data) {
//     return <div>Loading Project Overview...</div>;
//   }

//   // Ensure that data properties are accessed safely
//   const projectData = [
//     {
//       name: "Completed Projects",
//       value: parseInt(data.total_completed_projects, 10) || 0,
//     },
//     {
//       name: "In Progress Projects",
//       value: parseInt(data.total_in_progress_projects, 10) || 0,
//     },
//     {
//       name: "Pending Projects",
//       value: parseInt(data.total_pending_projects, 10) || 0,
//     },
//   ];

//   return (
//     <div className="project-overview-chart">
//       <h4>Project Overview</h4>
//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             data={projectData}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             label={({ name, percent }) =>
//               `${name} ${(percent * 100).toFixed(0)}%`
//             }
//           >
//             {projectData.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default ProjectOverviewChart;

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function ProjectOverviewChart({ data }) {
  if (!data) {
    return <div>Loading Project Overview...</div>;
  }

  const projectData = [
    {
      name: "Completed Projects",
      value: parseInt(data.total_completed_projects, 10) || 0,
    },
    {
      name: "In Progress Projects",
      value: parseInt(data.total_in_progress_projects, 10) || 0,
    },
    {
      name: "Pending Projects",
      value: parseInt(data.total_pending_projects, 10) || 0,
    },
  ];

  return (
    <div className="project-overview-chart">
      <h3>Project Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={projectData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {projectData.map((entry, index) => (
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
  );
}

export default ProjectOverviewChart;