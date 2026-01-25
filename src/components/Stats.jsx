import React from 'react'
import './Stats.css'

const Stats = () => {
  const stats = [
    { label: 'Jogos dos Playoffs', value: '13', icon: '🏈' },
    { label: 'Times Competindo', value: '4', icon: '⭐' },
    { label: 'Milhões de Fãs', value: '100+', icon: '👥' },
    { label: 'Horas de Ação', value: '6+', icon: '⏱️' }
  ]

  const highlights = [
    {
      title: 'Maior Rivalidade',
      description: 'Chiefs vs Ravens - A batalha pelo domínio da AFC',
      gradient: 'linear-gradient(135deg, #ff0044, #ff6b00)'
    },
    {
      title: 'Defesa Histórica',
      description: '49ers lideram a NFL em pontos permitidos',
      gradient: 'linear-gradient(135deg, #0077ff, #00d4ff)'
    },
    {
      title: 'MVP em Campo',
      description: 'Lamar Jackson busca seu segundo título de MVP',
      gradient: 'linear-gradient(135deg, #9d00ff, #ff00ea)'
    }
  ]

  return (
    <section className="stats">
      <div className="stats-container">
        <h2 className="stats-title">Números da Temporada</h2>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="highlights">
          <h3 className="highlights-title">Destaques</h3>
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card" style={{ '--gradient': highlight.gradient }}>
                <div className="highlight-glow"></div>
                <h4 className="highlight-title">{highlight.title}</h4>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
