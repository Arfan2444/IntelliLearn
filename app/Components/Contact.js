"use client";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-white px-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Contact Header */}
      <div className="flex flex-col items-center box">
        {/* Decorative Line */}
        <div className="z-10 outline-purple-600 outline-offset-0 bg-gradient-radial from-gray-300 to-white justify-center items-center w-[550px] h-[9.8px] mx-auto flex relative">
          <div className="border-4 border-purple-500 bg-purple-500 w-full"></div>
        </div>

        {/* FAQ Box */}
        <div className="relative z-10 flex items-center justify-center w-[200px] h-[65px] mx-auto border border-purple-600 rounded-[30px] bg-purple-500 -top-[35px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex flex-row items-center justify-center w-[190px] h-[55px] border border-purple-600 bg-white rounded-[25px] gap-[20px] shadow-md transition-all duration-300 hover:shadow-lg">
            <FaPhone className="text-purple-600 text-2xl rotate-y-180" />
            <div className="text-[18px] leading-[30px] font-bold">
              Contact Us
            </div>
          </div>
        </div>
      </div>

      {/* Support Text */}
      <motion.h2
        className="mt-6 text-3xl font-bold text-gray-900 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        We Are Here to Support You
      </motion.h2>
      <motion.p
        className="mt-2 text-lg text-gray-600 text-center max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Customer support is our highest priority. We’re here to answer all your
        questions via our 24/7 Live Chat.
      </motion.p>

      {/* Contact Form */}
      <motion.div
        className="mt-6 w-full max-w-2xl bg-gray-50 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <form>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Name Input */}
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col w-full">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="mt-4">
            <label className="text-gray-700 font-medium">Message</label>
            <textarea
              placeholder="Enter your message"
              rows="4"
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Send Your Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
