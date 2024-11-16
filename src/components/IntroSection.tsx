import React, { useState, useEffect } from "react";
import "./IntroSection.css";
import profileImage from "../assets/profilePhoto2024.jpg";

const IntroSection: React.FC = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Show navbar after 2 seconds
    const navbarTimer = setTimeout(() => setShowNavbar(true), 2000);
    // Show About Me box after bullet points fade in (e.g., 3.5 seconds)
    const aboutMeTimer = setTimeout(() => setShowAboutMe(true), 4500);
    return () => {
      clearTimeout(navbarTimer);
      clearTimeout(aboutMeTimer);
    };
  }, []);

  return (
    <div className="intro-section">
      {/* Image Section */}
      <img src={profileImage} alt="Emily Ng" className="intro-image" />
      <h1 className="intro-text">Emily Ng</h1>
      <p className="intro-subtext">
        MS in CS • El Pomar Scholar • CodePath Student • Dynamic Learner
      </p>

      {/* Side Navbar */}
      <div className={`side-navbar ${showNavbar ? "show" : ""}`}>
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* About Me Box */}
      <div className={`about-box ${showAboutMe ? "show" : ""}`}>
        <p>
          Hi There, and Welcome to my website portfolio! My name is Emily Ng,
          and I am a Masters of Science in Computer Science student at the
          University of Colorado and Associate Software Engineer at Northrop
          Grumman graduating May 2025 with a 4.0 GPA. Here, I have detailed
          access to my favorite personal projects, and some fun tools and games
          that tell you a little bit about me and what I can bring to your
          company. Feel free to click around!
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
