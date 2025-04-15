import React, { useState, useEffect } from "react";

function WorkManagement() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("pending"); // "pending" or "all"
  const [assigning, setAssigning] = useState(false);

  // State for booking detail modal
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [bookingDetail, setBookingDetail] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState(null);

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
        // Sort bookings by bookingDateTime (newest first)
        const sortedData = [...data].sort(
          (a, b) => new Date(b.bookingDateTime) - new Date(a.bookingDateTime)
        );
        setBookings(sortedData);
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

  const fetchBookingDetail = async (bookingId) => {
    setDetailLoading(true);
    setDetailError(null);
    setBookingDetail(null);
    setSelectedBookingId(bookingId);
    setShowDetailModal(true);
    try {
      const response = await fetch(
        `https://monkey5-backend.onrender.com/api/Bookings/${bookingId}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch booking detail, status: ${response.status}`
        );
      }
      const data = await response.json();
      setBookingDetail(data);
    } catch (error) {
      setDetailError("Failed to load booking detail. Please try again later.");
    } finally {
      setDetailLoading(false);
    }
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
    setBookingDetail(null);
    setSelectedBookingId(null);
    setDetailError(null);
    setDetailLoading(false);
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

  const handleAssignStaff = async (bookingId) => {
    setAssigning(true);
    try {
      const response = await fetch(
        `https://monkey5-backend.onrender.com/api/Bookings/assign/${bookingId}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to assign staff, status: ${response.status}`);
      }

      alert("Staff assigned successfully!");
      fetchBookings(); // Refresh the bookings list
    } catch (error) {
      console.error("Error assigning staff:", error);
      alert("Failed to assign staff. Please try again later.");
    } finally {
      setAssigning(false);
    }
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
              <th className="p-2 text-left">Action</th>
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
                    {booking.location
                      ? `${booking.location.address}, ${booking.location.city}, ${booking.location.country}`
                      : "Address not available"}
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
                  <td className="p-2 space-x-1">
                    <button
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
                      onClick={() => fetchBookingDetail(booking.bookingId)}
                    >
                      View Detail
                    </button>
                    {booking.status === "Pending" && (
                      <button
                        className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm"
                        onClick={() => handleAssignStaff(booking.bookingId)}
                        disabled={assigning}
                      >
                        {assigning ? "Assigning..." : "Assign"}
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2 text-center" colSpan="8">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Booking Detail Modal */}
      {showDetailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={closeDetailModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Booking Detail</h3>
            {detailLoading ? (
              <div>Loading...</div>
            ) : detailError ? (
              <div className="text-red-500">{detailError}</div>
            ) : bookingDetail ? (
              <div className="space-y-2">
                <div>
                  <span className="font-semibold">Booking ID:</span>{" "}
                  {bookingDetail.bookingId}
                </div>
                <div>
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={
                      getStatusClass(bookingDetail.status) +
                      " px-2 py-1 rounded-full text-sm font-medium"
                    }
                  >
                    {bookingDetail.status}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Customer:</span>{" "}
                  {bookingDetail.customer?.fullName} (
                  {bookingDetail.customer?.email})
                </div>
                <div>
                  <span className="font-semibold">Phone:</span>{" "}
                  {bookingDetail.customer?.phoneNumber}
                </div>
                <div>
                  <span className="font-semibold">Service:</span>{" "}
                  {bookingDetail.service?.serviceName} (
                  {bookingDetail.service?.description})
                </div>
                <div>
                  <span className="font-semibold">Start Time:</span>{" "}
                  {formatDateTime(bookingDetail.serviceStartTime)}
                </div>
                <div>
                  <span className="font-semibold">End Time:</span>{" "}
                  {formatDateTime(bookingDetail.serviceEndTime)}
                </div>
                <div>
                  <span className="font-semibold">Location:</span>{" "}
                  {bookingDetail.location?.address},{" "}
                  {bookingDetail.location?.city},{" "}
                  {bookingDetail.location?.country}
                </div>
                <div>
                  <span className="font-semibold">Total Price:</span>{" "}
                  {bookingDetail.totalPrice?.toLocaleString()} VND
                </div>
                <div>
                  <span className="font-semibold">Note:</span>{" "}
                  {bookingDetail.note || "N/A"}
                </div>
                <div>
                  <span className="font-semibold">Staff:</span>{" "}
                  {bookingDetail.staff?.fullName || "N/A"} (
                  {bookingDetail.staff?.email || "N/A"})
                </div>
              </div>
            ) : (
              <div>No detail data.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkManagement;
