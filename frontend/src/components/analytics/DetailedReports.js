// import React from 'react';

// function DetailedReports() {
//   return (
//     <div className="widget">
//       <h3>Detailed Reports</h3>
//       <p>Placeholder for detailed reports tables.</p>
//       {/* Add tables or other detailed data display here */}
//     </div>
//   );
// }

// export default DetailedReports;

// import React from 'react';

// function DetailedReports() {
//   return (
//     <div className="widget">
//       <h3>Detailed Reports</h3>
//       <p>Placeholder for detailed reports tables.</p>
//       {/* Add tables or other detailed data display here */}
//     </div>
//   );
// }

// export default DetailedReports;

import React from 'react';
import './styles/DetailedReports.css'; // Import CSS file for styling

function DetailedReports({ data }) {
  return (
    <div className="detailed-reports widget">
      <h3 className="widget-title">Detailed Reports</h3>
      {data && data.length > 0 ? (
        <table className="reports-table">
          <thead>
            <tr>
              <th>Technician Name</th>
              <th>Tasks Assigned</th>
              <th>Tasks Completed</th>
              <th>Completion Rate</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {data.map((technician) => (
              <tr key={technician.technician_id}>
                <td>{technician.technician_name}</td>
                <td>{technician.total_tasks_assigned}</td>
                <td>{technician.completed_tasks}</td>
                <td>{(technician.task_completion_rate * 100).toFixed(2)}%</td>
                {/* Add more data columns as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No detailed reports available.</p>
      )}
    </div>
  );
}

export default DetailedReports;