import React, { useState, useEffect } from "react";

function ServiceManagement() {
  const [services, setServices] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [newService, setNewService] = useState({
    serviceId: "",
    serviceName: "",
    description: "",
    unitPrice: "",
    unitType: "",
  });

  const fetchServices = async () => {
    try {
      const response = await fetch("https://monkey5-backend.onrender.com/api/Services");
      if (!response.ok) {
        throw new Error(`Failed to fetch services, status: ${response.status}`);
      }
      const data = await response.json();
      if (data && Array.isArray(data.$values)) {
        setServices(data.$values);
      } else {
        setServices([]);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      setServices([]);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAddService = async () => {
    try {
      const response = await fetch("https://monkey5-backend.onrender.com/api/Services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newService),
      });
      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(`Failed to add service: ${errMsg}`);
      }
      await fetchServices();
      setShowPopup(false);
      setNewService({
        serviceId: "",
        serviceName: "",
        description: "",
        unitPrice: "",
        unitType: "",
      });
    } catch (error) {
      console.error("Error adding service:", error);
      alert(`Error adding service. ${error}`);
    }
  };

  const handleDeleteService = async (serviceId) => {
    if (!window.confirm(`Are you sure you want to delete service ${serviceId}?`)) return;
    try {
      const response = await fetch(`https://monkey5-backend.onrender.com/api/Services/${serviceId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete service");
      }
      await fetchServices();
    } catch (error) {
      console.error("Error deleting service:", error);
      alert("Error deleting service. Please try again.");
    }
  };

  const handleDetailService = (svc) => {
    setSelectedService(svc);
    setShowDetailPopup(true);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Service Management</h2>
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setShowPopup(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold"
        >
          Add Service
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left">Service ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Unit Price</th>
              <th className="p-2 text-left">Unit Type</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {services && services.length > 0 ? (
              services.map((svc, index) => (
                <tr key={svc.serviceId || index} className="border-b hover:bg-gray-100">
                  <td className="p-2">{svc.serviceId}</td>
                  <td className="p-2">{svc.serviceName}</td>
                  <td className="p-2">{svc.unitPrice}</td>
                  <td className="p-2">{svc.unitType}</td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => handleDetailService(svc)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-2 py-1 rounded mr-1 text-sm"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => handleDeleteService(svc.serviceId)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2" colSpan="5">
                  No services found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Add Service</h2>
            <input
              type="text"
              placeholder="Service ID"
              value={newService.serviceId}
              onChange={(e) => setNewService({ ...newService, serviceId: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Name"
              value={newService.serviceName}
              onChange={(e) => setNewService({ ...newService, serviceName: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Description"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="number"
              placeholder="Unit Price"
              value={newService.unitPrice}
              onChange={(e) => setNewService({ ...newService, unitPrice: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Unit Type"
              value={newService.unitType}
              onChange={(e) => setNewService({ ...newService, unitType: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddService}
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

      {showDetailPopup && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Service Detail</h2>
            <p className="mb-2">
              <strong>Service ID:</strong> {selectedService.serviceId}
            </p>
            <p className="mb-2">
              <strong>Name:</strong> {selectedService.serviceName}
            </p>
            <p className="mb-2">
              <strong>Description:</strong> {selectedService.description}
            </p>
            <p className="mb-2">
              <strong>Unit Price:</strong> {selectedService.unitPrice}
            </p>
            <p className="mb-2">
              <strong>Unit Type:</strong> {selectedService.unitType}
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => {
                  setShowDetailPopup(false);
                  setSelectedService(null);
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

export default ServiceManagement;
