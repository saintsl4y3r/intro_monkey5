import React from "react";

function EmployeeManagement() {
  const employees = [
    {
      id: 1,
      employeeId: "100231423",
      employeeName: "Hoàng Anh",
      serviceName: "Cleaning",
      startTime: "16:00, 26/01/2025",
      location: "3, Tô Vĩnh Diện, Thủ Đức",
    },
    {
      id: 2,
      employeeId: "100231424",
      employeeName: "Ngọc Anh",
      serviceName: "Cleaning",
      startTime: "18:00, 27/01/2025",
      location: "12, Phan Văn Trị, Gò Vấp",
    },
    {
      id: 3,
      employeeId: "100231425",
      employeeName: "Mai Dương",
      serviceName: "Cooking",
      startTime: "09:00, 28/01/2025",
      location: "2, Lê Văn Sỹ, Quận 3",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Employee Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">EmployeeID</th>
              <th className="p-2 text-left">Employee Name</th>
              <th className="p-2 text-left">Service Name</th>
              <th className="p-2 text-left">Start Time</th>
              <th className="p-2 text-left">Location</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {employees.map((emp, index) => (
              <tr key={emp.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{emp.employeeId}</td>
                <td className="p-2">{emp.employeeName}</td>
                <td className="p-2">{emp.serviceName}</td>
                <td className="p-2">{emp.startTime}</td>
                <td className="p-2">{emp.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeManagement;