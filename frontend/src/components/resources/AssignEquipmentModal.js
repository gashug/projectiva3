// import React, { useState, useEffect } from 'react';
// import API from '../../api/index.js';
// import './styles/AssignEquipmentModal.css';

// function AssignEquipmentModal({ isOpen, onClose, equipmentId, onSave }) {
//   const [projectId, setProjectId] = useState('');
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await API.get('/api/projects');
//         setProjects(response.data);
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     if (isOpen) {
//       fetchProjects();
//     }
//   }, [isOpen]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await API.patch(`/equipment/${equipmentId}/assign`, {
//         assigned_to_project: projectId
//       });
//       onSave(response.data);
//       onClose();
//     } catch (error) {
//       console.error('Error assigning equipment:', error);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-backdrop">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>Assign Equipment</h2>
//           <button className="close-button" onClick={onClose}>&times;</button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="project-id">Project:</label>
//             <select id="project-id" value={projectId} onChange={(e) => setProjectId(e.target.value)}>
//               <option value="">Select Project</option>
//               {projects.map(project => (
//                 <option key={project.id} value={project.id}>{project.name}</option>
//               ))}
//             </select>
//           </div>
//           <div className="modal-footer">
//             <button type="button" onClick={onClose}>Cancel</button>
//             <button type="submit">Assign</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AssignEquipmentModal;

import React, { useState, useEffect } from 'react';
import API from '../../api/index.js';
import './styles/AssignEquipmentModal.css';

function AssignEquipmentModal({ isOpen, onClose, equipmentId, onSave }) {
    const [projectId, setProjectId] = useState('');
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await API.get('/api/projects'); // Fetch all projects
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
        const response = await API.patch(`/equipment/${equipmentId}/assign`, {
          assigned_to_project: projectId === '' ? null : parseInt(projectId)
        });
        onSave(response.data);
        onClose();
      } catch (error) {
        console.error('Error assigning equipment:', error);
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="assign-equipment-modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Assign Equipment</h2>
            <button className="close-button" onClick={onClose}>&times;</button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="project-id">Project:</label>
              <select id="project-id" value={projectId} onChange={(e) => setProjectId(e.target.value)}>
                <option value="">Select Project (or None to Unassign)</option>
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
  
  export default AssignEquipmentModal;