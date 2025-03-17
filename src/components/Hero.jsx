import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="relative w-full h-[80vh] overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
        <motion.h1
          className="text-4xl font-bold mb-4"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
        >
          Welcome to MONKEY5
        </motion.h1>
        <motion.p
          className="text-xl"
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
