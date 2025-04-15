import React, { useState, useEffect } from "react";

function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editEmployee, setEditEmployee] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [newEmployee, setNewEmployee] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "1990-01-01T00:00:00Z",
    gender: "Female",
    idNumber: "",
    role: "Staff",
    status: "Available",
  });

  const fetchEmployees = async () => {
    try {
      const response = await fetch(
        "https://monkey5-backend.onrender.com/api/Staffs"
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch employees, status: ${response.status}`
        );
      }
      const data = await response.json();
      if (data && Array.isArray(data)) {
        setEmployees(data);
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

  const validateForm = () => {
    const errors = {};
    if (!newEmployee.fullName) errors.fullName = "Full name is required";
    if (!newEmployee.email) errors.email = "Email is required";
    if (!newEmployee.password) errors.password = "Password is required";
    if (!newEmployee.phoneNumber)
      errors.phoneNumber = "Phone number is required";
    if (!newEmployee.idNumber) errors.idNumber = "ID number is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddEmployee = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://monkey5-backend.onrender.com/api/Staffs",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEmployee),
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        console.error("API Error Response:", errData);
        throw new Error(`Failed to add employee: ${JSON.stringify(errData)}`);
      }

      await fetchEmployees();
      setShowPopup(false);
      setNewEmployee({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
        dateOfBirth: "1990-01-01T00:00:00Z",
        gender: "Female",
        idNumber: "",
        role: "Staff",
        status: "Available",
      });
      setFormErrors({});
    } catch (error) {
      console.error("Error adding employee:", error);
      alert(`Error adding employee. ${error}`);
    }
  };

  const handleDeleteEmployee = async (userId, fullName) => {
    if (
      !window.confirm(`Are you sure you want to delete employee ${fullName}?`)
    )
      return;
    try {
      console.log(`Deleting employee with userId: ${userId}`);
      const response = await fetch(
        `https://monkey5-backend.onrender.com/api/Staffs/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        // Try to parse error as JSON, fallback to text
        let errorMsg = "Failed to delete employee.";
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errJson = await response.json();
          if (errJson && (errJson.message || errJson.error)) {
            errorMsg = errJson.message || errJson.error;
          } else {
            errorMsg = JSON.stringify(errJson);
          }
        } else {
          const errText = await response.text();
          errorMsg = errText || errorMsg;
        }
        console.error("Delete error:", response.status, errorMsg);
        alert(`Error deleting employee. ${errorMsg}`);
        return;
      }
      await fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert(`Error deleting employee. ${error.message || error}`);
    }
  };

  const handleDetailEmployee = (emp) => {
    setSelectedEmployee(emp);
    setShowDetailPopup(true);
  };

  const handleEditEmployee = (emp) => {
    setEditEmployee({
      ...emp,
      dateOfBirth: emp.dateOfBirth
        ? emp.dateOfBirth.split("T")[0] + "T00:00:00Z"
        : "1990-01-01T00:00:00Z",
    });
    setFormErrors({});
    setShowEditPopup(true);
  };

  const validateEditForm = () => {
    const errors = {};
    if (!editEmployee.fullName) errors.fullName = "Full name is required";
    if (!editEmployee.email) errors.email = "Email is required";
    if (!editEmployee.phoneNumber)
      errors.phoneNumber = "Phone number is required";
    if (!editEmployee.idNumber) errors.idNumber = "ID number is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleUpdateEmployee = async () => {
    if (!validateEditForm()) return;
    try {
      const response = await fetch(
        `https://monkey5-backend.onrender.com/api/Staffs/${editEmployee.userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editEmployee),
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        console.error("API Error Response:", errData);
        throw new Error(
          `Failed to update employee: ${JSON.stringify(errData)}`
        );
      }
      await fetchEmployees();
      setShowEditPopup(false);
      setEditEmployee(null);
      setFormErrors({});
    } catch (error) {
      console.error("Error updating employee:", error);
      alert(`Error updating employee. ${error}`);
    }
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
                <tr
                  key={emp.userId || index}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{emp.fullName}</td>
                  <td className="p-2">{emp.email}</td>
                  <td className="p-2">{emp.phoneNumber}</td>
                  <td className="p-2">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-white font-bold ${getStatusColor(
                        emp.status
                      )}`}
                    >
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
                      onClick={() => handleEditEmployee(emp)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-2 py-1 rounded mr-1 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        handleDeleteEmployee(emp.userId, emp.fullName)
                      }
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
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Add Employee</h2>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={newEmployee.fullName}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, fullName: e.target.value })
                }
                className={`border p-2 w-full ${
                  formErrors.fullName ? "border-red-500" : ""
                }`}
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.fullName}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={newEmployee.email}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, email: e.target.value })
                }
                className={`border p-2 w-full ${
                  formErrors.email ? "border-red-500" : ""
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={newEmployee.password}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, password: e.target.value })
                }
                className={`border p-2 w-full ${
                  formErrors.password ? "border-red-500" : ""
                }`}
              />
              {formErrors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.password}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                value={newEmployee.phoneNumber}
                onChange={(e) =>
                  setNewEmployee({
                    ...newEmployee,
                    phoneNumber: e.target.value,
                  })
                }
                className={`border p-2 w-full ${
                  formErrors.phoneNumber ? "border-red-500" : ""
                }`}
              />
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.phoneNumber}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                placeholder="Date of Birth"
                value={newEmployee.dateOfBirth.split("T")[0]}
                onChange={(e) =>
                  setNewEmployee({
                    ...newEmployee,
                    dateOfBirth: e.target.value + "T00:00:00Z",
                  })
                }
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select
                value={newEmployee.gender}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, gender: e.target.value })
                }
                className="border p-2 w-full"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                ID Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="ID Number"
                value={newEmployee.idNumber}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, idNumber: e.target.value })
                }
                className={`border p-2 w-full ${
                  formErrors.idNumber ? "border-red-500" : ""
                }`}
              />
              {formErrors.idNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.idNumber}
                </p>
              )}
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleAddEmployee}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowPopup(false);
                  setFormErrors({});
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
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
      {showEditPopup && editEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Edit Employee</h2>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={editEmployee.fullName}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, fullName: e.target.value })
                }
                className={`border p-2 w-full ${
                  formErrors.fullName ? "border-red-500" : ""
                }`}
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.fullName}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={editEmployee.email}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, email: e.target.value })
                }
                className={`border p-2 w-full ${
                  formErrors.email ? "border-red-500" : ""
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                value={editEmployee.phoneNumber}
                onChange={(e) =>
                  setEditEmployee({
                    ...editEmployee,
                    phoneNumber: e.target.value,
                  })
                }
                className={`border p-2 w-full ${
                  formErrors.phoneNumber ? "border-red-500" : ""
                }`}
              />
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.phoneNumber}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                placeholder="Date of Birth"
                value={editEmployee.dateOfBirth.split("T")[0]}
                onChange={(e) =>
                  setEditEmployee({
                    ...editEmployee,
                    dateOfBirth: e.target.value + "T00:00:00Z",
                  })
                }
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select
                value={editEmployee.gender}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, gender: e.target.value })
                }
                className="border p-2 w-full"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                ID Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="ID Number"
                value={editEmployee.idNumber}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, idNumber: e.target.value })
                }
                className={`border p-2 w-full ${
                  formErrors.idNumber ? "border-red-500" : ""
                }`}
              />
              {formErrors.idNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.idNumber}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={editEmployee.status || "Available"}
                onChange={(e) =>
                  setEditEmployee({ ...editEmployee, status: e.target.value })
                }
                className="border p-2 w-full"
              >
                <option value="Available">Available</option>
                <option value="Busy">Busy</option>
                <option value="OnBreak">OnBreak</option>
                <option value="Disabled">Disabled</option>
              </select>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleUpdateEmployee}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowEditPopup(false);
                  setEditEmployee(null);
                  setFormErrors({});
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
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
