import React from "react";
import "./HeroSection.css";

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Efficient Project Management, Simplified</h1>
                <p className="hero-subtitle">
                    Manage projects, track tasks, and collaborate effortlessly, all in one place.
                </p>
                <button className="hero-cta">Get Started</button>
            </div>
        </section>
    );
}

export default HeroSection;