import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Dashboard from "./admin/Dashboard";
import EmployeeManagement from "./admin/EmployeeManagement";
import FeedbackManagement from "./admin/FeedbackManagement";
import Reports from "./admin/Reports";
import ServiceManagement from "./admin/ServiceManagement";
import TaskManagement from "./admin/TaskManagement";
import WorkManagement from "./admin/WorkManagement";
import logo from "../assets/logo-monkey5.png";

function AdminScreen() {
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
        <div className="flex items-center gap-2">
          <FaUserCircle size={28} className="text-white" />
          <span className="text-white font-bold">Admin 1</span>
        </div>
      </header>

      <main className="bg-gray-100 flex-1 p-4">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<EmployeeManagement />} />
          <Route path="feedback" element={<FeedbackManagement />} />
          <Route path="reports" element={<Reports />} />
          <Route path="services" element={<ServiceManagement />} />
          <Route path="tasks" element={<TaskManagement />} />
          <Route path="work" element={<WorkManagement />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminScreen;
