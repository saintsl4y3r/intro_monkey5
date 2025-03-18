import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import About from "../components/About";

function AboutUsScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Header />
      <About />
    </motion.div>
  );
}

export default AboutUsScreen;
