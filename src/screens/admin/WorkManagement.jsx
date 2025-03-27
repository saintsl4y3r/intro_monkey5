import React, { useState } from "react";

function WorkManagement() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      serviceId: "S001",
      customerName: "Nguyễn Văn A",
      serviceName: "Cleaning",
      startTime: "16:00, 26/01/2025",
      location: "3, Tô Vĩnh Diện, Thủ Đức",
      status: "Pending",
      assignedEmployee: "",
    },
    {
      id: 2,
      serviceId: "S002",
      customerName: "Trần Thị B",
      serviceName: "Cooking",
      startTime: "10:00, 27/01/2025",
      location: "12, Phan Văn Trị, Gò Vấp",
      status: "In-progress",
      assignedEmployee: "ST001",
    },
  ]);

  const employees = [
    { id: "ST001", name: "John Doe", availability: "Available" },
    { id: "ST002", name: "Jane Smith", availability: "Busy" },
    { id: "ST003", name: "Michael Johnson", availability: "Available" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border border-yellow-300";
      case "In-progress":
        return "bg-blue-100 text-blue-800 border border-blue-300";
      case "Completed":
        return "bg-green-100 text-green-800 border border-green-300";
      case "Cancelled":
        return "bg-gray-100 text-gray-800 border border-gray-300";
      default:
        return "bg-white text-gray-800 border border-gray-300";
    }
  };

  const handleAssign = (taskId, employeeId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, assignedEmployee: employeeId } : task
    );
    setTasks(updatedTasks);
  };

  const getEmployeeStyle = (availability) => {
    if (availability === "Available") {
      return { color: "green" };
    } else if (availability === "Busy") {
      return { color: "red" };
    }
    return {};
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Work Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">Service ID</th>
              <th className="p-2 text-left">Customer Name</th>
              <th className="p-2 text-left">Service Name</th>
              <th className="p-2 text-left">Start Time</th>
              <th className="p-2 text-left">Location</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Assign Employee</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tasks.map((task, index) => (
              <tr key={task.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{task.serviceId}</td>
                <td className="p-2">{task.customerName}</td>
                <td className="p-2">{task.serviceName}</td>
                <td className="p-2">{task.startTime}</td>
                <td className="p-2">{task.location}</td>
                <td className="p-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${getStatusClass(task.status)}`}>
                    {task.status}
                  </span>
                </td>
                <td className="p-2">
                  <select
                    className="border p-1 rounded font-medium"
                    value={task.assignedEmployee}
                    onChange={(e) => handleAssign(task.id, e.target.value)}
                  >
                    <option value="">-- Assign --</option>
                    {employees.map((emp) => (
                      <option
                        key={emp.id}
                        value={emp.id}
                        disabled={emp.availability !== "Available"}
                        style={getEmployeeStyle(emp.availability)}
                      >
                        {emp.name} ({emp.availability})
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkManagement;