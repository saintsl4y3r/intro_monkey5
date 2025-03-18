import React from "react";
import About from "../components/About";
import { motion } from "framer-motion";

function AboutUsScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <About />
    </motion.div>
  );
}

export default AboutUsScreen;
