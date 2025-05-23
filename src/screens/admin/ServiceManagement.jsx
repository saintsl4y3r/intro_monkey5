import React, { useState, useEffect } from "react";

function ServiceManagement() {
  const [services, setServices] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [editFormErrors, setEditFormErrors] = useState({});
  const [newService, setNewService] = useState({
    serviceName: "",
    description: "",
    unitPrice: 0,
    unitType: "",
    status: "Available",
  });
  const [editService, setEditService] = useState({
    serviceId: "",
    serviceName: "",
    description: "",
    unitPrice: 0,
    unitType: "",
    status: "Available",
  });

  const fetchServices = async () => {
    try {
      const response = await fetch(
        "https://monkey5-backend.onrender.com/api/Services"
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch services, status: ${response.status}`);
      }
      const data = await response.json();
      if (data && Array.isArray(data)) {
        setServices(data);
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

  const validateForm = () => {
    const errors = {};
    if (!newService.serviceName)
      errors.serviceName = "Service name is required";
    if (!newService.description) errors.description = "Description is required";
    if (!newService.unitPrice && newService.unitPrice !== 0)
      errors.unitPrice = "Unit price is required";
    if (!newService.unitType) errors.unitType = "Unit type is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateEditForm = () => {
    const errors = {};
    if (!editService.serviceName)
      errors.serviceName = "Service name is required";
    if (!editService.description)
      errors.description = "Description is required";
    if (
      editService.unitPrice === "" ||
      editService.unitPrice === null ||
      isNaN(editService.unitPrice)
    )
      errors.unitPrice = "Unit price is required";
    if (!editService.unitType) errors.unitType = "Unit type is required";

    setEditFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddService = async () => {
    if (!validateForm()) return;

    try {
      // Ensure unitPrice is a number
      const serviceData = {
        ...newService,
        unitPrice: Number(newService.unitPrice),
        status: newService.status,
      };

      const response = await fetch(
        "https://monkey5-backend.onrender.com/api/Services",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(serviceData),
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        console.error("API Error Response:", errData);
        throw new Error(`Failed to add service: ${JSON.stringify(errData)}`);
      }

      await fetchServices();
      setShowPopup(false);
      setNewService({
        serviceName: "",
        description: "",
        unitPrice: 0,
        unitType: "",
        status: "Available",
      });
      setFormErrors({});
    } catch (error) {
      console.error("Error adding service:", error);
      alert(`Error adding service. ${error}`);
    }
  };

  const handleDeleteService = async (serviceId, serviceName) => {
    if (
      !window.confirm(
        `Are you sure you want to delete service "${serviceName}"?`
      )
    )
      return;
    try {
      const response = await fetch(
        `https://monkey5-backend.onrender.com/api/Services/${serviceId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        // Try to parse error as JSON, fallback to text
        let errorMsg = "Failed to delete service.";
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
        alert(`Error deleting service. ${errorMsg}`);
        return;
      }
      await fetchServices();
    } catch (error) {
      console.error("Error deleting service:", error);
      alert(`Error deleting service. ${error.message || error}`);
    }
  };

  const handleDetailService = (svc) => {
    setSelectedService(svc);
    setShowDetailPopup(true);
  };

  const handleEditServiceClick = (svc) => {
    setEditService({
      serviceId: svc.serviceId,
      serviceName: svc.serviceName,
      description: svc.description,
      unitPrice: svc.unitPrice,
      unitType: svc.unitType,
      status: svc.status || "Available",
    });
    setEditFormErrors({});
    setShowEditPopup(true);
  };

  const handleUpdateService = async () => {
    if (!validateEditForm()) return;

    try {
      const serviceData = {
        serviceId: editService.serviceId,
        serviceName: editService.serviceName,
        description: editService.description,
        unitPrice: Number(editService.unitPrice),
        unitType: editService.unitType,
        status: editService.status,
      };

      const response = await fetch(
        `https://monkey5-backend.onrender.com/api/Services/${editService.serviceId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(serviceData),
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        console.error("API Error Response:", errData);
        throw new Error(`Failed to update service: ${JSON.stringify(errData)}`);
      }

      await fetchServices();
      setShowEditPopup(false);
      setEditService({
        serviceId: "",
        serviceName: "",
        description: "",
        unitPrice: 0,
        unitType: "",
        status: "Available",
      });
      setEditFormErrors({});
    } catch (error) {
      console.error("Error updating service:", error);
      alert(`Error updating service. ${error}`);
    }
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
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Unit Price</th>
              <th className="p-2 text-left">Unit Type</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {services && services.length > 0 ? (
              services.map((svc, index) => (
                <tr
                  key={svc.serviceId || index}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{svc.serviceName}</td>
                  <td className="p-2">{svc.unitPrice}</td>
                  <td className="p-2">{svc.unitType}</td>
                  <td className="p-2">{svc.status}</td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => handleDetailService(svc)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-2 py-1 rounded mr-1 text-sm"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => handleEditServiceClick(svc)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-2 py-1 rounded mr-1 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        handleDeleteService(svc.serviceId, svc.serviceName)
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
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Add Service</h2>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Service Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Service Name"
                value={newService.serviceName}
                onChange={(e) =>
                  setNewService({ ...newService, serviceName: e.target.value })
                }
                className={`border p-2 w-full ${
                  formErrors.serviceName ? "border-red-500" : ""
                }`}
              />
              {formErrors.serviceName && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.serviceName}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Description"
                value={newService.description}
                onChange={(e) =>
                  setNewService({ ...newService, description: e.target.value })
                }
                className={`border p-2 w-full ${
                  formErrors.description ? "border-red-500" : ""
                }`}
                rows="3"
              />
              {formErrors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.description}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Unit Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Unit Price"
                value={newService.unitPrice}
                onChange={(e) =>
                  setNewService({ ...newService, unitPrice: e.target.value })
                }
                className={`border p-2 w-full ${
                  formErrors.unitPrice ? "border-red-500" : ""
                }`}
              />
              {formErrors.unitPrice && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.unitPrice}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Unit Type <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Unit Type (e.g., hour, session, package)"
                value={newService.unitType}
                onChange={(e) =>
                  setNewService({ ...newService, unitType: e.target.value })
                }
                className={`border p-2 w-full ${
                  formErrors.unitType ? "border-red-500" : ""
                }`}
              />
              {formErrors.unitType && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.unitType}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                value={newService.status}
                onChange={(e) =>
                  setNewService({ ...newService, status: e.target.value })
                }
                className="border p-2 w-full"
              >
                <option value="Available">Available</option>
                <option value="Disabled">Disabled</option>
              </select>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleAddService}
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
      {/* Edit Service Popup */}
      {showEditPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Edit Service</h2>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Service Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Service Name"
                value={editService.serviceName}
                onChange={(e) =>
                  setEditService({
                    ...editService,
                    serviceName: e.target.value,
                  })
                }
                className={`border p-2 w-full ${
                  editFormErrors.serviceName ? "border-red-500" : ""
                }`}
              />
              {editFormErrors.serviceName && (
                <p className="text-red-500 text-xs mt-1">
                  {editFormErrors.serviceName}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Description"
                value={editService.description}
                onChange={(e) =>
                  setEditService({
                    ...editService,
                    description: e.target.value,
                  })
                }
                className={`border p-2 w-full ${
                  editFormErrors.description ? "border-red-500" : ""
                }`}
                rows="3"
              />
              {editFormErrors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {editFormErrors.description}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Unit Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Unit Price"
                value={editService.unitPrice}
                onChange={(e) =>
                  setEditService({ ...editService, unitPrice: e.target.value })
                }
                className={`border p-2 w-full ${
                  editFormErrors.unitPrice ? "border-red-500" : ""
                }`}
              />
              {editFormErrors.unitPrice && (
                <p className="text-red-500 text-xs mt-1">
                  {editFormErrors.unitPrice}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Unit Type <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Unit Type (e.g., hour, session, package)"
                value={editService.unitType}
                onChange={(e) =>
                  setEditService({ ...editService, unitType: e.target.value })
                }
                className={`border p-2 w-full ${
                  editFormErrors.unitType ? "border-red-500" : ""
                }`}
              />
              {editFormErrors.unitType && (
                <p className="text-red-500 text-xs mt-1">
                  {editFormErrors.unitType}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                value={editService.status}
                onChange={(e) =>
                  setEditService({ ...editService, status: e.target.value })
                }
                className="border p-2 w-full"
              >
                <option value="Available">Available</option>
                <option value="Disabled">Disabled</option>
              </select>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleUpdateService}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowEditPopup(false);
                  setEditFormErrors({});
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showDetailPopup && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
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

export default ServiceManagement;
