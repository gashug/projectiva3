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
import "./styles/TechnicianAnalytics.css"; // Import CSS file for styling

function TechnicianAnalytics() {
  const [technicianData, setTechnicianData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTechnicianAnalytics = async () => {
      try {
        const response = await API.get("/api/technicians"); // Replace with your actual endpoint
        setTechnicianData(response.data);
        console.log("Technician Analytics Data:", response.data);
      } catch (error) {
        console.error("Error fetching technician analytics:", error);
        setError("Failed to load technician analytics.");
      } finally {
        setLoading(false);
      }
    };

    fetchTechnicianAnalytics();
  }, []);

  if (loading) {
    return <div>Loading Technician Analytics...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Process data for Recharts
  const technicianPerformanceData = technicianData
    ? technicianData.map((technician) => ({
        name: technician.technician_name,
        tasksCompleted: technician.completed_tasks || 0,
        avgCompletionTime: technician.average_completion_time || 0, // Assuming you have this metric
      }))
    : [];

  return (
    <div className="technician-analytics">
      <h2>Technician Task Report</h2>

      {/* Technician Performance Chart */}
      <div className="widget">
        <h3>Technician Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={technicianPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="tasksCompleted"
              fill="#82ca9d"
              name="Tasks Completed"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Placeholder for detailed technician report */}
      <div className="widget">
        <h3>Detailed Technician Report</h3>
        {/* Add a table or list to display detailed technician information */}
        <p>Placeholder for detailed technician report table.</p>
      </div>
    </div>
  );
}

export default TechnicianAnalytics;