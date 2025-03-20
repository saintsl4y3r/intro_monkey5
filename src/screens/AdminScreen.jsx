import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import ServiceManagement from "./admin/ServiceManagement";
import EmployeeManagement from "./admin/EmployeeManagement";
import FeedbackManagement from "./admin/FeedbackManagement";
import WorkManagement from "./admin/WorkManagement";
import Reports from "./admin/Reports";
import TaskManagement from "./admin/TaskManagement";

function AdminScreen() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <nav className="mb-4">
        <Link to="dashboard" className="mr-4 text-blue-500 hover:underline">
          Dashboard
        </Link>
        <Link to="services" className="mr-4 text-blue-500 hover:underline">
          Quản lý dịch vụ
        </Link>
        <Link to="employees" className="mr-4 text-blue-500 hover:underline">
          Quản lý nhân viên
        </Link>
        <Link to="feedback" className="mr-4 text-blue-500 hover:underline">
          Quản lý phản hồi
        </Link>
        <Link to="work" className="mr-4 text-blue-500 hover:underline">
          Quản lý công việc
        </Link>
        <Link to="reports" className="mr-4 text-blue-500 hover:underline">
          Báo cáo
        </Link>
        <Link to="tasks" className="text-blue-500 hover:underline">
          Task Management
        </Link>
      </nav>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="services" element={<ServiceManagement />} />
        <Route path="employees" element={<EmployeeManagement />} />
        <Route path="feedback" element={<FeedbackManagement />} />
        <Route path="work" element={<WorkManagement />} />
        <Route path="reports" element={<Reports />} />
        <Route path="tasks" element={<TaskManagement />} />
      </Routes>
    </div>
  );
}

export default AdminScreen;
