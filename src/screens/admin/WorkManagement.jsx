import React, { useState, useEffect } from "react";

function WorkManagement() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("pending"); // "pending" or "all"

  useEffect(() => {
    fetchBookings();
  }, [viewMode]); // Re-fetch when view mode changes

  const fetchBookings = async () => {
    try {
      setLoading(true);
      // Fetch based on view mode
      const url =
        viewMode === "pending"
          ? "https://monkey5-backend.onrender.com/api/Bookings/status/Pending"
          : "https://monkey5-backend.onrender.com/api/Bookings";

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch bookings, status: ${response.status}`);
      }
      const data = await response.json();
      if (data && Array.isArray(data)) {
        setBookings(data);
      } else {
        setBookings([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setError("Failed to load bookings. Please try again later.");
      setLoading(false);
    }
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return "N/A";
    const date = new Date(dateTimeString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border border-yellow-300";
      case "Confirmed":
        return "bg-blue-100 text-blue-800 border border-blue-300";
      case "Completed":
        return "bg-green-100 text-green-800 border border-green-300";
      case "Cancelled":
        return "bg-gray-100 text-gray-800 border border-gray-300";
      default:
        return "bg-white text-gray-800 border border-gray-300";
    }
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "pending" ? "all" : "pending");
  };

  if (loading)
    return <div className="p-4 text-center">Loading bookings...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Work Management</h2>

      <div className="mb-4">
        <button
          onClick={toggleViewMode}
          className={`px-4 py-2 rounded font-bold ${
            viewMode === "pending"
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800"
          } mr-2`}
        >
          Pending Only
        </button>
        <button
          onClick={toggleViewMode}
          className={`px-4 py-2 rounded font-bold ${
            viewMode === "all"
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800"
          }`}
        >
          View All Bookings
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Service</th>
              <th className="p-2 text-left">Start Time</th>
              <th className="p-2 text-left">End Time</th>
              <th className="p-2 text-left">Location</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr
                  key={booking.bookingId}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{booking.customer?.fullName || "N/A"}</td>
                  <td className="p-2">
                    {booking.service?.serviceName || "N/A"}
                  </td>
                  <td className="p-2">
                    {formatDateTime(booking.serviceStartTime)}
                  </td>
                  <td className="p-2">
                    {formatDateTime(booking.serviceEndTime)}
                  </td>
                  <td className="p-2">
                    {booking.customer?.location?.address ||
                      "Address not available"}
                  </td>
                  <td className="p-2">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${getStatusClass(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2 text-center" colSpan="7">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkManagement;
