import ContactPage from "./Contact";
import TopCourses from "./Cousres";
import FAQSection from "./FAQSection";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

import Testimonials from "./Testimonials";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <TopCourses />
      <Testimonials />
      <FAQSection />
      <ContactPage />
      <Footer />
    </div>
  );
}
