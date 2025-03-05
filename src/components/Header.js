import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo-monkey5.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="MONKEY5 Logo" className="logo" />
        <nav>
          <ul>
            <li>
              <HashLink smooth to="/#about">
                About us
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#partners">
                Partners
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#support">
                Supports
              </HashLink>
            </li>
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
};

export default Header;
