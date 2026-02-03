import React from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import BackToTop from './components/BackToTop'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const { activeSection } = useActiveSection()

  return (
    <div id="top">
      <Preloader />
      <Header activeSection={activeSection} />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App

