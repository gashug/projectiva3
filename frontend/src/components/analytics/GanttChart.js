import React from "react";
import {
  GanttChart as RechartsGanttChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from "recharts";

function GanttChart({ data }) {
  if (!data || data.length === 0) {
    return <div>No data available for the Gantt chart.</div>;
  }

  return (
    <div className="gantt-chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="start" fill="#8884d8" />
          <Bar dataKey="end" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GanttChart;