import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaChevronDown,
  FaBars,
  FaTachometerAlt, // Dashboard
  FaUserFriends,    // Employee
  FaServicestack,   // Services
  FaTasks,          // Tasks
  FaBriefcase,      // Work
  FaCommentDots,    // Feedback
  FaChartBar        // Reports
} from "react-icons/fa";

import Dashboard from "./admin/Dashboard";
import EmployeeManagement from "./admin/EmployeeManagement";
import ServiceManagement from "./admin/ServiceManagement";
import TaskManagement from "./admin/TaskManagement";
import WorkManagement from "./admin/WorkManagement";
import FeedbackManagement from "./admin/FeedbackManagement";
import Reports from "./admin/Reports";

import logo from "../assets/logo-monkey5.png";
import "../styles/AdminScreen.css";

function AdminScreen() {
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
              <Link to="/admin/dashboard">
                <FaTachometerAlt className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/employees">
                <FaUserFriends className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Employee</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/services">
                <FaServicestack className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Services</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/tasks">
                <FaTasks className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Tasks</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/work">
                <FaBriefcase className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Work</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/feedback">
                <FaCommentDots className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Feedback</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/reports">
                <FaChartBar className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Reports</span>}
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
              <span className="profile-name">Admin 1</span>
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
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<EmployeeManagement />} />
            <Route path="services" element={<ServiceManagement />} />
            <Route path="tasks" element={<TaskManagement />} />
            <Route path="work" element={<WorkManagement />} />
            <Route path="feedback" element={<FeedbackManagement />} />
            <Route path="reports" element={<Reports />} />
          </Routes>
        </main>

        <footer className="footer">
          © 2025 MONKEY5 - All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default AdminScreen;
