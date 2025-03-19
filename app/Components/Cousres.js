"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const courses = [
    { id: 1, title: "Full Stack Development", image: "/full-stack.jpg", description: "Master front-end & back-end development." },
    { id: 2, title: "Data Science & AI", image: "/data.jpg", description: "Learn machine learning, AI, and data visualization." },
    { id: 3, title: "UI/UX Design", image: "/ui-ux.jpg", description: "Design intuitive and user-friendly interfaces." },
    { id: 4, title: "Cybersecurity Fundamentals", image: "/cyber.jpg", description: "Secure networks and applications from threats." },
];

const TopCourses = () => {
    return (
        <div id="courses" className="py-12 bg-white text-center">
            {/* Section Title */}
            <div className="flex flex-col items-center box">
                {/* Decorative Line */}
                <div className="z-10 outline-purple-600 outline-offset-0 bg-gradient-radial from-gray-300 to-white justify-center items-center w-[550px] h-[9.8px] mx-auto flex relative">
                    <div className="border-4 border-purple-500 bg-purple-500 w-full"></div>
                </div>

                {/* FAQ Box */}
                <div className="relative z-10 flex items-center justify-center w-[200px] h-[65px] mx-auto border border-purple-600 rounded-[30px] bg-purple-500 -top-[35px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-row items-center justify-center w-[190px] h-[55px] border border-purple-600 bg-white rounded-[25px] gap-[20px] shadow-md transition-all duration-300 hover:shadow-lg">
                        <FaCode className="text-purple-600 text-2xl" />
                        <div className="text-[18px] leading-[30px] font-bold">Top Courses</div>
                    </div>
                </div>

            </div>
            {/* Course Grid */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6"
            >
                {courses.map((course) => (
                    <motion.div
                        key={course.id}
                        whileHover={{ scale: 1.05 }}
                        className="bg-purple-100 p-6 rounded-xl shadow-lg text-left cursor-pointer"
                    >
                        <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold text-purple-800">{course.title}</h3>
                        <p className="text-gray-600 mt-2">{course.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Explore More Button */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="mt-8"
            >
                <a
                    href="/courses"
                    className="px-6 py-3 bg-purple-700 text-white rounded-full shadow-lg text-lg font-medium hover:bg-purple-800 transition"
                >
                    Explore More Courses
                </a>
            </motion.div>
        </div>
    );
};

export default TopCourses;