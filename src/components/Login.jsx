import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-monkey5.png";

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Link to="/" className="mb-4">
        <img src={logo} alt="MONKEY5 Logo" className="w-24 h-auto" />
      </Link>

      <h1 className="text-2xl font-bold mb-8">Choose Your Role</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-bold mb-2">Customer</h2>
          <p className="mb-4">Log in as a customer</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold">
            Login
          </button>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-bold mb-2">Admin</h2>
          <p className="mb-4">Log in as an admin</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
