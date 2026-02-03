import React from 'react'

const Resume = () => {
  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Resume</h5>
          <h1>More of my credentials.</h1>
          <p className="lead">
            A Full Stack Software Engineer with expertise in building scalable web applications 
            and cloud solutions.
          </p>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Work Experience</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="timeline-header">
                <h3>Full Stack Software Engineer</h3>
                <p>Software Development</p>
              </div>
              <div className="timeline-content">
                <h4>Professional Experience</h4>
                <p>
                  Developing and maintaining full-stack web applications using modern technologies 
                  including React, Angular, Java, Spring Boot, and AWS. Building RESTful APIs, 
                  implementing microservices architecture, and deploying cloud-based solutions.
                </p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="timeline-header">
                <h3>Software Developer</h3>
                <p>Web Development</p>
              </div>
              <div className="timeline-content">
                <h4>Development Experience</h4>
                <p>
                  Created responsive web applications using JavaScript, TypeScript, React, and Node.js. 
                  Collaborated with cross-functional teams to deliver high-quality software solutions 
                  that meet business requirements and enhance user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Education</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>Bachelor's Degree</h3>
                <p>Computer Science & Business Administration</p>
              </div>
              <div className="timeline-content">
                <h4>University Education</h4>
                <p>
                  Completed a comprehensive program combining technical computer science 
                  fundamentals with business administration principles. Developed strong 
                  analytical skills and understanding of both software development and 
                  business operations.
                </p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>Certifications & Continuing Education</h3>
                <p>Professional Development</p>
              </div>
              <div className="timeline-content">
                <h4>Ongoing Learning</h4>
                <p>
                  Continuously expanding skills in AI and machine learning, cloud technologies, 
                  and modern software development practices. Committed to staying current with 
                  industry trends and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row button-section">
        <div className="col-twelve">
          <a
            href="Mahelet_Kassa_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Resume"
            className="button button-primary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
