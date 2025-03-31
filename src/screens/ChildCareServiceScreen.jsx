import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { motion, useInView } from "framer-motion";
import BookingPopup from "../components/BookingPopup";
import AppDownloadCTA from "../components/AppDownloadCTA";
import childCareHero from "../assets/childcare-hero.jpg";
import babysitter1 from "../assets/babysitter1.jpg";
import babysitter2 from "../assets/babysitter2.jpg";
import childCareIcon from "../assets/childcare-icon.png";
import { 
  Baby, 
  Brain, 
  Clock, 
  Shield, 
  Smartphone, 
  Heart,
  Check,
  Star,
  Calendar,
  BookOpen
} from 'lucide-react';

function ChildCareServiceScreen() {
  const [showBookingPopup, setShowBookingPopup] = useState(false);

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
      className="text-foreground"
    >
      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] overflow-hidden"
        style={{
          backgroundImage: `url(${childCareHero})`,
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
            className="mt-8 bg-primary hover:bg-accent text-primary-foreground font-bold py-3 px-8 rounded text-lg"
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
      <AnimatedSection className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-start gap-8">
            <div className="">
              <h2 className="text-3xl font-bold text-orange-500 mb-4 text-left">
                Our Child Care Service
              </h2>
              <div className="text-left">
                <p className="mb-4">
                  At MONKEY5, we understand that finding reliable childcare is one
                  of the most important decisions you'll make for your family. Our
                  professional babysitters are carefully selected, thoroughly
                  vetted, and expertly trained to provide the highest quality care
                  for children of all ages.
                </p>
                <p>
                  Whether you need regular childcare, occasional babysitting, or
                  emergency care, our team is ready to help with flexible
                  scheduling options to meet your family's unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Features */}
      <AnimatedSection className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-bold text-orange-500 mb-4">
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
              className="bg-card p-6 rounded-lg shadow-md border border-border"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="relative mb-4">
                <div className="relative bg-card rounded-full p-3 text-primary mx-auto w-16 h-16 flex items-center justify-center">
                  <Baby size={36} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Caregivers</h3>
              <p>
                Our babysitters have years of experience and undergo rigorous
                background checks and training.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-6 rounded-lg shadow-md border border-border"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="relative mb-4">
                <div className="relative bg-card rounded-full p-3 text-primary mx-auto w-16 h-16 flex items-center justify-center">
                  <Brain size={36} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Age-Appropriate Activities
              </h3>
              <p>
                We provide engaging, educational activities tailored to your
                child's developmental stage.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-6 rounded-lg shadow-md border border-border"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="relative mb-4">
                <div className="relative bg-card rounded-full p-3 text-primary mx-auto w-16 h-16 flex items-center justify-center">
                  <Clock size={36} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p>
                Book services for as little as 2 hours or as long as you need,
                any day of the week.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-6 rounded-lg shadow-md border border-border"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="relative mb-4">
                <div className="relative bg-card rounded-full p-3 text-primary mx-auto w-16 h-16 flex items-center justify-center">
                  <Heart size={36} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">First Aid Certified</h3>
              <p>
                All our babysitters are certified in pediatric first aid and CPR
                for your peace of mind.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-6 rounded-lg shadow-md border border-border"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="relative mb-4">
                <div className="relative bg-card rounded-full p-3 text-primary mx-auto w-16 h-16 flex items-center justify-center">
                  <Smartphone size={36} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Updates</h3>
              <p>
                Receive updates and photos throughout the session via our secure
                mobile app.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-6 rounded-lg shadow-md border border-border"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="relative mb-4">
                <div className="relative bg-card rounded-full p-3 text-primary mx-auto w-16 h-16 flex items-center justify-center">
                  <Shield size={36} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p>
                Your child's safety is our top priority, with strict protocols
                and regular safety training.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Our Babysitters */}
      <AnimatedSection className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-bold text-orange-500 mb-4">
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
              <p className="mb-4">
                Our babysitters are selected for their experience,
                qualifications, and genuine love for children. Many have
                backgrounds in early childhood education, pediatric nursing, or
                child development.
              </p>
              <p className="mb-4">
                We conduct thorough background checks, verify references, and
                provide ongoing training to ensure your children receive the
                best possible care.
              </p>
              <motion.button
                className="bg-primary hover:bg-accent text-primary-foreground font-bold py-2 px-6 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Babysitters
              </motion.button>
            </div>
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
      <AnimatedSection className="py-16 bg-popover text-popover-foreground">
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
              className="bg-secondary hover:bg-accent text-secondary-foreground font-bold py-3 px-8 rounded-lg text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBookingPopup(true)}
            >
                Book Now
            </motion.button>
            <Link to="/about">
              <motion.button
                className="bg-primary hover:opacity-90 text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
}

export default ChildCareServiceScreen;
