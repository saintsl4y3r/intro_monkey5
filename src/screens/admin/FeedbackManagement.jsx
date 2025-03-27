import React, { useState } from "react";

function FeedbackManagement() {
  const feedbacks = [
    {
      id: 1,
      reviewId: "100231423",
      bookingId: "B010291",
      ratingstar: "⭐⭐⭐",
      comment: "dịch vụ như hạch",
      reviewDate: "16:00, 26/01/2025",
    },
    {
      id: 2,
      reviewId: "100231423",
      bookingId: "B010292",
      ratingstar: "⭐⭐⭐⭐",
      comment: "dịch vụ như cứt",
      reviewDate: "18:00, 31/01/2025",
    },
    {
      id: 3,
      reviewId: "100231424",
      bookingId: "B010293",
      ratingstar: "⭐⭐⭐⭐⭐",
      comment:
        "This comment is very long and should be truncated in the table view, but when you click view detail, you can see the full comment without truncation.",
      reviewDate: "20:00, 01/02/2025",
    },
  ];

  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const commentStyle = {
    maxWidth: "200px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Feedback Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">ReviewID</th>
              <th className="p-2 text-left">BookingID</th>
              <th className="p-2 text-left">Rating Star</th>
              <th className="p-2 text-left">Comment</th>
              <th className="p-2 text-left">Review Datetime</th>
              <th className="p-2 text-left"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {feedbacks.map((fb, index) => (
              <tr key={fb.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{fb.reviewId}</td>
                <td className="p-2">{fb.bookingId}</td>
                <td className="p-2">{fb.ratingstar}</td>
                <td className="p-2" style={commentStyle} title={fb.comment}>
                  {fb.comment}
                </td>
                <td className="p-2">{fb.reviewDate}</td>
                <td className="p-2 text-blue-500 cursor-pointer hover:underline"
                    onClick={() => setSelectedFeedback(fb)}>
                  View Detail
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Feedback Detail</h2>
            <div className="mb-2">
              <strong>Review ID:</strong> {selectedFeedback.reviewId}
            </div>
            <div className="mb-2">
              <strong>Booking ID:</strong> {selectedFeedback.bookingId}
            </div>
            <div className="mb-2">
              <strong>Rating Star:</strong> {selectedFeedback.ratingstar}
            </div>
            <div className="mb-2">
              <strong>Comment:</strong>
              <p className="mt-1">{selectedFeedback.comment}</p>
            </div>
            <div className="mb-2">
              <strong>Review Datetime:</strong> {selectedFeedback.reviewDate}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSelectedFeedback(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
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
