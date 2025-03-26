import React from "react";
import { FaDownload } from "react-icons/fa";

function TaskManagement() {
  const tasks = [
    {
      id: 1,
      bookingId: "100231423",
      customer: "Hoàng Anh",
      serviceName: "Cleaning",
      startTime: "16:00, 26/01/2025",
      location: "3, Tô Vĩnh Diện, Thủ Đức",
    },
    {
      id: 2,
      bookingId: "100231424",
      customer: "Ngọc Anh",
      serviceName: "Cleaning",
      startTime: "18:00, 26/01/2025",
      location: "1, Phan Văn Trị, Gò Vấp",
    },
  ];

  const handleDownload = (bookingId) => {
    const fileUrl = "/booking.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `Booking_${bookingId}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Task Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">Booking ID</th>
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Service Name</th>
              <th className="p-2 text-left">Start Time</th>
              <th className="p-2 text-left">Location</th>
              <th className="p-2 text-center w-16"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tasks.map((task, index) => (
              <tr key={task.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{task.bookingId}</td>
                <td className="p-2">{task.customer}</td>
                <td className="p-2">{task.serviceName}</td>
                <td className="p-2">{task.startTime}</td>
                <td className="p-2">{task.location}</td>
                <td className="p-2 text-center">
                  <button
                    className="text-gray-600 hover:text-black"
                    onClick={() => handleDownload(task.bookingId)}
                  >
                    <FaDownload size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskManagement;
