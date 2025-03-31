import React, { useState } from "react";

function LeaveRequest() {
  const [leaveStart, setLeaveStart] = useState("");
  const [leaveEnd, setLeaveEnd] = useState("");
  const [reasons, setReasons] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("/api/LeaveRequests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leaveStart,
          leaveEnd,
          reasons,
        }),
      });
      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(errMsg || "Failed to submit leave request");
      }
      alert("Leave request submitted successfully!");
      setLeaveStart("");
      setLeaveEnd("");
      setReasons("");
    } catch (err) {
      console.error("Error submitting leave request:", err);
      setError("Error submitting leave request: " + err.message);
    }
  };

  return (
    <div className="p-6 max-w-3xl">
      <h2 className="text-2xl font-bold mb-6">Leave Request</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <label className="text-right font-semibold self-center">
          Leave Start:
        </label>
        <input
          type="date"
          className="p-2 border rounded"
          value={leaveStart}
          onChange={(e) => setLeaveStart(e.target.value)}
          required
        />

        <label className="text-right font-semibold self-center">
          Leave End:
        </label>
        <input
          type="date"
          className="p-2 border rounded"
          value={leaveEnd}
          onChange={(e) => setLeaveEnd(e.target.value)}
          required
        />

        <label className="text-right font-semibold self-start">
          Reasons For Leave:
        </label>
        <textarea
          className="p-2 border rounded h-24"
          value={reasons}
          onChange={(e) => setReasons(e.target.value)}
          required
        />

        <div className="col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default LeaveRequest;
