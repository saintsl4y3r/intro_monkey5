import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import Dashboard from "./admin/Dashboard";
import ServiceManagement from "./admin/ServiceManagement";
import EmployeeManagement from "./admin/EmployeeManagement";
import FeedbackManagement from "./admin/FeedbackManagement";
import WorkManagement from "./admin/WorkManagement";
import Reports from "./admin/Reports";
import TaskManagement from "./admin/TaskManagement";
import logo from "../assets/logo-monkey5.png";

function AdminScreen() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-orange-500 px-6 py-3 flex items-center justify-between relative">
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <img src={logo} alt="MONKEY5 Logo" className="h-10 w-auto" />
          </div>
          <nav>
            <ul className="flex gap-6 list-none m-0 p-0">
              <li>
                <Link to="dashboard" className="text-white font-semibold hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="employees" className="text-white font-semibold hover:underline">
                  Employee
                </Link>
              </li>
              <li>
                <Link to="services" className="text-white font-semibold hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="tasks" className="text-white font-semibold hover:underline">
                  Tasks
                </Link>
              </li>
              <li>
                <Link to="work" className="text-white font-semibold hover:underline">
                  Work
                </Link>
              </li>
              <li>
                <Link to="feedback" className="text-white font-semibold hover:underline">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="reports" className="text-white font-semibold hover:underline">
                  Reports
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="relative">
          <button
            onClick={handleToggleDropdown}
            className="flex items-center gap-2 focus:outline-none"
          >
            <FaUserCircle size={28} className="text-white" />
            <span className="text-white font-bold">Admin 1</span>
            <FaChevronDown className="text-white" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded z-10">
              <button
                onClick={() => {
                  alert("Edit Profile clicked!");
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="bg-gray-100 flex-1 p-4">
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
    </div>
  );
}

export default AdminScreen;
