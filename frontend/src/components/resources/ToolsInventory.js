// import React, { useState, useEffect } from "react";
// import API from "../../api/index";
// import EditToolModal from "./EditToolModal";
// import AssignToolModal from "./AssignToolModal";
// import "./styles/ToolsInventory.css"; // Import CSS file for styling

// function ToolsInventory() {
//   const [tools, setTools] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filters, setFilters] = useState({
//     project: "",
//     availability: "",
//     // Add more filters as needed
//   });

//   const [editModalIsOpen, setEditModalIsOpen] = useState(false);
//   const [assignModalIsOpen, setAssignModalIsOpen] = useState(false);
//   const [selectedTool, setSelectedTool] = useState(null);

//   useEffect(() => {
//     const fetchTools = async () => {
//       try {
//         const response = await API.get("/api/tools"); // Adjust the API endpoint as needed
//         setTools(response.data);
//       } catch (error) {
//         console.error("Error fetching tools:", error);
//         setError("Failed to load tools.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTools();
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleFilterChange = (filterName, value) => {
//     setFilters({ ...filters, [filterName]: value });
//   };

//   const filteredTools = tools.filter((item) => {
//     const searchTermMatch = Object.values(item).some((value) =>
//       value
//         ? value.toString().toLowerCase().includes(searchTerm.toLowerCase())
//         : false
//     );

//     const projectMatch =
//       !filters.project || item.assigned_to_project === filters.project;
//     const availabilityMatch =
//       !filters.availability || item.availability === filters.availability;
//     // Add more filter conditions as needed

//     return searchTermMatch && projectMatch && availabilityMatch;
//   });

//   const handleEdit = (tool) => {
//     setSelectedTool(tool);
//     setEditModalIsOpen(true);
//   };

//   const handleAssign = (tool) => {
//     setSelectedTool(tool);
//     setAssignModalIsOpen(true);
//   };

//   const handleCloseEditModal = () => {
//     setEditModalIsOpen(false);
//     setSelectedTool(null);
//   };

//   const handleCloseAssignModal = () => {
//     setAssignModalIsOpen(false);
//     setSelectedTool(null);
//   };

//   const handleToolUpdate = (updatedTool) => {
//     setTools(
//       tools.map((item) => (item.id === updatedTool.id ? updatedTool : item))
//     );
//   };

//   const handleToolAssign = (updatedTool) => {
//     // Update the tools list with the new assignment
//     setTools(
//       tools.map((item) => (item.id === updatedTool.id ? updatedTool : item))
//     );
//   };

//   return (
//     <div className="tools-inventory">
//       <div className="inventory-header">
//         <h2>Tools Inventory</h2>
//         <div className="summary-stats">
//           <p>Total Tools: {tools.length}</p>
//           <p>
//             Available Tools:{" "}
//             {
//               tools.filter(
//                 (tool) =>
//                   tool.assigned_to_project === null &&
//                   tool.assigned_to_technician === null
//               ).length
//             }
//           </p>
//           <p>
//             Assigned Tools:{" "}
//             {
//               tools.filter(
//                 (tool) =>
//                   tool.assigned_to_project !== null ||
//                   tool.assigned_to_technician !== null
//               ).length
//             }
//           </p>
//           {/* Add more summary stats here */}
//         </div>
//       </div>

//       <div className="inventory-controls">
//         <input
//           type="text"
//           placeholder="Search tools..."
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
//           {/* You may want to fetch and map project options dynamically */}
//         </select>
//         {/* Add more filter dropdowns for availability, etc. */}
//       </div>

//       <div className="tools-list">
//         {loading && <p>Loading tools...</p>}
//         {error && <p className="error">{error}</p>}
//         {!loading && !error && (
//           <table className="tools-table">
//             <thead>
//               <tr>
//                 <th>Tool Name</th>
//                 <th>ID/Tag</th>
//                 <th>Condition</th>
//                 <th>Status</th>
//                 <th>Project Association</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTools.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>{item.id_tag || "N/A"}</td>
//                   <td>{item.condition}</td>
//                   <td>{item.availability}</td>
//                   <td>{item.assigned_to_project || "N/A"}</td>
//                   <td>
//                     <button onClick={() => handleEdit(item)}>Edit</button>
//                     <button onClick={() => handleAssign(item)}>Assign</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* Render modals for edit and assign */}
//       <EditToolModal
//         isOpen={editModalIsOpen}
//         onClose={handleCloseEditModal}
//         tool={selectedTool}
//         onSave={handleToolUpdate}
//       />
//       <AssignToolModal
//         isOpen={assignModalIsOpen}
//         onClose={handleCloseAssignModal}
//         toolId={selectedTool?.id}
//         onSave={handleToolAssign}
//       />
//     </div>
//   );
// }

// export default ToolsInventory;

import React, { useState, useEffect } from "react";
import API from "../../api/index";
import EditToolModal from "./EditToolModal";
import AssignToolModal from "./AssignToolModal";
import "./styles/ToolsInventory.css";

function ToolsInventory() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    project: "",
    availability: "",
    // Add more filters as needed
  });

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [assignModalIsOpen, setAssignModalIsOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await API.get("/api/tools"); // Adjust the API endpoint as needed
        setTools(response.data);
      } catch (error) {
        console.error("Error fetching tools:", error);
        setError("Failed to load tools.");
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const filteredTools = tools.filter((item) => {
    const searchTermMatch = Object.values(item).some((value) =>
      value
        ? value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        : false
    );

    const projectMatch =
      !filters.project || item.assigned_to_project === filters.project;
    const availabilityMatch =
      !filters.availability || item.availability === filters.availability;
    // Add more filter conditions as needed

    return searchTermMatch && projectMatch && availabilityMatch;
  });

  const handleEdit = (tool) => {
    setSelectedTool(tool);
    setEditModalIsOpen(true);
  };

  const handleAssign = (tool) => {
    setSelectedTool(tool);
    setAssignModalIsOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalIsOpen(false);
    setSelectedTool(null);
  };

  const handleCloseAssignModal = () => {
    setAssignModalIsOpen(false);
    setSelectedTool(null);
  };

  const handleToolUpdate = (updatedTool) => {
    setTools(
      tools.map((item) => (item.id === updatedTool.id ? updatedTool : item))
    );
  };

  const handleToolAssign = (updatedTool) => {
    // Update the tools list with the new assignment
    setTools(
      tools.map((item) => (item.id === updatedTool.id ? updatedTool : item))
    );
  };

  return (
    <div className="tools-inventory">
      <div className="inventory-header">
        <h2>Tools Inventory</h2>
        <div className="summary-stats">
          <p>Total Tools: {tools.length}</p>
          <p>
            Available Tools:{" "}
            {
              tools.filter(
                (tool) =>
                  tool.assigned_to_project === null &&
                  tool.assigned_to_technician === null
              ).length
            }
          </p>
          <p>
            Assigned Tools:{" "}
            {
              tools.filter(
                (tool) =>
                  tool.assigned_to_project !== null ||
                  tool.assigned_to_technician !== null
              ).length
            }
          </p>
          {/* Add more summary stats here */}
        </div>
      </div>

      <div className="inventory-controls">
        <input
          type="text"
          placeholder="Search tools..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* Add filter dropdowns here */}
        <select
          value={filters.project}
          onChange={(e) => handleFilterChange("project", e.target.value)}
        >
          <option value="">All Projects</option>
          {/* You may want to fetch and map project options dynamically */}
        </select>
        {/* Add more filter dropdowns for availability, etc. */}
      </div>

      <div className="tools-list">
        {loading && <p>Loading tools...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <table className="tools-table">
            <thead>
              <tr>
                <th>Tool Name</th>
                <th>ID/Tag</th>
                <th>Condition</th>
                <th>Status</th>
                <th>Project Association</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTools.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.id_tag || "N/A"}</td>
                  <td>{item.condition}</td>
                  <td>{item.availability}</td>
                  <td>{item.assigned_to_project || "N/A"}</td>
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

      {/* Render modals for edit and assign */}
      <EditToolModal
        isOpen={editModalIsOpen}
        onClose={handleCloseEditModal}
        tool={selectedTool}
        onSave={handleToolUpdate}
      />
      <AssignToolModal
        isOpen={assignModalIsOpen}
        onClose={handleCloseAssignModal}
        toolId={selectedTool?.id}
        onSave={handleToolAssign}
      />
    </div>
  );
}

export default ToolsInventory;