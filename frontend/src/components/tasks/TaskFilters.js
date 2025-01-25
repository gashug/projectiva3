import React from "react";
import "./styles/TaskCard.css";

function TaskFilters({
  statusFilter,
  setStatusFilter,
  dueDateFilter,
  setDueDateFilter,
  assignedToFilter,
  setAssignedToFilter,
  onClearFilters,
}) {
  return (
    <div className="task-filters">
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Blocked">Blocked</option>
      </select>

      <select
        value={dueDateFilter}
        onChange={(e) => setDueDateFilter(e.target.value)}
      >
        <option value="">All Due Dates</option>
        <option value="today">Today</option>
        <option value="this_week">This Week</option>
        <option value="overdue">Overdue</option>
      </select>

      <select
        value={assignedToFilter}
        onChange={(e) => setAssignedToFilter(e.target.value)}
      >
        <option value="">All Technicians</option>
        {/* Fetch and map technicians dynamically */}
      </select>

      <button onClick={onClearFilters}>Clear Filters</button>
    </div>
  );
}

export default TaskFilters;