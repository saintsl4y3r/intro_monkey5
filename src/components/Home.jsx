import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BookingPopup from "./BookingPopup";

function Home() {
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const navigate = useNavigate();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const Section = ({ children, className, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
      <motion.section
        ref={ref}
        variants={sectionVariants}
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
    <div className="text-gray-800">
      {/* HERO */}
      <Section className="bg-blue-600 text-white py-24 text-center px-4">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Professional Home Services, On-Demand
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Book trusted professionals for all your home needs in just a few clicks
        </motion.p>
        <motion.button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          onClick={() => setShowBookingPopup(true)}
        >
          Book a Service
        </motion.button>
      </Section>

      <Section className="py-16 text-center" id="benefits">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">
          Benefits of Using MONKEY5
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
          <motion.div
            className="flex-1 p-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="text-6xl mb-4">🕒</div>
            <h3 className="text-xl font-bold mb-2">Convenience</h3>
            <p>
              Book home services quickly and easily from your phone or computer.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="text-6xl mb-4">👨‍🔧</div>
            <h3 className="text-xl font-bold mb-2">Trusted Professionals</h3>
            <p>
              We carefully vet all of our service providers to ensure quality and reliability.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 p-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p>
              Pay securely through our platform with our secure payment system.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="py-16 text-center bg-gray-100" id="services">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
          {/* General Cleaning Card */}
          <motion.div
            className="flex-1 bg-white p-6 rounded shadow"
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-6xl mb-4">🧹</div>
            <h3 className="text-xl font-bold mb-2">General Cleaning</h3>
            <p className="mb-4">
              Professional cleaning services for your entire home
            </p>
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services/housekeeping")}
            >
              Learn More →
            </motion.button>
          </motion.div>
          {/* Home Cooking Card */}
          <motion.div
            className="flex-1 bg-white p-6 rounded shadow"
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-6xl mb-4">🍳</div>
            <h3 className="text-xl font-bold mb-2">Home Cooking</h3>
            <p className="mb-4">
              Experienced chefs for your daily meals or special occasions
            </p>
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services/cooking")}
            >
              Learn More →
            </motion.button>
          </motion.div>
          {/* Babysitting Card */}
          <motion.div
            className="flex-1 bg-white p-6 rounded shadow"
            whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-6xl mb-4">👶</div>
            <h3 className="text-xl font-bold mb-2">Babysitting</h3>
            <p className="mb-4">
              Trusted childcare professionals available 24/7
            </p>
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services/childcare")}
            >
              Learn More →
            </motion.button>
          </motion.div>
        </div>
      </Section>

      <Section className="py-16 text-center" id="how-it-works">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
          <motion.div
            className="flex-1 bg-white p-6 rounded shadow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">Choose Service</h3>
            <p>Select from our professional home services</p>
          </motion.div>
          <motion.div
            className="flex-1 bg-white p-6 rounded shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-6xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-2">Pick Time & Staff</h3>
            <p>Select your preferred time and available professionals</p>
          </motion.div>
          <motion.div
            className="flex-1 bg-white p-6 rounded shadow"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-6xl mb-4">😊</div>
            <h3 className="text-xl font-bold mb-2">Enjoy Service</h3>
            <p>Relax while our experts handle your home needs</p>
          </motion.div>
        </div>
      </Section>

      <Section className="py-16 text-center bg-gray-100" id="testimonials">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">
          What Our Customers Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
          <motion.div
            className="flex-1 bg-white p-6 rounded shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
            <p className="mb-2">
              "The cleaning service was exceptional! My home has never been cleaner."
            </p>
            <p className="text-sm font-bold">- Lionel C. Hoang Phuc.</p>
          </motion.div>
          <motion.div
            className="flex-1 bg-white p-6 rounded shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
            <p className="mb-2">
              "The chef prepared an amazing meal for our anniversary. Highly recommend!"
            </p>
            <p className="text-sm font-bold">- Michael Duc Long.</p>
          </motion.div>
          <motion.div
            className="flex-1 bg-white p-6 rounded shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
            <p className="mb-2">
              "Our babysitter was wonderful with the kids. We'll definitely book again!"
            </p>
            <p className="text-sm font-bold">- Harry M. Anh.</p>
          </motion.div>
        </div>
      </Section>

      <Section className="py-16 text-center bg-blue-600 text-white" id="cta">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Ready to Transform Your Home?
        </motion.h2>
        <motion.p
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Join thousands of happy customers enjoying our professional services
        </motion.p>
        <motion.button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
          onClick={() => setShowBookingPopup(true)}
        >
          Get Started Now
        </motion.button>
      </Section>

      <BookingPopup
        isOpen={showBookingPopup}
        onClose={() => setShowBookingPopup(false)}
        service="Home Service"
      />
    </div>
  );
}

export default Home;
