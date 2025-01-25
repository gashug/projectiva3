import React, { useState, useEffect } from "react";
import API from "../../api/index.js";

function TaskList({ projectId }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      if (!projectId) return;

      setLoading(true);
      try {
        const response = await API.get(`/tasks?projectId=${projectId}`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setError("Failed to load tasks.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [projectId]);

  const handleStatusChange = async (taskId, newStatus) => {
    // Optimistically update the task status
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );

    try {
      await API.patch(`/api/tasks/${taskId}`, { status: newStatus });
    } catch (error) {
      console.error("Error updating task status:", error);
      // Revert the task status to its original state in case of an error
      // This requires fetching the original tasks again or keeping a separate state for tracking changes
      setError("Failed to update task status.");
    }
  };

  return (
    <div className="task-management-section">
      <h3>Task Management</h3>

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
                    <td>
                      {task.assigned_to /* Assuming this is a user/technician ID */}
                    </td>
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskList;