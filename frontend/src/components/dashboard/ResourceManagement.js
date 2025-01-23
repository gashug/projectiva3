// import React from 'react';
// import './ResourceManagement.css';

// function ResourceManagement({ data }) {
//   return (
//     <div className="resource-management widget">
//       <h3 className="widget-title">Resource Management</h3>
//       {/* Add content for resource management (inventory, technicians, etc.) */}
//       {/* Example: */}
//       <p>Inventory Snapshot:</p>
//       <ul>
//         <li>Low Stock Items: 5</li>
//         <li>Technicians Assigned: 3</li>
//       </ul>
//     </div>
//   );
// }

// export default ResourceManagement;

// import React from "react";
// import "./ResourceManagement.css";

// function ResourceManagement({ data }) {
//   if (!data || !data.resourceManagement) {
//     return (
//       <div className="resource-management widget">
//         <h3 className="widget-title">Resource Management</h3>
//         <div>Loading Resource Management...</div>
//       </div>
//     );
//   }

//   const { technicianSummary, equipmentSummary, toolSummary } =
//     data.resourceManagement;

//   return (
//     <div className="resource-management widget">
//       <h3 className="widget-title">Resource Management</h3>
//       <div className="resource-management-content">
//         <h4>Technicians</h4>
//         <ul>
//           <li>Total Technicians: {technicianSummary.totalTechnicians}</li>
//           <li>Available Technicians: {technicianSummary.availableTechnicians}</li>
//           <li>
//             Technicians Assigned to Tasks:{" "}
//             {technicianSummary.assignedTechnicians}
//           </li>
//         </ul>

//         <h4>Equipment</h4>
//         <ul>
//           <li>Total Equipment: {equipmentSummary.totalEquipment}</li>
//           <li>Available Equipment: {equipmentSummary.availableEquipment}</li>
//           <li>Assigned Equipment: {equipmentSummary.assignedEquipment}</li>
//           <li>Low Stock Items: {equipmentSummary.lowStockItems}</li>
//         </ul>

//         <h4>Tools</h4>
//         <ul>
//           <li>Total Tools: {toolSummary.totalTools}</li>
//           <li>Available Tools: {toolSummary.availableTools}</li>
//           <li>Assigned Tools: {toolSummary.assignedTools}</li>
//           <li>Tools Needing Repair: {toolSummary.toolsNeedingRepair}</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ResourceManagement;

import React from 'react';
import './ResourceManagement.css';

function ResourceManagement({ data }) {
  return (
    <div className="resource-management widget">
      <h3 className="widget-title">Resource Management</h3>
      <div className="resource-management-content">
        {data ? (
          <>
            <h4>Technicians</h4>
            <ul>
              <li>Total Technicians: {data.technicianSummary?.totalTechnicians || 0}</li>
              <li>Available Technicians: {data.technicianSummary?.availableTechnicians || 0}</li>
              <li>Technicians Assigned: {data.technicianSummary?.assignedTechnicians || 0}</li>
            </ul>

            <h4>Equipment</h4>
            <ul>
              <li>Total Equipment: {data.equipmentSummary?.totalEquipment || 0}</li>
              <li>Available Equipment: {data.equipmentSummary?.availableEquipment || 0}</li>
              <li>Assigned Equipment: {data.equipmentSummary?.assignedEquipment || 0}</li>
              <li>Low Stock Items: {data.equipmentSummary?.lowStockItems || 0}</li>
            </ul>

            <h4>Tools</h4>
            <ul>
              <li>Total Tools: {data.toolSummary?.totalTools || 0}</li>
              <li>Available Tools: {data.toolSummary?.availableTools || 0}</li>
              <li>Assigned Tools: {data.toolSummary?.assignedTools || 0}</li>
              <li>Tools Needing Repair: {data.toolSummary?.toolsNeedingRepair || 0}</li>
            </ul>
          </>
        ) : (
          <p>Loading resource data...</p>
        )}
      </div>
    </div>
  );
}

export default ResourceManagement;