import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import AppDownloadCTA from "../components/AppDownloadCTA";
import { motion } from "framer-motion";

function HomeScreen() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      {isScrolled && <div style={{ height: "72px" }}></div>}
      <Home />
      <AppDownloadCTA />
    </motion.div>
  );
}

export default HomeScreen;
