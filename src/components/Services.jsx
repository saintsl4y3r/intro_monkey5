import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Services.css";

const Services = () => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section id="services" ref={ref} className="services py-8">
      <motion.h2
        className="text-3xl font-bold text-center text-orange-500 mb-6"
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="text-center text-gray-700 mx-auto max-w-2xl"
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.7 }}
      >
        We offer a wide range of home services tailored to your needs, ensuring convenience and quality.
      </motion.p>
    </section>
  );
};

export default Services;
