import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function EditProfile() {
  const [adminId, setAdminId] = useState("100231423");
  const [name, setName] = useState("Hoàng Anh");
  const [birthday, setBirthday] = useState("2004-04-26"); // format yyyy-mm-dd
  const [phoneNumber, setPhoneNumber] = useState("0939939993");
  const [address, setAddress] = useState("3, Tô Vĩnh Diện, Thủ Đức, Hồ Chí Minh");
  const [email, setEmail] = useState("sayhoang.work@gmail.com");

  const handleAddAvatar = () => {
    alert("Add Avatar clicked!");
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile saved!\n" + JSON.stringify({
      adminId, name, birthday, phoneNumber, address, email
    }, null, 2));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

      <form onSubmit={handleSave} className="flex flex-col items-center">
        <div className="rounded-full bg-gray-200 w-32 h-32 flex items-center justify-center mb-2">
          <FaUserCircle className="text-gray-400" size={60} />
        </div>
        <button
          type="button"
          onClick={handleAddAvatar}
          className="text-blue-500 hover:underline mb-6"
        >
          Add Avatar
        </button>

        <div className="space-y-4 w-full max-w-sm">
          <div>
            <label className="block font-semibold mb-1">ID</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Birthday</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border rounded"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Address</label>
            <textarea
              className="w-full p-2 border rounded"
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
