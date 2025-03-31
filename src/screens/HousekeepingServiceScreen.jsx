import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { motion, useInView } from "framer-motion";
import BookingPopup from "../components/BookingPopup";
import AppDownloadCTA from "../components/AppDownloadCTA";
import housekeepingHero from "../assets/housekeeping-hero.jpg";
import housekeeper1 from "../assets/housekeeper1.jpg";
import housekeeper2 from "../assets/housekeeper2.jpg";
import housekeepingIcon from "../assets/housekeeping-icon.svg";
import { 
  Sparkles, 
  Users, 
  Leaf, 
  Shield, 
  Clock, 
  CheckSquare, 
  Star,
  Check
} from 'lucide-react';

function HousekeepingServiceScreen() {
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
      className="text-foreground"
    >
      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] overflow-hidden"
        style={{
          backgroundImage: `url(${housekeepingHero})`,
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
            Professional Cleanning Services
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Immaculate, thorough cleaning for your home by experienced
            professionals
          </motion.p>
          <motion.button
            className="mt-8 bg-primary hover:bg-accent text-secondary-foreground font-bold py-3 px-8 rounded text-lg"
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
              <h2 className="text-3xl font-bold font-bold text-orange-500 mb-4">
                Our Housekeeping Service
              </h2>
              <div className="text-left">
                <p className="mb-4">
                  At MONKEY5, we understand that a clean home is essential for
                  your comfort and well-being. Our professional housekeeping
                  services are designed to give you a spotless, organized living
                  space without the stress and time commitment of doing it yourself.
                </p>
                <p>
                  Whether you need regular cleaning, a one-time deep clean, or
                  specialized services like move-in/move-out cleaning, our
                  experienced team delivers consistent, high-quality results that
                  exceed expectations.
                </p>
              </div>
            </div>
            <motion.div
              className="md:w-1/3 flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
            </motion.div>
          </div>
        </div>
      </AnimatedSection>


      {/* Service Features */}
      <AnimatedSection className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-bold text-orange-500 mb-4">
            Why Choose Our Housekeeping Service?
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
                  <Sparkles size={36} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Thorough Cleaning</h3>
              <p>
                Our detailed cleaning process ensures no corner is left
                untouched, from baseboards to ceiling fans.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-6 rounded-lg shadow-md border border-border"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="relative mb-4">
                <div className="relative bg-card rounded-full p-3 text-primary mx-auto w-16 h-16 flex items-center justify-center">
                  <Users size={36} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Trained Professionals</h3>
              <p>
                Our housekeepers undergo extensive training in cleaning
                techniques, safety protocols, and customer service.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-6 rounded-lg shadow-md border border-border"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="relative mb-4">
                <div className="relative bg-card rounded-full p-3 text-primary mx-auto w-16 h-16 flex items-center justify-center">
                  <Leaf size={36} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly Options</h3>
              <p>
                We offer green cleaning solutions that are effective yet safe
                for your family, pets, and the environment.
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
              <h3 className="text-xl font-bold mb-2">Security & Trust</h3>
              <p>
                All our housekeepers are background-checked, bonded, and insured
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
                  <Clock size={36} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Consistent Scheduling</h3>
              <p>
                Rely on our punctual service with flexible scheduling options to
                fit your busy lifestyle.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-6 rounded-lg shadow-md border border-border"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="relative mb-4">
                <div className="relative bg-card rounded-full p-3 text-primary mx-auto w-16 h-16 flex items-center justify-center">
                  <CheckSquare size={36} strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Customized Cleaning</h3>
              <p>
                We tailor our services to your specific needs and preferences,
                focusing on the areas that matter most to you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Our Housekeepers */}
      <AnimatedSection className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-bold text-orange-500 mb-4">
            Meet Our Professional Housekeepers
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="md:w-1/2"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={housekeeper1}
                alt="Professional Housekeeper"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3">
                Experienced & Reliable
              </h3>
              <p className="mb-4">
                Our housekeeping team consists of experienced professionals who
                take pride in their attention to detail and commitment to
                excellence. Many have years of experience in both residential
                and commercial cleaning.
              </p>
              <p className="mb-4">
                We carefully screen all our housekeepers, ensuring they have the
                skills, experience, and positive attitude needed to deliver
                exceptional service in your home.
              </p>
              <motion.button
                className="bg-primary hover:bg-accent text-primary-foreground font-bold py-2 px-6 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Our Team
              </motion.button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-bold text-orange-500 mb-4">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Book Online</h3>
              <p>
                Schedule your cleaning service through our easy-to-use app or
                website.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Customize Service</h3>
              <p>
                Tell us about your home and any special cleaning requirements
                you have.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Cleaning</h3>
              <p>
                Our housekeepers arrive on time and clean your home to
                perfection.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Enjoy Your Clean Home</h3>
              <p>
                Return to a spotless, fresh-smelling home and provide feedback
                on your experience.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-bold text-orange-500 mb-4">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-card p-6 rounded-lg shadow-md border border-border"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="italic mb-4">
                "I've tried several cleaning services in the past, but MONKEY5
                is by far the best. Their attention to detail is impressive -
                they clean areas I didn't even think about! My home has never
                looked better."
              </p>
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/48?img=26"
                  alt="Rebecca Wilson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Rebecca Wilson</p>
                  <p className="text-sm text-muted-foreground">
                    Weekly cleaning client
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-card p-6 rounded-lg shadow-md border border-border"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="italic mb-4">
                "As a busy professional, I don't have time to keep my apartment
                clean. MONKEY5's housekeeping service has been a lifesaver.
                They're reliable, thorough, and I trust them completely in my
                home."
              </p>
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/48?img=53"
                  alt="James Thompson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">James Thompson</p>
                  <p className="text-sm text-muted-foreground">
                    Bi-weekly cleaning client
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection className="py-16 bg-background"> {/* Đổi nền thành background */}
         <div className="max-w-5xl mx-auto px-4">
           <h2 className="text-3xl font-semibold text-center text-orange-500 mb-4"> {/* Đổi màu */}
             Simple, Transparent Pricing
           </h2>
           <p className="text-center text-foreground mb-12 max-w-3xl mx-auto leading-relaxed"> {/* Đổi màu text, thêm leading */}
             Choose the cleaning plan that best fits your needs. All prices
             include equipment and cleaning supplies.
           </p>

           <div className="flex justify-center">
             {/* Pricing Card - Áp dụng style chuẩn */}
             <motion.div
               className="relative bg-card p-8 rounded-xl shadow-lg border-2 border-primary max-w-md w-full" // Đổi border-orange-500 thành border-primary, tăng max-w, giảm shadow
               whileHover={{ y: -5, scale: 1.02 }} // Giảm scale
               transition={{ type: 'spring', stiffness: 300 }}
             >
               {/* Tag "Most Popular" - Dùng màu primary */}
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                 Most Popular
               </div>
               <h3 className="text-2xl font-semibold text-center mb-4 text-card-foreground">
                 Hourly Cleaning
               </h3>
               <div className="text-center text-4xl font-bold text-primary mb-4"> {/* Đổi màu */}
                 90,000₫<span className="text-lg text-muted-foreground font-medium">/hour</span> {/* Đổi màu */}
               </div>
               <ul className="space-y-3 mb-8 text-card-foreground"> {/* Đổi màu text */}
                 <li className="flex items-center">
                   <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" /> {/* Thay SVG bằng Lucide Icon */}
                   2-5 hours of service
                 </li>
                 <li className="flex items-center">
                   <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                   Professional cleaning supplies
                 </li>
                 <li className="flex items-center">
                   <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                   Customized cleaning focus
                 </li>
                 <li className="flex items-center">
                   <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                   Trained professional cleaners
                 </li>
                 <li className="flex items-center">
                   <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                   Eco-friendly options available
                 </li>
               </ul>
               {/* Nút bấm - Dùng màu primary */}
               <motion.button
                 className="w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold py-2.5 px-4 rounded-lg" // Tăng py, dùng font-semibold
                 whileHover={{ scale: 1.03 }} // Giảm scale
                 whileTap={{ scale: 0.98 }}
                 onClick={() => setShowBookingPopup(true)} // Thêm onClick
               >
                 Book Now
               </motion.button>
             </motion.div>
           </div>

           <div className="mt-8 text-center text-muted-foreground text-sm">
             <p>
               * Minimum booking of 2 hours required. Maximum of 5 hours per session.
             </p>
             <p>
               * Additional charges may apply for deep cleaning or specialized services.
             </p>
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
                Do I need to provide cleaning supplies?
              </h3>
              <p className="text-gray-700">
                No, our housekeepers bring all necessary cleaning supplies and
                equipment. However, if you prefer specific products to be used
                in your home, you're welcome to provide them.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                How do you ensure security in my home?
              </h3>
              <p className="text-gray-700">
                All our housekeepers undergo thorough background checks and are
                fully bonded and insured. We maintain strict confidentiality
                policies, and you can request the same housekeeper for recurring
                services to build trust and familiarity.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                What if I'm not satisfied with the cleaning?
              </h3>
              <p className="text-gray-700">
                Your satisfaction is our priority. If you're not completely
                happy with any aspect of our service, contact us within 24 hours
                and we'll return to re-clean the areas in question at no
                additional cost.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                Do I need to be home during the cleaning?
              </h3>
              <p className="text-gray-700">
                It's entirely up to you. Many clients provide a key or access
                code for entry, while others prefer to be present. We can
                accommodate either preference for your convenience and peace of
                mind.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                Can I request specific cleaning tasks?
              </h3>
              <p className="text-gray-700">
                Absolutely! We encourage you to communicate any specific areas
                or items that need special attention. Our goal is to customize
                each cleaning to your unique needs and preferences.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-popover text-popover-foreground">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Enjoy a Spotless Home?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto"> {/* Tăng text size */}
            Experience the luxury of coming home to a perfectly clean space. Book your first cleaning service today and reclaim your time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Nút chính - Nổi bật hơn */}
            <motion.button
              className="bg-secondary hover:opacity-90 text-secondary-foreground font-bold py-3 px-8 rounded-lg text-lg" // Đổi rounded-full, màu chữ
              // ... animation props ...
              onClick={() => setShowBookingPopup(true)}
            >
              Book Now
            </motion.button>
            {/* Nút phụ - Dùng màu primary? Hoặc border? */}
            <Link to="/about">
              <motion.button
                className="bg-primary hover:opacity-90 text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg" // Đổi màu, rounded-full
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

export default HousekeepingServiceScreen;
