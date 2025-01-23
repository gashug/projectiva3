// src/components/common/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation-links">
      <Link to="/projects">Projects</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/resources">Resources</Link>
    </nav>
  );
};

export default Navigation;