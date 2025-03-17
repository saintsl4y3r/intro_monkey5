import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo-monkey5.png';

function Header() {
  return (
    <header className="bg-orange-500 p-4 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MONKEY5 Logo" className="h-10 w-auto" />
        </Link>
        <nav>
          <ul className="flex gap-6 list-none">
            <li>
              <Link to="/about" className="text-white font-bold">
                About Us
              </Link>
            </li>
            <li>
              <a href="#how-it-works" className="text-white font-bold">
                How It Works
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-white font-bold">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white font-bold">
                Contact
              </a>
            </li>
            <li>
              <a href="#benefits" className="text-white font-bold">
                Benefits
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded font-bold">
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;
