import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import heroImage from "../assets/hero.jpg";
import about1 from "../assets/logo.svg";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import about6 from "../assets/about6.png";
import coreValueImage from "../assets/core-value-1.jpg";
import Partners from "./Partners";
import Support from "./Support";

const AnimatedSection = ({ children, variants, id, className }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id={id}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

function About() {
  return (
    <div className="text-gray-800">
      <section
        id="hero"
        className="relative w-full h-[60vh] overflow-hidden scroll-mt-24"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            About MONKEY5
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Learn more about our mission, vision, and the story behind our
            services.
          </motion.p>
        </motion.div>
      </section>

      {/* Nội dung About */}
      <div className="max-w-5xl mx-auto p-8 space-y-12 scroll-mt-24">
        <AnimatedSection
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          id="meaning"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <motion.h2
              className="text-3xl text-orange-500 mb-4"
              variants={fadeInUp}
            >
              We are MONKEY5
            </motion.h2>
            <motion.p className="mb-2" variants={fadeInUp}>
              MONKEY5 Co., Ltd was founded on January 14, 2025 by CEO – Founder
              Hoàng Anh.
            </motion.p>
            <motion.p variants={fadeInUp}>
              We are pioneers in leveraging technology to revolutionize the home
              service industry in Vietnam.
            </motion.p>
          </div>
          <motion.div
            className="flex-1"
            variants={imageAnimation}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={about1}
              alt="We are MONKEY5"
              className="max-w-md w-full rounded"
            />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-4"
          id="meaning"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <motion.h2
              className="text-3xl text-orange-500 mb-4"
              variants={fadeInRight}
            >
              The Meaning of MONKEY5
            </motion.h2>
            <motion.p variants={fadeInRight}>
              Our name is inspired by agile, playful monkeys that symbolize our
              hardworking, innovative team.
            </motion.p>
          </div>
          <motion.div
            className="flex-1"
            variants={imageAnimation}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={about2}
              alt="The Meaning of MONKEY5"
              className="max-w-md w-full rounded"
            />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          id="areas"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <motion.h2
              className="text-3xl text-orange-500 mb-4"
              variants={fadeInLeft}
            >
              Areas of Operation
            </motion.h2>
            <motion.p variants={fadeInLeft}>
              We serve households in over 20 major cities and provinces across
              Vietnam.
            </motion.p>
          </div>
          <motion.div
            className="flex-1"
            variants={imageAnimation}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={about3}
              alt="Areas of Operation"
              className="max-w-md w-full rounded"
            />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-4"
          id="development"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <motion.h2
              className="text-3xl text-orange-500 mb-4"
              variants={fadeInRight}
            >
              Further Development
            </motion.h2>
            <motion.p variants={fadeInRight}>
              With a commitment to excellence, MONKEY5 continuously improves
              service quality and empowers over 1,000,000 domestic workers.
            </motion.p>
          </div>
          <motion.div
            className="flex-1"
            variants={imageAnimation}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={about4}
              alt="Further Development"
              className="max-w-md w-full rounded"
            />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          id="vision"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <motion.h2
              className="text-3xl text-orange-500 mb-4"
              variants={fadeInLeft}
            >
              Vision
            </motion.h2>
            <motion.p variants={fadeInLeft}>
              We aim to integrate innovative solutions for home convenience
              services, ensuring modern and reliable support for every
              household.
            </motion.p>
          </div>
          <motion.div
            className="flex-1"
            variants={imageAnimation}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={about5}
              alt="Vision"
              className="max-w-md w-full rounded"
            />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-4"
          id="mission"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <motion.h2
              className="text-3xl text-orange-500 mb-4"
              variants={fadeInRight}
            >
              Mission
            </motion.h2>
            <motion.p variants={fadeInRight}>
              Our mission is to simplify home management by delivering
              efficient, professional, and technology-driven services.
            </motion.p>
          </div>
          <motion.div
            className="flex-1"
            variants={imageAnimation}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={about6}
              alt="Mission"
              className="max-w-md w-full rounded"
            />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection
          id="corevalues"
          className="mt-8"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl text-center text-orange-500 mb-6"
            variants={fadeInUp}
          >
            Core Values
          </motion.h2>
          <motion.div
            className="text-center mb-6"
            variants={imageAnimation}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={coreValueImage}
              alt="Core Values"
              className="mx-auto max-w-lg w-full rounded"
            />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            <motion.div
              className="text-center p-4 border rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p>
                We ensure the highest service quality by investing in
                recruitment, training, and quality assurance.
              </p>
            </motion.div>
            <motion.div
              className="text-center p-4 border rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Dedication</h3>
              <p>
                Our dedicated team puts customer satisfaction first, ensuring
                every task is completed with care.
              </p>
            </motion.div>
            <motion.div
              className="text-center p-4 border rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Convenience</h3>
              <p>
                Our user-friendly app enables quick and efficient booking of
                home services, saving you time.
              </p>
            </motion.div>
            <motion.div
              className="text-center p-4 border rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>
                We continuously innovate by listening to feedback and adapting
                to meet the evolving needs of our customers.
              </p>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>

      <section id="partners">
        <Partners />
      </section>
      <section id="support">
        <Support />
      </section>
    </div>
  );
}

export default About;
