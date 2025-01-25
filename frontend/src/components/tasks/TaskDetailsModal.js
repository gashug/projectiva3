import React from "react";
import "./styles/TaskDetailsModal.css"; // Import CSS file for styling

function TaskDetailsModal({ task, onClose }) {
  if (!task) return null;

  return (
    <div className="task-details-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* Prevent modal from closing when clicking inside the content */}
        <div className="modal-header">
          <h2>{task.name}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>
            <strong>Assigned to:</strong>{" "}
            {task.assigned_to ? task.assigned_to : "N/A"}
          </p>
          <p>
            <strong>Status:</strong> {task.status}
          </p>
          <p>
            <strong>Due Date:</strong>{" "}
            {new Date(task.due_date).toLocaleDateString()}
          </p>
          <p>
            <strong>Priority:</strong> {task.priority}
          </p>
          <p>
            <strong>Description:</strong> {task.description}
          </p>
          {/* Add more details as needed */}
        </div>
        <div className="modal-footer">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsModal;