import React from "react";

function EmployeeManagement() {
  const employees = [
    {
      id: "ST001",
      fullName: "John Doe",
      phone: "0909123456",
      email: "john.doe@example.com",
      availability: "Available",
    },
    {
      id: "ST002",
      fullName: "Jane Smith",
      phone: "0909765432",
      email: "jane.smith@example.com",
      availability: "Busy",
    },
    {
      id: "ST003",
      fullName: "Michael Johnson",
      phone: "0911222333",
      email: "michael.j@example.com",
      availability: "Available",
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
              <th className="p-2 text-left">Staff ID</th>
              <th className="p-2 text-left">Full Name</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Availability</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {employees.map((emp, index) => (
              <tr key={emp.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{emp.id}</td>
                <td className="p-2">{emp.fullName}</td>
                <td className="p-2">{emp.phone}</td>
                <td className="p-2">{emp.email}</td>
                <td className="p-2">{emp.availability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeManagement;
