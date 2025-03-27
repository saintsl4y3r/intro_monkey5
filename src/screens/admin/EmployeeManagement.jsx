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

  const [showPopup, setShowPopup] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    fullName: "",
    phone: "",
    email: "",
    availability: "Available",
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-500";
      case "Busy":
        return "bg-red-500";
      case "Onbreak":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleAddEmployee = () => {
    setEmployees([...employees, newEmployee]);
    setShowPopup(false);
    setNewEmployee({ id: "", fullName: "", phone: "", email: "", availability: "Available" });
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
      <h2 className="text-xl font-bold mb-4">Employee Management</h2>
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setShowPopup(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold"
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
                    className={`inline-block px-2 py-1 rounded-full text-white ${getStatusColor(emp.availability)}`}
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

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Add Employee</h2>
            <input
              type="text"
              placeholder="Staff ID"
              value={newEmployee.id}
              onChange={(e) => setNewEmployee({ ...newEmployee, id: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Full Name"
              value={newEmployee.fullName}
              onChange={(e) => setNewEmployee({ ...newEmployee, fullName: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Phone"
              value={newEmployee.phone}
              onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={newEmployee.email}
              onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddEmployee}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeManagement;
