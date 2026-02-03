import React, { useEffect } from 'react'

const PortfolioModal = ({ item, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      id={item.id}
      className={`popup-modal slider mfp-fade ${isOpen ? 'mfp-ready' : 'mfp-hide'}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10000,
        display: isOpen ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        className="popup-modal-content"
        style={{
          backgroundColor: '#fff',
          padding: '40px',
          maxWidth: '600px',
          width: '90%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="description-box">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          {item.technologies && (
            <div>
              <h5>Technologies used:</h5>
              <ul>
                {item.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="categories">{item.category}</div>
        </div>
        <div className="link-box">
          {item.liveUrl && (
            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
              Launch Project
            </a>
          )}
          {item.githubUrl && (
            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          )}
          <a href="#" className="popup-modal-dismiss" onClick={(e) => { e.preventDefault(); onClose(); }}>
            Close
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioModal

