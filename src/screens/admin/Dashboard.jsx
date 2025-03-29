import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaComments,     
  FaShoppingCart, 
  FaChartBar,     
  FaUserFriends,  
  FaBriefcase     
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Admin";

  const cards = [
    {
      id: 1,
      color: "bg-blue-500",
      icon: <FaComments size={40} className="text-white" />,
      title: "10 New Feedbacks!",
      route: "/admin/feedback",
    },
    {
      id: 3,
      color: "bg-green-500",
      icon: <FaShoppingCart size={40} className="text-white" />,
      title: "Service Management",
      route: "/admin/services",
    },
    {
      id: 4,
      color: "bg-red-500",
      icon: <FaChartBar size={40} className="text-white" />,
      title: "Reports",
      route: "/admin/reports",
    },
    {
      id: 5,
      color: "bg-cyan-500",
      icon: <FaUserFriends size={40} className="text-white" />,
      title: "Employee Management",
      route: "/admin/employees",
    },
    {
      id: 6,
      color: "bg-pink-500",
      icon: <FaBriefcase size={40} className="text-white" />,
      title: "Work Management",
      route: "/admin/work",
    },
  ];

  const handleViewDetail = (route) => {
    navigate(route);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Hello, {userName}!</h2>
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
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
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
