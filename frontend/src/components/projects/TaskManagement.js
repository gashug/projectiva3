// import React, { useState, useEffect } from "react";
// import API from "../../api/index.js";
// import "./styles/TaskManagement.css";

// function TaskManagement({ projectId }) {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       if (!projectId) return;

//       setLoading(true);
//       try {
//         const response = await API.get(`/api/tasks?projectId=${projectId}`);
//         setTasks(response.data);
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//         setError("Failed to load tasks.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [projectId]);

//   const handleStatusChange = async (taskId, newStatus) => {
//     // Optimistically update the task status
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, status: newStatus } : task
//       )
//     );

//     try {
//       await API.patch(`/tasks/${taskId}`, { status: newStatus });
//     } catch (error) {
//       console.error("Error updating task status:", error);
//       // Revert the task status to its original state in case of an error
//       // This requires fetching the original tasks again or keeping a separate state for tracking changes
//       setError("Failed to update task status.");
//     }
//   };

//   return (
//     <div className="task-management-section">
//       <h3>Task Management</h3>

//       {loading && <p>Loading tasks...</p>}
//       {error && <p className="error">{error}</p>}

//       {!loading && !error && (
//         <div className="task-list">
//           {tasks.length === 0 ? (
//             <p>No tasks found for this project.</p>
//           ) : (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Task Name</th>
//                   <th>Assigned To</th>
//                   <th>Status</th>
//                   <th>Due Date</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tasks.map((task) => (
//                   <tr key={task.id}>
//                     <td>{task.name}</td>
//                     <td>
//                       {task.assigned_to /* Assuming this is a user/technician ID */}
//                     </td>
//                     <td>{task.status}</td>
//                     <td>{new Date(task.due_date).toLocaleDateString()}</td>
//                     <td>
//                       <select
//                         value={task.status}
//                         onChange={(e) =>
//                           handleStatusChange(task.id, e.target.value)
//                         }
//                       >
//                         <option value="Pending">Pending</option>
//                         <option value="In Progress">In Progress</option>
//                         <option value="Completed">Completed</option>
//                         <option value="Blocked">Blocked</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default TaskManagement;

import React, { useState, useEffect } from "react";
import API from "../../api/index.js";
import TaskFormModal from "../tasks/TaskFormModal";
import "./styles/TaskManagement.css";

function TaskManagement({ projectId }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showTaskFormModal, setShowTaskFormModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    if (!projectId) return;

    setLoading(true);
    try {
      const response = await API.get(`/api/tasks?projectId=${projectId}`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [projectId]);

  const handleStatusChange = async (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );

    try {
      await API.patch(`/api/tasks/${taskId}`, { status: newStatus });
    } catch (error) {
      console.error("Error updating task status:", error);
      setError("Failed to update task status.");
    }
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setShowTaskFormModal(true);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await API.delete(`/api/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
      setError("Failed to delete task.");
    }
  };

  const handleAddTaskClick = () => {
    setSelectedTask(null);
    setShowTaskFormModal(true);
  };

  const handleTaskUpdate = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleTaskCreated = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const closeTaskFormModal = () => {
    setShowTaskFormModal(false);
  };

  return (
    <div className="task-management-section">
      <h3>Task Management</h3>
      <button className="add-task-button" onClick={handleAddTaskClick}>
        Add Task
      </button>

      {loading && <p>Loading tasks...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="task-list">
          {tasks.length === 0 ? (
            <p>No tasks found for this project.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Assigned To</th>
                  <th>Status</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.assigned_to}</td>
                    <td>{task.status}</td>
                    <td>{new Date(task.due_date).toLocaleDateString()}</td>
                    <td>
                      <select
                        value={task.status}
                        onChange={(e) =>
                          handleStatusChange(task.id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Blocked">Blocked</option>
                      </select>
                      <button
                        className="edit-button"
                        onClick={() => handleEditTask(task)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
      <TaskFormModal
        isOpen={showTaskFormModal}
        onClose={closeTaskFormModal}
        task={selectedTask}
        onSave={selectedTask ? handleTaskUpdate : handleTaskCreated}
        projectId={projectId}
      />
    </div>
  );
}

export default TaskManagement;