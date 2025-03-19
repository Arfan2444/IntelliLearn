"use client";
import Image from "next/image";
import { FaArrowRight, FaUser } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-6 lg:px-16 py-20 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-image.jpg')" }}>
            <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat bg-opacity-50"></div>

            <div className="relative z-10">
                <h1 className="text-7xl md:text-7xl font-bold text-gray-900 p-36">
                    There's Always More to Discover and Learn
                </h1>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in arcu id
                    sem pulvinar accumsan. Pellentesque interdum arcu ex.
                </p>
                <div className="flex justify-center">
                    <button className="mt-6 flex justify-center items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition">
                        ENROLL NOW <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* 🔹 About Section with ID for Scrolling */}
            <div id="about" className="relative z-10 mt-16 flex flex-col md:flex-row items-center max-w-5xl w-full">
                <div className="w-full md:w-1/2">
                    <Image
                        src="/about.png"
                        alt="About Us"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-left">
                    <div className="flex items-center gap-2 bg-white border border-purple-300 px-3 py-2 rounded-full w-max text-purple-600 font-medium shadow-md">
                        <FaUser />
                        About Us
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-gray-900">
                        Discover Who We Are and Our Mission
                    </h2>
                    <p className="mt-2 text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="mt-4 flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition">
                        Book Call <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
