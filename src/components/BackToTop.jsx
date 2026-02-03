import React, { useState, useEffect } from 'react'
import { smoothScroll } from '../utils/smoothScroll'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY >= 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    smoothScroll('#top')
  }

  return (
    <div id="go-top" style={{ display: isVisible ? 'block' : 'none' }}>
      <a className="smoothscroll" title="Back to Top" href="#top" onClick={handleClick}>
        <i className="fa fa-long-arrow-up"></i>
      </a>
    </div>
  )
}

export default BackToTop

