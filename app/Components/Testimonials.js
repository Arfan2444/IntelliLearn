"use client";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
    {
        name: "Yadav",
        role: "Founder at Skill Shoot",
        image: "/boy1.png",
        rating: 3,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        name: "Priya Sharma",
        role: "UI/UX Designer",
        image: "/girl.png",
        rating: 5,
        text: "Great experience! The platform is user-friendly and well-structured.",
    },
    {
        name: "Rahul Verma",
        role: "Full Stack Developer",
        image: "/boy2.png",
        rating: 4,
        text: "This is an amazing platform to learn and grow. Highly recommended!",
    },
];

const TestimonialSlider = () => {
    return (
        <section className="w-full py-16 bg-white">
            {/* Section Marker */}
            <div className="text-center mb-10">
                <div className="z-10 outline-purple-600 outline-offset-0 bg-gradient-radial from-gray-300 to-white justify-center items-center w-[550px] h-[9.8px] mx-auto flex relative">
                    <div className="border-4 border-purple-500 bg-purple-500 w-full"></div>
                </div>

                {/* FAQ Box */}
                <div className="relative z-10 flex items-center justify-center w-[200px] h-[65px] mx-auto border border-purple-600 rounded-[30px] bg-purple-500 -top-[35px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-row items-center justify-center w-[190px] h-[55px] border border-purple-600 bg-white rounded-[25px] gap-[20px] shadow-md transition-all duration-300 hover:shadow-lg">
                        <FaQuoteLeft className="text-purple-600 text-2xl" />
                        <div className="text-[18px] leading-[30px] font-bold">Testimonials</div>
                    </div>
                </div>
            </div>

            <div
                className="relative w-full max-w-3xl mx-auto rounded-3xl shadow-lg p-10 text-center overflow-hidden h-[500px] bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/testimonial.png')" }}
            >
                {/* Testimonial Header */}
                <div className="relative z-10 mb-6">
                    <h2 className="text-3xl font-bold text-black">What Our Clients Say</h2>
                    <p className="text-lg text-gray-700 mt-2">Best testimonials from our customers</p>
                </div>

                {/* Swiper Testimonial Slider */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: ".swiper-pagination" }}
                    className="relative z-10"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative z-10">
                                {/* Star Rating */}
                                <div className="flex justify-center gap-2 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar
                                            key={star}
                                            className={`text-2xl ${star <= testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-lg text-black font-bold">{testimonial.text}</p>

                                {/* User Info */}
                                <div className="flex flex-col items-center mt-6">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={200}
                                        height={200}
                                        className="rounded-full border-2 border-white shadow-lg"
                                    />
                                    <h3 className="mt-2 text-lg font-semibold text-black">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination Dots at Bottom */}
                <div className="swiper-pagination relative bottom-[-30px]"></div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
