import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaChevronDown,
  FaBars,
  FaTachometerAlt,
  FaUserFriends,
  FaServicestack,
  FaBriefcase,
  FaCommentDots,
  FaChartBar,
  FaClipboardCheck,
  FaCalendarAlt,
} from "react-icons/fa";

import Dashboard from "./admin/Dashboard";
import EmployeeManagement from "./admin/EmployeeManagement";
import ServiceManagement from "./admin/ServiceManagement";
import WorkManagement from "./admin/WorkManagement";
import FeedbackManagement from "./admin/FeedbackManagement";
import Reports from "./admin/Reports";
import EditProfile from "./admin/EditProfile";
import CompletionReports from "./admin/CompletionReports";
import LeaveRequests from "./admin/LeaveRequests";

import logo from "../assets/logo.svg";
import "../styles/AdminLayout.css";

function AdminScreen() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userName = localStorage.getItem("userName") || "Admin";

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId"); // Also remove userId
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
          <button
            className="toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
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
              <Link to="/admin/services">
                <FaServicestack className="menu-icon" />
                {sidebarOpen && (
                  <span className="menu-text">Service Management</span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/admin/employees">
                <FaUserFriends className="menu-icon" />
                {sidebarOpen && (
                  <span className="menu-text">Employee Management</span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/admin/work">
                <FaBriefcase className="menu-icon" />
                {sidebarOpen && (
                  <span className="menu-text">Work Management</span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/admin/completion-reports">
                <FaClipboardCheck className="menu-icon" />
                {sidebarOpen && (
                  <span className="menu-text">Completion Reports</span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/admin/feedback">
                <FaCommentDots className="menu-icon" />
                {sidebarOpen && (
                  <span className="menu-text">Feedback Management</span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/admin/reports">
                <FaChartBar className="menu-icon" />
                {sidebarOpen && <span className="menu-text">Reports</span>}
              </Link>
            </li>
            <li>
              <Link to="/admin/leave-requests">
                <FaCalendarAlt className="menu-icon" />
                {sidebarOpen && (
                  <span className="menu-text">Leave Requests</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <div className="right-section">
            <div
              className="profile"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaUserCircle className="profile-icon" />
              <span className="profile-name">{userName}</span>
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
            <Route path="services" element={<ServiceManagement />} />
            <Route path="employees" element={<EmployeeManagement />} />
            <Route path="work" element={<WorkManagement />} />
            <Route path="feedback" element={<FeedbackManagement />} />
            <Route path="reports" element={<Reports />} />
            <Route path="profile" element={<EditProfile />} />
            <Route path="/completion-reports" element={<CompletionReports />} />
            <Route path="/leave-requests" element={<LeaveRequests />} />
            <Route path="*" element={<Dashboard />} />
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
