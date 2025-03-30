import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";

function TaskManagement() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const staffId = localStorage.getItem("userId");

  const fetchTasks = async () => {
    try {
      setError("");
      if (!staffId) {
        setError("No staffId found in localStorage");
        setTasks([]);
        return;
      }
      const response = await fetch("https://monkey5-backend.onrender.com/api/Bookings");
      if (!response.ok) {
        const errorData = await response.json();
        setError("Failed to fetch tasks");
        setTasks([]);
        return;
      }
      const data = await response.json();
      let allTasks = [];
      if (data && Array.isArray(data.$values)) {
        allTasks = data.$values;
      } else if (Array.isArray(data)) {
        allTasks = data;
      }
      const filteredTasks = allTasks.filter(
        (task) => task.status === "Available" && !task.staff
      );
      setTasks(filteredTasks);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Error fetching tasks");
      setTasks([]);
    }
  };

  useEffect(() => {
    if (staffId) {
      fetchTasks();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staffId]);

  const updateStaffStatus = async (status) => {
    if (!staffId) {
      alert("No staffId found in localStorage");
      return;
    }
    try {
      const response = await fetch(`https://monkey5-backend.onrender.com/api/Staffs/${staffId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(`Failed to update staff status: ${errMsg}`);
      }
      alert(`Staff status updated to ${status}`);
    } catch (err) {
      console.error("Error updating staff status:", err);
      alert("Error updating staff status");
    }
  };

  const handleConfirm = () => {
    updateStaffStatus("Busy");
  };

  const handleCancel = () => {
    updateStaffStatus("Available");
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString();
  };

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Task Management</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {tasks.length > 0 ? (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2">#</th>
              <th className="p-2">Customer Name</th>
              <th className="p-2">Service Name</th>
              <th className="p-2">Booking Date</th>
              <th className="p-2">Service Start</th>
              <th className="p-2">Service End</th>
              <th className="p-2">Unit Amount</th>
              <th className="p-2">Total Price</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tasks.map((task, index) => (
              <tr key={task.bookingId || index} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{task.customer?.fullName || "-"}</td>
                <td className="p-2">{task.service?.serviceName || "-"}</td>
                <td className="p-2">{formatDate(task.bookingDateTime)}</td>
                <td className="p-2">{formatTime(task.serviceStartTime)}</td>
                <td className="p-2">{formatTime(task.serviceEndTime)}</td>
                <td className="p-2">{task.serviceUnitAmount}</td>
                <td className="p-2">{task.totalPrice}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={handleConfirm}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mr-2 text-sm"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p>No tasks available</p>
      )}
    </div>
  );
}

export default TaskManagement;
