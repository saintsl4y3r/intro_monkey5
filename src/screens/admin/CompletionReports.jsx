import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaImage,
  FaCalendarAlt,
  FaUser,
  FaBriefcase,
} from "react-icons/fa";

function CompletionReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);
  const [showReportDetail, setShowReportDetail] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReports, setFilteredReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  useEffect(() => {
    if (reports.length > 0) {
      const filtered = reports.filter(
        (report) =>
          report.booking?.customer?.fullName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          report.booking?.staff?.fullName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          report.booking?.service?.serviceName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          report.reportText.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredReports(filtered);
    }
  }, [searchTerm, reports]);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/CompletionReports");
      if (!response.ok) {
        throw new Error(`Failed to fetch reports, status: ${response.status}`);
      }
      const data = await response.json();
      if (data && Array.isArray(data)) {
        setReports(data);
        setFilteredReports(data);
      } else {
        setReports([]);
        setFilteredReports([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reports:", error);
      setError("Failed to load completion reports. Please try again later.");
      setLoading(false);
    }
  };

  const handleViewReport = (report) => {
    setSelectedReport(report);
    setShowReportDetail(true);
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return "N/A";
    const date = new Date(dateTimeString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (loading)
    return <div className="p-4 text-center">Loading completion reports...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Completion Reports</h2>

      {/* Search Bar */}
      <div className="mb-4 relative">
        <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
          <div className="pl-3 pr-2">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by customer, staff, service, or report content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="py-2 px-2 w-full outline-none"
          />
        </div>
      </div>

      {/* Reports List */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">Customer</th>
              <th className="p-2 text-left">Staff</th>
              <th className="p-2 text-left">Service</th>
              <th className="p-2 text-left">Service Date</th>
              <th className="p-2 text-left">Report Date</th>
              <th className="p-2 text-left">Images</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredReports.length > 0 ? (
              filteredReports.map((report, index) => (
                <tr
                  key={report.reportId}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">
                    {report.booking?.customer?.fullName || "N/A"}
                  </td>
                  <td className="p-2">
                    {report.booking?.staff?.fullName || "N/A"}
                  </td>
                  <td className="p-2">
                    {report.booking?.service?.serviceName || "N/A"}
                  </td>
                  <td className="p-2">
                    {formatDateTime(report.booking?.serviceStartTime)}
                  </td>
                  <td className="p-2">
                    {formatDateTime(report.reportDateTime)}
                  </td>
                  <td className="p-2">
                    {report.reportImages && report.reportImages.length > 0 ? (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {report.reportImages.length} images
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        No images
                      </span>
                    )}
                  </td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => handleViewReport(report)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2 text-center" colSpan="8">
                  {searchTerm
                    ? "No matching reports found"
                    : "No completion reports found"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Report Detail Modal */}
      {showReportDetail && selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              Completion Report Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <FaUser className="mr-2 text-orange-500" /> Customer
                  Information
                </h3>
                <p>
                  <strong>Name:</strong>{" "}
                  {selectedReport.booking?.customer?.fullName || "N/A"}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  {selectedReport.booking?.customer?.phoneNumber || "N/A"}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  {selectedReport.booking?.customer?.email || "N/A"}
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  {selectedReport.booking?.customer?.location?.address || "N/A"}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <FaUser className="mr-2 text-blue-500" /> Staff Information
                </h3>
                <p>
                  <strong>Name:</strong>{" "}
                  {selectedReport.booking?.staff?.fullName || "N/A"}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  {selectedReport.booking?.staff?.phoneNumber || "N/A"}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  {selectedReport.booking?.staff?.email || "N/A"}
                </p>
                <p>
                  <strong>Rating:</strong>{" "}
                  {selectedReport.booking?.staff?.avgRating || "N/A"}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded mb-4">
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <FaBriefcase className="mr-2 text-green-500" /> Service Details
              </h3>
              <p>
                <strong>Service:</strong>{" "}
                {selectedReport.booking?.service?.serviceName || "N/A"}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {selectedReport.booking?.service?.description || "N/A"}
              </p>
              <p>
                <strong>Unit Price:</strong>{" "}
                {selectedReport.booking?.service?.unitPrice || "N/A"} per{" "}
                {selectedReport.booking?.service?.unitType || "unit"}
              </p>
              <p>
                <strong>Units:</strong>{" "}
                {selectedReport.booking?.serviceUnitAmount || "N/A"}
              </p>
              <p>
                <strong>Total Price:</strong>{" "}
                {selectedReport.booking?.totalPrice || "N/A"}
              </p>
              <p>
                <strong>Service Time:</strong>{" "}
                {formatDateTime(selectedReport.booking?.serviceStartTime)} -{" "}
                {formatDateTime(selectedReport.booking?.serviceEndTime)}
              </p>
              <p>
                <strong>Booking Note:</strong>{" "}
                {selectedReport.booking?.note || "None"}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded mb-4">
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <FaCalendarAlt className="mr-2 text-purple-500" /> Report
                Information
              </h3>
              <p>
                <strong>Report Date:</strong>{" "}
                {formatDateTime(selectedReport.reportDateTime)}
              </p>
              <p>
                <strong>Report Text:</strong>
              </p>
              <div className="bg-white p-3 rounded border mt-2">
                {selectedReport.reportText}
              </div>
            </div>

            {selectedReport.reportImages &&
              selectedReport.reportImages.length > 0 && (
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <FaImage className="mr-2 text-pink-500" /> Report Images
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                    {selectedReport.reportImages.map((image, index) => (
                      <div key={image.reportImageId} className="relative">
                        <a
                          href={`/api/ReportImages/file/${image.imagePath}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <img
                            src={`/api/ReportImages/file/${image.imagePath}`}
                            alt={`Report image ${index + 1}`}
                            className="w-full h-40 object-cover rounded border hover:opacity-90 transition-opacity"
                          />
                        </a>
                        <div className="text-xs mt-1 text-center">
                          Image {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowReportDetail(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
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

export default CompletionReports;
