import React from 'react';

function ProjectOverview({ data }) {
  if (!data) {
    return <div className="project-overview">Loading Project Overview...</div>;
  }

  return (
    <div className="project-overview">
      <h2>Project Overview</h2>
      {/* Replace this with your actual rendering logic */}
      <div>
        <p>Total Projects: {data.totalProjects}</p>
        {/* Add more data visualization here */}
      </div>
    </div>
  );
}

export default ProjectOverview;