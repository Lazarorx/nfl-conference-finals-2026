import React, { useState, useEffect } from 'react'
import ParallaxCard from './ParallaxCard'
import './EpicHero.css'

const EpicHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const gameDate = new Date('2026-01-26T18:00:00')
    const difference = gameDate - new Date()
    
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return { hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(timer)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const games = [
    {
      conference: 'AFC',
      time: '3:00 PM ET',
      location: 'Empower Field at Mile High, Denver',
      team1: {
        name: 'New England Patriots',
        city: 'NEW ENGLAND',
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png',
        color: '#002244',
        accentColor: '#C60C30',
        player: {
          name: 'Drake Maye',
          position: 'QB',
          number: '10',
          stats: '4,394 YDS | 31 TD | 113.5 RTG',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4431452.png&w=350&h=254'
        }
      },
      team2: {
        name: 'Denver Broncos',
        city: 'DENVER',
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png',
        color: '#FB4F14',
        accentColor: '#002244',
        player: {
          name: 'Jarrett Stidham',
          position: 'QB',
          number: '8',
          stats: 'BACKUP QB | PLAYOFF STARTER',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3892775.png&w=350&h=254'
        }
      }
    },
    {
      conference: 'NFC',
      time: '6:30 PM ET',
      location: 'Lumen Field, Seattle',
      team1: {
        name: 'Los Angeles Rams',
        city: 'LOS ANGELES',
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lar.png',
        color: '#003594',
        accentColor: '#FFA300',
        player: {
          name: 'Matthew Stafford',
          position: 'QB',
          number: '9',
          stats: '4,707 YDS | 46 TD | MVP',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/12483.png&w=350&h=254'
        }
      },
      team2: {
        name: 'Seattle Seahawks',
        city: 'SEATTLE',
        logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sea.png',
        color: '#002244',
        accentColor: '#69BE28',
        player: {
          name: 'Sam Darnold',
          position: 'QB',
          number: '14',
          stats: '4,048 YDS | 25 TD | 99.1 RTG',
          image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3912547.png&w=350&h=254'
        }
      }
    }
  ]

  return (
    <div className="epic-hero">
      {/* Animated Background */}
      <div className="epic-background">
        <div className="gradient-mesh" style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        }}></div>
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${Math.random() * 5}s`,
              '--duration': `${5 + Math.random() * 10}s`,
              '--x': `${Math.random() * 100}vw`,
              '--y': `${Math.random() * 100}vh`
            }}></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="epic-content">
        {/* Top Badge */}
        <div className="top-badge">
          <span className="badge-icon">🏈</span>
          <span className="badge-text">NFL CONFERENCE CHAMPIONSHIP</span>
          <span className="badge-year">2026</span>
        </div>

        {/* Main Title */}
        <div className="main-title-container">
          <h1 className="main-title">
            <span className="title-word" data-text="CONFERENCE">CONFERENCE</span>
            <span className="title-word championship" data-text="FINALS">FINALS</span>
          </h1>
          <div className="title-underline"></div>
        </div>

        {/* Countdown */}
        <div className="countdown-epic">
          <div className="countdown-label">COMEÇA EM</div>
          <div className="countdown-display">
            <div className="time-unit">
              <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="time-label">HORAS</div>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="time-label">MINUTOS</div>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="time-label">SEGUNDOS</div>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="games-epic">
          {games.map((game, index) => (
            <ParallaxCard key={index} className="game-epic-wrapper">
              <div className="game-epic" data-conference={game.conference}>
                {/* Player Background Images */}
                <div className="players-background">
                  <div className="player-bg left" style={{
                    backgroundImage: `url(${game.team1.player.image})`,
                    '--team-color': game.team1.accentColor
                  }}></div>
                  <div className="player-bg right" style={{
                    backgroundImage: `url(${game.team2.player.image})`,
                    '--team-color': game.team2.accentColor
                  }}></div>
                </div>

                <div className="game-header">
                  <div className="conference-label">{game.conference} CHAMPIONSHIP</div>
                  <div className="game-time-location">
                    <div className="game-time">⏰ {game.time}</div>
                    <div className="game-location">📍 {game.location}</div>
                  </div>
                </div>
                
                <div className="matchup-epic">
                  {/* Team 1 */}
                  <div className="team-epic" style={{
                    '--team-color': game.team1.color,
                    '--accent-color': game.team1.accentColor
                  }}>
                    <div className="team-glow"></div>
                    <div className="team-logo-container">
                      <div className="logo-ring"></div>
                      <img src={game.team1.logo} alt={game.team1.name} className="team-logo-epic" />
                    </div>
                    <div className="team-info-epic">
                      <div className="team-city">{game.team1.city}</div>
                      <div className="team-name-epic">{game.team1.name.split(' ').pop()}</div>
                    </div>
                    <div className="player-info">
                      <div className="player-number">#{game.team1.player.number}</div>
                      <div className="player-name">{game.team1.player.name}</div>
                      <div className="player-position">{game.team1.player.position}</div>
                      <div className="player-stats">{game.team1.player.stats}</div>
                    </div>
                  </div>

                  {/* VS Divider */}
                  <div className="vs-epic">
                    <div className="vs-circle">
                      <span className="vs-text-epic">VS</span>
                    </div>
                    <div className="vs-line"></div>
                  </div>

                  {/* Team 2 */}
                  <div className="team-epic" style={{
                    '--team-color': game.team2.color,
                    '--accent-color': game.team2.accentColor
                  }}>
                    <div className="team-glow"></div>
                    <div className="team-logo-container">
                      <div className="logo-ring"></div>
                      <img src={game.team2.logo} alt={game.team2.name} className="team-logo-epic" />
                    </div>
                    <div className="team-info-epic">
                      <div className="team-city">{game.team2.city}</div>
                      <div className="team-name-epic">{game.team2.name.split(' ').pop()}</div>
                    </div>
                    <div className="player-info">
                      <div className="player-number">#{game.team2.player.number}</div>
                      <div className="player-name">{game.team2.player.name}</div>
                      <div className="player-position">{game.team2.player.position}</div>
                      <div className="player-stats">{game.team2.player.stats}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxCard>
          ))}
        </div>

        {/* CTA Button */}
        <div className="cta-container">
          <button className="cta-epic">
            <span className="cta-text">ASSISTIR AO VIVO</span>
            <div className="cta-glow"></div>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </div>
  )
}

export default EpicHero
