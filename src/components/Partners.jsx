import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Partners.css";
import zalo from "../assets/partner-zalopay.png";
import momo from "../assets/partner-momo.png";
import hoozing from "../assets/partner-hoozing.png";

const Partners = () => {
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
    <section id="partners" ref={ref} className="py-8">
      <motion.h2
        className="text-3xl font-bold text-center text-orange-500 mb-6"
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        MONKEY5's Partners
      </motion.h2>
      <motion.div
        className="flex justify-center items-center gap-8 flex-wrap"
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col items-center max-w-[200px] text-center">
          <img src={zalo} alt="ZaloPay" className="w-20 h-auto mb-2" />
          <h3 className="font-bold mb-1">ZALOPAY</h3>
          <p className="text-sm text-gray-700">
            Fast mobile payment application in 2 seconds
          </p>
        </div>
        <div className="flex flex-col items-center max-w-[200px] text-center">
          <img src={momo} alt="MoMo" className="w-20 h-auto mb-2" />
          <h3 className="font-bold mb-1">MOMO</h3>
          <p className="text-sm text-gray-700">
            Vietnam's No. 1 payment super app
          </p>
        </div>
        <div className="flex flex-col items-center max-w-[200px] text-center">
          <img src={hoozing} alt="Hoozing" className="w-20 h-auto mb-2" />
          <h3 className="font-bold mb-1">HOOZING</h3>
          <p className="text-sm text-gray-700">
            Home buying and renting app
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Partners;
