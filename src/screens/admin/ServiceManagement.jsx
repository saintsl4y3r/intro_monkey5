import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function ServiceManagement() {
  const [services, setServices] = useState([
    {
      id: "SV001",
      name: "House Cleaning",
      unitPrice: "$50",
      unitType: "Per Visit",
    },
    {
      id: "SV002",
      name: "Laundry Service",
      unitPrice: "$30",
      unitType: "Per Load",
    },
    {
      id: "SV003",
      name: "Window Cleaning",
      unitPrice: "$40",
      unitType: "Per Hour",
    },
  ]);

  const handleAddService = () => {
    alert("Add Service clicked!");
  };

  const handleDeleteService = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((service) => service.id !== id));
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Service Management</h2>
        <button
          onClick={handleAddService}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-bold"
        >
          Add Service
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 text-left w-12">#</th>
              <th className="p-2 text-left">Service ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Unit Price</th>
              <th className="p-2 text-left">Unit Type</th>
              <th className="p-2 text-center w-16"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {services.map((svc, index) => (
              <tr key={svc.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{svc.id}</td>
                <td className="p-2">{svc.name}</td>
                <td className="p-2">{svc.unitPrice}</td>
                <td className="p-2">{svc.unitType}</td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleDeleteService(svc.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceManagement;
