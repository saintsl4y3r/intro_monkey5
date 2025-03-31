import React, { useState, useEffect, useRef } from "react";

function TaskManagement() {
  const [tasks, setTasks] = useState([]);
  const [confirmedTasks, setConfirmedTasks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [showReportForm, setShowReportForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [reportText, setReportText] = useState("");
  const [reportImages, setReportImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const staffId = localStorage.getItem("userId");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");
      if (!staffId) {
        setError("No staffId found in localStorage");
        setTasks([]);
        setConfirmedTasks([]);
        setLoading(false);
        return;
      }

      // Get all tasks assigned to this staff
      const response = await fetch(`/api/Bookings/staff/${staffId}`);
      if (!response.ok) {
        setError("Failed to fetch tasks");
        setTasks([]);
        setConfirmedTasks([]);
        setLoading(false);
        return;
      }

      const data = await response.json();
      let allTasks = [];
      if (data && Array.isArray(data)) {
        allTasks = data;
      }

      // Filter for Pending tasks (staff needs to confirm or cancel)
      const pendingTasks = allTasks.filter((task) => task.status === "Pending");
      // Filter for Confirmed tasks (staff needs to complete)
      const confirmedTasksList = allTasks.filter(
        (task) => task.status === "Confirmed"
      );

      setTasks(pendingTasks);
      setConfirmedTasks(confirmedTasksList);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Error fetching tasks");
      setTasks([]);
      setConfirmedTasks([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (staffId) {
      fetchTasks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staffId]);

  const handleConfirmTask = async (task) => {
    if (!staffId) {
      alert("No staffId found in localStorage");
      return;
    }

    try {
      // Update booking status to Confirmed
      const updatedBooking = {
        bookingId: task.bookingId,
        customerId: task.customerId,
        serviceId: task.serviceId,
        staffId: staffId,
        serviceStartTime: task.serviceStartTime,
        serviceEndTime: task.serviceEndTime,
        serviceUnitAmount: task.serviceUnitAmount,
        status: "Confirmed", // Change status to Confirmed
        note: task.note || "",
      };

      const response = await fetch(`/api/Bookings/${task.bookingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBooking),
      });

      if (!response.ok) {
        throw new Error(`Failed to confirm task`);
      }

      // Also update staff status to Busy
      await updateStaffStatus("Busy");

      alert("Task confirmed successfully!");
      fetchTasks(); // Refresh the task list
    } catch (err) {
      console.error("Error confirming task:", err);
      alert("Error confirming task");
    }
  };

  const handleCancelTask = async (task) => {
    if (!staffId) {
      alert("No staffId found in localStorage");
      return;
    }

    if (
      !window.confirm(
        "Are you sure you want to cancel this task? It will be returned to the admin for reassignment."
      )
    ) {
      return;
    }

    try {
      // Update booking to remove staffId but keep status as Pending
      const updatedBooking = {
        bookingId: task.bookingId,
        customerId: task.customerId,
        serviceId: task.serviceId,
        staffId: null, // Remove staff assignment
        serviceStartTime: task.serviceStartTime,
        serviceEndTime: task.serviceEndTime,
        serviceUnitAmount: task.serviceUnitAmount,
        status: "Pending", // Keep status as Pending for reassignment
        note: task.note || "",
      };

      const response = await fetch(`/api/Bookings/${task.bookingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBooking),
      });

      if (!response.ok) {
        throw new Error(`Failed to cancel task`);
      }

      // Update staff status to Available
      await updateStaffStatus("Available");

      alert("Task canceled and returned to admin for reassignment");
      fetchTasks(); // Refresh the task list
    } catch (err) {
      console.error("Error canceling task:", err);
      alert("Error canceling task");
    }
  };

  const handleCompleteTask = (task) => {
    setSelectedTask(task);
    setReportText("");
    setReportImages([]);
    setUploadedImages([]);
    setShowReportForm(true);
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setReportImages((prev) => [...prev, ...filesArray]);
    }
  };

  const removeImage = (index) => {
    setReportImages((prev) => prev.filter((_, i) => i !== index));
  };

  const updateStaffStatus = async (status) => {
    if (!staffId) {
      alert("No staffId found in localStorage");
      return;
    }
    try {
      const response = await fetch(`/api/Staffs/${staffId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: staffId, // Add the userId field
          status: status,
        }),
      });
      if (!response.ok) {
        throw new Error(`Failed to update staff status`);
      }
      console.log(`Staff status updated to ${status}`);
    } catch (err) {
      console.error("Error updating staff status:", err);
      alert("Error updating staff status");
    }
  };

  const handleSubmitReport = async (e) => {
    e.preventDefault();

    if (!reportText.trim()) {
      alert("Please enter a report description");
      return;
    }

    if (!selectedTask) {
      alert("No task selected");
      return;
    }

    setSubmitting(true);

    try {
      // Step 1: Create completion report
      const reportResponse = await fetch("/api/CompletionReports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId: selectedTask.bookingId,
          reportText: reportText,
          reportImages: [],
        }),
      });

      if (!reportResponse.ok) {
        throw new Error("Failed to create completion report");
      }

      const reportData = await reportResponse.json();
      const reportId = reportData.reportId;

      // Step 2: Upload images if any
      const uploadedImagesList = [];

      if (reportImages.length > 0) {
        for (const image of reportImages) {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("reportId", reportId);

          const uploadResponse = await fetch("/api/ReportImages/upload", {
            method: "POST",
            body: formData,
          });

          if (!uploadResponse.ok) {
            console.error("Failed to upload image:", image.name);
            continue;
          }

          const uploadData = await uploadResponse.json();
          uploadedImagesList.push(uploadData);
        }
      }

      // Step 3: Update report with uploaded images if needed
      if (uploadedImagesList.length > 0) {
        const updateReportResponse = await fetch(
          `/api/CompletionReports/${reportId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              reportId: reportId,
              bookingId: selectedTask.bookingId,
              reportText: reportText,
              reportImages: uploadedImagesList,
              reportDateTime: new Date().toISOString(),
            }),
          }
        );

        if (!updateReportResponse.ok) {
          console.error("Failed to update report with images");
        }
      }

      // Step 4: Update booking status to Completed
      const updatedBooking = {
        bookingId: selectedTask.bookingId,
        customerId: selectedTask.customerId,
        serviceId: selectedTask.serviceId,
        staffId: staffId,
        serviceStartTime: selectedTask.serviceStartTime,
        serviceEndTime: selectedTask.serviceEndTime,
        serviceUnitAmount: selectedTask.serviceUnitAmount,
        status: "Completed", // Change status to Completed
        note: selectedTask.note || "",
      };

      const bookingResponse = await fetch(
        `/api/Bookings/${selectedTask.bookingId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedBooking),
        }
      );

      if (!bookingResponse.ok) {
        throw new Error("Failed to update booking status");
      }

      // Step 5: Update staff status to Available
      await updateStaffStatus("Available");

      alert("Task completed successfully!");
      setShowReportForm(false);
      fetchTasks(); // Refresh the task list
    } catch (err) {
      console.error("Error completing task:", err);
      alert(`Error completing task: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (isoString) => new Date(isoString).toLocaleDateString();
  const formatTime = (isoString) => new Date(isoString).toLocaleTimeString();

  if (loading) return <div className="p-4 text-center">Loading tasks...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Task Management</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Pending Tasks Section */}
      <h3 className="text-lg font-semibold mb-2">Pending Tasks</h3>
      {tasks.length > 0 ? (
        <table className="min-w-full border-collapse mb-8">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2">#</th>
              <th className="p-2">Customer Name</th>
              <th className="p-2">Service Name</th>
              <th className="p-2">Booking Date</th>
              <th className="p-2">Service Start</th>
              <th className="p-2">Service End</th>
              <th className="p-2">Unit Amount</th>
              <th className="p-2">Total Price</th>
              <th className="p-2">Note</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tasks.map((task, index) => (
              <tr
                key={task.bookingId || index}
                className="border-b hover:bg-gray-100"
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{task.customer?.fullName || "-"}</td>
                <td className="p-2">{task.service?.serviceName || "-"}</td>
                <td className="p-2">{formatDate(task.bookingDateTime)}</td>
                <td className="p-2">{formatTime(task.serviceStartTime)}</td>
                <td className="p-2">{formatTime(task.serviceEndTime)}</td>
                <td className="p-2">{task.serviceUnitAmount}</td>
                <td className="p-2">{task.totalPrice}</td>
                <td className="p-2 max-w-xs truncate" title={task.note}>
                  {task.note || "-"}
                </td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleConfirmTask(task)}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mr-2 text-sm"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleCancelTask(task)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mb-8">No pending tasks available</p>
      )}

      {/* Confirmed Tasks Section */}
      <h3 className="text-lg font-semibold mb-2">Confirmed Tasks</h3>
      {confirmedTasks.length > 0 ? (
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2">#</th>
              <th className="p-2">Customer Name</th>
              <th className="p-2">Service Name</th>
              <th className="p-2">Booking Date</th>
              <th className="p-2">Service Start</th>
              <th className="p-2">Service End</th>
              <th className="p-2">Unit Amount</th>
              <th className="p-2">Total Price</th>
              <th className="p-2">Note</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {confirmedTasks.map((task, index) => (
              <tr
                key={task.bookingId || index}
                className="border-b hover:bg-gray-100"
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{task.customer?.fullName || "-"}</td>
                <td className="p-2">{task.service?.serviceName || "-"}</td>
                <td className="p-2">{formatDate(task.bookingDateTime)}</td>
                <td className="p-2">{formatTime(task.serviceStartTime)}</td>
                <td className="p-2">{formatTime(task.serviceEndTime)}</td>{" "}
                {/* This line was missing */}
                <td className="p-2">{task.serviceUnitAmount}</td>
                <td className="p-2">{task.totalPrice}</td>
                <td className="p-2 max-w-xs truncate" title={task.note}>
                  {task.note || "-"}
                </td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleCompleteTask(task)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
                  >
                    Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No confirmed tasks available</p>
      )}

      {/* Completion Report Form Modal */}
      {showReportForm && selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">
              Complete Task - Completion Report
            </h3>

            <div className="mb-4">
              <p>
                <strong>Customer:</strong> {selectedTask.customer?.fullName}
              </p>
              <p>
                <strong>Service:</strong> {selectedTask.service?.serviceName}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {formatDate(selectedTask.serviceStartTime)}
              </p>
              <p>
                <strong>Time:</strong>{" "}
                {formatTime(selectedTask.serviceStartTime)} -{" "}
                {formatTime(selectedTask.serviceEndTime)}
              </p>
            </div>

            <form onSubmit={handleSubmitReport}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Report Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  className="w-full border rounded p-2 min-h-[100px]"
                  placeholder="Describe the work completed, any issues encountered, etc."
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Images
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  multiple
                  accept="image/*"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-gray-700"
                >
                  Select Images
                </button>

                {reportImages.length > 0 && (
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {reportImages.map((file, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${index}`}
                          className="h-24 w-24 object-cover rounded border"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                        >
                          ×
                        </button>
                        <p className="text-xs truncate max-w-[96px]">
                          {file.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-2 mt-6">
                <button
                  type="button"
                  onClick={() => setShowReportForm(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Report"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskManagement;
