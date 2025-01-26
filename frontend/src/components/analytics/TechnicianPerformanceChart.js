// import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// function TechnicianPerformanceChart({ data }) {
//   if (!data) {
//     return <div>Loading Technician Performance...</div>;
//   }

//   // Example data transformation - modify this to match your backend response
//   const technicianData = data.map(technician => ({
//     name: technician.name, // Assuming your technician object has a 'name' property
//     tasksCompleted: technician.completedTasks || 0, // Example logic
//   }));

//   return (
//     <div className="widget">
//       <h3>Technician Performance</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={technicianData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="tasksCompleted" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default TechnicianPerformanceChart;

// import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// function TechnicianPerformanceChart({ data }) {
//   if (!data || !data.technicianDetails) {
//     return <div>Loading Technician Performance...</div>;
//   }

//   // Transform data for the chart
//   const chartData = data.technicianDetails.map(technician => ({
//     name: technician.name,
//     tasksCompleted: technician.completedTasksCount,
//   }));

//   return (
//     <div className="widget">
//       <h3>Technician Performance</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="tasksCompleted" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default TechnicianPerformanceChart;
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function TechnicianPerformanceChart({ data }) {
  console.log("Technician data:", data); // Check the data received

  if (!data) {
    return <div>Loading Technician Performance...</div>;
  }

  // Check if data is an array before mapping
  if (!Array.isArray(data)) {
    return <div>Invalid data format for Technician Performance</div>;
  }

  // Transform data for the chart
  const chartData = data.map((technician) => ({
    name: technician.technician_name,
    tasksCompleted: technician.completed_tasks || 0,
  }));

  return (
    <div className="widget">
      <h3>Technician Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="tasksCompleted" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TechnicianPerformanceChart;