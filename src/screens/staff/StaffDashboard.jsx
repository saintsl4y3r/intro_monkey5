import React from "react";

function StaffDashboard() {
  const userName = localStorage.getItem("userName") || "Staff";

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Hello, {userName}!</h2>
    </div>
  );
}

export default StaffDashboard;
