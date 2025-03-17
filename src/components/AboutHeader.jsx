import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-monkey5.png";

function AboutHeader() {
  return (
    <header className="bg-orange-500 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MONKEY5 Logo" className="h-10 w-auto" />
        </Link>
        <nav>
          <ul className="flex gap-4 list-none">
            <li>
              <a href="#meaning" className="text-white font-bold">
                Meaning
              </a>
            </li>
            <li>
              <a href="#areas" className="text-white font-bold">
                Areas
              </a>
            </li>
            <li>
              <a href="#development" className="text-white font-bold">
                Development
              </a>
            </li>
            <li>
              <a href="#vision" className="text-white font-bold">
                Vision
              </a>
            </li>
            <li>
              <a href="#mission" className="text-white font-bold">
                Mission
              </a>
            </li>
            <li>
              <a href="#corevalues" className="text-white font-bold">
                Core Values
              </a>
            </li>
            <li>
              <a href="#partners" className="text-white font-bold">
                Partners
              </a>
            </li>
            <li>
              <a href="#support" className="text-white font-bold">
                Support
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

export default AboutHeader;
