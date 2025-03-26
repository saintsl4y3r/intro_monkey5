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

  const handleToggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleLogout = () => navigate("/");

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-orange-500 text-white flex flex-col">
        <div className="p-4 flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="font-bold text-lg">MONKEY5</span>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2 px-4">
            <li><Link to="dashboard" className="block p-2 hover:bg-orange-600 rounded">Dashboard</Link></li>
            <li><Link to="employees" className="block p-2 hover:bg-orange-600 rounded">Employee</Link></li>
            <li><Link to="services" className="block p-2 hover:bg-orange-600 rounded">Services</Link></li>
            <li><Link to="tasks" className="block p-2 hover:bg-orange-600 rounded">Tasks</Link></li>
            <li><Link to="work" className="block p-2 hover:bg-orange-600 rounded">Work</Link></li>
            <li><Link to="feedback" className="block p-2 hover:bg-orange-600 rounded">Feedback</Link></li>
            <li><Link to="reports" className="block p-2 hover:bg-orange-600 rounded">Reports</Link></li>
          </ul>
        </nav>

        <div className="p-4 border-t border-orange-400 relative">
          <button onClick={handleToggleDropdown} className="flex items-center gap-2 w-full text-left">
            <FaUserCircle size={24} />
            <span className="font-bold">Admin 1</span>
            <FaChevronDown />
          </button>

          {dropdownOpen && (
            <div className="absolute bottom-12 left-4 w-40 bg-white text-black shadow-md rounded z-10">
              <button className="block w-full px-4 py-2 hover:bg-gray-100">Edit Profile</button>
              <button onClick={handleLogout} className="block w-full px-4 py-2 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
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
