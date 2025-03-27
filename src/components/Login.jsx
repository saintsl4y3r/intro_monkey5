import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo-monkey5.png";
import googleLogo from "../assets/google-logo.png";

function Login() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (role === "staff") {
      navigate("/staff");
    } else if (role === "admin") {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Link to="/" className="mb-4">
        <img src={logo} alt="MONKEY5 Logo" className="w-24 h-auto" />
      </Link>

      {!role ? (
        <motion.div
          className="bg-white p-6 rounded shadow text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl font-bold mb-4">Choose Your Role</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => setRole("staff")}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-bold"
            >
              Staff Login
            </button>
            <button
              onClick={() => setRole("admin")}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-bold"
            >
              Admin Login
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="bg-white p-6 rounded shadow w-full max-w-md"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl font-bold mb-4">
            {role === "staff" ? "Staff Login" : "Admin Login"}
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-left mb-1" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-left mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="flex justify-between text-sm">
              <Link to="/forgot-password" className="text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-bold"
            >
              Sign In
            </button>
          </form>

          <div className="my-4 text-center">
            <span className="text-gray-500">or sign in with</span>
          </div>

          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-bold">
              <img src={googleLogo} alt="Google" className="w-5 h-5" />
              Google
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setRole(null)}
              className="text-gray-500 hover:underline"
            >
              Back to Role Selection
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Login;
