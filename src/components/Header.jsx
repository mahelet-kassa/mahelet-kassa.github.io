import React, { useState } from 'react'
import { smoothScroll } from '../utils/smoothScroll'

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'intro', label: 'Home', href: '#intro' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Technical Skills', href: '#skills' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'resume', label: 'Resume', href: '#resume' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    smoothScroll(href)
    setIsMenuOpen(false)
  }

  const toggleMenu = (e) => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <div className="row">
        <div className="top-bar">
          <a className={`menu-toggle ${isMenuOpen ? 'is-clicked' : ''}`} href="#" onClick={toggleMenu}>
            <span>Menu</span>
          </a>

          <div className="logo">
            <a href="https://maheletkassa.com/">Mahelet</a>
          </div>

          <nav id="main-nav-wrap" style={{ display: isMenuOpen ? 'block' : 'none' }}>
            <ul className="main-navigation">
              {navItems.map((item) => (
                <li key={item.id} className={activeSection === item.id ? 'current' : ''}>
                  <a
                    className="smoothscroll"
                    href={item.href}
                    title={item.label}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

