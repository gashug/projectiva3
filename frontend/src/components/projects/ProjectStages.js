// import React from "react";
// import "./styles/ProjectStages.css"; // Import CSS file for styling

// function ProjectStages({ stages }) {
//   if (!stages || Object.keys(stages).length === 0) {
//     return (
//       <div className="project-stages-section">
//         <h3>Project Stages and Progress</h3>
//         <p>No stages defined for this project.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="project-stages-section">
//       <h3>Project Stages and Progress</h3>
//       <div className="stages-list">
//         {Object.entries(stages).map(([stageName, status], index) => (
//           <div key={index} className={`stage ${status}`}>
//             <div className="stage-name">{stageName}</div>
//             <div className="stage-progress">
//               <div
//                 className="progress-bar"
//                 style={{ width: `${status === 'Completed' ? 100 : status === 'In Progress' ? 50 : 0}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectStages;

// import React from "react";
// import "./styles/ProjectStages.css"; // Import CSS file for styling

// function ProjectStages({ stages }) {
//   if (!stages || Object.keys(stages).length === 0) {
//     return (
//       <div className="project-stages-section">
//         <h3>Project Stages and Progress</h3>
//         <p>No stages defined for this project.</p>
//       </div>
//     );
//   }

//   const stageNames = Object.keys(stages);

//   return (
//     <div className="project-stages-section">
//       <h3>Project Stages and Progress</h3>
//       <div className="stages-list">
//         {stageNames.map((stageName, index) => {
//           const stage = stages[stageName];
//           return (
//             <div
//               key={index}
//               className={`stage ${stage.status.replace(/\s+/g, "-")}`}
//             >
//               <div className="stage-name">{stageName}</div>
//               <div className="stage-status">Status: {stage.status}</div>
//               <div className="stage-progress">
//                 <div
//                   className="progress-bar"
//                   style={{ width: `${stage.progress}%` }}
//                 ></div>
//               </div>
//               <div className="stage-dates">
//                 {stage.start_date && (
//                   <p>
//                     Start Date:{" "}
//                     {new Date(stage.start_date).toLocaleDateString()}
//                   </p>
//                 )}
//                 {stage.end_date && (
//                   <p>End Date: {new Date(stage.end_date).toLocaleDateString()}</p>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ProjectStages;

import React, { useState, useEffect } from "react";
import "./styles/ProjectStages.css";

function ProjectStages({ stages }) {
  const [activeStage, setActiveStage] = useState(null);

  // Get the names of the stages to display as tabs
  const stageNames = stages ? Object.keys(stages) : [];

  // Set the first stage as active by default if not already set
  useEffect(() => {
    if (stageNames.length > 0 && !activeStage) {
      setActiveStage(stageNames[0]);
    }
  }, [stageNames, activeStage]);

  if (!stages || Object.keys(stages).length === 0) {
    return (
      <div className="project-stages-section">
        <h3>Project Stages and Progress</h3>
        <p>No stages defined for this project.</p>
      </div>
    );
  }

  return (
    <div className="project-stages-section">
      <h3>Project Stages and Progress</h3>
      <div className="stages-tabs">
        {/* Render a tab for each stage */}
        {stageNames.map((stageName) => (
          <button
            key={stageName}
            className={`tab ${activeStage === stageName ? "active" : ""}`}
            onClick={() => setActiveStage(stageName)}
          >
            {stageName}
          </button>
        ))}
      </div>

      {/* Display details for the active stage */}
      <div className="stage-details">
        {activeStage && (
          <>
            <div className="stage-name">
              <strong>Stage:</strong> {activeStage}
            </div>
            <div className="stage-status">
              <strong>Status:</strong> {stages[activeStage].status}
            </div>
            <div className="stage-progress">
              <div
                className="progress-bar"
                style={{ width: `${stages[activeStage].progress}%` }}
              >
                {stages[activeStage].progress}%
              </div>
            </div>
            <div className="stage-dates">
              {stages[activeStage].start_date && (
                <p>
                  Start Date:{" "}
                  {new Date(stages[activeStage].start_date).toLocaleDateString()}
                </p>
              )}
              {stages[activeStage].end_date && (
                <p>
                  End Date:{" "}
                  {new Date(stages[activeStage].end_date).toLocaleDateString()}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectStages;