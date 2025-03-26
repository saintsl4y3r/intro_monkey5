import React from "react";

function ServiceManagement() {
  const services = [
    {
      id: 1,
      customerId: "100231423",
      customerName: "Hoàng Anh",
      serviceName: "Cleaning",
      startTime: "16:00, 26/01/2025",
      location: "3, Tô Vĩnh Diện, Thủ Đức",
      employeeName: "Lê Đức Long",
      employeeId: "100231444",
    },
    {
      id: 2,
      customerId: "100231425",
      customerName: "Mai Dương",
      serviceName: "Cooking",
      startTime: "10:00, 27/01/2025",
      location: "2, Lê Văn Sỹ, Quận 3",
      employeeName: "Trần Hoài An",
      employeeId: "100231445",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Service Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">CustomerID</th>
              <th className="p-2 text-left">Customer Name</th>
              <th className="p-2 text-left">Service Name</th>
              <th className="p-2 text-left">Start Time</th>
              <th className="p-2 text-left">Location</th>
              <th className="p-2 text-left">Employee Name</th>
              <th className="p-2 text-left">EmployeeID</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {services.map((svc, index) => (
              <tr key={svc.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{svc.customerId}</td>
                <td className="p-2">{svc.customerName}</td>
                <td className="p-2">{svc.serviceName}</td>
                <td className="p-2">{svc.startTime}</td>
                <td className="p-2">{svc.location}</td>
                <td className="p-2">{svc.employeeName}</td>
                <td className="p-2">{svc.employeeId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceManagement;
