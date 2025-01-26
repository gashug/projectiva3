import React, { useState, useEffect } from "react";
import API from "../../api/index";
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
import "./styles/TaskAnalytics.css";

function TaskAnalytics() {
  const [taskData, setTaskData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTaskAnalytics = async () => {
      try {
        const response = await API.get("/api/tasks");
        setTaskData(response.data);
      } catch (error) {
        console.error("Error fetching task analytics:", error);
        setError("Failed to load task analytics.");
      } finally {
        setLoading(false);
      }
    };

    fetchTaskAnalytics();
  }, []);

  if (loading) {
    return <div>Loading Task Analytics...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Process data for Recharts
  const taskStatusData = taskData
    ? Object.entries(
        taskData.reduce((acc, task) => {
          acc[task.status] = (acc[task.status] || 0) + 1;
          return acc;
        }, {})
      ).map(([status, count]) => ({ name: status, value: count }))
    : [];

  return (
    <div className="task-analytics">
      <h2>Task List and Completion Rates</h2>

      {/* Task Status Distribution */}
      <div className="widget">
        <h3>Task Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={taskStatusData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Placeholder for other charts/tables */}
      <div className="widget">
        <h3>Tasks by Project</h3>
        {/* Add your component or logic here */}
      </div>

      <div className="widget">
        <h3>Tasks by Technician</h3>
        {/* Add your component or logic here */}
      </div>

      {/* Add more widgets as needed */}
    </div>
  );
}

export default TaskAnalytics;