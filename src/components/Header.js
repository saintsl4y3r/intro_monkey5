import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo-monkey5.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
      <img src={logo} alt="MONKEY5 Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#about">About us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#support">Supports</a></li>
        </ul>
      </nav>
      </div>

      <div className="header-right">
        <Link to="/login" className="login-button">
          Log In
        </Link>
      </div>
    </header>
  );
}

export default Header;
