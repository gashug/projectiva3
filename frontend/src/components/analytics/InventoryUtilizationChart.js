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

// function InventoryUtilizationChart({ data }) {
//   if (!data) {
//     return <div>Loading Inventory Utilization...</div>;
//   }

//   // Example data transformation - modify this to match your backend response
//   const inventoryData = [
//     { name: 'Total Equipment', value: data.totalEquipment || 0 },
//     { name: 'Available Equipment', value: data.availableEquipment || 0 },
//     { name: 'Assigned Equipment', value: data.assignedEquipment || 0 },
//     { name: 'Low Stock Items', value: data.lowStockItems || 0 }
//   ];

//   return (
//     <div className="widget">
//       <h3>Inventory Utilization</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={inventoryData}>
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

// export default InventoryUtilizationChart;

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

// function InventoryUtilizationChart({ data }) {
//   if (!data) {
//     return <div>Loading Inventory Utilization...</div>;
//   }

//   // Prepare the data for the bar chart
//   const chartData = [
//     {
//       name: "Total Equipment",
//       value: data.equipmentSummary?.totalEquipment || 0,
//     },
//     {
//       name: "Available Equipment",
//       value: data.equipmentSummary?.availableEquipment || 0,
//     },
//     {
//       name: "Assigned Equipment",
//       value: data.equipmentSummary?.assignedEquipment || 0,
//     },
//     {
//       name: "Low Stock Items",
//       value: data.equipmentSummary?.lowStockItems || 0,
//     },
//   ];

//   return (
//     <div className="widget">
//       <h3>Inventory Utilization</h3>
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

// export default InventoryUtilizationChart;

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

function InventoryUtilizationChart({ data }) {
  console.log("Inventory data:", data); // Check the data received

  if (!data || !Array.isArray(data)) {
    return <div>Loading Inventory Utilization...</div>;
  }

  // Prepare the data for the bar chart
  const chartData = data.map(item => ({
    name: item.category,
    value: item.total_items || 0,
  }));

  return (
    <div className="widget">
      <h3>Inventory Utilization</h3>
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

export default InventoryUtilizationChart;