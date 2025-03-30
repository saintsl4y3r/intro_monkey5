import React, { useState, useEffect } from "react";

function TaskManagement() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const staffId = localStorage.getItem("userId");
  const fetchBookings = async () => {
    try {
      setError("");
      if (!staffId) {
        setError("No staffId found in localStorage");
        setBookings([]);
        return;
      }

      const response = await fetch(
        `https://monkey5-backend.onrender.com/api/Bookings/staff/${staffId}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.errors?.staffId?.join(", ") || "Failed to fetch tasks");
        setBookings([]);
        return;
      }

      const data = await response.json();
      setBookings(Array.isArray(data.$values) ? data.$values : data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
      setError("Error fetching tasks");
      setBookings([]);
    }
  };

  useEffect(() => {
    if (staffId) {
      fetchBookings();
    }
  }, [staffId]);

  const handleConfirm = async () => {
    try {
      if (!staffId) {
        alert("No staffId found in localStorage");
        return;
      }

      const response = await fetch(
        `https://monkey5-backend.onrender.com/api/Staffs/${staffId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "Busy" }),
        }
      );

      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(`Failed to update staff status: ${errMsg}`);
      }

      alert("Status updated to 'Busy'");
    } catch (err) {
      console.error("Error updating staff status:", err);
      alert("Error updating staff status");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Task Management</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {bookings.length > 0 ? (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2">#</th>
              <th className="p-2">Booking ID</th>
              <th className="p-2">Customer Name</th>
              <th className="p-2">Service Name</th>
              <th className="p-2">Start Time</th>
              <th className="p-2">Location</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {bookings.map((task, index) => (
              <tr key={task.bookingId || index} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{task.bookingId}</td>
                <td className="p-2">{task.customerName}</td>
                <td className="p-2">{task.serviceName}</td>
                <td className="p-2">{task.startTime}</td>
                <td className="p-2">{task.location}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={handleConfirm}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mr-2 text-sm"
                  >
                    Confirm
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
