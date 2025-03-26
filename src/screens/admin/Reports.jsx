import React from "react";

function Reports() {
  const reports = [
    {
      id: 1,
      reportId: "100231423",
      customerId: "100231423",
      customerName: "Hoàng Anh",
      serviceName: "Cleaning",
      sendDate: "16:00, 26/01/2025",
      reportDetail: "Lê Đức Long làm hư đồ của nhà tôi",
    },
    {
      id: 2,
      reportId: "100231424",
      customerId: "100231425",
      customerName: "Mai Dương",
      serviceName: "Cooking",
      sendDate: "09:00, 27/01/2025",
      reportDetail: "Món ăn chưa đạt yêu cầu",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Reports</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">ReportID</th>
              <th className="p-2 text-left">Customer ID</th>
              <th className="p-2 text-left">Customer Name</th>
              <th className="p-2 text-left">Service Name</th>
              <th className="p-2 text-left">Send date</th>
              <th className="p-2 text-left">Report Detail</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {reports.map((rep, index) => (
              <tr key={rep.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{rep.reportId}</td>
                <td className="p-2">{rep.customerId}</td>
                <td className="p-2">{rep.customerName}</td>
                <td className="p-2">{rep.serviceName}</td>
                <td className="p-2">{rep.sendDate}</td>
                <td className="p-2">{rep.reportDetail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;
