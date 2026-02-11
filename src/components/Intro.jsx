import React from 'react'
import { smoothScroll } from '../utils/smoothScroll'

const Intro = () => {
  const handleButtonClick = (e) => {
    e.preventDefault()
    smoothScroll('#about')
  }

  return (
    <section id="intro" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-name">Mahelet Kassa</h1>
          <h2 className="hero-title">Full Stack Software Engineer</h2>
          <p className="hero-description">
            Building modern, scalable web applications with React, Java, Spring Boot & AWS
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#about" onClick={handleButtonClick}>
              About Me
            </a>
            <a className="btn btn-outline" href="#portfolio" onClick={(e) => { e.preventDefault(); smoothScroll('#portfolio') }}>
              View My Work
            </a>
          </div>
        </div>
        <div className="hero-social">
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
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Intro
