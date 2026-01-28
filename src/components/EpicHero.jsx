import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FadeInWhenVisible, ScaleOnHover, FloatingElement } from './ScrollAnimations'
import ParallaxCard from './ParallaxCard'
import Confetti from './Confetti'
import Fireworks from './Fireworks'
import VictoryAnimation from './VictoryAnimation'
import './EpicHero.css'

// Move calculateTimeLeft outside component to avoid recreation
const calculateTimeLeft = () => {
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

const EpicHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [showConfetti, setShowConfetti] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)
  const [showVictory, setShowVictory] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [imageErrors, setImageErrors] = useState({})

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Throttle mouse movement for better performance
  const handleMouseMove = useCallback((e) => {
    requestAnimationFrame(() => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)
      
      // Trigger fireworks when countdown reaches zero
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setShowFireworks(true)
        setShowVictory(true)
        setTimeout(() => {
          setShowFireworks(false)
          setShowVictory(false)
        }, 5000)
      }
    }, 1000)

    // Only add mouse listener on desktop
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      clearInterval(timer)
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isMobile, handleMouseMove])

  // Handle image loading errors
  const handleImageError = useCallback((imageKey) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }))
  }, [])

  // Memoize particle count
  const particleCount = useMemo(() => isMobile ? 20 : 50, [isMobile])

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
      {/* Confetti and Fireworks */}
      <Confetti active={showConfetti} onComplete={() => setShowConfetti(false)} />
      <Fireworks active={showFireworks} onComplete={() => setShowFireworks(false)} />
      <VictoryAnimation show={showVictory} />
      
      {/* Animated Background */}
      <div className="epic-background">
        <div className="gradient-mesh" style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        }}></div>
        <div className="particles">
          {[...Array(particleCount)].map((_, i) => (
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
      <motion.div 
        className="epic-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Top Badge */}
        <FloatingElement duration={3}>
          <motion.div 
            className="top-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <span className="badge-icon">🏈</span>
            <span className="badge-text">NFL CONFERENCE CHAMPIONSHIP</span>
            <span className="badge-year">2026</span>
          </motion.div>
        </FloatingElement>

        {/* Main Title */}
        <div className="main-title-container">
          <h1 className="main-title">
            <motion.span 
              className="title-word" 
              data-text="CONFERENCE"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              CONFERENCE
            </motion.span>
            <motion.span 
              className="title-word championship" 
              data-text="FINALS"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              FINALS
            </motion.span>
          </h1>
          <motion.div 
            className="title-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </div>

        {/* Countdown */}
        <FadeInWhenVisible delay={0.2}>
          <div className="countdown-epic">
            <div className="countdown-label">COMEÇA EM</div>
            <div className="countdown-display">
              <motion.div 
                className="time-unit"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="time-label">HORAS</div>
              </motion.div>
              <div className="time-separator">:</div>
              <motion.div 
                className="time-unit"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="time-label">MINUTOS</div>
              </motion.div>
              <div className="time-separator">:</div>
              <motion.div 
                className="time-unit"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="time-label">SEGUNDOS</div>
              </motion.div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Games Grid */}
        <div className="games-epic">
          {games.map((game, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.2}>
              <ParallaxCard className="game-epic-wrapper">
                <motion.div 
                  className="game-epic" 
                  data-conference={game.conference}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
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
                      <img 
                        src={game.team1.logo} 
                        alt={`${game.team1.name} team logo`}
                        className="team-logo-epic"
                        loading="lazy"
                        onError={() => handleImageError(`team1-${index}`)}
                      />
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
                      <img 
                        src={game.team2.logo} 
                        alt={`${game.team2.name} team logo`}
                        className="team-logo-epic"
                        loading="lazy"
                        onError={() => handleImageError(`team2-${index}`)}
                      />
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
                </motion.div>
              </ParallaxCard>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* CTA Button */}
        <FadeInWhenVisible delay={0.4}>
          <div className="cta-container">
            <motion.button 
              className="cta-epic"
              onClick={() => {
                setShowConfetti(true)
                setTimeout(() => setShowFireworks(true), 500)
                setTimeout(() => {
                  setShowConfetti(false)
                  setShowFireworks(false)
                }, 5000)
              }}
              aria-label="Watch live NFL games"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(255, 0, 68, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="cta-text">ASSISTIR AO VIVO</span>
              <div className="cta-glow"></div>
            </motion.button>
          </div>
        </FadeInWhenVisible>
      </motion.div>

      {/* Decorative Elements */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </div>
  )
}

export default EpicHero
