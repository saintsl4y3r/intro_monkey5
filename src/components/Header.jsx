import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo-monkey5.png";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  return (
    <motion.header
      className="bg-orange-500 p-4 flex items-center justify-between"
      style={{ position: "relative", zIndex: 1000 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
    >
      <div className="flex items-center gap-6">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="MONKEY5 Logo"
              className="h-10 w-auto"
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Link>
        </motion.div>
        <nav>
          <ul className="flex gap-6 list-none">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="text-white font-bold">
                About Us
              </Link>
            </motion.li>
            <motion.li
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button
                className="text-white font-bold flex items-center gap-1"
                onClick={toggleServicesDropdown}
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {showServicesDropdown && (
                  <motion.div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
                    style={{ zIndex: 1000 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to="/services/childcare"
                      className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
                      onClick={() => setShowServicesDropdown(false)}
                    >
                      Child Care
                    </Link>
                    <Link
                      to="/services/cooking"
                      className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
                      onClick={() => setShowServicesDropdown(false)}
                    >
                      Cooking
                    </Link>
                    <Link
                      to="/services/housekeeping"
                      className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
                      onClick={() => setShowServicesDropdown(false)}
                    >
                      Housekeeping
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#how-it-works" className="text-white font-bold">
                How It Works
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#testimonials" className="text-white font-bold">
                Testimonials
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#contact" className="text-white font-bold">
                Contact
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#benefits" className="text-white font-bold">
                Benefits
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-bold"
        >
          Login
        </Link>
      </motion.div>
    </motion.header>
  );
}

export default Header;
