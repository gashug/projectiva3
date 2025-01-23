// src/components/common/Header.js

import React from 'react';
import './Header.css';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <div className="logo">Projectiva</div>
      <Navigation />
      <div className="user-menu">
        <span>Welcome, User</span>
        <button>Profile</button>
      </div>
    </header>
  );
}

export default Header;