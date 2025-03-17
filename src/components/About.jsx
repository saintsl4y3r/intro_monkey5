import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "../assets/hero.jpg";
import about1 from "../assets/logo-monkey5.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import about6 from "../assets/about6.png";
import coreValueImage from "../assets/core-value-1.jpg";
import Partners from "./Partners";
import Support from "./Support";
import AboutHeader from "./AboutHeader";

function About() {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="text-gray-800">
      {/* Header riêng cho About */}
      <AboutHeader />

      {/* Hero About */}
      <section
        id="hero"
        className="relative w-full h-[60vh] overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About MONKEY5</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Learn more about our mission, vision, and the story behind our services.
          </p>
        </div>
      </section>

      {/* Nội dung */}
      <section id="about" ref={ref} className="max-w-5xl mx-auto p-8 space-y-12">
        {/* We are MONKEY5 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
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
              We are pioneers in leveraging technology to revolutionize the home service industry
              in Vietnam.
            </motion.p>
          </div>
          <div className="flex-1">
            <img src={about1} alt="We are MONKEY5" className="max-w-md w-full rounded" />
          </div>
        </div>

        {/* The Meaning */}
        <div id="meaning" className="flex flex-col md:flex-row-reverse items-center justify-between gap-4">
          <div className="flex-1">
            <motion.h2
              className="text-3xl text-orange-500 mb-4"
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              The Meaning of MONKEY5
            </motion.h2>
            <motion.p
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.7 }}
            >
              Our name is inspired by agile, playful monkeys that symbolize our hardworking,
              innovative team.
            </motion.p>
          </div>
          <div className="flex-1">
            <img src={about2} alt="Meaning of MONKEY5" className="max-w-md w-full rounded" />
          </div>
        </div>

        {/* Areas */}
        <div id="areas" className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <motion.h2
              className="text-3xl text-orange-500 mb-4"
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              Areas of Operation
            </motion.h2>
            <motion.p
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.7 }}
            >
              We serve households in over 20 major cities and provinces across Vietnam.
            </motion.p>
          </div>
          <div className="flex-1">
            <img src={about3} alt="Areas" className="max-w-md w-full rounded" />
          </div>
        </div>

        {/* Development */}
        <div id="development" className="flex flex-col md:flex-row-reverse items-center justify-between gap-4">
          <div className="flex-1">
            <motion.h2
              className="text-3xl text-orange-500 mb-4"
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              Further Development
            </motion.h2>
            <motion.p
              variants={variants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.7 }}
            >
              With a commitment to excellence, MONKEY5 continuously improves service quality
              and empowers over 1,000,000 domestic workers.
            </motion.p>
          </div>
          <div className="flex-1">
            <img src={about4} alt="Development" className="max-w-md w-full rounded" />
          </div>
        </div>

        {/* Vision */}
        <div id="vision" className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
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
              We aim to integrate innovative solutions for home convenience services.
            </motion.p>
          </div>
          <div className="flex-1">
            <img src={about5} alt="Vision" className="max-w-md w-full rounded" />
          </div>
        </div>

        {/* Mission */}
        <div id="mission" className="flex flex-col md:flex-row-reverse items-center justify-between gap-4">
          <div className="flex-1">
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
              Our mission is to simplify home management by delivering efficient,
              professional, and technology-driven services.
            </motion.p>
          </div>
          <div className="flex-1">
            <img src={about6} alt="Mission" className="max-w-md w-full rounded" />
          </div>
        </div>

        {/* Core Values */}
        <motion.div
          id="corevalues"
          className="mt-8"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl text-center text-orange-500 mb-6">Core Values</h2>
          <div className="text-center mb-6">
            <img
              src={coreValueImage}
              alt="Core Value"
              className="mx-auto max-w-lg w-full rounded"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p>
                We ensure the highest service quality by investing in recruitment,
                training, and quality assurance.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Dedication</h3>
              <p>
                Our dedicated team puts customer satisfaction first, ensuring every task is
                completed with care.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Convenience</h3>
              <p>
                Our user-friendly app enables quick and efficient booking of home services,
                saving you time.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>
                We continuously innovate by listening to feedback and adapting to meet
                evolving needs.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Partners & Support */}
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
