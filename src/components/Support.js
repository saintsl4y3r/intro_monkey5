import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Support.css";
import { useEffect } from "react";

const Support = () => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="support" className="support" ref={ref}>
      <motion.h2
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        Customers support
      </motion.h2>
      <motion.p
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.7 }}
      >
        If you need help, please contact us.
      </motion.p>
      <div className="contact-info">
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
          📍 Address: Đ. 60 - CL P, Khu đô thị, Thủ Đức, Hồ Chí Minh
        </motion.p>
      </div>
    </section>
  );
};

export default Support;
