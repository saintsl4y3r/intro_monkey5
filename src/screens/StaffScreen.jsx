import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import TaskManagement from "./staff/TaskManagement";
import LeaveRequest from "./staff/LeaveRequest";
import logo from "../assets/logo-monkey5.png";

function StaffScreen() {
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
            <li><Link to="tasks" className="block p-2 hover:bg-orange-600 rounded">Task Management</Link></li>
            <li><Link to="leave-request" className="block p-2 hover:bg-orange-600 rounded">Leave Request</Link></li>
          </ul>
        </nav>

        <div className="p-4 border-t border-orange-400 relative">
          <button onClick={handleToggleDropdown} className="flex items-center gap-2 w-full text-left">
            <FaUserCircle size={24} />
            <span className="font-bold">Staff</span>
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
          <Route path="tasks" element={<TaskManagement />} />
          <Route path="leave-request" element={<LeaveRequest />} />
        </Routes>
      </main>
    </div>
  );
}

export default StaffScreen;