import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo-monkey5.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="MONKEY5 Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#about">About us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#support">Supports</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
