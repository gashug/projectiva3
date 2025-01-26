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
import "./styles/InventoryAnalytics.css";

function InventoryAnalytics() {
  const [inventoryData, setInventoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInventoryAnalytics = async () => {
      try {
        const response = await API.get("/api/resources"); // Update with your actual endpoint
        setInventoryData(response.data);
        console.log("Inventory Analytics Data:", response.data);
      } catch (error) {
        console.error("Error fetching inventory analytics:", error);
        setError("Failed to load inventory analytics.");
      } finally {
        setLoading(false);
      }
    };

    fetchInventoryAnalytics();
  }, []);

  if (loading) {
    return <div>Loading Inventory Analytics...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Process data for Recharts
  const inventoryChartData = inventoryData
    ? Object.entries(inventoryData).map(([key, value]) => ({
        name: key,
        value: value,
      }))
    : [];

  return (
    <div className="inventory-analytics">
      <h2>Inventory Summary</h2>

      {/* Inventory Utilization Chart */}
      <div className="widget">
        <h3>Inventory Utilization</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={inventoryChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Placeholder for detailed inventory report */}
      <div className="widget">
        <h3>Detailed Inventory Report</h3>
        {/* Add your component or logic here */}
        <p>Placeholder for detailed inventory report table.</p>
      </div>
    </div>
  );
}

export default InventoryAnalytics;