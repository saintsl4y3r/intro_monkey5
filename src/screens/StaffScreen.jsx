import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaChevronDown,
  FaBars,
  FaTasks,
  FaRegCalendarCheck
} from "react-icons/fa";

import TaskManagement from "./staff/TaskManagement";
import LeaveRequest from "./staff/LeaveRequest";
import logo from "../assets/logo-monkey5.png";
import "../styles/StaffScreen.css"; 

function StaffScreen() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="layout-container">
      <aside className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}>
        <div className="sidebar-header">
          <div className="logo-area">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars />
          </button>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/staff/tasks">
                <FaTasks className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Task Management</span>}
              </Link>
            </li>
            <li>
              <Link to="/staff/leave">
                <FaRegCalendarCheck className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Leave Request</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <div className="right-section">
            <div className="profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <FaUserCircle className="profile-icon" />
              <span className="profile-name">Staff</span>
              <FaChevronDown className="dropdown-icon" />
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button>Edit Profile</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </header>
        <main className="content">
          <Routes>
            <Route path="tasks" element={<TaskManagement />} />
            <Route path="leave" element={<LeaveRequest />} />
          </Routes>
        </main>
        <footer className="footer">
          © 2025 MONKEY5 - All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default StaffScreen;
