import React, { useState } from "react";
import "./styles/CreateProjectModal.css";

function CreateProjectModal({ isOpen, onClose }) {
  const [projectName, setProjectName] = useState("");

  const handleInputChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle project creation logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Create New Project</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={projectName}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Add other form fields here */}
          <div className="modal-footer">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProjectModal;