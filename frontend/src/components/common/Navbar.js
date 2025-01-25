// // // import React, { useState } from "react";
// // // import "./Navbar.css"; // Import CSS file for styling
// // // import { Link } from 'react-router-dom';
// // // import QuickActions from "../dashboard/QuickActions";

// // // function Navbar({ toggleSidebar }) {
// // //   const [showNotifications, setShowNotifications] = useState(false);

// // //   const handleNotificationsClick = () => {
// // //     setShowNotifications(!showNotifications);
// // //   };

// // //   return (
// // //     <nav className="navbar">
// // //       <div className="navbar-left">
// // //         <button className="sidebar-toggle" onClick={toggleSidebar}>
// // //           {/* Add an icon for the toggle button here, e.g., a hamburger icon */}
// // //           &#9776; 
// // //         </button>
// // //         <h1 className="navbar-title">Dashboard</h1>
// // //       </div>
// // //       <div className="navbar-center">
// // //         {/* Add a search bar here, you can reuse or create a new component */}
// // //         <input type="text" placeholder="Search..." className="search-bar" />
// // //       </div>
// // //       <div className="navbar-right">
// // //         {/* <div className="quick-actions">
// // //           <Link to="/projects/create" className="quick-action-button">
// // //             Create New Project
// // //           </Link>
// // //           <Link to="/tasks/assign" className="quick-action-button">
// // //             Assign Task
// // //           </Link>
// // //           <Link to="/documents/upload" className="quick-action-button">
// // //             Upload Document
// // //           </Link>
// // //         </div> */}
// // //         <QuickActions data={dashboardData} />
// // //         <button className="notifications-button" onClick={handleNotificationsClick}>
// // //           {/* Add a notification icon here */}
// // //           🔔
// // //           {showNotifications && (
// // //             <div className="notifications-dropdown">
// // //               {/* Fetch and display notifications here */}
// // //               <p>Notification 1</p>
// // //               <p>Notification 2</p>
// // //               {/* ... more notifications */}
// // //             </div>
// // //           )}
// // //         </button>
// // //         {/* Add user menu dropdown here */}
// // //         <div className="user-menu">
// // //           {/* Placeholder for user information and dropdown */}
// // //           <span className="user-name">Welcome, User</span>
// // //           {/* Add dropdown for profile, settings, logout, etc. */}
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // }

// // // export default Navbar;

// // import React, { useState } from "react";
// // import "./Navbar.css"; // Import CSS file for styling
// // import UserMenu from "./UserMenu";

// // function Navbar({ toggleSidebar }) {
// //   const [showNotifications, setShowNotifications] = useState(false);

// //   const handleNotificationsClick = () => {
// //     setShowNotifications(!showNotifications);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-left">
// //         <button className="sidebar-toggle" onClick={toggleSidebar}>
// //           {/* Add an icon for the toggle button here, e.g., a hamburger icon */}
// //           &#9776;
// //         </button>
// //         <h1 className="navbar-title">Dashboard</h1>
// //       </div>
// //       <div className="navbar-center">
// //         {/* Add a search bar here, you can reuse or create a new component */}
// //         <input type="text" placeholder="Search..." className="search-bar" />
// //       </div>
// //       <div className="navbar-right">
// //         <div className="quick-actions">
// //           <button className="quick-action-button">Create New Project</button>
// //           <button className="quick-action-button">Assign Task</button>
// //           <button className="quick-action-button">Upload Document</button>
// //         </div>
// //         <UserMenu />
// //         <button className="notifications-button" onClick={handleNotificationsClick}>
// //           {/* Add a notification icon here */}
// //           🔔
// //           {showNotifications && (
// //             <div className="notifications-dropdown">
// //               {/* Fetch and display notifications here */}
// //               <p>Notification 1</p>
// //               <p>Notification 2</p>
// //               {/* ... more notifications */}
// //             </div>
// //           )}
// //         </button>
// //         {/* Add user menu dropdown here */}
// //         <div className="user-menu">
// //           {/* Placeholder for user information and dropdown */}
// //           {/* <span className="user-name">Welcome, User</span> */}
// //           {/* Add dropdown for profile, settings, logout, etc. */}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// // import React, { useState } from "react";
// // import "./Navbar.css";
// // import { Link } from "react-router-dom"; // Import Link
// // import UserMenu from "./UserMenu"; // Import UserMenu component

// // function Navbar({ toggleSidebar }) {
// //   const [showNotifications, setShowNotifications] = useState(false);
// //   const [showQuickActions, setShowQuickActions] = useState(false); // State for quick actions dropdown

// //   const handleNotificationsClick = () => {
// //     setShowNotifications(!showNotifications);
// //   };

// //   const handleQuickActionsClick = () => {
// //     setShowQuickActions(!showQuickActions); // Toggle dropdown visibility
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-left">
// //         <button className="sidebar-toggle" onClick={toggleSidebar}>
// //           &#9776;
// //         </button>
// //         <h1 className="navbar-title">Dashboard</h1>
// //       </div>
// //       <div className="navbar-center">
// //         <input type="text" placeholder="Search..." className="search-bar" />
// //       </div>
// //       <div className="navbar-right">
// //         <div className="quick-actions">
// //           <button
// //             className="quick-actions-button"
// //             onClick={handleQuickActionsClick}
// //           >
// //             Quick Actions
// //           </button>
// //           {/* Quick Actions Dropdown */}
// //           {showQuickActions && (
// //             <div className="quick-actions-dropdown">
// //               <Link to="/projects/create" className="quick-action-link">
// //                 Create New Project
// //               </Link>
// //               <Link to="/tasks/assign" className="quick-action-link">
// //                 Assign Task
// //               </Link>
// //               <Link to="/documents/upload" className="quick-action-link">
// //                 Upload Document
// //               </Link>
// //               {/* Add more quick actions here */}
// //             </div>
// //           )}
// //         </div>
// //         <button
// //           className="notifications-button"
// //           onClick={handleNotificationsClick}
// //         >
// //           🔔
// //           {showNotifications && (
// //             <div className="notifications-dropdown">
// //               <p>Notification 1</p>
// //               <p>Notification 2</p>
// //             </div>
// //           )}
// //         </button>
// //         {/* <div className="user-menu">
// //           <span className="user-name">Welcome, User</span>
// //         </div> */}
// //         <UserMenu />
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// // import React, { useState } from "react";
// // import "./Navbar.css";
// // import QuickActionsModal from "../dashboard/QuickActionsModal";
// // import UserMenu from "./UserMenu";

// // function Navbar({ toggleSidebar }) {
// //   const [showNotifications, setShowNotifications] = useState(false);
// //   const [showQuickActionsModal, setShowQuickActionsModal] = useState(false);

// //   const handleNotificationsClick = () => {
// //     setShowNotifications(!showNotifications);
// //   };

// //   const handleQuickActionsClick = () => {
// //     setShowQuickActionsModal(!showQuickActionsModal);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-left">
// //         <button className="sidebar-toggle" onClick={toggleSidebar}>
// //           &#9776;
// //         </button>
// //         <h1 className="navbar-title">Dashboard</h1>
// //       </div>
// //       <div className="navbar-center">
// //         <input type="text" placeholder="Search..." className="search-bar" />
// //       </div>
// //       <div className="navbar-right">
// //       <button className="quick-actions-button" onClick={handleQuickActionsClick}>
// //           Quick Actions
// //         </button>
// //         <button className="notifications-button" onClick={handleNotificationsClick}>
// //           🔔
// //           {showNotifications && (
// //             <div className="notifications-dropdown">
// //               <p>Notification 1</p>
// //               <p>Notification 2</p>
// //             </div>
// //           )}
// //         </button>
// //         <div className="user-menu">
// //           {/* <span className="user-name">Welcome, User</span> */}
// //           <UserMenu />
// //         </div>

// //         {/* Quick Actions Modal */}
// //         <QuickActionsModal
// //           isOpen={showQuickActionsModal}
// //           onClose={() => setShowQuickActionsModal(false)}
// //         />
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// // import React, { useState } from "react";
// // import "./Navbar.css";
// // import { Link } from 'react-router-dom';

// // function Navbar({ toggleSidebar }) {
// //   const [showNotifications, setShowNotifications] = useState(false);
// //   const [showQuickActions, setShowQuickActions] = useState(false);

// //   const handleNotificationsClick = () => {
// //     setShowNotifications(!showNotifications);
// //   };

// //   const handleQuickActionsClick = () => {
// //     setShowQuickActions(!showQuickActions);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-left">
// //         <button className="sidebar-toggle" onClick={toggleSidebar}>
// //           &#9776;
// //         </button>
// //         <h1 className="navbar-title">Dashboard</h1>
// //       </div>
// //       <div className="navbar-center">
// //         <input type="text" placeholder="Search..." className="search-bar" />
// //       </div>
// //       <div className="navbar-right">
// //         <div className="quick-actions">
// //           <button
// //             className="quick-actions-button"
// //             onClick={handleQuickActionsClick}
// //           >
// //             Quick Actions
// //           </button>
// //           {showQuickActions && (
// //             <ul className="quick-actions-dropdown">
// //               <li>
// //                 <Link to="/projects/create">Create New Project</Link>
// //               </li>
// //               <li>
// //                 <Link to="/tasks/assign">Assign Task</Link>
// //               </li>
// //               <li>
// //                 <Link to="/documents/upload">Upload Document</Link>
// //               </li>
// //               {/* Add more quick actions here */}
// //             </ul>
// //           )}
// //         </div>
// //         <button
// //           className="notifications-button"
// //           onClick={handleNotificationsClick}
// //         >
// //           🔔
// //           {showNotifications && (
// //             <div className="notifications-dropdown">
// //               <p>Notification 1</p>
// //               <p>Notification 2</p>
// //               {/* ... more notifications */}
// //             </div>
// //           )}
// //         </button>
// //         <div className="user-menu">
// //           <span className="user-name">Welcome, User</span>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// // import React, { useState } from "react";
// // import "./Navbar.css";
// // import { Link } from 'react-router-dom';
// // import UserMenu from "./UserMenu";

// // function Navbar({ toggleSidebar }) {
// //   const [showNotifications, setShowNotifications] = useState(false);
// //   const [showQuickActions, setShowQuickActions] = useState(false);

// //   const handleNotificationsClick = () => {
// //     setShowNotifications(!showNotifications);
// //   };

// //   const handleQuickActionsClick = () => {
// //     setShowQuickActions(!showQuickActions);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-left">
// //         <button className="sidebar-toggle" onClick={toggleSidebar}>
// //           &#9776;
// //         </button>
// //         <h1 className="navbar-title">Dashboard</h1>
// //       </div>
// //       <div className="navbar-center">
// //         <input type="text" placeholder="Search..." className="search-bar" />
// //       </div>
// //       <div className="navbar-right">
// //         <div className="quick-actions">
// //           <button
// //             className="quick-actions-button"
// //             onClick={handleQuickActionsClick}
// //           >
// //             Quick Actions
// //           </button>
// //           {showQuickActions && (
// //             <ul className="quick-actions-dropdown">
// //               <li>
// //                 <Link to="/projects/create">Create New Project</Link>
// //               </li>
// //               <li>
// //                 <Link to="/tasks/assign">Assign Task</Link>
// //               </li>
// //               <li>
// //                 <Link to="/documents/upload">Upload Document</Link>
// //               </li>
// //               {/* Add more quick actions here */}
// //             </ul>
// //           )}
// //         </div>
// //         <button
// //           className="notifications-button"
// //           onClick={handleNotificationsClick}
// //         >
// //           🔔
// //           {showNotifications && (
// //             <div className="notifications-dropdown">
// //               <p>Notification 1</p>
// //               <p>Notification 2</p>
// //               {/* ... more notifications */}
// //             </div>
// //           )}
// //         </button>
// //         <div className="user-menu">
// //           {/* <span className="user-name">Welcome, User</span> */}
// //           <UserMenu />
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import { Link } from 'react-router-dom';
// import UserMenu from "./UserMenu";

// function Navbar({ toggleSidebar, isSidebarOpen }) {
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showQuickActions, setShowQuickActions] = useState(false);

//   const handleNotificationsClick = () => {
//     setShowNotifications(!showNotifications);
//   };

//   const handleQuickActionsClick = () => {
//     setShowQuickActions(!showQuickActions);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//       <button className="sidebar-toggle" onClick={toggleSidebar}>
//       {isSidebarOpen ? "\u2630" : "\u00d7"}
//       </button>
//         <h1 className="navbar-title">Dashboard</h1>
//       </div>
//       <div className="navbar-center">
//         <input type="text" placeholder="Search..." className="search-bar" />
//       </div>
//       <div className="navbar-right">
//         <div className="quick-actions">
//           <button
//             className="quick-actions-button"
//             onClick={handleQuickActionsClick}
//           >
//             Quick Actions
//           </button>
//           {showQuickActions && (
//             <ul className="quick-actions-dropdown">
//               <li>
//                 <Link to="/projects/create">Create New Project</Link>
//               </li>
//               <li>
//                 <Link to="/tasks/assign">Assign Task</Link>
//               </li>
//               <li>
//                 <Link to="/documents/upload">Upload Document</Link>
//               </li>
//             </ul>
//           )}
//         </div>
//         <button
//           className="notifications-button"
//           onClick={handleNotificationsClick}
//         >
//           🔔
//           {showNotifications && (
//             <div className="notifications-dropdown">
//               <p>Notification 1</p>
//               <p>Notification 2</p>
//             </div>
//           )}
//         </button>
//         <div className="user-menu">
//           <UserMenu />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import { Link } from 'react-router-dom';
// import UserMenu from "./UserMenu";

// function Navbar({ toggleSidebar, isSidebarOpen, onNotificationsClick, showNotifications }) {
//   const [showQuickActions, setShowQuickActions] = useState(false);

//   const handleQuickActionsClick = () => {
//     setShowQuickActions(!showQuickActions);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? "\u2630" : "\u00d7"}
//         </button>
//         <h1 className="navbar-title">Dashboard</h1>
//       </div>
//       <div className="navbar-center">
//         <input type="text" placeholder="Search..." className="search-bar" />
//       </div>
//       <div className="navbar-right">
//         <div className="quick-actions">
//           <button
//             className="quick-actions-button"
//             onClick={handleQuickActionsClick}
//           >
//             Quick Actions
//           </button>
//           {showQuickActions && (
//             <ul className="quick-actions-dropdown">
//               <li>
//                 <Link to="/projects/create">Create New Project</Link>
//               </li>
//               <li>
//                 <Link to="/tasks/assign">Assign Task</Link>
//               </li>
//               <li>
//                 <Link to="/documents/upload">Upload Document</Link>
//               </li>
//             </ul>
//           )}
//         </div>
//         <button
//           className="notifications-button"
//           onClick={onNotificationsClick}
//         >
//           🔔
//         </button>
//         <div className="user-menu">
//           <UserMenu />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { Link } from 'react-router-dom';
// import API from '../../api/index';
// import UserMenu from "./UserMenu";

// function Navbar({ toggleSidebar, isSidebarOpen }) {
//     const [showQuickActions, setShowQuickActions] = useState(false);
//     const [notifications, setNotifications] = useState([]);
//     const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);
//     const [ setError ] = useState(null);

//     useEffect(() => {
//         const fetchNotifications = async () => {
//             try {
//                 const response = await API.get('/api/notifications');
//                 setNotifications(response.data);
//             } catch (error) {
//                 console.error("Error fetching notifications:", error);
//                 setError("Failed to load notifications.");
//             }
//         };

//         fetchNotifications();
//     }, []);

//     const handleQuickActionsClick = () => {
//         setShowQuickActions(!showQuickActions);
//     };

//     const handleNotificationsClick = () => {
//         setShowNotificationsDropdown(!showNotificationsDropdown); // Toggle the dropdown visibility
//       };

//     return (
//         <nav className="navbar">
//             <div className="navbar-left">
//                 <button className="sidebar-toggle" onClick={toggleSidebar}>
//                     {isSidebarOpen ? "\u2630" : "\u00d7"}
//                 </button>
//                 <h1 className="navbar-title">Dashboard</h1>
//             </div>
//             <div className="navbar-center">
//                 <input type="text" placeholder="Search..." className="search-bar" />
//             </div>
//             <div className="navbar-right">
//                 <div className="quick-actions">
//                     <button
//                         className="quick-actions-button"
//                         onClick={handleQuickActionsClick}
//                     >
//                         Quick Actions
//                     </button>
//                     {showQuickActions && (
//                         <ul className="quick-actions-dropdown">
//                             <li>
//                                 <Link to="/projects/create">Create New Project</Link>
//                             </li>
//                             <li>
//                                 <Link to="/tasks/assign">Assign Task</Link>
//                             </li>
//                             <li>
//                                 <Link to="/documents/upload">Upload Document</Link>
//                             </li>
//                         </ul>
//                     )}
//                 </div>
//                 <button
//                     className="notifications-button"
//                     onClick={handleNotificationsClick}
//                     >
//                     🔔
//                 </button>
//                 {/* Notifications Dropdown */}
//                 {showNotificationsDropdown && (
//                     <div className="notifications-dropdown">
//                     {notifications.length > 0 ? (
//                         notifications.map((notification) => (
//                         <p key={notification.id}>{notification.message}</p>
//                         ))
//                     ) : (
//                         <p>No new notifications</p>
//                     )}
//                     </div>
//                 )}
//                 <div className="user-menu">
//                     <UserMenu />
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { Link, useNavigate } from 'react-router-dom';
// import API from '../../api/index';
// import UserMenu from "./UserMenu";

// function Navbar({ toggleSidebar, isSidebarOpen }) {
//   const [showQuickActions, setShowQuickActions] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await API.get('/api/notifications');
//         setNotifications(response.data);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//         setError("Failed to load notifications.");
//       }
//     };

//     fetchNotifications();
//   }, []);

//   const handleQuickActionsClick = () => {
//     setShowQuickActions(!showQuickActions);
//   };

//   const handleNotificationsClick = () => {
//     setShowNotificationsDropdown(!showNotificationsDropdown);
//   };

//   const handleCreateNewProject = () => {
//     // Close the dropdown
//     setShowQuickActions(false);
//     // Navigate to the Create Project page
//     navigate("/projects/create");
//   };

//   const handleAssignTask = () => {
//     setShowQuickActions(false);
//     navigate("/tasks/assign");
//   };

//   const handleUploadDocument = () => {
//     setShowQuickActions(false);
//     navigate("/documents/upload");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? "\u2630" : "\u00d7"}
//         </button>
//         <h1 className="navbar-title">Dashboard</h1>
//       </div>
//       <div className="navbar-center">
//         <input type="text" placeholder="Search..." className="search-bar" />
//       </div>
//       <div className="navbar-right">
//         <div className="quick-actions">
//           <button
//             className="quick-actions-button"
//             onClick={handleQuickActionsClick}
//           >
//             Quick Actions
//           </button>
//           {showQuickActions && (
//             <ul className="quick-actions-dropdown">
//               <li onClick={handleCreateNewProject}>
//                 Create New Project
//               </li>
//               <li onClick={handleAssignTask}>
//                 Assign Task
//               </li>
//               <li onClick={handleUploadDocument}>
//                 Upload Document
//               </li>
//             </ul>
//           )}
//         </div>
//         <button
//           className="notifications-button"
//           onClick={handleNotificationsClick}
//         >
//           🔔
//         </button>
//         {showNotificationsDropdown && (
//           <div className="notifications-dropdown">
//             {notifications.length > 0 ? (
//               notifications.map((notification) => (
//                 <p key={notification.id}>{notification.message}</p>
//               ))
//             ) : (
//               <p>No new notifications</p>
//             )}
//           </div>
//         )}
//         <div className="user-menu">
//           <UserMenu />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { Link } from 'react-router-dom';
// import API from '../../api/index';
// import UserMenu from "./UserMenu";

// function Navbar({ toggleSidebar, isSidebarOpen, pageTitle }) {
//   const [showQuickActions, setShowQuickActions] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await API.get('/notifications');
//         setNotifications(response.data);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//         setError("Failed to load notifications.");
//       }
//     };

//     fetchNotifications();
//   }, []);

//   const handleQuickActionsClick = () => {
//     setShowQuickActions(!showQuickActions);
//   };

//   const handleNotificationsClick = () => {
//     setShowNotificationsDropdown(!showNotificationsDropdown);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? "\u2630" : "\u00d7"}
//         </button>
//         <h1 className="page-title">{pageTitle}</h1>
//       </div>
//       <div className="navbar-center">
//         <input type="text" placeholder="Search..." className="search-bar" />
//       </div>
//       <div className="navbar-right">
//         <div className="quick-actions">
//           <button
//             className="quick-actions-button"
//             onClick={handleQuickActionsClick}
//           >
//             Quick Actions
//           </button>
//           {showQuickActions && (
//             <ul className="quick-actions-dropdown">
//               <li>
//                 <Link to="/projects/create">Create New Project</Link>
//               </li>
//               <li>
//                 <Link to="/tasks/assign">Assign Task</Link>
//               </li>
//               <li>
//                 <Link to="/documents/upload">Upload Document</Link>
//               </li>
//             </ul>
//           )}
//         </div>
//         <button
//           className="notifications-button"
//           onClick={handleNotificationsClick}
//         >
//           🔔
//         </button>
//         {showNotificationsDropdown && (
//           <div className="notifications-dropdown">
//             {notifications.length > 0 ? (
//               notifications.map((notification) => (
//                 <p key={notification.id}>{notification.message}</p>
//               ))
//             ) : (
//               <p>No new notifications</p>
//             )}
//           </div>
//         )}
//         <div className="user-menu">
//           <UserMenu />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { Link, useLocation } from "react-router-dom";
// import API from "../../api/index";
// import UserMenu from "./UserMenu";

// function Navbar({ toggleSidebar, isSidebarOpen, pageTitle }) {
//   const [showQuickActions, setShowQuickActions] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [showNotificationsDropdown, setShowNotificationsDropdown] =
//     useState(false);
//   const [ setError ] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await API.get("/api/notifications");
//         setNotifications(response.data);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//         setError("Failed to load notifications.");
//       }
//     };

//     fetchNotifications();
//   }, []);

//   const handleQuickActionsClick = () => {
//     setShowQuickActions(!showQuickActions);
//   };

//   const handleNotificationsClick = () => {
//     setShowNotificationsDropdown(!showNotificationsDropdown);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? "\u2630" : "\u00d7"}
//         </button>
//         <h1 className="page-title">
//           {location.pathname === "/"
//             ? "Home"
//             : location.pathname.split("/")[1]}
//         </h1>
//       </div>
//       <div className="navbar-center">
//         <input type="text" placeholder="Search..." className="search-bar" />
//       </div>
//       <div className="navbar-right">
//         <div className="quick-actions">
//           <button
//             className="quick-actions-button"
//             onClick={handleQuickActionsClick}
//           >
//             Quick Actions
//           </button>
//           {showQuickActions && (
//             <ul className="quick-actions-dropdown">
//               <li>
//                 <Link to="/projects/create">Create New Project</Link>
//               </li>
//               <li>
//                 <Link to="/tasks/assign">Assign Task</Link>
//               </li>
//               <li>
//                 <Link to="/documents/upload">Upload Document</Link>
//               </li>
//             </ul>
//           )}
//         </div>
//         <button
//           className="notifications-button"
//           onClick={handleNotificationsClick}
//         >
//           🔔
//         </button>
//         {showNotificationsDropdown && (
//           <div className="notifications-dropdown">
//             {notifications.length > 0 ? (
//               notifications.map((notification) => (
//                 <p key={notification.id}>{notification.message}</p>
//               ))
//             ) : (
//               <p>No new notifications</p>
//             )}
//           </div>
//         )}
//         <div className="user-menu">
//           <UserMenu />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { Link, useLocation } from "react-router-dom";
// import API from "../../api/index";
// import UserMenu from "./UserMenu";

// function Navbar({ toggleSidebar, isSidebarOpen, pageTitle }) {
//   const [showQuickActions, setShowQuickActions] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [showNotificationsDropdown, setShowNotificationsDropdown] =
//     useState(false);
//   const [error, setError] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await API.get("/api/notifications");
//         setNotifications(response.data);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//         setError("Failed to load notifications.");
//       }
//     };

//     fetchNotifications();
//   }, []);

//   const handleQuickActionsClick = () => {
//     setShowQuickActions(!showQuickActions);
//   };

//   const handleNotificationsClick = () => {
//     setShowNotificationsDropdown(!showNotificationsDropdown);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? "\u2630" : "\u00d7"}
//         </button>
//         <h1 className="page-title">
//           {location.pathname === "/"
//             ? "Home"
//             : location.pathname.split("/")[1]}
//         </h1>
//       </div>
//       <div className="navbar-right">
//         <div className="quick-actions">
//           <button
//             className="quick-actions-button"
//             onClick={handleQuickActionsClick}
//           >
//             Quick Actions
//           </button>
//           {showQuickActions && (
//             <ul className="quick-actions-dropdown">
//               <li>
//                 <Link to="/projects/create">Create New Project</Link>
//               </li>
//               <li>
//                 <Link to="/tasks/assign">Assign Task</Link>
//               </li>
//               <li>
//                 <Link to="/documents/upload">Upload Document</Link>
//               </li>
//             </ul>
//           )}
//         </div>
//         <button
//           className="notifications-button"
//           onClick={handleNotificationsClick}
//         >
//           🔔
//         </button>
//         {showNotificationsDropdown && (
//           <div className="notifications-dropdown">
//             {notifications.length > 0 ? (
//               notifications.map((notification) => (
//                 <p key={notification.id}>{notification.message}</p>
//               ))
//             ) : (
//               <p>No new notifications</p>
//             )}
//           </div>
//         )}
//         <div className="user-menu">
//           <UserMenu />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { Link, useLocation } from "react-router-dom";
// import API from "../../api/index";
// import UserMenu from "./UserMenu";

// function Navbar({ toggleSidebar, isSidebarOpen, pageTitle }) {
//   const [showQuickActions, setShowQuickActions] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [showNotificationsDropdown, setShowNotificationsDropdown] =
//     useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await API.get("/api/notifications");
//         setNotifications(response.data);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//         setError("Failed to load notifications.");
//       }
//     };

//     fetchNotifications();
//   }, []);

//   const handleQuickActionsClick = () => {
//     setShowQuickActions(!showQuickActions);
//   };

//   const handleNotificationsClick = () => {
//     setShowNotificationsDropdown(!showNotificationsDropdown);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <button className="sidebar-toggle" onClick={toggleSidebar}>
//           {isSidebarOpen ? "\u2630" : "\u00d7"}
//         </button>
//         <h1 className="page-title">{pageTitle}</h1>
//       </div>
//       {/* <div className="navbar-center">
//         <input type="text" placeholder="Search..." className="search-bar" />
//       </div> */}
//       <div className="navbar-right">
//         <div className="quick-actions">
//           <button
//             className="quick-actions-button"
//             onClick={handleQuickActionsClick}
//           >
//             Quick Actions
//           </button>
//           {showQuickActions && (
//             <ul className="quick-actions-dropdown">
//               <li>
//                 <Link to="/projects/create">Create New Project</Link>
//               </li>
//               <li>
//                 <Link to="/tasks/assign">Assign Task</Link>
//               </li>
//               <li>
//                 <Link to="/documents/upload">Upload Document</Link>
//               </li>
//             </ul>
//           )}
//         </div>
//         <button
//           className="notifications-button"
//           onClick={handleNotificationsClick}
//         >
//           🔔
//         </button>
//         {showNotificationsDropdown && (
//           <div className="notifications-dropdown">
//             {notifications.length > 0 ? (
//               notifications.map((notification) => (
//                 <p key={notification.id}>{notification.message}</p>
//               ))
//             ) : (
//               <p>No new notifications</p>
//             )}
//           </div>
//         )}
//         <div className="user-menu">
//           <UserMenu />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import API from "../../api/index";
import UserMenu from "./UserMenu";

function Navbar({ toggleSidebar, isSidebarOpen, pageTitle }) {
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNotificationsDropdown, setShowNotificationsDropdown] =
    useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await API.get("/api/notifications");
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setError("Failed to load notifications.");
      }
    };

    fetchNotifications();
  }, []);

  const handleQuickActionsClick = () => {
    setShowQuickActions(!showQuickActions);
  };

  const handleNotificationsClick = () => {
    setShowNotificationsDropdown(!showNotificationsDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? "\u00d7" : "\u2630"}
        </button>
        <h1 className="page-title">{pageTitle}</h1>
      </div>
      {/* <div className="navbar-center">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div> */}
      <div className="navbar-right">
        <div className="quick-actions">
          <button
            className="quick-actions-button"
            onClick={handleQuickActionsClick}
          >
            Quick Actions
          </button>
          {showQuickActions && (
            <ul className="quick-actions-dropdown">
              <li>
                <Link to="/projects/create">Create New Project</Link>
              </li>
              <li>
                <Link to="/tasks/assign">Assign Task</Link>
              </li>
              <li>
                <Link to="/documents/upload">Upload Document</Link>
              </li>
            </ul>
          )}
        </div>
        <button
          className="notifications-button"
          onClick={handleNotificationsClick}
        >
          🔔
        </button>
        {showNotificationsDropdown && (
          <div className="notifications-dropdown">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <p key={notification.id}>{notification.message}</p>
              ))
            ) : (
              <p>No new notifications</p>
            )}
          </div>
        )}
        <div className="user-menu">
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;