import React, { useState, useEffect } from 'react'
import './Countdown.css'

const Countdown = () => {
  const gameDate = new Date('2026-01-26T18:00:00')
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = gameDate - new Date()
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="countdown">
      <div className="countdown-container">
        <h2 className="countdown-title">Contagem Regressiva</h2>
        <div className="countdown-grid">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="countdown-item">
              <div className="countdown-value">
                <span className="digit">{String(value).padStart(2, '0')}</span>
              </div>
              <div className="countdown-label">
                {unit === 'days' ? 'Dias' : 
                 unit === 'hours' ? 'Horas' : 
                 unit === 'minutes' ? 'Minutos' : 'Segundos'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Countdown
