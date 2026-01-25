import React from 'react'
import './Games.css'

const Games = () => {
  const games = [
    {
      conference: 'NFC',
      team1: { 
        name: 'San Francisco 49ers', 
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png',
        seed: 1,
        record: '12-5',
        color: '#AA0000'
      },
      team2: { 
        name: 'Philadelphia Eagles', 
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png',
        seed: 2,
        record: '11-6',
        color: '#004C54'
      },
      time: '15:00 ET',
      stadium: 'Levi\'s Stadium',
      city: 'Santa Clara, CA'
    },
    {
      conference: 'AFC',
      team1: { 
        name: 'Kansas City Chiefs', 
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png',
        seed: 1,
        record: '14-3',
        color: '#E31837'
      },
      team2: { 
        name: 'Baltimore Ravens', 
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png',
        seed: 2,
        record: '13-4',
        color: '#241773'
      },
      time: '18:30 ET',
      stadium: 'Arrowhead Stadium',
      city: 'Kansas City, MO'
    }
  ]

  return (
    <section className="games">
      <div className="games-container">
        <div className="section-header">
          <h2 className="section-title">Jogos de Hoje</h2>
          <p className="section-subtitle">Finais de Conferência - Domingo, 26 de Janeiro</p>
        </div>

        <div className="games-grid">
          {games.map((game, index) => (
            <div key={index} className="game-card">
              <div className="game-conference">
                <span className="conference-badge">{game.conference}</span>
                <span className="game-time">⏰ {game.time}</span>
              </div>

              <div className="matchup">
                <div className="team" style={{ '--team-color': game.team1.color }}>
                  <div className="team-logo">
                    <img src={game.team1.logo} alt={game.team1.name} />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{game.team1.name}</h3>
                    <div className="team-meta">
                      <span className="team-seed">#{game.team1.seed} Seed</span>
                      <span className="team-record">{game.team1.record}</span>
                    </div>
                  </div>
                </div>

                <div className="vs-divider">
                  <span className="vs-text">VS</span>
                  <div className="divider-line"></div>
                </div>

                <div className="team" style={{ '--team-color': game.team2.color }}>
                  <div className="team-logo">
                    <img src={game.team2.logo} alt={game.team2.name} />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{game.team2.name}</h3>
                    <div className="team-meta">
                      <span className="team-seed">#{game.team2.seed} Seed</span>
                      <span className="team-record">{game.team2.record}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="game-footer">
                <div className="stadium-info">
                  <span className="stadium">📍 {game.stadium}</span>
                  <span className="city">{game.city}</span>
                </div>
                <button className="watch-button">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3 2L13 8L3 14V2Z"/>
                  </svg>
                  Assistir Ao Vivo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Games
