import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <h3 className="step-title">Create Your Project</h3>
          {/* Add a brief description or image/illustration */}
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3 className="step-title">Assign Tasks & Track Progress</h3>
          {/* Add a brief description or image/illustration */}
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3 className="step-title">Collaborate and Achieve Success</h3>
          {/* Add a brief description or image/illustration */}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;