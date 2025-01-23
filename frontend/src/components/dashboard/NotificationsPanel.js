// import React from 'react';

// function NotificationsPanel({ data }) {
//   return (
//     <div className="notifications-panel widget">
//       <h3 className="widget-title">Notifications</h3>
//       {data && data.notifications && data.notifications.length > 0 ? (
//         <ul className="notifications-list">
//           {data.notifications.map((notification, index) => (
//             <li key={index} className="notification-item">
//               {notification.message} {/* Assuming each notification has a message */}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No new notifications.</p>
//       )}
//     </div>
//   );
// }

// export default NotificationsPanel;

// import React from 'react';
// import './NotificationsPanel.css';

// function NotificationsPanel({ data }) {
//   // Placeholder notifications
//   const notifications = [
//     { id: 1, message: "New task assigned: Complete Project Proposal" },
//     { id: 2, message: "Project Alpha is now 75% complete." },
//     { id: 3, message: "Reminder: Team meeting in 1 hour." },
//     { id: 4, message: "Low stock on item: Power Drills. Reorder soon." }
//   ];

//   return (
//     <div className="notifications-panel widget">
//       <h3 className="widget-title">Notifications</h3>
//       {notifications.length > 0 ? (
//         <ul className="notifications-list">
//           {notifications.map(notification => (
//             <li key={notification.id} className="notification-item">
//               {notification.message}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No new notifications.</p>
//       )}
//     </div>
//   );
// }

// export default NotificationsPanel;

// import React, { useState, useEffect } from "react";
// import API from "../api/index.js"; // Import your API instance (axios)
// import "./NotificationsPanel.css";

// function NotificationsPanel() {
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [filter, setFilter] = useState("all"); // State for filtering

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       setLoading(true);
//       try {
//         const response = await API.get("/api/notifications"); // Assuming your endpoint is /api/notifications
//         setNotifications(response.data);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//         setError("Failed to load notifications.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//     // You'll need to implement the actual filtering logic here based on your data structure
//   };

//   // Example filtering logic (adjust based on your notification data)
//   const filteredNotifications =
//     filter === "all"
//       ? notifications
//       : notifications.filter((notification) => {
//           // Assuming your notification object has a 'type' property
//           return notification.type === filter;
//         });

//   return (
//     <div className="notifications-panel widget">
//       <h3 className="widget-title">Notifications</h3>

//       {/* Filter Options */}
//       <div className="filter-options">
//         <label htmlFor="notification-filter">Filter:</label>
//         <select
//           id="notification-filter"
//           value={filter}
//           onChange={handleFilterChange}
//         >
//           <option value="all">All</option>
//           <option value="task">Task</option>
//           <option value="project">Project</option>
//           <option value="inventory">Inventory</option>
//           {/* Add more filter options as needed */}
//         </select>
//       </div>

//       {/* Loading and Error States */}
//       {loading && <p>Loading notifications...</p>}
//       {error && <p className="error">{error}</p>}

//       {/* Notifications List */}
//       {!loading && !error && (
//         <ul className="notifications-list">
//           {filteredNotifications.length > 0 ? (
//             filteredNotifications.map((notification) => (
//               <li key={notification.id} className="notification-item">
//                 {notification.message}
//               </li>
//             ))
//           ) : (
//             <p>No notifications to display.</p>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default NotificationsPanel;

// import React from 'react';
// import './NotificationsPanel.css';

// function NotificationsPanel({ notifications }) {
//   return (
//     <div className="notifications-panel">
//       <h3 className="widget-title">Notifications</h3>
//       {notifications.length > 0 ? (
//         <ul className="notifications-list">
//           {notifications.map((notification, index) => (
//             <li key={index} className="notification-item">
//               {notification.message} {/* Adjust based on your notification data */}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No new notifications.</p>
//       )}
//     </div>
//   );
// }

// export default NotificationsPanel;

import React from 'react';
import './NotificationsPanel.css';

function NotificationsPanel({ notifications }) {
  return (
    <div className="notifications-panel widget">
      <h3 className="widget-title">Notifications</h3>
      {notifications.length > 0 ? (
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              {notification.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>No new notifications.</p>
      )}
    </div>
  );
}

export default NotificationsPanel;