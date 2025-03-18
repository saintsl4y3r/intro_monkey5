import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import googlePlayIcon from "../assets/google-play.svg"; // You'll need to add this image
import mobileAppImage from "../assets/mobile-app.png"; // You'll need to add this image

function AppDownloadCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Get the MONKEY5 App</h2>
            <p className="mb-6">
              Download our Android mobile app for a seamless booking experience.
              Manage your appointments, track your service provider's arrival,
              and pay securely - all from your smartphone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
              >
                Download Now
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
              >
                Learn More
              </motion.button>
            </div>
          </div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={mobileAppImage}
              alt="MONKEY5 Mobile App"
              className="max-w-xs w-full"
            />
          </motion.div>
        </div>
      </section>

      <AppDownloadPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

// App Download Popup Component
function AppDownloadPopup({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  Download Our App
                </h3>
                <button
                  className="text-gray-500 hover:text-gray-700 text-xl"
                  onClick={onClose}
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Get the full MONKEY5 experience by downloading our Android app.
                Book services, track your provider's arrival, and manage
                payments - all in one place.
              </p>

              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                  <img
                    src={googlePlayIcon}
                    alt="Google Play"
                    className="w-10 h-10"
                  />
                  <div>
                    <p className="text-sm text-gray-500">Get it on</p>
                    <p className="font-bold">Google Play</p>
                  </div>
                  <motion.button
                    className="ml-auto bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-bold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download
                  </motion.button>
                </div>
              </div>

              <div className="text-center text-gray-500 text-sm">
                <p>
                  Don't have an Android device? You can still book our services
                  through our website.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default AppDownloadCTA;
export { AppDownloadPopup };
