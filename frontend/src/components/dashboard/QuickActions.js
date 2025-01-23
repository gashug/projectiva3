import React from 'react';
import './QuickActions.css';

function QuickActions({ data }) {
  return (
    <div className="quick-actions widget">
      <h3 className="widget-title">Quick Actions</h3>
      <div className="quick-actions-content">
        {data && data.quickActions ? (
          data.quickActions.map((action) => (
            <button key={action.label} className="quick-action-button">
              {action.label}
            </button>
          ))
        ) : (
          <p>No quick actions available.</p>
        )}
      </div>
    </div>
  );
}

export default QuickActions;