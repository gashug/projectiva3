// import React from 'react';
// import './styles/ProjectsFilters.css';

// function Filters() {
//   return (
//     <div className="filters-section">
//       <input type="text" placeholder="Search projects..." className="search-bar" />
//       <select className="filter-dropdown">
//         <option value="">Status</option>
//         <option value="Pending">Pending</option>
//         <option value="In Progress">In Progress</option>
//         <option value="Completed">Completed</option>
//         <option value="On Hold">On Hold</option>
//       </select>
//       <select className="filter-dropdown">
//         <option value="">Department</option>
//         <option value="Sales">Sales</option>
//         <option value="Engineering">Engineering</option>
//         {/* Add more departments */}
//       </select>
//       <select className="filter-dropdown">
//         <option value="">Project Type</option>
//         <option value="Supply">Supply</option>
//         <option value="Installation">Installation</option>
//         <option value="Maintenance">Maintenance</option>
//       </select>
//       <button className="clear-filters-button">Clear Filters</button>
//     </div>
//   );
// }

// export default Filters;

// import React from 'react';
// import './styles/ProjectsFilters.css';

// function Filters({
//   statusFilter,
//   setStatusFilter,
//   departmentFilter,
//   setDepartmentFilter,
//   projectTypeFilter,
//   setProjectTypeFilter,
// }) {
//   const handleStatusFilterChange = (event) => {
//     setStatusFilter(event.target.value);
//   };

//   const handleDepartmentFilterChange = (event) => {
//     setDepartmentFilter(event.target.value);
//   };

//   const handleProjectTypeFilterChange = (event) => {
//     setProjectTypeFilter(event.target.value);
//   };

//   const clearFilters = () => {
//     setStatusFilter("");
//     setDepartmentFilter("");
//     setProjectTypeFilter("");
//   };

//   return (
//     <div className="filters-section">
//       <input type="text" placeholder="Search projects..." className="search-bar" />
//       <select className="filter-dropdown" value={statusFilter} onChange={handleStatusFilterChange}>
//         <option value="">Status</option>
//         <option value="Pending">Pending</option>
//         <option value="In Progress">In Progress</option>
//         <option value="Completed">Completed</option>
//         <option value="On Hold">On Hold</option>
//         <option value="Canceled">Canceled</option>
//       </select>
//       <select className="filter-dropdown" value={departmentFilter} onChange={handleDepartmentFilterChange}>
//         <option value="">Department</option>
//         <option value="Sales">Sales</option>
//         <option value="Engineering">Engineering</option>
//         <option value="Support">Support</option>
//         <option value="Projects">Projects</option>
//         {/* Add more departments */}
//       </select>
//       <select className="filter-dropdown" value={projectTypeFilter} onChange={handleProjectTypeFilterChange}>
//         <option value="">Project Type</option>
//         <option value="Supply">Supply</option>
//         <option value="Installation">Installation</option>
//         <option value="Maintenance">Maintenance</option>
//         <option value="Mechanical">Mechanical</option>
//         {/* Add more project types */}
//       </select>
//       <button className="clear-filters-button" onClick={clearFilters}>Clear Filters</button>
//     </div>
//   );
// }

// export default Filters;

// import React from "react";
// import './styles/ProjectsFilters.css';

// function Filters({
//   statusFilter,
//   setStatusFilter,
//   departmentFilter,
//   setDepartmentFilter,
//   projectTypeFilter,
//   setProjectTypeFilter,
// }) {
//   const handleStatusFilterChange = (event) => {
//     setStatusFilter(event.target.value);
//   };

//   const handleDepartmentFilterChange = (event) => {
//     setDepartmentFilter(event.target.value);
//   };

//   const handleProjectTypeFilterChange = (event) => {
//     setProjectTypeFilter(event.target.value);
//   };

//   const clearFilters = () => {
//     setStatusFilter("");
//     setDepartmentFilter("");
//     setProjectTypeFilter("");
//   };

//   return (
//     <div className="filters-section">
//       <input type="text" placeholder="Search projects..." className="search-bar" />
//       <select
//         className="filter-dropdown"
//         value={statusFilter}
//         onChange={handleStatusFilterChange}
//       >
//         <option value="">Status</option>
//         <option value="Pending">Pending</option>
//         <option value="In Progress">In Progress</option>
//         <option value="Completed">Completed</option>
//         <option value="On Hold">On Hold</option>
//         <option value="Canceled">Canceled</option>
//       </select>
//       <select
//         className="filter-dropdown"
//         value={departmentFilter}
//         onChange={handleDepartmentFilterChange}
//       >
//         <option value="">Department</option>
//         <option value="Sales">Sales</option>
//         <option value="Engineering">Engineering</option>
//         <option value="Support">Support</option>
//         <option value="Projects">Projects</option>
//         {/* Add more departments */}
//       </select>
//       <select
//         className="filter-dropdown"
//         value={projectTypeFilter}
//         onChange={handleProjectTypeFilterChange}
//       >
//         <option value="">Project Type</option>
//         <option value="Supply">Supply</option>
//         <option value="Installation">Installation</option>
//         <option value="Maintenance">Maintenance</option>
//         <option value="Mechanical">Mechanical</option>
//         {/* Add more project types */}
//       </select>
//       <button className="clear-filters-button" onClick={clearFilters}>
//         Clear Filters
//       </button>
//     </div>
//   );
// }

// export default Filters;

import React from "react";
import "./styles/ProjectsFilters.css";

function Filters({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  departmentFilter,
  setDepartmentFilter,
  projectTypeFilter,
  setProjectTypeFilter,
}) {
  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleDepartmentFilterChange = (event) => {
    setDepartmentFilter(event.target.value);
  };

  const handleProjectTypeFilterChange = (event) => {
    setProjectTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("");
    setDepartmentFilter("");
    setProjectTypeFilter("");
  };

  return (
    <div className="filters-section">
      <input
        type="text"
        placeholder="Search projects..."
        className="search-bar"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <select
        className="filter-dropdown"
        value={statusFilter}
        onChange={handleStatusFilterChange}
      >
        <option value="">Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="On Hold">On Hold</option>
        <option value="Canceled">Canceled</option>
      </select>
      <select
        className="filter-dropdown"
        value={departmentFilter}
        onChange={handleDepartmentFilterChange}
      >
        <option value="">Department</option>
        <option value="Sales">Sales</option>
        <option value="Engineering">Engineering</option>
        <option value="Support">Support</option>
        <option value="Projects">Projects</option>
        {/* Add more departments */}
      </select>
      <select
        className="filter-dropdown"
        value={projectTypeFilter}
        onChange={handleProjectTypeFilterChange}
      >
        <option value="">Project Type</option>
        <option value="Supply">Supply</option>
        <option value="Installation">Installation</option>
        <option value="Maintenance">Maintenance</option>
        <option value="Mechanical">Mechanical</option>
        {/* Add more project types */}
      </select>
      <button className="clear-filters-button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
}

export default Filters;