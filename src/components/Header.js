import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo-monkey5.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="MONKEY5 Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#about">Về Chúng Tôi</a></li>
          <li><a href="#services">Dịch Vụ</a></li>
          <li><a href="#partners">Đối Tác</a></li>
          <li><a href="#support">Hỗ Trợ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
