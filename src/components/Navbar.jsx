import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#about">About</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
    </nav>
  )
}

export default Navbar