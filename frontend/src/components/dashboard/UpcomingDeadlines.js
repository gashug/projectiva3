// import React from "react";
// import "./UpcomingDeadlines.css";

// function UpcomingDeadlines({ data }) {
//   return (
//     <div className="upcoming-deadlines widget">
//       <h3 className="widget-title">Upcoming Deadlines</h3>
//       {data && data.upcomingDeadlines && data.upcomingDeadlines.length > 0 ? (
//         <ul className="deadlines-list">
//           {data.upcomingDeadlines.map((deadline, index) => (
//             <li key={index} className="deadline-item">
//               <span className="deadline-name">{deadline.name}</span>
//               <span className="deadline-date">
//                 {new Date(deadline.end_date).toLocaleDateString()}
//               </span>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No upcoming deadlines.</p>
//       )}
//     </div>
//   );
// }

// export default UpcomingDeadlines;

// import React from "react";
// import "./UpcomingDeadlines.css"; // Make sure this path is correct

// function UpcomingDeadlines({ data }) {
//   return (
//     <div className="upcoming-deadlines widget">
//       <h3 className="widget-title">Upcoming Deadlines</h3>
//       {data && data.length > 0 ? (
//         <ul className="deadlines-list">
//           {data.map((deadline, index) => (
//             <li key={index} className="deadline-item">
//               <span className="deadline-name">{deadline.name}</span>
//               <span className="deadline-date">
//                 {new Date(deadline.end_date).toLocaleDateString()}
//               </span>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No upcoming deadlines.</p>
//       )}
//     </div>
//   );
// }

// export default UpcomingDeadlines;

// import React from "react";
// import "./UpcomingDeadlines.css";

// function UpcomingDeadlines({ data }) {
//   return (
//     <div className="upcoming-deadlines widget">
//       <h3 className="widget-title">Upcoming Deadlines</h3>
//       {data && data.length > 0 ? (
//         <ul className="deadlines-list">
//           {data.map((deadline, index) => (
//             <li key={index} className="deadline-item">
//               <span className="deadline-name">{deadline.name}</span>
//               <span className="deadline-date">
//                 {new Date(deadline.end_date).toLocaleDateString()}
//               </span>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No upcoming deadlines.</p>
//       )}
//     </div>
//   );
// }

// export default UpcomingDeadlines;

// import React, { useState } from "react";
// import "./UpcomingDeadlines.css";

// function UpcomingDeadlines({ data }) {
//   const [sortBy, setSortBy] = useState("due_date"); // State for sorting

//   const handleSortChange = (e) => {
//     setSortBy(e.target.value);
//   };

//   // Sort deadlines based on sortBy
//   const sortedDeadlines =
//     data && data.upcomingDeadlines
//       ? [...data.upcomingDeadlines].sort((a, b) => {
//           if (sortBy === "name") {
//             return a.name.localeCompare(b.name);
//           } else {
//             return new Date(a.due_date) - new Date(b.due_date);
//           }
//         })
//       : [];

//   return (
//     <div className="upcoming-deadlines widget">
//       <h3 className="widget-title">Upcoming Deadlines</h3>
//       <div className="sort-container">
//         <label htmlFor="sort-by">Sort by:</label>
//         <select
//           id="sort-by"
//           value={sortBy}
//           onChange={handleSortChange}
//         >
//           <option value="due_date">Due Date</option>
//           <option value="name">Name</option>
//         </select>
//       </div>
//       {sortedDeadlines.length > 0 ? (
//         <ul className="deadlines-list">
//           {sortedDeadlines.map((deadline, index) => (
//             <li key={index} className="deadline-item">
//               <span className="deadline-name">{deadline.name}</span>
//               <span className="deadline-date">
//                 {new Date(deadline.due_date).toLocaleDateString()}
//               </span>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No upcoming deadlines.</p>
//       )}
//     </div>
//   );
// }

// export default UpcomingDeadlines;

import React, { useState } from "react";
import "./UpcomingDeadlines.css";

function UpcomingDeadlines({ data }) {
  const [sortBy, setSortBy] = useState("due_date"); // State for sorting

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Sort deadlines based on sortBy
  const sortedDeadlines =
    data && data.upcomingDeadlines
      ? [...data.upcomingDeadlines].sort((a, b) => {
          if (sortBy === "name") {
            return a.name.localeCompare(b.name);
          } else {
            return new Date(a.due_date) - new Date(b.due_date);
          }
        })
      : [];

  return (
    <div className="upcoming-deadlines widget">
      <h3 className="widget-title">Upcoming Deadlines</h3>
      <div className="sort-container">
        <label htmlFor="sort-by">Sort by:</label>
        <select id="sort-by" value={sortBy} onChange={handleSortChange}>
          <option value="due_date">Due Date</option>
          <option value="name">Name</option>
        </select>
      </div>
      {sortedDeadlines.length > 0 ? (
        <ul className="deadlines-list">
          {sortedDeadlines.map((deadline, index) => (
            <li key={index} className="deadline-item">
              <span className="deadline-name">{deadline.name}</span>
              <span className="deadline-date">
                {new Date(deadline.due_date).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming deadlines.</p>
      )}
    </div>
  );
}

export default UpcomingDeadlines;