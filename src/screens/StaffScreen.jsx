import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import TaskManagement from "./staff/TaskManagement";
import LeaveRequest from "./staff/LeaveRequest";
import logo from "../assets/logo-monkey5.png";

function StaffScreen() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-orange-500 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <img src={logo} alt="MONKEY5 Logo" className="h-10 w-auto" />
          </div>
          <nav>
            <ul className="flex gap-6 list-none m-0 p-0">
              <li>
                <Link to="tasks" className="text-white font-semibold hover:underline">
                  Quản lý công việc
                </Link>
              </li>
              <li>
                <Link to="leave-request" className="text-white font-semibold hover:underline">
                  Xin nghỉ phép
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <FaUserCircle size={28} className="text-white" />
          <span className="text-white font-bold">Staff</span>
        </div>
      </header>

      <main className="bg-gray-100 flex-1 p-4">
        <Routes>
          <Route path="tasks" element={<TaskManagement />} />
          <Route path="leave-request" element={<LeaveRequest />} />
        </Routes>
      </main>
    </div>
  );
}

export default StaffScreen;