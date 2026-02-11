import React from 'react'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Get To Know Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="images/Mahi-profile.jpg" alt="Mahelet Kassa - Full Stack Software Engineer" loading="lazy" />
            </div>
            <div className="image-decoration"></div>
          </div>

          <div className="about-text">
            <h3>Full Stack Software Engineer based in Boston</h3>
            <p>
              I'm a Full Stack Software Engineer with a Bachelor's in Computer Science and 
              Business Administration. I combine strong technical expertise with a deep understanding
              of business operations to build software solutions that are both effective and aligned
              with organizational goals.
            </p>
            <p>
              I'm currently expanding my skills in AI and machine learning as part of my ongoing 
              learning journey. My goal is to create applications that enhance company productivity, 
              efficiency, and social impact.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">Boston, MA</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Experience</span>
                <span className="detail-value">Full Stack Development</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Education</span>
                <span className="detail-value">B.S. Computer Science & Business</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Interests</span>
                <span className="detail-value">AI/ML, Cloud, Startups</span>
              </div>
            </div>

            <div className="about-buttons">
              <a href="/MAHELET KASSA.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fa-solid fa-download"></i> Download Resume
              </a>
              <a href="mailto:maheletkassa1@gmail.com" className="btn btn-outline">
                <i className="fa-solid fa-envelope"></i> Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
