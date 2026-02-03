import { useState, useEffect } from 'react'

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('#main-nav-wrap a')

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { activeSection }
}

