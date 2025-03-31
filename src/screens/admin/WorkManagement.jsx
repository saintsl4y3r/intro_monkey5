import React, { useState, useEffect } from "react";

function WorkManagement() {
  const [bookings, setBookings] = useState([]);
  const [availableStaff, setAvailableStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState({});
  const [updatingBooking, setUpdatingBooking] = useState(null);
  const [viewMode, setViewMode] = useState("pending"); // "pending" or "all"

  useEffect(() => {
    fetchBookings();
    fetchAvailableStaff();
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

        // Initialize selected staff map with existing assignments
        const staffSelections = {};
        data.forEach((booking) => {
          if (booking.staffId) {
            staffSelections[booking.bookingId] = booking.staffId;
          }
        });
        setSelectedStaff(staffSelections);
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

  const fetchAvailableStaff = async () => {
    try {
      const response = await fetch(
        "https://monkey5-backend.onrender.com/api/Staffs/available"
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch available staff, status: ${response.status}`
        );
      }
      const data = await response.json();
      if (data && Array.isArray(data)) {
        setAvailableStaff(data);
      } else {
        setAvailableStaff([]);
      }
    } catch (error) {
      console.error("Error fetching available staff:", error);
      setError("Failed to load available staff. Please try again later.");
    }
  };

  const handleStaffSelection = (bookingId, staffId) => {
    setSelectedStaff((prev) => ({
      ...prev,
      [bookingId]: staffId,
    }));
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

  const assignStaffToBooking = async (booking) => {
    const staffId = selectedStaff[booking.bookingId];
    if (!staffId) {
      alert("Please select a staff member to assign");
      return;
    }

    setUpdatingBooking(booking.bookingId);

    try {
      // Create the updated booking object
      const updatedBooking = {
        bookingId: booking.bookingId,
        customerId: booking.customerId,
        serviceId: booking.serviceId,
        staffId: staffId,
        serviceStartTime: booking.serviceStartTime,
        serviceEndTime: booking.serviceEndTime,
        serviceUnitAmount: booking.serviceUnitAmount,
        status: booking.status, // Keep status as Pending
        note: booking.note || "",
      };

      const response = await fetch(
        `https://monkey5-backend.onrender.com/api/Bookings/${booking.bookingId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBooking),
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to update booking: ${errorData}`);
      }

      // Refresh the bookings list
      await fetchBookings();
      alert("Staff assigned successfully!");
    } catch (error) {
      console.error("Error assigning staff:", error);
      alert(`Failed to assign staff: ${error.message}`);
    } finally {
      setUpdatingBooking(null);
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
          {viewMode === "pending"
            ? "Currently Viewing: Pending Only"
            : "View Pending Only"}
        </button>
        <button
          onClick={toggleViewMode}
          className={`px-4 py-2 rounded font-bold ${
            viewMode === "all"
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800"
          }`}
        >
          {viewMode === "all"
            ? "Currently Viewing: All Bookings"
            : "View All Bookings"}
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
              <th className="p-2 text-left">Assign Employee</th>
              <th className="p-2 text-center">Actions</th>
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
                  <td className="p-2">
                    <select
                      className="border p-1 rounded font-medium w-full"
                      value={selectedStaff[booking.bookingId] || ""}
                      onChange={(e) =>
                        handleStaffSelection(booking.bookingId, e.target.value)
                      }
                      disabled={booking.status !== "Pending"}
                    >
                      <option value="">-- Select Staff --</option>
                      {availableStaff.map((staff) => (
                        <option key={staff.userId} value={staff.userId}>
                          {staff.fullName} ({staff.status})
                        </option>
                      ))}
                      {booking.staff &&
                        !availableStaff.some(
                          (s) => s.userId === booking.staffId
                        ) && (
                          <option value={booking.staffId}>
                            {booking.staff.fullName} (Currently Assigned)
                          </option>
                        )}
                    </select>
                  </td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => assignStaffToBooking(booking)}
                      disabled={
                        updatingBooking === booking.bookingId ||
                        !selectedStaff[booking.bookingId] ||
                        booking.status !== "Pending" ||
                        booking.staffId === selectedStaff[booking.bookingId]
                      }
                      className={`px-3 py-1 rounded text-white font-medium text-sm ${
                        updatingBooking === booking.bookingId
                          ? "bg-gray-400"
                          : !selectedStaff[booking.bookingId] ||
                            booking.status !== "Pending" ||
                            booking.staffId === selectedStaff[booking.bookingId]
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600"
                      }`}
                    >
                      {updatingBooking === booking.bookingId
                        ? "Saving..."
                        : "Confirm"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2 text-center" colSpan="9">
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
