import React, { useState, useEffect } from 'react';
import API from '../../api/index';
import './styles/AssignToolModal.css';

function AssignToolModal({ isOpen, onClose, toolId, onSave }) {
  const [projectId, setProjectId] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await API.get('/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    if (isOpen) {
      fetchProjects();
    }
  }, [isOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await API.patch(`/tools/${toolId}/assign`, {
        assigned_to_project: projectId
      });
      onSave(response.data);
      onClose();
    } catch (error) {
      console.error('Error assigning tool:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="assign-tool-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Assign Tool</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="project-id">Project:</label>
            <select id="project-id" value={projectId} onChange={(e) => setProjectId(e.target.value)}>
              <option value="">Select Project</option>
              {projects.map(project => (
                <option key={project.id} value={project.id}>{project.name}</option>
              ))}
            </select>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Assign</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AssignToolModal;