import React, { useState } from "react";
import "./QuickActionsModal.css";

function QuickActionsModal({ isOpen, onClose }) {
  const [actionType, setActionType] = useState("createProject"); // Initial action type

  const handleActionTypeChange = (event) => {
    setActionType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission based on actionType
    console.log("Form submitted with action type:", actionType);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="quick-actions-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Quick Actions</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="action-type">Action Type:</label>
            <select
              id="action-type"
              value={actionType}
              onChange={handleActionTypeChange}
            >
              <option value="createProject">Create New Project</option>
              <option value="assignTask">Assign Task</option>
              <option value="uploadDocument">Upload Document</option>
            </select>
          </div>

          {/* Conditionally render form fields based on actionType */}
          {actionType === "createProject" && (
            <div>{/* Project creation form fields */}</div>
          )}

          {actionType === "assignTask" && (
            <div>{/* Task assignment form fields */}</div>
          )}

          {actionType === "uploadDocument" && (
            <div>{/* Document upload form fields */}</div>
          )}

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuickActionsModal;