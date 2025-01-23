// src/components/common/UserMenu.js
import React, { useState } from 'react';
import './UserMenu.css'; // Import CSS file for styling

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-menu">
      <span className="user-name" onClick={toggleDropdown}>
        Welcome, User!
      </span>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;