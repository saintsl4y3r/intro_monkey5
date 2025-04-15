import React, { useState, useEffect } from "react";

function LeaveRequest() {
  const [leaveStart, setLeaveStart] = useState("");
  const [leaveEnd, setLeaveEnd] = useState("");
  const [reasons, setReasons] = useState("");
  const [error, setError] = useState("");
  const [myRequests, setMyRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingRequests, setLoadingRequests] = useState(true);

  const staffId = localStorage.getItem("userId");

  useEffect(() => {
    fetchMyLeaveRequests();
  }, []);

  const fetchMyLeaveRequests = async () => {
    if (!staffId) return;

    setLoadingRequests(true);
    try {
      const response = await fetch(
        `https://monkey5-backend.onrender.com/api/LeaveRequests/staff/${staffId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch leave requests");
      }

      const data = await response.json();
      setMyRequests(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching leave requests:", err);
      setError("Error loading your leave requests");
    } finally {
      setLoadingRequests(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://monkey5-backend.onrender.com/api/LeaveRequests",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            staffId: staffId,
            leaveStart: new Date(leaveStart).toISOString(),
            leaveEnd: new Date(leaveEnd).toISOString(),
            leaveReasons: reasons,
          }),
        }
      );

      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(errMsg || "Failed to submit leave request");
      }

      alert("Leave request submitted successfully!");
      setLeaveStart("");
      setLeaveEnd("");
      setReasons("");

      // Refresh the list of requests
      fetchMyLeaveRequests();
    } catch (err) {
      console.error("Error submitting leave request:", err);
      setError("Error submitting leave request: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Leave Request</h2>

      {/* Request Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Submit New Request</h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <label className="md:text-right font-semibold self-center">
            Leave Start:
          </label>
          <input
            type="date"
            className="p-2 border rounded"
            value={leaveStart}
            onChange={(e) => setLeaveStart(e.target.value)}
            required
          />

          <label className="md:text-right font-semibold self-center">
            Leave End:
          </label>
          <input
            type="date"
            className="p-2 border rounded"
            value={leaveEnd}
            onChange={(e) => setLeaveEnd(e.target.value)}
            required
          />

          <label className="md:text-right font-semibold self-start">
            Reasons For Leave:
          </label>
          <textarea
            className="p-2 border rounded h-24"
            value={reasons}
            onChange={(e) => setReasons(e.target.value)}
            required
          />

          <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 disabled:bg-blue-300"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>

      {/* My Leave Requests */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">My Leave Requests</h3>

        {loadingRequests ? (
          <p className="text-center py-4">Loading your requests...</p>
        ) : myRequests.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Request Date</th>
                  <th className="p-2 text-left">Leave Period</th>
                  <th className="p-2 text-left">Reason</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {myRequests.map((request) => (
                  <tr
                    key={request.requestId}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-2">{formatDate(request.requestDate)}</td>
                    <td className="p-2">
                      {formatDate(request.leaveStart)} -{" "}
                      {formatDate(request.leaveEnd)}
                    </td>
                    <td
                      className="p-2 max-w-xs truncate"
                      title={request.leaveReasons}
                    >
                      {request.leaveReasons}
                    </td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          request.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : request.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center py-4">No leave requests found</p>
        )}
      </div>
    </div>
  );
}

export default LeaveRequest;
