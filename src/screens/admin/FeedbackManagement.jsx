import React from "react";

function FeedbackManagement() {
  const feedbacks = [
    {
      id: 1,
      customerId: "100231423",
      customerName: "Hoàng Anh",
      serviceName: "Cleaning",
      sendDate: "16:00, 26/01/2025",
      location: "3, Tô Vĩnh Diện, Thủ Đức",
    },
    {
      id: 2,
      customerId: "100231424",
      customerName: "Ngọc Anh",
      serviceName: "Cooking",
      sendDate: "09:00, 27/01/2025",
      location: "1, Phan Văn Trị, Gò Vấp",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Feedback Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">CustomerID</th>
              <th className="p-2 text-left">Customer Name</th>
              <th className="p-2 text-left">Service Name</th>
              <th className="p-2 text-left">Send date</th>
              <th className="p-2 text-left">Location</th>
              <th className="p-2 text-left">Feedback Detail</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {feedbacks.map((fb, index) => (
              <tr key={fb.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{fb.customerId}</td>
                <td className="p-2">{fb.customerName}</td>
                <td className="p-2">{fb.serviceName}</td>
                <td className="p-2">{fb.sendDate}</td>
                <td className="p-2">{fb.location}</td>
                <td className="p-2 text-blue-500 cursor-pointer hover:underline">
                  View Detail
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeedbackManagement;
