// import React from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// function TaskProgressChart({ data }) {
//   if (!data) {
//     return <div>Loading Task Progress...</div>;
//   }

//   // Example data transformation - modify this to match your backend response
//   const taskData = data.map(task => ({
//     name: task.name, // Assuming your task object has a 'name' property
//     completion: task.status === 'Completed' ? 100 : 50, // Example logic
//   }));

//   return (
//     <div className="widget">
//       <h3>Task Progress</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={taskData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="completion" stroke="#8884d8" activeDot={{ r: 8 }} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default TaskProgressChart;

// import React from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// function TaskProgressChart({ data }) {
//   if (!data) {
//     return <div>Loading Task Progress...</div>;
//   }

//   return (
//     <div className="widget">
//       <h3>Task Progress</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="completion" stroke="#8884d8" activeDot={{ r: 8 }} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default TaskProgressChart;

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

// function TaskProgressChart({ data }) {
//   if (!data || !data.allTasks) {
//     return <div>Loading Task Progress...</div>;
//   }

//   const completedTasksCount = data.allTasks.filter(
//     (task) => task.status === "Completed"
//   ).length;
//   const inProgressTasksCount = data.allTasks.filter(
//     (task) => task.status === "In Progress"
//   ).length;
//   const toDoTasksCount = data.allTasks.filter(
//     (task) => task.status === "To Do"
//   ).length;
//   const overdueTasksCount = data.overdueTasks.length;

//   const chartData = [
//     { name: "Completed", value: completedTasksCount },
//     { name: "In Progress", value: inProgressTasksCount },
//     { name: "To Do", value: toDoTasksCount },
//     { name: "Overdue", value: overdueTasksCount },
//   ];

//   return (
//     <div className="widget">
//       <h3>Task Progress</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="value" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default TaskProgressChart;

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

function TaskProgressChart({ data }) {
  if (!data || !data.allTasks) {
    return <div>Loading Task Progress...</div>;
  }

  const completedTasksCount = data.allTasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const inProgressTasksCount = data.allTasks.filter(
    (task) => task.status === "In Progress"
  ).length;
  const toDoTasksCount = data.allTasks.filter(
    (task) => task.status === "To Do"
  ).length;
  const overdueTasksCount = data.overdueTasks.length;

  const chartData = [
    { name: "Completed", value: completedTasksCount },
    { name: "In Progress", value: inProgressTasksCount },
    { name: "To Do", value: toDoTasksCount },
    { name: "Overdue", value: overdueTasksCount },
  ];

  return (
    <div className="widget">
      <h3>Task Progress</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TaskProgressChart;