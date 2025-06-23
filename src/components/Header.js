import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Patrick Moore</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#workHistory">Work History</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
