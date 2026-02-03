import React, { useEffect, useRef } from 'react'
import { smoothScroll } from '../utils/smoothScroll'

const Intro = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    // FitText effect for responsive title
    const title = titleRef.current
    if (title) {
      const handleResize = () => {
        const width = window.innerWidth
        let fontSize = 84
        if (width < 960) fontSize = 42
        else if (width < 1200) fontSize = 64
        title.style.fontSize = `${fontSize}px`
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleButtonClick = (e) => {
    e.preventDefault()
    smoothScroll('#about')
  }

  return (
    <section id="intro">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h1 ref={titleRef}>Mahelet Kassa</h1>
            <p className="intro-position typewriter">
              <span>Full Stack Web Developer</span>
            </p>
            <a className="button stroke smoothscroll" href="#about" onClick={handleButtonClick}>
              Get To Know Me
            </a>
          </div>
        </div>
      </div>
      <ul className="intro-social">
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
    </section>
  )
}

export default Intro

