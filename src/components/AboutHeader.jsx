import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo-monkey5.png";

function AboutHeader() {
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
      <div className="flex items-center gap-4">
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
          <motion.ul
            className="flex gap-4 list-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[
              { href: "#meaning", label: "Meaning" },
              { href: "#areas", label: "Areas" },
              { href: "#development", label: "Development" },
              { href: "#vision", label: "Vision" },
              { href: "#mission", label: "Mission" },
              { href: "#corevalues", label: "Core Values" },
              { href: "#partners", label: "Partners" },
              { href: "#support", label: "Support" },
            ].map((item, index) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
              >
                <a href={item.href} className="text-white font-bold">
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
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

export default AboutHeader;
