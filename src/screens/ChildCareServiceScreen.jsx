import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { motion, useInView } from "framer-motion";
import BookingPopup from "../components/BookingPopup";
import AppDownloadCTA from "../components/AppDownloadCTA";
import childCareHero from "../assets/childcare-hero.jpg";
import babysitter1 from "../assets/babysitter1.jpg";
import babysitter2 from "../assets/babysitter2.jpg";
import childCareIcon from "../assets/childcare-icon.png";

function ChildCareServiceScreen() {
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Custom hook for section animations
  const AnimatedSection = ({ children, className, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
      <motion.section
        ref={ref}
        variants={fadeIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
        id={id}
      >
        {children}
      </motion.section>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] overflow-hidden"
        style={{
          backgroundImage: `url(${childCareHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1, // Lower z-index
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Professional Child Care Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Trusted, experienced babysitters for your precious little ones
          </motion.p>
          <motion.button
            className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            onClick={() => setShowBookingPopup(true)}
          >
            Book Now
          </motion.button>
        </motion.div>
      </section>

      {/* Service Overview */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="md:w-1/3 flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={childCareIcon}
                alt="Child Care"
                className="w-48 h-48 object-contain"
              />
            </motion.div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-orange-500 mb-4">
                Our Child Care Service
              </h2>
              <p className="text-gray-700 mb-4">
                At MONKEY5, we understand that finding reliable childcare is one
                of the most important decisions you'll make for your family. Our
                professional babysitters are carefully selected, thoroughly
                vetted, and expertly trained to provide the highest quality care
                for children of all ages.
              </p>
              <p className="text-gray-700">
                Whether you need regular childcare, occasional babysitting, or
                emergency care, our team is ready to help with flexible
                scheduling options to meet your family's unique needs.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Features */}
      <AnimatedSection className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
            Why Choose Our Child Care Service?
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl mb-4 text-orange-500">👩‍👧</div>
              <h3 className="text-xl font-bold mb-2">Experienced Caregivers</h3>
              <p className="text-gray-700">
                Our babysitters have years of experience and undergo rigorous
                background checks and training.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl mb-4 text-orange-500">🎮</div>
              <h3 className="text-xl font-bold mb-2">
                Age-Appropriate Activities
              </h3>
              <p className="text-gray-700">
                We provide engaging, educational activities tailored to your
                child's developmental stage.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl mb-4 text-orange-500">⏰</div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-700">
                Book services for as little as 2 hours or as long as you need,
                any day of the week.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl mb-4 text-orange-500">🏥</div>
              <h3 className="text-xl font-bold mb-2">First Aid Certified</h3>
              <p className="text-gray-700">
                All our babysitters are certified in pediatric first aid and CPR
                for your peace of mind.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl mb-4 text-orange-500">📱</div>
              <h3 className="text-xl font-bold mb-2">Real-Time Updates</h3>
              <p className="text-gray-700">
                Receive updates and photos throughout the session via our secure
                mobile app.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl mb-4 text-orange-500">🔒</div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-gray-700">
                Your child's safety is our top priority, with strict protocols
                and regular safety training.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Our Babysitters */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
            Meet Our Professional Babysitters
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={babysitter1}
                alt="Professional Babysitter"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3">Experienced & Caring</h3>
              <p className="text-gray-700 mb-4">
                Our babysitters are selected for their experience,
                qualifications, and genuine love for children. Many have
                backgrounds in early childhood education, pediatric nursing, or
                child development.
              </p>
              <p className="text-gray-700 mb-4">
                We conduct thorough background checks, verify references, and
                provide ongoing training to ensure your children receive the
                best possible care.
              </p>
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Babysitters
              </motion.button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Book Online</h3>
              <p className="text-gray-700">
                Select your date, time, and service requirements through our
                easy-to-use app.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Match with Sitter</h3>
              <p className="text-gray-700">
                We'll match you with the perfect babysitter based on your needs
                and preferences.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Receive Care</h3>
              <p className="text-gray-700">
                Your babysitter arrives on time and provides excellent care for
                your children.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Rate & Review</h3>
              <p className="text-gray-700">
                After the service, rate your experience and provide feedback to
                help us improve.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
            What Parents Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-4">
                "Our babysitter from MONKEY5 was absolutely amazing with our
                twins. She was punctual, professional, and the kids adored her.
                We've booked her three times already and plan to continue using
                this service regularly."
              </p>
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/48?img=44"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">
                    Mother of twins, age 4
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-4">
                "As a single dad, finding reliable childcare has always been a
                challenge. MONKEY5 has been a game-changer for me. Their
                babysitters are professional, engaging, and my daughter looks
                forward to their visits."
              </p>
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/48?img=68"
                  alt="Michael Tran"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Michael Tran</p>
                  <p className="text-sm text-gray-500">Father of one, age 6</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing */}
      <AnimatedSection className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We offer competitive rates with no hidden fees. Pay only for the
            time you need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
              <div className="text-center text-4xl font-bold text-orange-500 mb-4">
                $20<span className="text-lg text-gray-500">/hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  One child
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Basic childcare
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  2-hour minimum
                </li>
              </ul>
              <motion.button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBookingPopup(true)}
              >
                Book Now
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md border-2 border-orange-500 transform scale-105"
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Standard</h3>
              <div className="text-center text-4xl font-bold text-orange-500 mb-4">
                $25<span className="text-lg text-gray-500">/hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Up to 2 children
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Meal preparation
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Educational activities
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Real-time updates
                </li>
              </ul>
              <motion.button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBookingPopup(true)}
              >
                Book Now
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-2xl font-bold text-center mb-4">Premium</h3>
              <div className="text-center text-4xl font-bold text-orange-500 mb-4">
                $35<span className="text-lg text-gray-500">/hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Up to 3 children
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All Standard features
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Homework assistance
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Light housekeeping
                </li>
              </ul>
              <motion.button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBookingPopup(true)}
              >
                Book Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                How do you screen your babysitters?
              </h3>
              <p className="text-gray-700">
                All our babysitters undergo a rigorous screening process that
                includes background checks, reference verification, in-person
                interviews, and skills assessment. We only hire approximately
                10% of applicants to ensure the highest quality care.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                What ages do you provide care for?
              </h3>
              <p className="text-gray-700">
                We provide care for children of all ages, from newborns to
                teenagers. Our babysitters are matched based on their experience
                with specific age groups to ensure appropriate care.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                How far in advance should I book?
              </h3>
              <p className="text-gray-700">
                While we can sometimes accommodate last-minute requests, we
                recommend booking at least 24-48 hours in advance to ensure
                availability, especially during evenings and weekends.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                What happens if I need to cancel?
              </h3>
              <p className="text-gray-700">
                We understand that plans change. Cancellations made more than 24
                hours in advance receive a full refund. Cancellations within 24
                hours are subject to a 50% fee to compensate our babysitters for
                their reserved time.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                Can I request the same babysitter for future bookings?
              </h3>
              <p className="text-gray-700">
                Absolutely! If you've found a babysitter that your family loves,
                you can request them specifically for future bookings through
                our app, subject to their availability.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-orange-500 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Book Your Childcare Service?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of happy families who trust MONKEY5 for their
            childcare needs. Book your first session today and experience the
            difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBookingPopup(true)}
            >
              Book Now
            </motion.button>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </AnimatedSection>

      {/* App Download CTA */}
      <AppDownloadCTA />

      {/* Booking Popup */}
      <BookingPopup
        isOpen={showBookingPopup}
        onClose={() => setShowBookingPopup(false)}
        service="Child Care"
      />
    </motion.div>
  );
}

export default ChildCareServiceScreen;
