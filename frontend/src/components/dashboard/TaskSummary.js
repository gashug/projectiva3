// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import "./TaskSummary.css";

// function TaskSummary({ data }) {
//   if (!data) {
//     return <div className="task-summary widget">Loading Task Summary...</div>;
//   }

//   // Handle cases where data or data.taskSummary might be undefined or empty
//   // const overdueTasksCount = data?.taskSummary?.overdueTasks?.length ?? 0;
//   // const totalTasksCount = data?.taskSummary?.allTasks?.length ?? 0;
//   // const completedTasksCount = data?.taskSummary?.allTasks?.filter(task => task.status === 'Completed')?.length ?? 0;

//   const totalTasksCount = data?.allTasks?.length || 0;
//   const overdueTasksCount = data?.overdueTasks?.length || 0;
//   const completedTasksCount =
//     data?.allTasks?.filter((task) => task.status === "Completed")?.length || 0;

//   const chartData = [
//     { name: 'Total', value: totalTasksCount },
//     { name: 'Overdue', value: overdueTasksCount },
//     { name: 'Completed', value: completedTasksCount }
//   ];

//   // return (
//   //   <div className="task-summary widget">
//   //     <h3 className="widget-title">Task Summary</h3>
//   //     <div className="task-summary-content">
//   //       {totalTasksCount === 0 ? (
//   //         <p>No tasks found.</p>
//   //       ) : (
//   //         <>
//   //           <div className="task-summary-item">
//   //             <span className="task-summary-label">All Tasks:</span>
//   //             <span className="task-summary-value">{totalTasksCount}</span>
//   //           </div>
//   //           <div className="task-summary-item">
//   //             <span className="task-summary-label">Overdue Tasks:</span>
//   //             <span className="task-summary-value">{overdueTasksCount}</span>
//   //           </div>
//   //           <div className="task-summary-item">
//   //             <span className="task-summary-label">Completed Tasks:</span>
//   //             <span className="task-summary-value">{completedTasksCount}</span>
//   //           </div>
//   //           {/* Add more task summary items as needed */}
//   //         </>
//   //       )}
//   //     </div>
//   //   </div>
//   // );

//   return (
//     <div className="task-summary widget">
//       <h3 className="widget-title">Task Summary</h3>
//       <div className="task-summary-content">
//         <div className="task-summary-item">
//           <span className="task-summary-label">All Tasks:</span>
//           <span className="task-summary-value">{totalTasksCount}</span>
//         </div>
//         <div className="task-summary-item">
//           <span className="task-summary-label">Overdue Tasks:</span>
//           <span className="task-summary-value">{overdueTasksCount}</span>
//         </div>
//         <div className="task-summary-item">
//           <span className="task-summary-label">Completed Tasks:</span>
//           <span className="task-summary-value">{completedTasksCount}</span>
//         </div>
//       </div>
//       <div className="task-summary-chart">
//         <BarChart width={300} height={200} data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="value" fill="#8884d8" />
//         </BarChart>
//       </div>
//     </div>
//   );
// }

// export default TaskSummary;

import React, { useState} from "react";
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
import "./TaskSummary.css";

function TaskSummary({ data }) {
  const [filter, setFilter] = useState("all"); // State for filtering

  const { allTasks = [], overdueTasks = [] } = data || {};

  const completedTasksCount = allTasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const filteredTasks =
    filter === "all"
      ? allTasks
      : allTasks.filter((task) => task.status === filter);

  const chartData = [
    { name: "All Tasks", value: allTasks.length },
    { name: "Overdue Tasks", value: overdueTasks.length },
    { name: "Completed Tasks", value: completedTasksCount },
  ];

  return (
    <div className="task-summary widget">
      <h3 className="widget-title">Task Summary</h3>
      <div className="filter-container">
        <label htmlFor="status-filter">Filter by Status:</label>
        <select
          id="status-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="chart-container">
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
      <div className="task-summary-content">
        <div className="task-summary-item">
          <span className="task-summary-label">All Tasks:</span>
          <span className="task-summary-value">{filteredTasks.length}</span>
        </div>
        <div className="task-summary-item">
          <span className="task-summary-label">Overdue Tasks:</span>
          <span className="task-summary-value">{overdueTasks.length}</span>
        </div>
        <div className="task-summary-item">
          <span className="task-summary-label">Completed Tasks:</span>
          <span className="task-summary-value">{completedTasksCount}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskSummary;