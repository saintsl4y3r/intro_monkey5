import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import { motion } from "framer-motion";

function HomeScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Home />
    </motion.div>
  );
}

export default HomeScreen;
