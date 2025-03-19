import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleVerifyCode = () => {
    setStep(3);
  };

  const handleResetPassword = () => {
    alert("Password reset successful. Redirecting to Login...");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
        className="bg-white p-6 rounded shadow w-full max-w-md"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
            <p className="text-gray-600 mb-4">
              Enter your username and registered phone/email to reset your password.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Username</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block mb-1">Phone number or email</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-bold"
              >
                Next
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-2xl font-bold mb-4">Verify Your Identity</h1>
            <p className="text-gray-600 mb-4">
              "A 6-character verification code has been sent to your email/phone. Please enter the code to continue."
            </p>
            <form className="space-y-4">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter 6-digit code"
                className="w-full border p-2 rounded text-center tracking-widest"
              />
              <button
                type="button"
                onClick={handleVerifyCode}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-bold"
              >
                Verify Code
              </button>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            <h1 className="text-2xl font-bold mb-4">Set New Password</h1>
            <p className="text-gray-600 mb-4">
              Enter your new password below.
            </p>
            <form className="space-y-4">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full border p-2 rounded"
              />
              <button
                type="button"
                onClick={handleResetPassword}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-bold"
              >
                Confirm New Password
              </button>
            </form>
          </>
        )}

        {step !== 1 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setStep(1)}
              className="text-gray-500 hover:underline"
            >
              Back to Start
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ForgotPassword;