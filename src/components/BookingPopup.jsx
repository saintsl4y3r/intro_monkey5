import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppDownloadPopup } from "./AppDownloadCTA";

function BookingPopup({ isOpen, onClose, service }) {
  const [showAppDownload, setShowAppDownload] = useState(false);

  const handleBookNow = () => {
    setShowAppDownload(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
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
                  Book {service || "Service"}
                </h3>
                <button
                  className="text-gray-500 hover:text-gray-700 text-xl"
                  onClick={onClose}
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                For the best booking experience, we recommend using our mobile
                app. Would you like to:
              </p>

              <div className="flex flex-col gap-4 mb-6">
                <motion.button
                  className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-bold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBookNow}
                >
                  Download Our App
                </motion.button>

                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-bold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue on Website
                </motion.button>
              </div>

              <div className="text-center text-gray-500 text-sm">
                <p>
                  Our app offers exclusive features like real-time tracking,
                  instant notifications, and easy rescheduling.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AppDownloadPopup
        isOpen={showAppDownload}
        onClose={() => setShowAppDownload(false)}
      />
    </>
  );
}

export default BookingPopup;
