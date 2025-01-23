import React from 'react';
import './WelcomeBanner.css';

function WelcomeBanner({ userName }) {
  return (
    <div className="welcome-banner">
      <h2>Welcome, {userName}!</h2>
      {/* Add any other content or styling for the banner here */}
    </div>
  );
}

export default WelcomeBanner;