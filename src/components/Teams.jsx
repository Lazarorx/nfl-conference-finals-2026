import React from 'react'
import './Teams.css'

const Teams = () => {
  const teams = [
    {
      name: 'San Francisco 49ers',
      logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png',
      color: '#AA0000',
      conference: 'NFC',
      record: '12-5',
      keyPlayers: ['Brock Purdy', 'Christian McCaffrey', 'Nick Bosa'],
      stadium: 'Levi\'s Stadium',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80'
    },
    {
      name: 'Philadelphia Eagles',
      logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png',
      color: '#004C54',
      conference: 'NFC',
      record: '11-6',
      keyPlayers: ['Jalen Hurts', 'A.J. Brown', 'Lane Johnson'],
      stadium: 'Lincoln Financial Field',
      image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&q=80'
    },
    {
      name: 'Kansas City Chiefs',
      logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png',
      color: '#E31837',
      conference: 'AFC',
      record: '14-3',
      keyPlayers: ['Patrick Mahomes', 'Travis Kelce', 'Chris Jones'],
      stadium: 'Arrowhead Stadium',
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80'
    },
    {
      name: 'Baltimore Ravens',
      logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png',
      color: '#241773',
      conference: 'AFC',
      record: '13-4',
      keyPlayers: ['Lamar Jackson', 'Mark Andrews', 'Roquan Smith'],
      stadium: 'M&T Bank Stadium',
      image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&q=80'
    }
  ]

  return (
    <section className="teams">
      <div className="teams-container">
        <div className="section-header">
          <h2 className="section-title">Times Classificados</h2>
          <p className="section-subtitle">Os melhores da temporada 2025-2026</p>
        </div>

        <div className="teams-grid">
          {teams.map((team, index) => (
            <div key={index} className="team-card" style={{ '--team-color': team.color }}>
              <div className="team-image-container">
                <img src={team.image} alt={team.name} className="team-image" />
                <div className="team-overlay"></div>
                <div className="team-badge">
                  <img src={team.logo} alt={team.name} className="team-badge-logo" />
                </div>
              </div>

              <div className="team-content">
                <div className="team-header">
                  <h3 className="team-title">{team.name}</h3>
                  <span className="team-conference">{team.conference}</span>
                </div>

                <div className="team-stats">
                  <div className="stat">
                    <span className="stat-label">Recorde</span>
                    <span className="stat-value">{team.record}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Estádio</span>
                    <span className="stat-value">{team.stadium}</span>
                  </div>
                </div>

                <div className="key-players">
                  <h4 className="players-title">Jogadores Chave</h4>
                  <div className="players-list">
                    {team.keyPlayers.map((player, i) => (
                      <span key={i} className="player-tag">{player}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teams
