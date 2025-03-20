import React from "react";

function EmployeeManagement() {
  const employees = [
    {
      id: 1,
      title: "John Doe",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    },
    {
      id: 2,
      title: "Jane Smith",
      description:
        "Another body text for demonstration. You can replace this with real data from your API or database.",
    },
    {
      id: 3,
      title: "David Johnson",
      description:
        "You can continue adding more employees here. Each employee will appear as a card in the list view.",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Employee</h2>

      <div className="space-y-4">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white rounded shadow p-4 flex items-start gap-4"
          >
            <div className="w-16 h-16 bg-gray-200 flex-shrink-0 rounded">
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{emp.title}</h3>
              <p className="text-gray-700 mt-2">{emp.description}</p>

              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded font-bold hover:bg-blue-600">
                Button
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeManagement;
