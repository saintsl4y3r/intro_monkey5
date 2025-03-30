import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { motion, useInView } from "framer-motion";
import BookingPopup from "../components/BookingPopup";
import AppDownloadCTA from "../components/AppDownloadCTA";
import cookingHero from "../assets/cooking-hero.jpg"; // You'll need to add this image
import chef1 from "../assets/chef1.jpg"; // You'll need to add this image
import chef2 from "../assets/chef2.jpg"; // You'll need to add this image
import cookingIcon from "../assets/cooking-icon.png"; // You'll need to add this image

function CookingServiceScreen() {
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
          backgroundImage: `url(${cookingHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
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
            Professional Home Cooking Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Delicious, personalized meals prepared in your kitchen by
            experienced chefs
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
                src={cookingIcon}
                alt="Cooking Service"
                className="w-48 h-48 object-contain"
              />
            </motion.div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-orange-500 mb-4">
                Our Home Cooking Service
              </h2>
              <p className="text-gray-700 mb-4">
                At MONKEY5, we bring the restaurant experience to your home with
                our professional cooking services. Our skilled chefs prepare
                delicious, customized meals in your kitchen, using fresh
                ingredients and tailoring each dish to your dietary preferences
                and requirements.
              </p>
              <p className="text-gray-700">
                Whether you need daily meal preparation, special occasion
                dining, or cooking lessons, our culinary team is ready to create
                memorable dining experiences for you and your family.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Features */}
      <AnimatedSection className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
            Why Choose Our Cooking Service?
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
              <div className="text-5xl mb-4 text-orange-500">👨‍🍳</div>
              <h3 className="text-xl font-bold mb-2">Professional Chefs</h3>
              <p className="text-gray-700">
                Our culinary team consists of experienced chefs with backgrounds
                in fine dining and diverse cuisines.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl mb-4 text-orange-500">🥗</div>
              <h3 className="text-xl font-bold mb-2">Customized Menus</h3>
              <p className="text-gray-700">
                We create personalized menus based on your preferences, dietary
                needs, and favorite cuisines.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl mb-4 text-orange-500">🛒</div>
              <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-700">
                We source high-quality, fresh ingredients from local markets for
                the best flavor and nutrition.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl mb-4 text-orange-500">🧽</div>
              <h3 className="text-xl font-bold mb-2">Kitchen Cleanup</h3>
              <p className="text-gray-700">
                We leave your kitchen spotless after cooking, so you can simply
                enjoy your meal without worrying about cleanup.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl mb-4 text-orange-500">📆</div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-700">
                Book our services for one-time events, weekly meal prep, or
                regular daily cooking based on your needs.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-5xl mb-4 text-orange-500">🍽️</div>
              <h3 className="text-xl font-bold mb-2">Special Diets</h3>
              <p className="text-gray-700">
                We accommodate all dietary requirements including vegetarian,
                vegan, gluten-free, keto, and allergy-friendly meals.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Our Chefs */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
            Meet Our Professional Chefs
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={chef1}
                alt="Professional Chef"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3">Culinary Expertise</h3>
              <p className="text-gray-700 mb-4">
                Our chefs bring years of experience from top restaurants,
                catering companies, and culinary schools. They are passionate
                about creating exceptional dining experiences in the comfort of
                your home.
              </p>
              <p className="text-gray-700 mb-4">
                Each chef specializes in different cuisines and cooking
                techniques, allowing us to match you with the perfect culinary
                professional for your specific preferences and requirements.
              </p>
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Chefs
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
              <h3 className="text-xl font-bold mb-2">Choose Your Menu</h3>
              <p className="text-gray-700">
                Select from our curated menus or request custom dishes based on
                your preferences.
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
              <h3 className="text-xl font-bold mb-2">Schedule Service</h3>
              <p className="text-gray-700">
                Book your preferred date and time through our app or website.
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
              <h3 className="text-xl font-bold mb-2">Chef Arrives</h3>
              <p className="text-gray-700">
                Your chef arrives with fresh ingredients and necessary
                equipment.
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
              <h3 className="text-xl font-bold mb-2">Enjoy Your Meal</h3>
              <p className="text-gray-700">
                Relax while your chef prepares, serves, and cleans up after your
                delicious meal.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-4">
                "The chef from MONKEY5 prepared an incredible anniversary dinner
                for us. The food was restaurant quality, and we didn't have to
                lift a finger. Worth every penny for a special occasion!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/48?img=32"
                  alt="Jennifer Lopez"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Jennifer Lopez</p>
                  <p className="text-sm text-gray-500">Anniversary dinner</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-4">
                "We've been using MONKEY5's weekly meal prep service for three
                months now. It's saved us so much time and the food is healthy
                and delicious. Our chef even accommodates our kids' picky eating
                habits!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/48?img=12"
                  alt="David Chen"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">David Chen</p>
                  <p className="text-sm text-gray-500">
                    Weekly meal prep client
                  </p>
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
            Our Cooking Service Plans
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Choose from our flexible pricing options to find the perfect fit for
            your culinary needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-2xl font-bold text-center mb-4">
                Single Meal
              </h3>
              <div className="text-center text-4xl font-bold text-orange-500 mb-4">
                $120<span className="text-lg text-gray-500">/meal</span>
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
                  One complete meal
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
                  Serves up to 4 people
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
                  Includes cleanup
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
              <h3 className="text-2xl font-bold text-center mb-4">
                Weekly Plan
              </h3>
              <div className="text-center text-4xl font-bold text-orange-500 mb-4">
                $350<span className="text-lg text-gray-500">/week</span>
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
                  3 days of meals
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
                  Serves up to 4 people
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
                  Meal planning included
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
                  Grocery shopping
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
              <h3 className="text-2xl font-bold text-center mb-4">
                Special Event
              </h3>
              <div className="text-center text-4xl font-bold text-orange-500 mb-4">
                $500<span className="text-lg text-gray-500">/event</span>
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
                  Multi-course dinner
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
                  Up to 10 guests
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
                  Custom menu planning
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
                  Serving and cleanup
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
                How do you select your chefs?
              </h3>
              <p className="text-gray-700">
                Our chefs undergo a rigorous selection process that includes
                culinary skills assessment, background checks, and reference
                verification. We only hire experienced professionals with formal
                culinary training or extensive restaurant experience.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                Can I provide my own recipes?
              </h3>
              <p className="text-gray-700">
                Absolutely! Our chefs are happy to prepare your favorite family
                recipes or dishes that have special meaning to you. Simply share
                the recipes in advance so our chef can prepare accordingly.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                Do I need to provide cooking equipment?
              </h3>
              <p className="text-gray-700">
                Our chefs work with the equipment available in your kitchen. For
                specialized dishes that require unique tools, your chef will
                bring those items. If you have concerns about your kitchen
                setup, please let us know when booking.
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
                For regular meal services, we recommend booking at least 48
                hours in advance. For special events or holiday meals, we
                suggest booking 1-2 weeks ahead to ensure availability and allow
                time for menu planning.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                Can you accommodate dietary restrictions?
              </h3>
              <p className="text-gray-700">
                Yes, our chefs are experienced in preparing meals for various
                dietary needs including vegetarian, vegan, gluten-free,
                dairy-free, keto, paleo, and allergy-friendly options. Please
                specify any restrictions when booking.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-orange-500 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Enjoy Restaurant-Quality Meals at Home?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the luxury of personalized cooking services from MONKEY5.
            Book your first session today and transform your home dining
            experience.
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
            <Link to="/about">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
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

export default CookingServiceScreen;
