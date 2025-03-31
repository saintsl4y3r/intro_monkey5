import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import heroImage from "../assets/hero.jpg";
import about1 from "../assets/logo.svg";
import about3 from "../assets/about3.svg";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import about6 from "../assets/about6.png";
import tamnhin from "../assets/home-page-an-tam-voi-lua-chon-cua-ban.png"
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
        className="relative w-full h-[40vh] overflow-hidden scroll-mt-24"
        style={{
          backgroundColor: "linear-gradient(to right, #FF7E5F, #FF6B6B)",
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
          <div>
            <motion.h2
              className="text-3xl font-bold font-bold text-orange-500 mb-4"
              variants={fadeInUp}
            >
              We are MONKEY5
            </motion.h2>
            <motion.p className="mb-2" variants={fadeInUp}>
            MONKEY5 Co., Ltd was founded on January 14, 2025 by CEO and Founder Hoàng Anh. The company is pioneering in leveraging technology to revolutionize the home service industry in Vietnam. 
            With a strong focus on core values including Quality, Dedication, Convenience, and Innovation, MONKEY5 ensures the highest service quality through investments in recruitment, training, and quality assurance.
            </motion.p>
          </div>
          <motion.div
            className="flex-1"
            variants={imageAnimation}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
          </motion.div>
        </AnimatedSection>

        <AnimatedSection
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-4"
          id="meaning"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <motion.h2
              className="text-3xl font-bold font-bold text-orange-500 mb-4"
              variants={fadeInRight}
            >
              The Meaning of MONKEY5
            </motion.h2>
            <motion.p variants={fadeInRight}>
            The name MONKEY5 is inspired by the characteristics of agile and playful monkeys, which reflect the core values of our team. Monkeys are known for their adaptability, creativity, and teamwork—qualities that resonate deeply with the hardworking and innovative spirit of MONKEY5.
            </motion.p>
          </div>
            <img
              src={about1}
              alt="The Meaning of MONKEY5"
              className="max-w-md w-full rounded"
            />
        </AnimatedSection>

        <AnimatedSection
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          id="areas"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <motion.h2
              className="text-3xl font-bold font-bold text-orange-500 mb-4"
              variants={fadeInLeft}
            >
              Areas of Operation
            </motion.h2>
            <motion.p variants={fadeInLeft}>
              Currently, MONKEY5 provides home services to many households in 20 major cities and provinces in Vietnam: Hanoi, Hai Phong, Da Nang, Hoi An, Nha Trang, Da Lat, Binh Duong, Bien Hoa, HCMC and Can Tho. In addition, bTaskee is expanding to overseas markets with the main service of Hourly Home Cleaning in Thailand and Indonesia.
            </motion.p>
          </div>
            <img
              src={about3}
              alt="Areas of Operation"
              className="max-w-md w-full rounded"
            />
        </AnimatedSection>

        <AnimatedSection
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-4"
          id="development"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <motion.h2
              className="text-3xl font-bold text-orange-500 mb-4"
              variants={fadeInRight}
            >
              Further Development
            </motion.h2>
            <motion.p variants={fadeInRight}>
              With an unwavering commitment to excellence, MONKEY5 continuously strives to improve service quality and empower over 1,000,000 domestic workers worldwide. 
              By providing professional cleaning services tailored to meet the needs of modern households, MONKEY5 ensures that every customer experiences unparalleled satisfaction and comfort. 
            </motion.p>
          </div>
            <img
              src={about4}
              alt="Further Development"
              className="max-w-md w-full rounded"
            />
        </AnimatedSection>

        <img
          width="2400" height="600"
          src={tamnhin}
          alt="Further Development"
          className="attachment-full size-full lazyloaded"
        />
        <AnimatedSection
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          id="vision"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <motion.h2
              className="text-3xl font-bold font-boldext-3xl text-orange-500 mb-4"
              variants={fadeInLeft}
            >
              Vision
            </motion.h2>
            <motion.p variants={fadeInLeft}>
            MONKEY5 aims to become a leading company in Vietnam and reaching out to Southeast Asia, 
            providing convenient home services integrated on mobile apps besides taking care of your family with Home Cleaning, 
            Air-conditioning, Laundry services,...
            </motion.p>
          </div>
            <img
              src={about5}
              alt="Vision"
              className="max-w-md w-full rounded"
            />
        </AnimatedSection>
        
        <AnimatedSection
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-4"
          id="mission"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <motion.h2
              className="text-3xl font-bold font-bold text-orange-500 mb-4"
              variants={fadeInRight}
            >
              Mission
            </motion.h2>
            <motion.p variants={fadeInRight}>
            MONKEY5 was started with a mission to meet the needs of urban residents solving the house chores. We also hope to enhance the value of domestic works by building a professional, dedicated and professional resource of taskers. 
            Customers' lives will be free of household chores burden and taskers' income will be improved for the better. Those are the objectives bTaskee is striving for.</motion.p>
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
            className="text-3xl font-bold font-bold text-left text-orange-500 mb-6"
            variants={fadeInUp}
          >
            Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="text-center p-4 border rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-2">Quality</h3>
    <p>
      We ensure the highest service quality by investing in recruitment,
      training, and quality assurance.
    </p>
  </div>
  <div className="text-center p-4 border rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-2">Dedication</h3>
    <p>
      Our dedicated team puts customer satisfaction first, ensuring every
      task is completed with care.
    </p>
  </div>
  <div className="text-center p-4 border rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-2">Convenience</h3>
    <p>
      Our user-friendly app enables quick and efficient booking of home
      services, saving you time.
    </p>
  </div>
  <div className="text-center p-4 border rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-2">Innovation</h3>
    <p>
      We continuously innovate by listening to feedback and adapting to meet
      the evolving needs of our customers.
    </p>
  </div>
</div>
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
