import React, { useState, useEffect } from "react";
import API from "../../api/index.js";
import "./styles/ActivityLog.css"; // Import CSS file for styling

function ActivityLog({ projectId }) {
  const [activityLogs, setActivityLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivityLogs = async () => {
      if (!projectId) return;

      setLoading(true);
      try {
        const response = await API.get(`/api/projects/${projectId}/activity`); // Adjust endpoint if needed
        setActivityLogs(response.data);
      } catch (error) {
        console.error("Error fetching activity logs:", error);
        setError("Failed to load activity logs.");
      } finally {
        setLoading(false);
      }
    };

    fetchActivityLogs();
  }, [projectId]);

  return (
    <div className="activity-log-section">
      <h3>Activity Log</h3>

      {loading && <p>Loading activity log...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <ul className="activity-log-list">
          {activityLogs.length > 0 ? (
            activityLogs.map((log) => (
              <li key={log.id} className="activity-log-item">
                <span className="log-timestamp">
                  {new Date(log.timestamp).toLocaleString()}
                </span>
                <span className="log-message">{log.message}</span>
                {/* Add more details to the log item if needed */}
              </li>
            ))
          ) : (
            <p>No activity logs found for this project.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default ActivityLog;