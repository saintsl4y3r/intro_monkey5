import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import about1 from "../assets/logo-monkey5.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import about6 from "../assets/about6.png";
import coreValueImage from "../assets/core-value-1.jpg";

function About() {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="about" ref={ref} className="max-w-5xl mx-auto p-8 space-y-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-gray-800">
          <motion.h2
            className="text-3xl text-orange-500 mb-4"
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            We are MONKEY5
          </motion.h2>
          <motion.p
            className="mb-2"
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.7 }}
          >
            MONKEY5 Co., Ltd was founded on January 14, 2025 by CEO – Founder Hoàng Anh.
          </motion.p>
          <motion.p
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.9 }}
          >
            MONKEY5 is a pioneering company applying technology to the home service industry in Vietnam. We provide multiple convenient services such as house cleaning, air-conditioner cleaning, grocery shopping, and more across Southeast Asia.
          </motion.p>
        </div>
        <div className="flex-1">
          <img src={about1} alt="We are MONKEY5" className="max-w-md w-full rounded" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-4">
        <div className="flex-1 text-gray-800">
          <motion.h2
            className="text-3xl text-orange-500 mb-4"
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            The meaning of MONKEY5
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.7 }}
          >
            Inspired by the image of cute monkeys, the name MONKEY5 refers to the diligent collaborators who always complete their tasks.
          </motion.p>
        </div>
        <div className="flex-1">
          <img src={about2} alt="The meaning of MONKEY5" className="max-w-md w-full rounded" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-gray-800">
          <motion.h2
            className="text-3xl text-orange-500 mb-4"
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            Areas of operation
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.7 }}
          >
            Currently, MONKEY5 provides convenient services for numerous households across more than 20 major cities and provinces in Vietnam and is expanding overseas.
          </motion.p>
        </div>
        <div className="flex-1">
          <img src={about3} alt="Areas of operation" className="max-w-md w-full rounded" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-4">
        <div className="flex-1 text-gray-800">
          <motion.h2
            className="text-3xl text-orange-500 mb-4"
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            Further development
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.7 }}
          >
            In Vietnam, MONKEY5 has helped over 1,000,000 domestic workers earn a stable income and continuously improves its service quality and the app.
          </motion.p>
        </div>
        <div className="flex-1">
          <img src={about4} alt="Further development" className="max-w-md w-full rounded" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-gray-800">
          <motion.h2
            className="text-3xl text-orange-500 mb-4"
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            Vision
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.7 }}
          >
            Not only aiming to help you care for your home with services like house cleaning, air-conditioner cleaning, meal cooking, laundry..., we expand our integrated home convenience services across Southeast Asia.
          </motion.p>
        </div>
        <div className="flex-1">
          <img src={about5} alt="Vision" className="max-w-md w-full rounded" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-4">
        <div className="flex-1 text-gray-800">
          <motion.h2
            className="text-3xl text-orange-500 mb-4"
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            Mission
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.7 }}
          >
            MONKEY5 was created to solve household tasks for urban residents and improve their quality of life by applying a systematic, professional, and dedicated workforce.
          </motion.p>
        </div>
        <div className="flex-1">
          <img src={about6} alt="Mission" className="max-w-md w-full rounded" />
        </div>
      </div>
      <motion.div
        className="core-values mt-8"
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl text-center text-orange-500 mb-6">Core Values</h2>
        <div className="core-value-image text-center mb-6">
          <img src={coreValueImage} alt="Core Value" className="max-w-lg w-full rounded" />
        </div>
        <div className="core-values-items grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="value-item text-center">
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p>Ensure service quality by investing in thorough recruitment, training, and inspection processes.</p>
          </div>
          <div className="value-item text-center">
            <h3 className="text-xl font-bold mb-2">Dedication</h3>
            <p>Customer satisfaction is our top priority; every task is handled with care and passion.</p>
          </div>
          <div className="value-item text-center">
            <h3 className="text-xl font-bold mb-2">Convenience</h3>
            <p>A fast, convenient app that saves time by efficiently resolving household tasks.</p>
          </div>
          <div className="value-item text-center">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p>We continuously innovate and listen to feedback to deliver the best customer experience.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
