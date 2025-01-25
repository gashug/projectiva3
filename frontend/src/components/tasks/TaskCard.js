// import React from "react";
// import "./styles/TaskCard.css";

// function TaskCard({ task }) {
//   return (
//     <div className="task-card">
//       <h4 className="task-name">{task.name}</h4>
//       <p className="task-info">
//         Assigned to:{" "}
//         <span className="task-assigned-to">
//           {task.assigned_to ? task.assigned_to : "N/A"}
//         </span>
//       </p>
//       <p className="task-info">
//         Status:{" "}
//         <span className={`task-status status-${task.status.replace(/\s+/g, "-")}`}>
//           {task.status}
//         </span>
//       </p>
//       <p className="task-info">
//         Due Date:{" "}
//         <span className="task-due-date">
//           {new Date(task.due_date).toLocaleDateString()}
//         </span>
//       </p>
//       <p className="task-info">
//         Priority:{" "}
//         <span className={`task-priority priority-${task.priority.toLowerCase()}`}>
//           {task.priority}
//         </span>
//       </p>
//       <div className="task-actions">
//         <button className="edit-task">Edit</button>
//         <button className="delete-task">Delete</button>
//       </div>
//     </div>
//   );
// }

// export default TaskCard;

// import React from "react";
// import "./styles/TaskCard.css"; // Import CSS file for styling

// function TaskCard({ task }) {
//   return (
//     <div className="task-card">
//       <h4 className="task-name">{task.name}</h4>
//       <p className="task-info">
//         Assigned to:{" "}
//         <span className="task-assigned-to">
//           {task.assigned_to || "N/A"}
//         </span>
//       </p>
//       <p className="task-info">
//         Status:{" "}
//         <span className={`task-status status-${task.status.replace(/\s+/g, "-")}`}>
//           {task.status}
//         </span>
//       </p>
//       <p className="task-info">
//         Due Date:{" "}
//         <span className="task-due-date">
//           {new Date(task.due_date).toLocaleDateString()}
//         </span>
//       </p>
//       <p className="task-info">
//         Priority:{" "}
//         <span className={`task-priority priority-${task.priority.toLowerCase()}`}>
//           {task.priority}
//         </span>
//       </p>
//       <div className="task-actions">
//         <button className="edit-task">Edit</button>
//         <button className="delete-task">Delete</button>
//       </div>
//     </div>
//   );
// }

// export default TaskCard;

// import React from "react";
// import "./styles/TaskCard.css";

// function TaskCard({ task, onSelectTask }) {
//   return (
//     <div className="task-card" onClick={() => onSelectTask(task)}>
//       <h4 className="task-name">{task.name}</h4>
//       <p className="task-info">
//         Assigned to:{" "}
//         <span className="task-assigned-to">
//           {task.assigned_to ? task.assigned_to : "N/A"}
//         </span>
//       </p>
//       <p className="task-info">
//         Status:{" "}
//         <span className={`task-status status-${task.status.replace(/\s+/g, "-")}`}>
//           {task.status}
//         </span>
//       </p>
//       <p className="task-info">
//         Due Date:{" "}
//         <span className="task-due-date">
//           {new Date(task.due_date).toLocaleDateString()}
//         </span>
//       </p>
//       <p className="task-info">
//         Priority:{" "}
//         <span className={`task-priority priority-${task.priority.toLowerCase()}`}>
//           {task.priority}
//         </span>
//       </p>
//     </div>
//   );
// }

// export default TaskCard;

import React from "react";
import "./styles/TaskCard.css";

function TaskCard({ task, onSelectTask }) {
  return (
    <div className="task-card" onClick={() => onSelectTask(task)}>
      <h4 className="task-name">{task.name}</h4>
      <p className="task-info">
        Assigned to:{" "}
        <span className="task-assigned-to">
          {task.assigned_to ? task.assigned_to : "N/A"}
        </span>
      </p>
      <p className="task-info">
        Status:{" "}
        <span className={`task-status status-${task.status.replace(/\s+/g, "-")}`}>
          {task.status}
        </span>
      </p>
      <p className="task-info">
        Due Date:{" "}
        <span className="task-due-date">
          {new Date(task.due_date).toLocaleDateString()}
        </span>
      </p>
      <p className="task-info">
        Priority:{" "}
        <span className={`task-priority priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </p>
    </div>
  );
}

export default TaskCard;