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
    <section id="portfolio">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Portfolio</h5>
          <p>Click on "Launch Project" link to view the live site</p>
        </div>
      </div>

      <div className="row portfolio-content">
        <div className="col-twelve">
          <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
            {portfolioItems.map((item) => (
              <div key={item.id} className="bgrid folio-item">
                <div className="item-wrap">
                  <img src={`/${item.image}`} alt={item.alt} loading="lazy" />
                  <a
                    href={`#${item.id}`}
                    className="overlay"
                    onClick={(e) => {
                      e.preventDefault()
                      openModal(item.id)
                    }}
                  >
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">{item.title}</h3>
                        <span className="folio-types">{item.category}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
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

