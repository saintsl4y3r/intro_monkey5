import React from "react";

function WorkManagement() {
  const works = [
    {
      id: 1,
      serviceId: "100231423",
      employeeName: "Hoàng Anh",
      serviceName: "Cleaning",
      startTime: "16:00, 26/01/2025",
      location: "3, Tô Vĩnh Diện, Thủ Đức",
    },
    {
      id: 2,
      serviceId: "100231424",
      employeeName: "Ngọc Anh",
      serviceName: "Cooking",
      startTime: "10:00, 27/01/2025",
      location: "12, Phan Văn Trị, Gò Vấp",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Work Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">ServiceID</th>
              <th className="p-2 text-left">Employee Name</th>
              <th className="p-2 text-left">Service Name</th>
              <th className="p-2 text-left">Start Time</th>
              <th className="p-2 text-left">Location</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {works.map((wk, index) => (
              <tr key={wk.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{wk.serviceId}</td>
                <td className="p-2">{wk.employeeName}</td>
                <td className="p-2">{wk.serviceName}</td>
                <td className="p-2">{wk.startTime}</td>
                <td className="p-2">{wk.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkManagement;
