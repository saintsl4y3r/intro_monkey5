import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Hero.css";
import heroImage from "../assets/hero.jpg";
import { useEffect } from "react";
import 'src/react-refresh-runtime.js';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      ref={ref}
    >
      <div className="hero-overlay">
        <motion.h1
          className="hero-title"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
        >
          Welcome to MONKEY5
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.5 }}
        >
          Integrated home utility services on mobile application
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
