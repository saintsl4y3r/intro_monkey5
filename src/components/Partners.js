import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Partners.css";
import 'src/react-refresh-runtime.js';
import zalo from "../assets/partner-zalopay.png";
import momo from "../assets/partner-momo.png";
import hoozing from "../assets/partner-hoozing.png";
import { useEffect } from "react";

function Partners() {
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
    <section id="partners" className="partners" ref={ref}>
      <motion.h2
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        MONKEY5's Partners
      </motion.h2>
      <div className="partners-container">
        <motion.div
          className="partner-item"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.7 }}
        >
          <img src={zalo} alt="ZaloPay" />
          <h3>ZALOPAY</h3>
          <p>Fast mobile payment application in 2 seconds</p>
        </motion.div>
        <motion.div
          className="partner-item"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.7 }}
        >
          <img src={momo} alt="MoMo" />
          <h3>MOMO</h3>
          <p>Vietnam's No. 1 payment super app</p>
        </motion.div>
        <motion.div
          className="partner-item"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.7 }}
        >
          <img src={hoozing} alt="Hoozing" />
          <h3>HOOZING</h3>
          <p>Home buying and renting app</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Partners;
