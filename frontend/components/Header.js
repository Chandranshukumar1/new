// Header.js

import React from 'react';
import './Header.css'; // Import the associated CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Virtual Mall</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">Products</a></li>
          <li className="nav-item"><a href="#">Cart</a></li>
          <li className="nav-item"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
