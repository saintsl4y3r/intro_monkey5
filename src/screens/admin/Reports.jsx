import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import jsPDF from "jspdf";
import "jspdf-autotable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Reports() {
  const revenueData = [
    { service: "Cleaning", revenue: 1000, users: 50 },
    { service: "Cooking", revenue: 1500, users: 80 },
    { service: "Laundry", revenue: 800, users: 30 },
    { service: "Window Cleaning", revenue: 1200, users: 40 },
  ];

  const chartData = {
    labels: revenueData.map((item) => item.service),
    datasets: [
      {
        label: "Revenue ($)",
        data: revenueData.map((item) => item.revenue),
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.4)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Users",
        data: revenueData.map((item) => item.users),
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.4)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
        text: "Revenue and User Statistics by Service",
        font: {
          weight: "bold",
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            weight: "bold",
          },
        },
      },
      y: {
        ticks: {
          font: {
            weight: "bold",
          },
        },
      },
    },
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Report", 14, 20);
    doc.setFontSize(12);

    const tableColumn = ["Service", "Revenue ($)", "Users"];
    const tableRows = revenueData.map((item) => [item.service, item.revenue, item.users]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("report.pdf");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Report</h2>
      <div className="mb-4">
        <Line data={chartData} options={options} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleExportPDF}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold"
        >
          Export as PDF
        </button>
      </div>
    </div>
  );
}

export default Reports;
