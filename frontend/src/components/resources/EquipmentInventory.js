// import React, { useState, useEffect } from "react";
// import API from "../../api/index";
// import "./styles/EquipmentInventory.css";

// function EquipmentInventory() {
//   const [equipment, setEquipment] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filters, setFilters] = useState({
//     project: "",
//     availability: "",
//     condition: "",
//     // Add more filters as needed
//   });

//   useEffect(() => {
//     const fetchEquipment = async () => {
//       try {
//         const response = await API.get("/api/equipment"); // Adjust API endpoint as needed
//         setEquipment(response.data);
//       } catch (error) {
//         console.error("Error fetching equipment:", error);
//         setError("Failed to load equipment.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEquipment();
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleFilterChange = (filterName, value) => {
//     setFilters({ ...filters, [filterName]: value });
//   };

//   const filteredEquipment = equipment.filter((item) => {
//     const searchTermMatch = Object.values(item).some((value) =>
//       value
//         ? value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//         : false
//     );

//     const projectMatch = !filters.project || item.assigned_to_project === filters.project;
//     const availabilityMatch = !filters.availability || item.availability === filters.availability;
//     const conditionMatch = !filters.condition || item.condition === filters.condition;
//     // Add more filter conditions as needed

//     return searchTermMatch && projectMatch && availabilityMatch && conditionMatch;
//   });

//   return (
//     <div className="equipment-inventory">
//       <div className="inventory-header">
//         <h2>Equipment Inventory</h2>
//         <div className="summary-stats">
//           {/* Placeholder for summary stats */}
//           <p>Total Equipment: {equipment.length}</p>
//           <p>
//             Available Equipment:{" "}
//             {equipment.filter((eq) => eq.availability === "Available").length}
//           </p>
//           <p>
//             Assigned Equipment:{" "}
//             {equipment.filter((eq) => eq.assigned_to_project !== null).length}
//           </p>
//           {/* Add more summary stats here */}
//         </div>
//       </div>

//       <div className="inventory-controls">
//         <input
//           type="text"
//           placeholder="Search equipment..."
//           className="search-bar"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         {/* Add filter dropdowns here */}
//         <select
//           value={filters.project}
//           onChange={(e) => handleFilterChange("project", e.target.value)}
//         >
//           <option value="">All Projects</option>
//           {/* Assuming you have a way to fetch project list */}
//           {/* {projects.map(project => (
//             <option key={project.id} value={project.id}>{project.name}</option>
//           ))} */}
//         </select>
//         {/* Add more filter dropdowns for availability, condition, etc. */}
//       </div>

//       <div className="equipment-list">
//         {loading && <p>Loading equipment...</p>}
//         {error && <p className="error">{error}</p>}
//         {!loading && !error && (
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Manufacturer & Model</th>
//                 <th>Serial Number</th>
//                 <th>Quantity Available</th>
//                 <th>Project Association</th>
//                 <th>Condition</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredEquipment.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>
//                     {item.manufacturer} {item.model}
//                   </td>
//                   <td>{item.serial_number}</td>
//                   <td>{item.quantity}</td>
//                   <td>{item.assigned_to_project || "N/A"}</td>
//                   <td>{item.condition}</td>
//                   <td>
//                     <button>Edit</button>
//                     <button>Assign</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default EquipmentInventory;

import React, { useState, useEffect } from "react";
import API from "../../api/index";
import EditEquipmentModal from "./EditEquipmentModal";
import AssignEquipmentModal from "./AssignEquipmentModal";
import "./styles/EquipmentInventory.css";

function EquipmentInventory() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    project: "",
    availability: "",
    condition: "",
    // Add more filters as needed
  });

  const [editModalIsOpen, setEditModalIsOpen] = useState(false); // Define editModalIsOpen here
  const [assignModalIsOpen, setAssignModalIsOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await API.get("/api/equipment"); // Adjust the API endpoint as needed
        setEquipment(response.data);
      } catch (error) {
        console.error("Error fetching equipment:", error);
        setError("Failed to load equipment.");
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const filteredEquipment = equipment.filter((item) => {
    const searchTermMatch = Object.values(item).some((value) =>
      value
        ? value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        : false
    );

    const projectMatch =
      !filters.project || item.assigned_to_project === filters.project;
    const availabilityMatch =
      !filters.availability || item.availability === filters.availability;
    const conditionMatch =
      !filters.condition || item.condition === filters.condition;
    // Add more filter conditions as needed

    return searchTermMatch && projectMatch && availabilityMatch && conditionMatch;
  });

  const handleEdit = (equipment) => {
    setSelectedEquipment(equipment);
    setEditModalIsOpen(true);
  };

  const handleAssign = (equipment) => {
    setSelectedEquipment(equipment);
    setAssignModalIsOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalIsOpen(false);
    setSelectedEquipment(null);
  };

  const handleCloseAssignModal = () => {
    setAssignModalIsOpen(false);
    setSelectedEquipment(null);
  };

  const handleEquipmentUpdate = (updatedEquipment) => {
    setEquipment(
      equipment.map((item) =>
        item.id === updatedEquipment.id ? updatedEquipment : item
      )
    );
  };

  const handleEquipmentAssign = (updatedEquipment) => {
    // Update the equipment list with the new assignment
    setEquipment(
      equipment.map((item) =>
        item.id === updatedEquipment.id ? updatedEquipment : item
      )
    );
  };

  return (
    <div className="equipment-inventory">
      <div className="inventory-header">
        <h2>Equipment Inventory</h2>
        <div className="summary-stats">
          <p>Total Equipment: {equipment.length}</p>
          <p>
            Available Equipment:{" "}
            {equipment.filter((eq) => eq.assigned_to_project === null).length}
          </p>
          <p>
            Assigned Equipment:{" "}
            {equipment.filter((eq) => eq.assigned_to_project !== null).length}
          </p>
        </div>
      </div>

      <div className="inventory-controls">
        <input
          type="text"
          placeholder="Search equipment..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          value={filters.project}
          onChange={(e) => handleFilterChange("project", e.target.value)}
        >
          <option value="">All Projects</option>
        </select>
      </div>

      <div className="equipment-list">
        {loading && <p>Loading equipment...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Manufacturer & Model</th>
                <th>Serial Number</th>
                <th>Quantity Available</th>
                <th>Project Association</th>
                <th>Condition</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEquipment.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    {item.manufacturer} {item.model}
                  </td>
                  <td>{item.serial_number}</td>
                  <td>{item.quantity}</td>
                  <td>{item.assigned_to_project || "N/A"}</td>
                  <td>{item.condition}</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleAssign(item)}>Assign</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <EditEquipmentModal
        isOpen={editModalIsOpen}
        onClose={handleCloseEditModal}
        equipment={selectedEquipment}
        onSave={handleEquipmentUpdate}
      />
      <AssignEquipmentModal
        isOpen={assignModalIsOpen}
        onClose={handleCloseAssignModal}
        equipmentId={selectedEquipment?.id}
        onSave={handleEquipmentAssign}
      />
    </div>
  );
}

export default EquipmentInventory;