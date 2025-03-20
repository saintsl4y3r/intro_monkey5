import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LeaveRequest from "./staff/LeaveRequest";
import TaskManagement from "./staff/TaskManagement";

function StaffScreen() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Staff Dashboard</h1>
      <nav className="mb-4">
        <Link to="tasks" className="mr-4 text-blue-500 hover:underline">
          Quản lý công việc
        </Link>
        <Link to="leave-request" className="text-blue-500 hover:underline">
          Xin nghỉ phép
        </Link>
      </nav>
      <Routes>
        <Route path="tasks" element={<TaskManagement />} />
        <Route path="leave-request" element={<LeaveRequest />} />
      </Routes>
    </div>
  );
}

export default StaffScreen;
