import React, { useState } from 'react'
import PortfolioModal from './PortfolioModal'
import { portfolioItems } from '../data/portfolioData'

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (modalId) => {
    setActiveModal(modalId)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of my recent work and personal projects</p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-card">
              <div className="card-image">
                <img src={`/${item.image}`} alt={item.alt} loading="lazy" />
                <div className="card-overlay">
                  <button 
                    className="view-btn"
                    onClick={() => openModal(item.id)}
                  >
                    <i className="fa-solid fa-eye"></i> View Details
                  </button>
                </div>
              </div>
              <div className="card-content">
                <span className="card-category">{item.category}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">
                  {item.description.substring(0, 100)}...
                </p>
                <div className="card-links">
                  {item.liveUrl && (
                    <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="card-link">
                      <i className="fa-solid fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                  {item.githubUrl && (
                    <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="card-link">
                      <i className="fa-brands fa-github"></i> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {portfolioItems.map((item) => (
        <PortfolioModal
          key={item.id}
          item={item}
          isOpen={activeModal === item.id}
          onClose={closeModal}
        />
      ))}
    </section>
  )
}

export default Portfolio
