import React, { useState, useEffect } from "react";
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

const mockBookings = [
  { id: 1, date: "2024-01-03", totalPrice: 65, serviceType: "Cleaning" },
  { id: 2, date: "2024-01-05", totalPrice: 75, serviceType: "Cooking" },
  { id: 3, date: "2024-01-10", totalPrice: 55, serviceType: "Child Care" },
  { id: 4, date: "2024-01-15", totalPrice: 80, serviceType: "Cleaning" },
  { id: 25, date: "2024-01-18", totalPrice: 95, serviceType: "Cooking" },
  { id: 26, date: "2024-01-25", totalPrice: 70, serviceType: "Cleaning" },
  { id: 27, date: "2024-01-30", totalPrice: 105, serviceType: "Child Care" },
  { id: 5, date: "2024-02-05", totalPrice: 60, serviceType: "Cooking" },
  { id: 6, date: "2024-02-12", totalPrice: 70, serviceType: "Cleaning" },
  { id: 7, date: "2024-02-19", totalPrice: 85, serviceType: "Child Care" },
  { id: 8, date: "2024-02-26", totalPrice: 90, serviceType: "Cooking" },
  { id: 9, date: "2024-03-04", totalPrice: 100, serviceType: "Cleaning" },
  { id: 10, date: "2024-03-11", totalPrice: 110, serviceType: "Child Care" },
  { id: 11, date: "2024-03-18", totalPrice: 95, serviceType: "Cooking" },
  { id: 12, date: "2024-03-25", totalPrice: 120, serviceType: "Cleaning" },
  { id: 13, date: "2024-04-01", totalPrice: 105, serviceType: "Child Care" },
  { id: 14, date: "2024-04-08", totalPrice: 135, serviceType: "Cleaning" },
  { id: 15, date: "2024-04-15", totalPrice: 115, serviceType: "Cooking" },
  { id: 16, date: "2024-04-22", totalPrice: 145, serviceType: "Cleaning" },
  { id: 17, date: "2024-05-06", totalPrice: 150, serviceType: "Child Care" },
  { id: 18, date: "2024-05-13", totalPrice: 125, serviceType: "Cleaning" },
  { id: 19, date: "2024-05-20", totalPrice: 165, serviceType: "Cooking" },
  { id: 20, date: "2024-05-27", totalPrice: 140, serviceType: "Cleaning" },
  { id: 21, date: "2024-06-03", totalPrice: 175, serviceType: "Cooking" },
  { id: 22, date: "2024-06-10", totalPrice: 155, serviceType: "Child Care" },
  { id: 30, date: "2024-06-17", totalPrice: 180, serviceType: "Cleaning" },
  { id: 31, date: "2024-06-24", totalPrice: 160, serviceType: "Cooking" },
  { id: 32, date: "2024-07-01", totalPrice: 190, serviceType: "Cleaning" },
  { id: 33, date: "2024-07-08", totalPrice: 170, serviceType: "Child Care" },
  { id: 34, date: "2024-07-15", totalPrice: 200, serviceType: "Cooking" },
  { id: 35, date: "2024-07-22", totalPrice: 185, serviceType: "Cleaning" },
  { id: 36, date: "2024-08-05", totalPrice: 210, serviceType: "Cooking" },
  { id: 37, date: "2024-08-12", totalPrice: 195, serviceType: "Child Care" },
  { id: 38, date: "2024-08-19", totalPrice: 220, serviceType: "Cleaning" },
  { id: 39, date: "2024-08-26", totalPrice: 205, serviceType: "Cooking" },
  { id: 40, date: "2024-09-02", totalPrice: 230, serviceType: "Cleaning" },
  { id: 41, date: "2024-09-09", totalPrice: 215, serviceType: "Child Care" },
  { id: 42, date: "2024-09-16", totalPrice: 240, serviceType: "Cooking" },
  { id: 43, date: "2024-09-23", totalPrice: 225, serviceType: "Cleaning" },
  { id: 44, date: "2024-10-07", totalPrice: 250, serviceType: "Cooking" },
  { id: 45, date: "2024-10-14", totalPrice: 235, serviceType: "Child Care" },
  { id: 46, date: "2024-10-21", totalPrice: 260, serviceType: "Cleaning" },
  { id: 47, date: "2024-10-28", totalPrice: 245, serviceType: "Cooking" },
  { id: 48, date: "2024-11-04", totalPrice: 270, serviceType: "Cleaning" },
  { id: 49, date: "2024-11-11", totalPrice: 255, serviceType: "Child Care" },
  { id: 50, date: "2024-11-18", totalPrice: 280, serviceType: "Cooking" },
  { id: 51, date: "2024-11-25", totalPrice: 265, serviceType: "Cleaning" },
  { id: 23, date: "2024-12-02", totalPrice: 290, serviceType: "Child Care" },
  { id: 24, date: "2024-12-16", totalPrice: 275, serviceType: "Cleaning" },
  { id: 28, date: "2024-12-23", totalPrice: 300, serviceType: "Cooking" },
  { id: 29, date: "2024-12-30", totalPrice: 285, serviceType: "Cleaning" },
];

function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return weekNo;
}

const serviceColors = {
  Cleaning: "rgba(54, 162, 235, 1)",
  "Child Care": "rgba(255, 99, 132, 1)",
  Cooking: "rgba(75, 192, 192, 1)",
  Total: "rgba(153, 102, 255, 1)",
  Default: "rgba(201, 203, 207, 1)",
};

const serviceBackgroundColors = {
  Cleaning: "rgba(54, 162, 235, 0.2)",
  "Child Care": "rgba(255, 99, 132, 0.2)",
  Cooking: "rgba(75, 192, 192, 0.2)",
  Total: "rgba(153, 102, 255, 0.2)",
  Default: "rgba(201, 203, 207, 0.2)",
};

function Reports() {
  const [viewMode, setViewMode] = useState("yearly");
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [monthlyRevenueData, setMonthlyRevenueData] = useState([]);
  const [monthlyWeeklyRevenueData, setMonthlyWeeklyRevenueData] = useState([]);
  const [serviceTypes, setServiceTypes] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const calculateAllRevenue = (bookings) => {
      const monthlyRevenue = Array.from({ length: 12 }, () => ({ Total: 0 }));
      const monthlyWeeklyRevenue = Array.from({ length: 12 }, () =>
        Array.from({ length: 4 }, () => ({ Total: 0 }))
      );

      const foundServices = new Set();

      bookings.forEach((booking) => {
        const price = booking.totalPrice;
        const service = booking.serviceType || "Unknown";
        foundServices.add(service);

        if (!booking.date || typeof price !== "number") {
          console.warn("Invalid booking in mock data:", booking);
          return;
        }

        try {
          const bookingDate = new Date(booking.date);
          const monthIndex = bookingDate.getMonth();
          const weekOfMonth = Math.ceil(bookingDate.getDate() / 7) - 1; 

          if (monthIndex >= 0 && monthIndex < 12) {
            if (!monthlyRevenue[monthIndex]) {
              monthlyRevenue[monthIndex] = { Total: 0 };
            }
            if (!monthlyRevenue[monthIndex][service]) {
              monthlyRevenue[monthIndex][service] = 0;
            }
            monthlyRevenue[monthIndex][service] += price;
            monthlyRevenue[monthIndex].Total += price;

            if (!monthlyWeeklyRevenue[monthIndex][weekOfMonth]) {
              monthlyWeeklyRevenue[monthIndex][weekOfMonth] = { Total: 0 };
            }
            if (!monthlyWeeklyRevenue[monthIndex][weekOfMonth][service]) {
              monthlyWeeklyRevenue[monthIndex][weekOfMonth][service] = 0;
            }
            monthlyWeeklyRevenue[monthIndex][weekOfMonth][service] += price;
            monthlyWeeklyRevenue[monthIndex][weekOfMonth].Total += price;
          }
        } catch (error) {
          console.error(
            "Error processing date/price in mock data:",
            booking.date,
            price,
            error
          );
        }
      });

      monthlyRevenue.forEach((monthData) => {
        foundServices.forEach((service) => {
          if (!monthData[service]) {
            monthData[service] = 0;
          }
        });
      });

      monthlyWeeklyRevenue.forEach((monthData) => {
        monthData.forEach((weekData) => {
          foundServices.forEach((service) => {
            if (!weekData[service]) {
              weekData[service] = 0;
            }
          });
        });
      });

      setMonthlyRevenueData(monthlyRevenue);
      setMonthlyWeeklyRevenueData(monthlyWeeklyRevenue);
      setServiceTypes(["Total", ...Array.from(foundServices).sort()]);
    };

    calculateAllRevenue(mockBookings);
  }, []);

  useEffect(() => {
    if (serviceTypes.length === 0) return;

    let labels = [];
    let datasets = [];

    if (viewMode === "yearly") {
      labels = months;
      datasets = serviceTypes.map((service) => {
        const data = monthlyRevenueData.map(
          (monthData) => monthData[service] || 0
        );
        return {
          label: service,
          data: data,
          borderColor: serviceColors[service] || serviceColors.Default,
          backgroundColor:
            serviceBackgroundColors[service] || serviceBackgroundColors.Default,
          tension: 0.3,
          fill: false,
        };
      });
    } else if (viewMode === "monthly") {
      const currentMonth = new Date().getMonth();
      labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
      datasets = serviceTypes.map((service) => {
        const data = monthlyWeeklyRevenueData[currentMonth].map(
          (weekData) => weekData[service] || 0
        );
        return {
          label: service,
          data: data,
          borderColor: serviceColors[service] || serviceColors.Default,
          backgroundColor:
            serviceBackgroundColors[service] || serviceBackgroundColors.Default,
          tension: 0.3,
          fill: false,
        };
      });
    }

    setChartData({ labels, datasets });
  }, [viewMode, monthlyRevenueData, monthlyWeeklyRevenueData, serviceTypes]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { weight: "bold" },
        },
      },
      title: {
        display: true,
        text:
          viewMode === "yearly"
            ? "Revenue during 12 months (All Services)"
            : "Revenue per week (This Month)",
        font: { weight: "bold", size: 16 },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: viewMode === "yearly" ? "Month" : "Week",
          font: { weight: "bold" },
        },
        ticks: {
          font: { weight: "bold" },
        },
      },
      y: {
        title: { display: true, text: "Revenue ($)", font: { weight: "bold" } },
        ticks: { font: { weight: "bold" } },
        beginAtZero: true,
        stacked: false,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  const handleExportPDF = () => {
    if (viewMode !== "yearly" || monthlyRevenueData.length === 0 || serviceTypes.length <= 1) {
      alert(
        "PDF export is currently only supported for the Yearly view (monthly breakdown) when data is available."
      );
      return;
    }

    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Monthly Revenue Report (by Service)", 14, 20);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    const servicesToInclude = serviceTypes.filter((s) => s !== "Total");
    const tableColumn = ["Month", ...servicesToInclude, "Total Revenue ($)"];

    const tableRows = months.map((month, index) => {
      const monthData = monthlyRevenueData[index] || { Total: 0 };
      const row = [month];

      servicesToInclude.forEach((service) => {
        row.push(
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(monthData[service] || 0)
        );
      });

      row.push(
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(monthData.Total || 0)
      );
      return row;
    });

    const totals = { Total: 0 };
    servicesToInclude.forEach((service) => (totals[service] = 0));
    monthlyRevenueData.forEach((monthData) => {
      servicesToInclude.forEach((service) => {
        totals[service] += monthData[service] || 0;
      });
      totals.Total += monthData.Total || 0;
    });

    const totalRowContent = ["Total"];
    servicesToInclude.forEach((service) => {
      totalRowContent.push({
        content: new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(totals[service]),
        styles: { fontStyle: "bold" },
      });
    });
    totalRowContent.push({
      content: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(totals.Total),
      styles: { fontStyle: "bold" },
    });
    tableRows.push(totalRowContent);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      theme: "grid",
      headStyles: { fillColor: [22, 160, 133], fontStyle: "bold", halign: "center" },
      columnStyles: {},
      footStyles: { fontStyle: "bold", fillColor: [240, 240, 240] },
      didParseCell: function (data) {
        if (data.row.index === tableRows.length - 1) {
          if (data.cell.raw && typeof data.cell.raw === "object") {
          } else {
            data.cell.styles.fontStyle = "bold";
          }
        }
      },
    });

    doc.save("monthly_revenue_by_service_report.pdf");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Revenue Report</h2>
      <div className="mb-6 flex justify-center space-x-4">
        <button
          onClick={() => setViewMode("monthly")}
          className={`px-4 py-2 rounded font-semibold transition-colors duration-200 ${
            viewMode === "monthly"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-blue-600 hover:bg-blue-100 border border-blue-300"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setViewMode("yearly")}
          className={`px-4 py-2 rounded font-semibold transition-colors duration-200 ${
            viewMode === "yearly"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-blue-600 hover:bg-blue-100 border border-blue-300"
          }`}
        >
          Yearly
        </button>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg mb-6">
        <div style={{ height: "450px", position: "relative" }}>
          {chartData.datasets.length > 0 ? (
            <Line data={chartData} options={options} />
          ) : (
            <p className="text-gray-500 flex items-center justify-center h-full">
              Loading chart data or no data available...
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleExportPDF}
          disabled={viewMode !== "yearly" || serviceTypes.length <= 1}
          className={`bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded font-bold transition-opacity duration-200 ${
            viewMode !== "yearly" || serviceTypes.length <= 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          title={
            viewMode !== "yearly"
              ? "PDF Export only available for Yearly view"
              : "Export Monthly Breakdown by Service"
          }
        >
          Export PDF
        </button>
      </div>
    </div>
  );
}

export default Reports;