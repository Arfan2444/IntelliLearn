import ContactPage from "@/app/Components/Contact";
import TopCourses from "@/app/Components/Cousres";
import FAQSection from "@/app/Components/FAQSection";
import Features from "@/app/Components/Features";
import Footer from "@/app/Components/Footer";
import Hero from "@/app/Components/Hero";
import Navbar from "@/app/Components/Navbar";
import Testimonials from "@/app/Components/Testimonials";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <StatsSection /> */}
      <Features />
      <TopCourses />
      <Testimonials />
      <FAQSection />
      <ContactPage />
      <Footer />
    </div>
  );
}
