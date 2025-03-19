"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Use Next.js router

  return (
    <nav className="fixed  left-1/2 transform -translate-x-1/2 w-[50%] bg-white shadow-lg py-4 mb-10 ml-20 px-8 flex justify-center items-center rounded-2xl z-50">
      <Link href="/">
        <span className="text-2xl font-bold text-purple-700 mr-5 flex items-center">
          IntelliLearn
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6 font-semibold">
        <li>
          <Link href="/" className="hover:text-purple-500">
            Home
          </Link>
        </li>
        <li>
          <a href="#about" className="hover:text-purple-500">
            About Us
          </a>
        </li>{" "}
        {/* Updated Link */}
        <li>
          <a href="#courses" className="hover:text-purple-500">
            Courses
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-purple-500">
            Features
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-purple-500">
            FAQ
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple-500">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-purple-700 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[80%] bg-white shadow-md flex flex-col items-center space-y-4 py-4 rounded-2xl lg:hidden">
          <li>
            <Link href="/" className="hover:text-purple-500">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-500">
              About Us
            </a>
          </li>{" "}
          {/* Updated Link */}
          <li>
            <Link href="/courses" className="hover:text-purple-500">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-purple-500">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-purple-500">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700"
            >
              Get Started
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
