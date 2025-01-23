import React from 'react';
import './QuickActionsModal.css';
import { Link } from 'react-router-dom';

function QuickActionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="quick-actions-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Quick Actions</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <ul className="quick-actions-list">
            <li>
              <Link to="/projects/create" className="quick-action-link">
                Create New Project
              </Link>
            </li>
            <li>
              <Link to="/tasks/assign" className="quick-action-link">
                Assign Task
              </Link>
            </li>
            <li>
              <Link to="/documents/upload" className="quick-action-link">
                Upload Document
              </Link>
            </li>
            {/* Add more quick actions here */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QuickActionsModal;