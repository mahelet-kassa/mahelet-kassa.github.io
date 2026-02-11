import React from 'react'

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email',
      value: 'maheletkassa1@gmail.com',
      link: 'mailto:maheletkassa1@gmail.com'
    },
    {
      icon: 'fa-brands fa-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/mahelet-kassa',
      link: 'https://www.linkedin.com/in/mahelet-kassa/'
    },
    {
      icon: 'fa-brands fa-github',
      title: 'GitHub',
      value: 'github.com/mahelet-kassa',
      link: 'https://github.com/mahelet-kassa'
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Location',
      value: 'Boston, MA',
      link: null
    }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology.
          </p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon">
                <i className={item.icon}></i>
              </div>
              <h4 className="contact-title">{item.title}</h4>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-value">
                  {item.value}
                </a>
              ) : (
                <span className="contact-value">{item.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="contact-cta">
          <p>Ready to start a project together?</p>
          <a href="mailto:maheletkassa1@gmail.com" className="btn btn-primary btn-large">
            <i className="fa-solid fa-paper-plane"></i> Send Me a Message
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
