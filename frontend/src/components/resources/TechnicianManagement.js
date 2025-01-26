import React, { useState, useEffect } from "react";
import API from "../../api/index";
import "./styles/TechnicianManagement.css"; // Import CSS file for styling

function TechnicianManagement() {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const response = await API.get("/api/technicians"); // Adjust the API endpoint if needed
        setTechnicians(response.data);
      } catch (error) {
        console.error("Error fetching technicians:", error);
        setError("Failed to load technicians.");
      } finally {
        setLoading(false);
      }
    };

    fetchTechnicians();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRoleFilterChange = (event) => {
    setRoleFilter(event.target.value);
  };

  const handleAvailabilityFilterChange = (event) => {
    setAvailabilityFilter(event.target.value);
  };

  const filteredTechnicians = technicians.filter((technician) => {
    const searchTermMatch =
      technician.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      technician.role.toLowerCase().includes(searchTerm.toLowerCase());
    const roleMatch = !roleFilter || technician.role === roleFilter;
    const availabilityMatch =
      !availabilityFilter || technician.availability === availabilityFilter;
    return searchTermMatch && roleMatch && availabilityMatch;
  });

  return (
    <div className="technician-management">
      <div className="technician-management-header">
        <h2>Technician Management</h2>
        <div className="summary-stats">
          {/* Placeholder for summary stats */}
          <p>Total Technicians: {technicians.length}</p>
          <p>
            Available Technicians:{" "}
            {technicians.filter((t) => t.availability === "Available").length}
          </p>
          <p>
            Assigned Technicians:{" "}
            {
              technicians.filter((t) => t.availability === "Assigned").length
            }
          </p>
        </div>
      </div>

      <div className="technician-management-controls">
        <input
          type="text"
          placeholder="Search technicians..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          value={roleFilter}
          onChange={handleRoleFilterChange}
          className="filter-dropdown"
        >
          <option value="">All Roles</option>
          {/* Fetch and map roles dynamically if possible */}
          <option value="Electrician">Electrician</option>
          <option value="Engineer">Engineer</option>
          {/* Add more roles here */}
        </select>
        <select
          value={availabilityFilter}
          onChange={handleAvailabilityFilterChange}
          className="filter-dropdown"
        >
          <option value="">All Availability</option>
          <option value="Available">Available</option>
          <option value="On Leave">On Leave</option>
          <option value="Assigned">Assigned</option>
          {/* Add more availability options here */}
        </select>
      </div>

      <div className="technician-list">
        {loading && <p>Loading technicians...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Availability</th>
                <th>Assigned Tasks</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTechnicians.map((technician) => (
                <tr key={technician.id}>
                  <td>{technician.name}</td>
                  <td>{technician.role}</td>
                  <td>{technician.availability}</td>
                  <td>{technician.assignedTasksCount || 0}</td>
                  <td>
                    {/* Add action buttons here (e.g., Edit, Assign, etc.) */}
                    <button className="action-button">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default TechnicianManagement;