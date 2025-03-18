import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Support.css";

const Support = () => {
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
    <section
      id="support"
      ref={ref}
      className="bg-gray-100 py-12 w-full"
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        boxSizing: "border-box",
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-orange-500 mb-4"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Customers Support
        </motion.h2>
        <motion.p
          className="text-center text-gray-700 mb-6"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.7 }}
        >
          If you need help, please contact us.
        </motion.p>
        <div className="contact-info text-center space-y-4">
          <motion.p
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.9 }}
          >
            📞 Hotline: 1900 1234
          </motion.p>
          <motion.p
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1.1 }}
          >
            📧 Email: sayhoang.work@gmail.com
          </motion.p>
          <motion.p
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1.3 }}
          >
            📍 Address: 60 D, CL P, Urban Area, Thu Duc, Ho Chi Minh City
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Support;
