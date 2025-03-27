import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaChevronDown,
  FaBars,
  FaTachometerAlt,
  FaUserFriends,
  FaServicestack,
  FaTasks,
  FaBriefcase,
  FaCommentDots,
  FaChartBar
} from "react-icons/fa";

// Import các màn hình
import Dashboard from "./admin/Dashboard";
import EmployeeManagement from "./admin/EmployeeManagement";
import ServiceManagement from "./admin/ServiceManagement";
import TaskManagement from "./admin/TaskManagement";
import WorkManagement from "./admin/WorkManagement";
import FeedbackManagement from "./admin/FeedbackManagement";
import Reports from "./admin/Reports";
import EditProfile from "./admin/EditProfile"; 
import logo from "../assets/logo-monkey5.png";
import "../styles/AdminLayout.css";

function AdminScreen() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  const handleEditProfile = () => {
    navigate("/admin/profile");
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
                {sidebarOpen && <span className="menu-text">Employee Management</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/services">
                <FaServicestack className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Services Management</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/tasks">
                <FaTasks className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Tasks Management</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/work">
                <FaBriefcase className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Work Management</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/feedback">
                <FaCommentDots className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Feedback Management</span>}
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
                <button onClick={handleEditProfile}>Edit Profile</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </header>

        <main className="content">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<EmployeeManagement />} />
            <Route path="services" element={<ServiceManagement />} />
            <Route path="tasks" element={<TaskManagement />} />
            <Route path="work" element={<WorkManagement />} />
            <Route path="feedback" element={<FeedbackManagement />} />
            <Route path="reports" element={<Reports />} />
            <Route path="profile" element={<EditProfile />} />
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
