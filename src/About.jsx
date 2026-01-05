import React from 'react';
// 1. Import the image correctly
import groupPhoto from './assets/slide3.jpg'; 

const About = () => {
  return (
    <div className="about-page">
      {/* ===== ABOUT HERO ===== */}
      <section className="about-hero">
        <h1>CAMSTUDENT TDTU</h1>
        <p>Connecting Cambodian Students at Ton Duc Thang University</p>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <div className="about-container">
        <section className="about-content">
          <div className="about-text">
            <h2>Who We Are?</h2>
            <p>
              CAMSTUDENT TDTU is a community dedicated to supporting Cambodian students 
              pursuing their academic dreams at Ton Duc Thang University. We strive to 
              create a "home away from home" environment.
            </p>
          </div>

          <div className="about-image-placeholder">
            {/* 2. Use the imported variable name here */}
            <img src={groupPhoto} alt="Group" className="about-img" /> 
          </div>

          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to foster cultural exchange, provide academic guidance, 
              and organize activities that strengthen the bond between students.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;