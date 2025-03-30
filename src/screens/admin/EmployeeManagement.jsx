import React, { useState, useEffect } from "react";

function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    userId: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "1990-01-01T00:00:00Z",
    gender: "Female",
    idNumber: "",
    role: "Staff",
    status: "Available",
  });

  const fetchEmployees = async () => {
    try {
      const response = await fetch("/api/Staffs");
      if (!response.ok) {
        throw new Error(`Failed to fetch employees, status: ${response.status}`);
      }
      const data = await response.json();
      if (data && Array.isArray(data.$values)) {
        setEmployees(data.$values);
      } else {
        setEmployees([]);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
      setEmployees([]);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

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

  const handleAddEmployee = async () => {
    try {
      const response = await fetch("/api/Staffs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmployee),
      });
      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(`Failed to add employee: ${errMsg}`);
      }
      await fetchEmployees();
      setShowPopup(false);
      setNewEmployee({
        userId: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "1990-01-01T00:00:00Z",
        gender: "Female",
        idNumber: "",
        role: "Staff",
        status: "Available",
      });
    } catch (error) {
      console.error("Error adding employee:", error);
      alert(`Error adding employee. ${error}`);
    }
  };

  const handleDeleteEmployee = async (userId) => {
    if (!window.confirm(`Are you sure you want to delete employee ${userId}?`)) return;
    try {
      console.log(`Deleting employee with userId: ${userId}`);
      const response = await fetch(`/api/Staffs/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errMsg = await response.text();
        console.error("Delete error:", response.status, errMsg);
        throw new Error(`Failed to delete employee: ${errMsg}`);
      }
      await fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert(`Error deleting employee. ${error.message}`);
    }
  };

  const handleDetailEmployee = (emp) => {
    setSelectedEmployee(emp);
    setShowDetailPopup(true);
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
              <th className="p-2 text-left">Full Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {employees && employees.length > 0 ? (
              employees.map((emp, index) => (
                <tr key={emp.userId || index} className="border-b hover:bg-gray-100">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{emp.fullName}</td>
                  <td className="p-2">{emp.email}</td>
                  <td className="p-2">{emp.phoneNumber}</td>
                  <td className="p-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-white font-bold ${getStatusColor(emp.status)}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => handleDetailEmployee(emp)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-2 py-1 rounded mr-1 text-sm"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => handleDeleteEmployee(emp.userId)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2" colSpan="6">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Add Employee</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={newEmployee.fullName}
              onChange={(e) => setNewEmployee({ ...newEmployee, fullName: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={newEmployee.email}
              onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={newEmployee.phoneNumber}
              onChange={(e) => setNewEmployee({ ...newEmployee, phoneNumber: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={newEmployee.dateOfBirth.split("T")[0]}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, dateOfBirth: e.target.value + "T00:00:00Z" })
              }
              className="border p-2 w-full mb-2"
            />
            <select
              value={newEmployee.gender}
              onChange={(e) => setNewEmployee({ ...newEmployee, gender: e.target.value })}
              className="border p-2 w-full mb-2"
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            <input
              type="text"
              placeholder="ID Number"
              value={newEmployee.idNumber}
              onChange={(e) => setNewEmployee({ ...newEmployee, idNumber: e.target.value })}
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

      {showDetailPopup && selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Employee Detail</h2>
            <p className="mb-2">
              <strong>User ID:</strong> {selectedEmployee.userId}
            </p>
            <p className="mb-2">
              <strong>Full Name:</strong> {selectedEmployee.fullName}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {selectedEmployee.email}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {selectedEmployee.phoneNumber}
            </p>
            <p className="mb-2">
              <strong>Status:</strong> {selectedEmployee.status}
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => {
                  setShowDetailPopup(false);
                  setSelectedEmployee(null);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeManagement;
