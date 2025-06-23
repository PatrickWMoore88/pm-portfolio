import React from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>DigitalCrafts</h3>
          <span>Certificate Program — 2019–2020</span>
          <p>Focused on Software Engineering/Web Development, UI/UX Principles, and Data-Driven Application Design.</p>
        </div>
        <div className="education-item">
          <h3>My Computer Career</h3>
          <span>IT Certification — 2015–2015</span>
          <p>Focused on IT Administration, IT Priinciples, and Indstury-Recognized Certifications.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;