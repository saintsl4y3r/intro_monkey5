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
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const cleaningData = [1000, 1200, 1100, 1500, 1300, 1600, 1700, 1800, 1400, 1500, 1600, 1900];
  const childCareData = [800, 900, 950, 1100, 1000, 1050, 1200, 1150, 1100, 1050, 1000, 950];
  const cookingData = [1500, 1600, 1550, 1700, 1650, 1750, 1800, 1850, 1700, 1650, 1750, 1900];

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Cooking",
        data: cookingData,
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.4)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Child Care",
        data: childCareData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Cleaning",
        data: cleaningData,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.4)",
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
          font: { weight: "bold" },
        },
      },
      title: {
        display: true,
        text: "Monthly Revenue by Service",
        font: { weight: "bold", size: 16 },
      },
    },
    scales: {
      x: {
        ticks: {
          font: { weight: "bold" },
        },
      },
      y: {
        ticks: {
          font: { weight: "bold" },
        },
      },
    },
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Monthly Revenue Report", 14, 20);
    doc.setFontSize(12);

    const tableColumn = ["Month", "Cleaning ($)", "Child Care ($)", "Cooking ($)"];
    const tableRows = months.map((month, index) => [
      month,
      cleaningData[index],
      childCareData[index],
      cookingData[index],
    ]);

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
