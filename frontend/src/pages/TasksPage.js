// import React, { useState, useEffect } from "react";
// import API from "../api/index.js";
// import TaskCard from "../components/tasks/TaskCard";
// import "../styles/TasksPage.css";

// function TasksPage({ isSidebarOpen, setPageTitle }) {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setPageTitle("Tasks");
//     const fetchTasks = async () => {
//       try {
//         const response = await API.get("/api/tasks");
//         setTasks(response.data);
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//         setError("Failed to load tasks.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [setPageTitle]);

//   // Add filtering and sorting logic here (we'll do this in the next steps)

//   return (
//     <div className="tasks-container">
//       <div className="tasks-page">
//         <main className="content">
//             {/* <div className="filters-section">
//               <Filters
//                 statusFilter={statusFilter}
//                 setStatusFilter={setStatusFilter}
//                 departmentFilter={departmentFilter}
//                 setDepartmentFilter={setDepartmentFilter}
//                 projectTypeFilter={projectTypeFilter}
//                 setProjectTypeFilter={setProjectTypeFilter}
//               />
//             </div> */}

//             <div className="tasks-content">
//               {loading ? (
//                 <div>Loading tasks...</div>
//               ) : error ? (
//                 <div>Error: {error}</div>
//               ) : (
//                 <div className="task-cards">
//                   {tasks.map((task) => (
//                     <div key={task.id} className="task-card">
//                       <h3>{task.name}</h3>
//                       <p>Assigned to: {task.assigned_to}</p>
//                       <p>Status: {task.status}</p>
//                       <p>Due Date: {new Date(task.due_date).toLocaleDateString()}</p>
//                       <p>Priority: {task.priority}</p>
//                       <button className="edit-task">Edit</button>
//                       <button className="delete-task">Delete</button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default TasksPage;

// import React, { useState, useEffect } from "react";
// import API from "../api/index.js";
// import TaskCard from "../components/tasks/TaskCard.js";
// import TaskDetailsModal from "../components/tasks/TaskDetailsModal.js";
// import "../styles/TasksPage.css";

// function TasksPage({ setPageTitle }) {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedTask, setSelectedTask] = useState(null);

//   useEffect(() => {
//     setPageTitle("Tasks");
//     const fetchTasks = async () => {
//       try {
//         const response = await API.get("/api/tasks");
//         setTasks(response.data);
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//         setError("Failed to load tasks.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [setPageTitle]);

//     const handleSelectTask = (task) => {
//         setSelectedTask(task);
//     };

//     const closeModal = () => {
//         setSelectedTask(null);
//     };
  
//   return (
//     <div className="tasks-container">
//       <div className="tasks-page">
//         <main className="content">
//           <div className="page-content">
//             <div className="tasks-content">
//               {loading ? (
//                 <div>Loading tasks...</div>
//               ) : error ? (
//                 <div>Error: {error}</div>
//               ) : (
//                 <div className="task-cards">
//                   {tasks.map((task) => (
//                     <TaskCard key={task.id} task={task} />
//                   ))}
//                 </div>
//               )}
//             </div>
//             <TaskDetailsModal 
//                 task={selectedTask}
//                 isOpen={!!selectedTask} 
//                 onClose={closeModal} 
//             />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default TasksPage;

// import React, { useState, useEffect } from "react";
// import API from "../api/index.js";
// import TaskCard from "../components/tasks/TaskCard.js";
// import TaskDetailsModal from "../components/tasks/TaskDetailsModal.js";
// import TaskFilters from "../components/tasks/TaskFilters.js";

// import TaskFormModal from "../components/tasks/TaskFormModal.js";
// import "../styles/TasksPage.css";

// function TasksPage({ setPageTitle }) {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [statusFilter, setStatusFilter] = useState("");
//   const [dueDateFilter, setDueDateFilter] = useState("");
//   const [assignedToFilter, setAssignedToFilter] = useState("");
//   const [showTaskFormModal, setShowTaskFormModal] = useState(false);

//   useEffect(() => {
//     setPageTitle("Tasks");
//     const fetchTasks = async () => {
//       try {
//         const response = await API.get("/api/tasks");
//         setTasks(response.data);
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//         setError("Failed to load tasks.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [setPageTitle]);

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//   };

//   const closeModal = () => {
//     setSelectedTask(null);
//   };

//   const clearFilters = () => {
//     setStatusFilter("");
//     setDueDateFilter("");
//     setAssignedToFilter("");
//   };

//   const filteredTasks = tasks.filter((task) => {
//     const statusMatch = !statusFilter || task.status === statusFilter;
//     const dueDateMatch = !dueDateFilter || task.dueDate === dueDateFilter;
//     const assignedToMatch =
//       !assignedToFilter || task.assigned_to === assignedToFilter;

//     return statusMatch && dueDateMatch && assignedToMatch;
//   });

//   const handleAddTaskClick = () => {
//     setShowTaskFormModal(true);
//   };

//   const closeTaskFormModal = () => {
//     setShowTaskFormModal(false);
//   };

//   const handleTaskCreated = (newTask) => {
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <div className="tasks-container">
//       <div className="tasks-page">
//         <main className="content">
//           <div className="page-content">
//           <TaskFilters
//               statusFilter={statusFilter}
//               setStatusFilter={setStatusFilter}
//               dueDateFilter={dueDateFilter}
//               setDueDateFilter={setDueDateFilter}
//               assignedToFilter={assignedToFilter}
//               setAssignedToFilter={setAssignedToFilter}
//               onClearFilters={clearFilters}
//             />
//              <button className="add-task-button" onClick={handleAddTaskClick}>
//               Add Task
//             </button>
//             <div className="tasks-content">
//               {loading ? (
//                 <div>Loading tasks...</div>
//               ) : error ? (
//                 <div>Error: {error}</div>
//               ) : (
//                 <div className="task-cards">
//                   {tasks.map((task) => (
//                     <TaskCard
//                       key={task.id}
//                       task={task}
//                       onSelectTask={handleTaskClick}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>
//             <TaskDetailsModal
//               task={selectedTask}
//               isOpen={!!selectedTask}
//               onClose={closeModal}
//             />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default TasksPage;

// import React, { useState, useEffect } from "react";
// import API from "../api/index.js";
// import TaskCard from "../components/tasks/TaskCard.js";
// import TaskDetailsModal from "../components/tasks/TaskDetailsModal.js";
// import TaskFilters from "../components/tasks/TaskFilters";
// import TaskFormModal from "../components/tasks/TaskFormModal.js";
// import "../styles/TasksPage.css";

// function TasksPage({ setPageTitle }) {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [statusFilter, setStatusFilter] = useState("");
//   const [dueDateFilter, setDueDateFilter] = useState("");
//   const [assignedToFilter, setAssignedToFilter] = useState("");
//   const [showTaskFormModal, setShowTaskFormModal] = useState(false);

//   useEffect(() => {
//     setPageTitle("Tasks");
//     const fetchTasks = async () => {
//       try {
//         const response = await API.get("/api/tasks");
//         setTasks(response.data);
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//         setError("Failed to load tasks.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [setPageTitle]);

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//   };

//   const closeModal = () => {
//     setSelectedTask(null);
//   };

//   const clearFilters = () => {
//     setStatusFilter("");
//     setDueDateFilter("");
//     setAssignedToFilter("");
//   };

//   const filteredTasks = tasks.filter((task) => {
//     const statusMatch = !statusFilter || task.status === statusFilter;
//     const dueDateMatch = !dueDateFilter || task.dueDate === dueDateFilter;
//     const assignedToMatch =
//       !assignedToFilter || task.assigned_to === assignedToFilter;

//     return statusMatch && dueDateMatch && assignedToMatch;
//   });

//   const handleAddTaskClick = () => {
//     setShowTaskFormModal(true);
//   };

//   const closeTaskFormModal = () => {
//     setShowTaskFormModal(false);
//   };

//   const handleTaskCreated = (newTask) => {
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <div className="tasks-container">
//       <div className="tasks-page">
//         <main className="content">
//           <div className="page-content">
//             <section className="filters-section">
//               <TaskFilters
//                 statusFilter={statusFilter}
//                 setStatusFilter={setStatusFilter}
//                 dueDateFilter={dueDateFilter}
//                 setDueDateFilter={setDueDateFilter}
//                 assignedToFilter={assignedToFilter}
//                 setAssignedToFilter={setAssignedToFilter}
//                 onClearFilters={clearFilters}
//               />
//             </section>
//             <section className="add-task-section">
//               <button
//                 className="add-task-button"
//                 onClick={handleAddTaskClick}
//               >
//                 Add Task
//               </button>
//             </section>
//             <section className="task-cards-section">
//               <div className="tasks-content">
//                 {loading ? (
//                   <div>Loading tasks...</div>
//                 ) : error ? (
//                   <div>Error: {error}</div>
//                 ) : (
//                   <div className="task-cards">
//                     {filteredTasks.map((task) => (
//                       <TaskCard
//                         key={task.id}
//                         task={task}
//                         onSelectTask={handleTaskClick}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </section>
//             <TaskDetailsModal
//               task={selectedTask}
//               isOpen={!!selectedTask}
//               onClose={closeModal}
//             />
//             <TaskFormModal
//               isOpen={showTaskFormModal}
//               onClose={closeTaskFormModal}
//               onSave={handleTaskCreated}
//             />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default TasksPage;

// import React, { useState, useEffect } from "react";
// import API from "../api/index.js";
// import TaskCard from "../components/tasks/TaskCard.js";
// import TaskDetailsModal from "../components/tasks/TaskDetailsModal.js";
// import TaskFilters from "../components/tasks/TaskFilters.js";

// import TaskFormModal from "../components/tasks/TaskFormModal.js";
// import "../styles/TasksPage.css";

// function TasksPage({ setPageTitle }) {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [statusFilter, setStatusFilter] = useState("");
//   const [dueDateFilter, setDueDateFilter] = useState("");
//   const [assignedToFilter, setAssignedToFilter] = useState("");
//   const [showTaskFormModal, setShowTaskFormModal] = useState(false);

//   useEffect(() => {
//     setPageTitle("Tasks");
//     const fetchTasks = async () => {
//       try {
//         const response = await API.get("/api/tasks");
//         setTasks(response.data);
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//         setError("Failed to load tasks.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [setPageTitle]);

//   const handleTaskClick = (task) => {
//     setSelectedTask(task);
//   };

//   const closeModal = () => {
//     setSelectedTask(null);
//   };

//   const clearFilters = () => {
//     setStatusFilter("");
//     setDueDateFilter("");
//     setAssignedToFilter("");
//   };

//   const filteredTasks = tasks.filter((task) => {
//     const statusMatch = !statusFilter || task.status === statusFilter;
//     const dueDateMatch = !dueDateFilter || task.dueDate === dueDateFilter;
//     const assignedToMatch =
//       !assignedToFilter || task.assigned_to === assignedToFilter;

//     return statusMatch && dueDateMatch && assignedToMatch;
//   });

//   const handleAddTaskClick = () => {
//     setShowTaskFormModal(true);
//   };

//   const closeTaskFormModal = () => {
//     setShowTaskFormModal(false);
//   };

//   const handleTaskCreated = (newTask) => {
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <div className="tasks-container">
//       <div className="tasks-page">
//         <main className="content">
//           <div className="page-content">
//             <section className="filters-section">
//               <TaskFilters
//                 statusFilter={statusFilter}
//                 setStatusFilter={setStatusFilter}
//                 dueDateFilter={dueDateFilter}
//                 setDueDateFilter={setDueDateFilter}
//                 assignedToFilter={assignedToFilter}
//                 setAssignedToFilter={setAssignedToFilter}
//                 onClearFilters={clearFilters}
//               />
//             </section>
//             <section className="add-task-section">
//               <button
//                 className="add-task-button"
//                 onClick={handleAddTaskClick}
//               >
//                 Add Task
//               </button>
//             </section>
//             <section className="task-cards-section">
//               <div className="tasks-content">
//                 {loading ? (
//                   <div>Loading tasks...</div>
//                 ) : error ? (
//                   <div>Error: {error}</div>
//                 ) : (
//                   <div className="task-cards">
//                     {filteredTasks.map((task) => (
//                       <TaskCard
//                         key={task.id}
//                         task={task}
//                         onSelectTask={handleTaskClick}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </section>
//             <TaskDetailsModal
//               task={selectedTask}
//               isOpen={!!selectedTask}
//               onClose={closeModal}
//             />
//             <TaskFormModal
//               isOpen={showTaskFormModal}
//               onClose={closeTaskFormModal}
//               onSave={handleTaskCreated}
//             />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default TasksPage;

import React, { useState, useEffect } from "react";
import API from "../api/index.js";
import TaskCard from "../components/tasks/TaskCard.js";
import TaskDetailsModal from "../components/tasks/TaskDetailsModal.js";
import TaskFilters from "../components/tasks/TaskFilters.js";

import TaskFormModal from "../components/tasks/TaskFormModal.js";
import "../styles/TasksPage.css";

function TasksPage({ setPageTitle }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [dueDateFilter, setDueDateFilter] = useState("");
  const [assignedToFilter, setAssignedToFilter] = useState("");
  const [showTaskFormModal, setShowTaskFormModal] = useState(false);

  useEffect(() => {
    setPageTitle("Tasks");
    const fetchTasks = async () => {
      try {
        const response = await API.get("/api/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setError("Failed to load tasks.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [setPageTitle]);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  const clearFilters = () => {
    setStatusFilter("");
    setDueDateFilter("");
    setAssignedToFilter("");
  };

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = !statusFilter || task.status === statusFilter;
    const dueDateMatch = !dueDateFilter || task.dueDate === dueDateFilter;
    const assignedToMatch =
      !assignedToFilter || task.assigned_to === assignedToFilter;

    return statusMatch && dueDateMatch && assignedToMatch;
  });

  const handleAddTaskClick = () => {
    setShowTaskFormModal(true);
  };

  const closeTaskFormModal = () => {
    setShowTaskFormModal(false);
  };

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="tasks-container">
      <section className="filters-and-add-task-section">
        <TaskFilters
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          dueDateFilter={dueDateFilter}
          setDueDateFilter={setDueDateFilter}
          assignedToFilter={assignedToFilter}
          setAssignedToFilter={setAssignedToFilter}
          onClearFilters={clearFilters}
        />
        <button className="add-task-button" onClick={handleAddTaskClick}>
          Add Task
        </button>
      </section>
      <div className="tasks-page">
        <main className="content">
          <div className="page-content">
            <section className="task-cards-section">
              <div className="tasks-content">
                {loading ? (
                  <div>Loading tasks...</div>
                ) : error ? (
                  <div>Error: {error}</div>
                ) : (
                  <div className="task-cards">
                    {filteredTasks.map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onSelectTask={handleTaskClick}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
            <TaskDetailsModal
              task={selectedTask}
              isOpen={!!selectedTask}
              onClose={closeModal}
            />
            <TaskFormModal
              isOpen={showTaskFormModal}
              onClose={closeTaskFormModal}
              onSave={handleTaskCreated}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default TasksPage;