import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Mahelet Kassa</h3>
            <p>Full Stack Software Engineer</p>
          </div>

          <div className="footer-social">
            <a href="https://github.com/mahelet-kassa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mahelet-kassa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:maheletkassa1@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mahelet Kassa. All rights reserved.</p>
          <p className="footer-note">Built with React & Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
