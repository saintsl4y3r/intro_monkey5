import React, { useState } from "react";

function LeaveRequest() {
  // State cho mỗi trường
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfRequest, setDateOfRequest] = useState("");
  const [leaveStart, setLeaveStart] = useState("");
  const [leaveEnd, setLeaveEnd] = useState("");
  const [reasons, setReasons] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <div className="p-6 max-w-3xl">
      <h2 className="text-2xl font-bold mb-6">Leave Request</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <label className="text-right font-semibold self-center">Employee Name:</label>
        <input
          type="text"
          className="p-2 border rounded"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        />

        <label className="text-right font-semibold self-center">Employee ID:</label>
        <input
          type="text"
          className="p-2 border rounded"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />

        <label className="text-right font-semibold self-center">Phone Number:</label>
        <input
          type="tel"
          className="p-2 border rounded"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label className="text-right font-semibold self-center">Email:</label>
        <input
          type="email"
          className="p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-right font-semibold self-center">Date of Request:</label>
        <input
          type="date"
          className="p-2 border rounded"
          value={dateOfRequest}
          onChange={(e) => setDateOfRequest(e.target.value)}
        />

        <label className="text-right font-semibold self-center">Leave Start:</label>
        <input
          type="date"
          className="p-2 border rounded"
          value={leaveStart}
          onChange={(e) => setLeaveStart(e.target.value)}
        />

        <label className="text-right font-semibold self-center">Leave End:</label>
        <input
          type="date"
          className="p-2 border rounded"
          value={leaveEnd}
          onChange={(e) => setLeaveEnd(e.target.value)}
        />

        <label className="text-right font-semibold self-start">Reasons For Leave:</label>
        <textarea
          className="p-2 border rounded h-24"
          value={reasons}
          onChange={(e) => setReasons(e.target.value)}
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
