import React, { useState, useEffect } from 'react';
import API from '../../api/index.js'; // Import the API module
import './styles/TaskFormModal.css'; // Import CSS file for styling

function TaskFormModal({ isOpen, onClose, task, onSave }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [status, setStatus] = useState('Pending');
    const [projectId, setProjectId] = useState('');  // Assuming you want to associate tasks with projects
    const [projects, setProjects] = useState([]);
    const [technicians, setTechnicians] = useState([]); // State to store technicians

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await API.get('/projects'); // Adjust endpoint if needed
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        const fetchTechnicians = async () => {
            try {
                const response = await API.get('/technicians'); // Adjust endpoint for technicians
                setTechnicians(response.data);
            } catch (error) {
                console.error("Error fetching technicians:", error);
            }
        };

        fetchProjects();
        fetchTechnicians();
    }, []);

    useEffect(() => {
        if (task) {
            setName(task.name);
            setDescription(task.description);
            setAssignedTo(task.assigned_to || '');
            setDueDate(task.due_date ? task.due_date.substring(0, 10) : ''); // Format date for input field
            setPriority(task.priority || 'Medium');
            setStatus(task.status || 'Pending');
            setProjectId(task.project_id || '');
        } else {
            resetForm();
        }
    }, [task]);

    const resetForm = () => {
        setName('');
        setDescription('');
        setAssignedTo('');
        setDueDate('');
        setPriority('Medium');
        setStatus('Pending');
        setProjectId('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const taskData = {
            name,
            description,
            assigned_to: assignedTo,
            due_date: dueDate,
            priority,
            status,
            project_id: projectId
        };

        try {
            let response;
            if (task) {
                // Update existing task
                response = await API.put(`/tasks/${task.id}`, taskData);
            } else {
                // Create new task
                response = await API.post('/tasks', taskData);
            }
            onSave(response.data); // Pass the updated/new task data to the parent component
            onClose(); // Close the modal
            resetForm();
        } catch (error) {
            console.error("Error saving task:", error);
            // Handle error (e.g., display an error message)
        }
    };

    if (!isOpen) return null;

    return (
        <div className="task-form-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{task ? 'Edit Task' : 'Create New Task'}</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="task-name">Task Name:</label>
                        <input
                            type="text"
                            id="task-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="task-description">Description:</label>
                        <textarea
                            id="task-description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="project-id">Project:</label>
                        <select
                            id="project-id"
                            value={projectId}
                            onChange={(e) => setProjectId(e.target.value)}
                            required
                        >
                            <option value="">Select Project</option>
                            {projects.map(project => (
                                <option key={project.id} value={project.id}>{project.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="assigned-to">Assigned To:</label>
                        <select
                            id="assigned-to"
                            value={assignedTo}
                            onChange={(e) => setAssignedTo(e.target.value)}
                        >
                            <option value="">Select Technician</option>
                            {technicians.map(technician => (
                                <option key={technician.id} value={technician.id}>{technician.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="due-date">Due Date:</label>
                        <input
                            type="date"
                            id="due-date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="priority">Priority:</label>
                        <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Blocked">Blocked</option>
                        </select>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
                        <button type="submit" className="save-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskFormModal;