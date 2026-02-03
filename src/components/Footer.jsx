import React from 'react'
import { smoothScroll } from '../utils/smoothScroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleBackToTop = (e) => {
    e.preventDefault()
    smoothScroll('#top')
  }

  return (
    <footer>
      <div className="row">
        <div className="col-six tab-full pull-right social">
          <ul className="footer-social">
            <li>
              <a href="https://github.com/mahelet-kassa" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mahelet-kassa/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-six tab-full">
          <div className="copyright">
            <span>Mahelet Kassa {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

