import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-text">🏈 PLAYOFFS 2026</span>
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">CONFERENCE</span>
          <span className="title-line championship">CHAMPIONSHIP</span>
          <span className="title-line">SUNDAY</span>
        </h1>
        
        <p className="hero-subtitle">
          A batalha final pelo Super Bowl começa aqui
        </p>
        
        <div className="hero-cta">
          <button className="cta-button primary">
            <span>Ver Jogos</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="cta-button secondary">
            Estatísticas
          </button>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Role para baixo</span>
      </div>
    </section>
  )
}

export default Hero
