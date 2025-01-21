import React from "react";
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import KeyFeatures from "../components/landing/KeyFeatures";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";
import ContactForm from "../components/landing/ContactForm";
import Footer from "../components/landing/Footer";

function LandingPage() {
    console.log("LandingPage component is rendering");

    return (
        <div className="landing-page">
            <HeroSection />
            <HowItWorks />
            <KeyFeatures />
            <Testimonials />
            <Pricing />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default LandingPage;
