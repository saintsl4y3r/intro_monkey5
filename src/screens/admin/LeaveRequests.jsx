import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

function LeaveRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRequests, setFilteredRequests] = useState([]);

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  useEffect(() => {
    if (requests.length > 0) {
      const filtered = requests.filter(
        (request) =>
          request.staff?.fullName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          request.leaveReasons.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRequests(filtered);
    }
  }, [searchTerm, requests]);

  const fetchLeaveRequests = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://monkey5-backend.onrender.com/api/LeaveRequests"
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch leave requests, status: ${response.status}`
        );
      }

      const data = await response.json();
      if (data && Array.isArray(data)) {
        setRequests(data);
        setFilteredRequests(data);
      } else {
        setRequests([]);
        setFilteredRequests([]);
      }
    } catch (error) {
      console.error("Error fetching leave requests:", error);
      setError("Failed to load leave requests. Please try again later.");
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

  const calculateDuration = (start, end) => {
    if (!start || !end) return "N/A";
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
  };

  if (loading)
    return <div className="p-4 text-center">Loading leave requests...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Staff Leave Requests</h2>

      {/* Search Bar */}
      <div className="mb-4 relative">
        <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
          <div className="pl-3 pr-2">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by staff name or reason..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="py-2 px-2 w-full outline-none"
          />
        </div>
      </div>

      {/* Requests List */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">Staff Name</th>
              <th className="p-2 text-left">Request Date</th>
              <th className="p-2 text-left">Leave Period</th>
              <th className="p-2 text-left">Duration</th>
              <th className="p-2 text-left">Reason</th>
              <th className="p-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request, index) => (
                <tr
                  key={request.requestId}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{request.staff?.fullName || "N/A"}</td>
                  <td className="p-2">{formatDate(request.requestDate)}</td>
                  <td className="p-2">
                    {formatDate(request.leaveStart)} -{" "}
                    {formatDate(request.leaveEnd)}
                  </td>
                  <td className="p-2">
                    {calculateDuration(request.leaveStart, request.leaveEnd)}
                  </td>
                  <td
                    className="p-2 max-w-xs truncate"
                    title={request.leaveReasons}
                  >
                    {request.leaveReasons}
                  </td>
                  <td className="p-2 text-center">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                    {/* Future implementation for Accept/Decline buttons would go here */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2 text-center" colSpan="7">
                  {searchTerm
                    ? "No matching requests found"
                    : "No leave requests found"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveRequests;
