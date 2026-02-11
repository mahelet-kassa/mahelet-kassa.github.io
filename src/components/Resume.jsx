import React from 'react'

const Resume = () => {
  const experience = [
    {
      title: 'Full Stack Software Engineer',
      company: 'Professional Experience',
      period: 'Present',
      description: 'Developing and maintaining full-stack web applications using React, Angular, Java, Spring Boot, and AWS. Building RESTful APIs, implementing microservices architecture, and deploying cloud-based solutions.',
      skills: ['React', 'Java', 'Spring Boot', 'AWS', 'PostgreSQL']
    },
    {
      title: 'Software Developer',
      company: 'Web Development',
      period: 'Previous',
      description: 'Created responsive web applications using JavaScript, TypeScript, React, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      skills: ['JavaScript', 'TypeScript', 'Node.js', 'MongoDB']
    }
  ]

  const education = [
    {
      degree: "Bachelor's Degree",
      field: 'Computer Science & Business Administration',
      description: 'Comprehensive program combining technical computer science fundamentals with business administration principles.'
    }
  ]

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <div className="section-header">
          <span className="section-label">Resume</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey and qualifications</p>
        </div>

        <div className="resume-grid">
          {/* Experience Column */}
          <div className="resume-column">
            <h3 className="column-title">
              <i className="fa-solid fa-briefcase"></i> Work Experience
            </h3>
            <div className="timeline">
              {experience.map((job, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{job.period}</span>
                    <h4 className="timeline-title">{job.title}</h4>
                    <span className="timeline-company">{job.company}</span>
                    <p className="timeline-description">{job.description}</p>
                    <div className="timeline-skills">
                      {job.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="resume-column">
            <h3 className="column-title">
              <i className="fa-solid fa-graduation-cap"></i> Education
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <span className="timeline-company">{edu.field}</span>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="column-title" style={{ marginTop: '4rem' }}>
              <i className="fa-solid fa-certificate"></i> Certifications
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4 className="timeline-title">Continuous Learning</h4>
                  <span className="timeline-company">Professional Development</span>
                  <p className="timeline-description">
                    Actively expanding skills in AI/ML, cloud technologies, and modern development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-download">
          <a href="/MAHELET KASSA.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
            <i className="fa-solid fa-download"></i> Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
