import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Logo MONKEY5" />
      </div>
      <ul className="navbar-menu">
        <li><a href="#home">Trang chủ</a></li>
        <li><a href="#about">Giới thiệu</a></li>
        <li><a href="#services">Dịch vụ</a></li>
        <li><a href="#contact">Liên hệ</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
