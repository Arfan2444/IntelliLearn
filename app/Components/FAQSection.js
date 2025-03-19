"use client"
import { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const faqs = [
    {
        question: "What services does Skill Shoot offer?",
        answer: "Skill Shoot offers professional photography, videography, and editing services tailored to clients' needs.",
    },
    {
        question: "What makes Arise different from other agencies?",
        answer: "Arise provides a unique blend of creativity and technology to deliver unmatched marketing solutions.",
    },
    {
        question: "What is your pricing structure like?",
        answer: "Our pricing varies based on services and project requirements. Contact us for a detailed quote.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="faq" className="max-w-2xl mx-auto my-10">
            {/* Header */}
            <div className="flex flex-col items-center box">
                <div className="flex flex-col items-center box">
                    {/* Decorative Line */}
                    <div className="z-10 outline-purple-600 outline-offset-0 bg-gradient-radial from-gray-300 to-white justify-center items-center w-[550px] h-[9.8px] mx-auto flex relative">
                        <div className="border-4 border-purple-500 bg-purple-500 w-full"></div>
                    </div>

                    {/* FAQ Box */}
                    <div className="relative z-10 flex items-center justify-center w-[200px] h-[65px] mx-auto border border-purple-600 rounded-[30px] bg-purple-500 -top-[35px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-row items-center justify-center w-[190px] h-[55px] border border-purple-600 bg-white rounded-[25px] gap-[20px] shadow-md transition-all duration-300 hover:shadow-lg">
                            <FaQuestionCircle className="text-purple-600 text-2xl" />
                            <div className="text-[18px] leading-[30px] font-bold">FAQ</div>
                        </div>
                    </div>

                </div>


                <h2 className="mt-4 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>

            {/* FAQ Items */}
            <div className="mt-6 space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg shadow-md">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full p-4 text-left font-medium"
                        >
                            {faq.question}
                            {openIndex === index ? <FaMinus className="text-gray-700" /> : <FaPlus className="text-gray-700" />}
                        </button>
                        {openIndex === index && (
                            <div className="p-4 text-gray-600 border-t border-gray-200">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div >
    );
};

export default FAQSection;
