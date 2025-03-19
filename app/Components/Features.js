"use client";
import { motion } from "framer-motion";
import {
    FaStar,
    FaUsers,
    FaAward,
    FaClock,
    FaGlobe,
    FaWifi,
    FaBookOpen
} from "react-icons/fa";

export default function Features() {
    const features = [
        { icon: <FaStar />, title: "Expert Team", description: "Lorem ipsum dolor sit ame, consectetur adipiscing elit." },
        { icon: <FaUsers />, title: "Client Approach", description: "Lorem ipsum dolor sit ame, consectetur adipiscing elit." },
        { icon: <FaAward />, title: "Proven Experience", description: "Lorem ipsum dolor sit ame, consectetur adipiscing elit." },
        { icon: <FaClock />, title: "Timely Delivery", description: "Lorem ipsum dolor sit ame, consectetur adipiscing elit." },
        { icon: <FaGlobe />, title: "Responsive Solutions", description: "Lorem ipsum dolor sit ame, consectetur adipiscing elit." },
        { icon: <FaWifi />, title: "Communication", description: "Lorem ipsum dolor sit ame, consectetur adipiscing elit." },
    ];

    return (
        <section id="features" className="py-20 text-center">
            {/* Heading Animation */}
            <motion.h2
                className="text-4xl font-bold text-purple-700 mb-8"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="z-10 outline-purple-600 outline-offset-0 bg-gradient-radial from-gray-300 to-white justify-center items-center w-[550px] h-[9.8px] mx-auto flex relative">
                    <div className="border-4 border-purple-500 bg-purple-500 w-full"></div>
                </div>

                {/* FAQ Box */}
                <div className="relative z-10 flex items-center justify-center w-[200px] h-[65px] mx-auto border border-purple-600 rounded-[30px] bg-purple-500 -top-[35px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-row items-center justify-center w-[190px] h-[55px] border border-purple-600 bg-white rounded-[25px] gap-[20px] shadow-md transition-all duration-300 hover:shadow-lg">
                        <FaBookOpen className="text-purple-600 text-3xl" />
                        <div className="text-[18px] leading-[30px] font-bold">Features</div>
                    </div>
                </div>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-gray-100 p-6 shadow-lg rounded-xl flex flex-col items-center text-center transition-transform transform hover:scale-105 border border-gray-200"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Floating Icon */}
                        <div className="absolute -top-5 left-6 bg-purple-600 text-white p-3 rounded-full shadow-md">
                            {feature.icon}
                        </div>

                        <h3 className="text-xl font-semibold mt-6">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}