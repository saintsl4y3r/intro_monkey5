import React, { useState } from "react";

function ServiceManagement() {
  const [services, setServices] = useState([
    { id: "SV001", name: "Cleaning", unitPrice: "50$", unitType: "Per Hour" },
    { id: "SV002", name: "Cooking", unitPrice: "100$", unitType: "Per Meal" },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [newService, setNewService] = useState({
    id: "",
    name: "",
    unitPrice: "",
    unitType: "",
  });

  const handleAddService = () => {
    setServices([...services, newService]);
    setShowPopup(false);
    setNewService({ id: "", name: "", unitPrice: "", unitType: "" });
  };

  const handleDeleteService = (id) => {
    if (window.confirm(`Are you sure you want to delete service ${id}?`)) {
      setServices(services.filter((svc) => svc.id !== id));
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
              <th className="p-2 text-left">Service ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Unit Price</th>
              <th className="p-2 text-left">Unit Type</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {services.map((svc) => (
              <tr key={svc.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{svc.id}</td>
                <td className="p-2">{svc.name}</td>
                <td className="p-2">{svc.unitPrice}</td>
                <td className="p-2">{svc.unitType}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleDeleteService(svc.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
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
              value={newService.id}
              onChange={(e) => setNewService({ ...newService, id: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Name"
              value={newService.name}
              onChange={(e) => setNewService({ ...newService, name: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
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
    </div>
  );
}

export default ServiceManagement;