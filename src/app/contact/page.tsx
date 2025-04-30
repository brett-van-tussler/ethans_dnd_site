'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-4xl sm:text-6xl font-cinzel font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-red-600"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        Contact
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={{ ...fadeIn.transition, delay: 0.1 }}
      >
        <div className="bg-gray-800/50 rounded-lg p-8 flex justify-center">
          <iframe
            src="https://calendly.com/bretttvantassel"
            style={{ border: 0 }}
            width="100%"
            height="700"
            className="rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div 
          className="bg-gray-800/50 rounded-lg p-8"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-3xl text-red-600" />
            <div>
              <h2 className="text-xl font-cinzel font-bold text-red-500">Email</h2>
              <a href="mailto:ethan.taylor102@gmail.com" className="text-gray-300 hover:text-red-400 transition-colors">
                ethan.taylor102@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-gray-800/50 rounded-lg p-8"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
        >
          <div className="flex items-center space-x-4">
            <FaPhone className="text-3xl text-red-600" />
            <div>
              <h2 className="text-xl font-cinzel font-bold text-red-500">Phone</h2>
              <a href="tel:+15124349084" className="text-gray-300 hover:text-red-400 transition-colors">
                (512) 434-9084
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-gray-800/50 rounded-lg p-8"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-3xl text-red-600" />
            <div>
              <h2 className="text-xl font-cinzel font-bold text-red-500">Location</h2>
              <a href="https://www.google.com/maps?q=Flagstaff,Arizona,USA" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-400 transition-colors">
                Flagstaff, Arizona, USA
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}