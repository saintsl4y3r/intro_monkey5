import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaComments,
  FaShoppingCart,
  FaChartBar,
  FaUserFriends,
  FaBriefcase,
  FaCalendarAlt, // Added for Leave Requests
  FaClipboardCheck, // Added for Completion Reports
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Admin";

  const cards = [
    {
      id: 1,
      color: "bg-blue-500",
      icon: <FaComments size={40} className="text-white" />,
      title: "Feedbacks Management",
      route: "/admin/feedback",
    },
    {
      id: 2,
      color: "bg-green-500",
      icon: <FaShoppingCart size={40} className="text-white" />,
      title: "Service Management",
      route: "/admin/services",
    },
    {
      id: 3,
      color: "bg-red-500",
      icon: <FaChartBar size={40} className="text-white" />,
      title: "Reports",
      route: "/admin/reports",
    },
    {
      id: 4,
      color: "bg-cyan-500",
      icon: <FaUserFriends size={40} className="text-white" />,
      title: "Employee Management",
      route: "/admin/employees",
    },
    {
      id: 5,
      color: "bg-pink-500",
      icon: <FaBriefcase size={40} className="text-white" />,
      title: "Work Management",
      route: "/admin/work",
    },
    {
      id: 6,
      color: "bg-purple-500",
      icon: <FaCalendarAlt size={40} className="text-white" />,
      title: "Leave Requests",
      route: "/admin/leave-requests",
    },
    {
      id: 7,
      color: "bg-amber-500",
      icon: <FaClipboardCheck size={40} className="text-white" />,
      title: "Completion Reports",
      route: "/admin/completion-reports",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h3 className="text-lg font-semibold">Welcome back, {userName}!</h3>
        <p className="text-gray-600">
          Here's an overview of the system. Click on any card to navigate to
          that section.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => navigate(card.route)}
          >
            <div className={`${card.color} p-4 flex justify-center`}>
              {card.icon}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-center">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
