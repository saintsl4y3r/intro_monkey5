import React, { useState, useEffect } from "react";

function FeedbackManagement() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const fetchFeedbacks = async () => {
    try {
      setError("");
      const response = await fetch(
        "https://monkey5-backend.onrender.com/api/Reviews"
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch reviews, status: ${response.status}`);
      }
      const data = await response.json();
      if (data && Array.isArray(data.$values)) {
        setFeedbacks(data.$values);
      } else if (Array.isArray(data)) {
        setFeedbacks(data);
      } else {
        setFeedbacks([]);
      }
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setError("Error fetching reviews");
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  const handleViewDetail = (feedback) => {
    setSelectedFeedback(feedback);
    setShowDetailPopup(true);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Feedback Management</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">Customer Name</th>
              <th className="p-2 text-left">Rating</th>
              <th className="p-2 text-left">Comment</th>
              <th className="p-2 text-left">Review Date</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {feedbacks.length > 0 ? (
              feedbacks.map((fb, index) => (
                <tr
                  key={fb.reviewId || index}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">
                    {fb.booking && fb.booking.customer
                      ? fb.booking.customer.fullName
                      : "-"}
                  </td>
                  <td className="p-2">{fb.ratingStar} ★</td>
                  <td className="p-2">{fb.comment}</td>
                  <td className="p-2">{formatDateTime(fb.reviewDateTime)}</td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => handleViewDetail(fb)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
                    >
                      View Detail
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2" colSpan="6">
                  No feedback found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showDetailPopup && selectedFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Feedback Detail</h2>
            <p className="mb-2">
              <strong>Review ID:</strong> {selectedFeedback.reviewId}
            </p>
            <p className="mb-2">
              <strong>Booking ID:</strong> {selectedFeedback.bookingId}
            </p>
            {selectedFeedback.booking && selectedFeedback.booking.service && (
              <p className="mb-2">
                <strong>Service:</strong>{" "}
                {selectedFeedback.booking.service.serviceName}
              </p>
            )}
            {selectedFeedback.booking && selectedFeedback.booking.customer && (
              <p className="mb-2">
                <strong>Customer:</strong>{" "}
                {selectedFeedback.booking.customer.fullName}
              </p>
            )}
            <p className="mb-2">
              <strong>Rating:</strong> {selectedFeedback.ratingStar} ★
            </p>
            <p className="mb-2">
              <strong>Comment:</strong> {selectedFeedback.comment}
            </p>
            <p className="mb-2">
              <strong>Review Date:</strong>{" "}
              {formatDateTime(selectedFeedback.reviewDateTime)}
            </p>
            {selectedFeedback.booking && selectedFeedback.booking.note && (
              <p className="mb-2">
                <strong>Note:</strong> {selectedFeedback.booking.note}
              </p>
            )}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => {
                  setShowDetailPopup(false);
                  setSelectedFeedback(null);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackManagement;
