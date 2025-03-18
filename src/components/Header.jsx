import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo-monkey5.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="bg-orange-500 p-4 flex items-center justify-between"
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
