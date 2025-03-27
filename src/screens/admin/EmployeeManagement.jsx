import React, { useState } from "react";

function EmployeeManagement() {
  const [employees, setEmployees] = useState([
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
      availability: "Onbreak",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 border border-green-300";
      case "Busy":
        return "bg-red-100 text-red-800 border border-red-300";
      case "Onbreak":
        return "bg-yellow-100 text-yellow-800 border border-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-300";
    }
  };

  const handleAddEmployee = () => {
    alert("Add Employee clicked!");
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm(`Are you sure you want to delete employee ${id}?`)) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const handleDetailEmployee = (id) => {
    alert(`Detail for employee ${id} clicked!`);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Employee Management</h2>
        <button
          onClick={handleAddEmployee}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-bold"
        >
          Add Employee
        </button>
      </div>
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
              <th className="p-2 text-center">Actions</th>
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
                <td className="p-2">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      emp.availability
                    )}`}
                  >
                    {emp.availability}
                  </span>
                </td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleDetailEmployee(emp.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-1 text-sm"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => handleDeleteEmployee(emp.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                  >
                    Delete
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

export default EmployeeManagement;
