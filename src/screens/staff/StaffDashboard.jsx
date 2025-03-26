import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";

function StaffDashboard() {
  const navigate = useNavigate();

  const card = {
    color: "bg-blue-500",
    icon: <FaTasks size={40} className="text-white" />,
    title: "New Tasks!",
    route: "/staff/tasks",
  };

  const handleViewDetail = (route) => {
    navigate(route);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Hello, Staff!</h2>
      <div className="flex justify-center">
        <div
          className={`rounded shadow p-4 flex flex-col items-center justify-center text-white ${card.color}`}
        >
          <div className="mb-3">{card.icon}</div>
          <h3 className="text-xl font-bold mb-2 text-center">{card.title}</h3>
          <button
            onClick={() => handleViewDetail(card.route)}
            className="bg-white text-gray-700 px-4 py-2 rounded font-semibold hover:bg-gray-100"
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default StaffDashboard;
