// import React, { useState, useEffect } from "react";
// import API from "../../api/index.js";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// function ProjectAnalytics() {
//   const [projectData, setProjectData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjectAnalytics = async () => {
//       try {
//         const response = await API.get("/api/analytics/projects"); // Replace with your actual endpoint
//         setProjectData(response.data);
//         console.log("Project Analytics Data:", response.data);
//       } catch (error) {
//         console.error("Error fetching project analytics:", error);
//         setError("Failed to load project analytics.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjectAnalytics();
//   }, []);

//   if (loading) {
//     return <div>Loading Project Analytics...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Example Data Transformation (adjust based on your actual API response)
//   const projectCompletionData = projectData?.map((project) => ({
//     name: project.name,
//     completionRate: project.completionRate || 0,
//   }));

//   const topPerformingProjects = projectData
//     ?.slice()
//     .sort((a, b) => b.performance - a.performance)
//     .slice(0, 5);

//   return (
//     <div className="project-analytics">
//       <h2>Project Analytics and Reports</h2>

//       {/* Project Completion Rates */}
//       <div className="widget">
//         <h3>Project Completion Rates</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={projectCompletionData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="completionRate" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Gantt Chart Placeholder */}
//       <div className="widget">
//         <h3>Project Stages - Gantt Chart</h3>
//         <div className="gantt-chart-placeholder">
//           {/* Placeholder for the Gantt chart */}
//           <p>Gantt chart to be implemented.</p>
//         </div>
//       </div>

//       {/* Donut Chart Placeholder */}
//       <div className="widget">
//         <h3>Project Stage Completion</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={projectCompletionData}
//               cx="50%"
//               cy="50%"
//               innerRadius={60}
//               outerRadius={80}
//               fill="#8884d8"
//               paddingAngle={5}
//               dataKey="completionRate"
//               label={({ name, percent }) =>
//                 `${name} ${(percent * 100).toFixed(0)}%`
//               }
//             >
//               {projectCompletionData.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Top Performing Projects */}
//       <div className="widget">
//         <h3>Top 5 Performing Projects</h3>
//         <ul className="project-list">
//           {topPerformingProjects.map((project) => (
//             <li key={project.name}>
//               {project.name} - {project.performance}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Budget Utilization Chart Placeholder */}
//       <div className="widget">
//         <h3>Budget Utilization</h3>
//         <div className="budget-chart-placeholder">
//           {/* Placeholder for the Budget Utilization chart */}
//           <p>Budget utilization chart to be implemented.</p>
//         </div>
//       </div>

//       {/* Placeholder for Detailed Reports */}
//       <div className="widget">
//         <h3>Detailed Reports</h3>
//         <p>Placeholder for detailed reports tables.</p>
//         {/* Add tables or other detailed data display here */}
//       </div>
//     </div>
//   );
// }

// export default ProjectAnalytics;

import React, { useState, useEffect } from "react";
import API from "../../api/index.js";
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
import "./styles/ProjectAnalytics.css";

function ProjectAnalytics() {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectAnalytics = async () => {
      try {
        const response = await API.get("/api/projects"); // Replace with your actual endpoint
        setProjectData(response.data);
        console.log("Project Analytics Data:", response.data);
      } catch (error) {
        console.error("Error fetching project analytics:", error);
        setError("Failed to load project analytics.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectAnalytics();
  }, []);

  if (loading) {
    return <div>Loading Project Analytics...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Example Data Transformation (adjust based on your actual API response)
  const projectCompletionData = projectData?.map((project) => ({
    name: project.name,
    completionRate: project.completionRate || 0,
  }));

  const topPerformingProjects = projectData
    ?.slice()
    .sort((a, b) => b.performance - a.performance)
    .slice(0, 5);

  return (
    <div className="project-analytics">
      <h2>Project Analytics and Reports</h2>

      {/* Project Completion Rates */}
      <div className="widget">
        <h3>Project Completion Rates</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={projectCompletionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completionRate" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gantt Chart Placeholder */}
      <div className="widget">
        <h3>Project Stages - Gantt Chart</h3>
        <div className="gantt-chart-placeholder">
          <p>Gantt chart to be implemented.</p>
        </div>
      </div>

      {/* Donut Chart Placeholder */}
      <div className="widget">
        <h3>Project Stage Completion</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={projectCompletionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
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

      {/* Top Performing Projects */}
      <div className="widget">
        <h3>Top 5 Performing Projects</h3>
        <ul className="project-list">
          {topPerformingProjects.map((project) => (
            <li key={project.name}>
              {project.name} - {project.performance}
            </li>
          ))}
        </ul>
      </div>

      {/* Budget Utilization Chart Placeholder */}
      <div className="widget">
        <h3>Budget Utilization</h3>
        <div className="budget-chart-placeholder">
          {/* Placeholder for the Budget Utilization chart */}
          <p>Budget utilization chart to be implemented.</p>
        </div>
      </div>

      {/* Placeholder for Detailed Reports */}
      <div className="widget">
        <h3>Detailed Reports</h3>
        <p>Placeholder for detailed reports tables.</p>
        {/* Add tables or other detailed data display here */}
      </div>
    </div>
  );
}

export default ProjectAnalytics;