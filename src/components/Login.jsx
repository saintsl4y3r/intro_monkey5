import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo-monkey5.png";
import googleLogo from "../assets/google-logo.png";

function Login() {
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
  
    if (!role) {
      setErrorMsg("Please select a role.");
      return;
    }
  
    let apiUrl = "";
    if (role === "staff") {
      apiUrl = "https://monkey5-backend.onrender.com/api/Staffs/login";
    } else if (role === "admin") {
      apiUrl = "https://monkey5-backend.onrender.com/api/Managers/login";
    }
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        if (response.status === 404) {
          setErrorMsg("Account does not exist");
        } else if (response.status === 401) {
          setErrorMsg("Invalid email or password");
        } else {
          setErrorMsg("Login failed. Please check your email or password");
        }
        return;
      }
  
      const data = await response.json();
      localStorage.setItem("userName", data.fullName);
      localStorage.setItem("userRole", role);
      if (role === "staff") {
        navigate("/staff");
      } else {
        navigate("/admin");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Login failed. Please check your email or password");
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
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-left mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded"
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
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
