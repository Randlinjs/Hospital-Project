//sideBarExample.jsx 
import React, { useState } from 'react';
import './Sidebar.css'; // Custom CSS for the sidebar

const SidebarExample = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar visibility state

  // Toggle function
  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button onClick={openSidebar} className="menu-button">
        Open
      </button>

      {/* Sidebar, conditionally rendered using ternary */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <button onClick={closeSidebar}>Close</button>
          <h2>Sidebar Menu</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarExample;
