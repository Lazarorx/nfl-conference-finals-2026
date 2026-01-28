import React from 'react'
import './VictoryAnimation.css'

const VictoryAnimation = ({ show }) => {
  if (!show) return null

  return (
    <div className="victory-overlay">
      <div className="victory-content">
        <div className="trophy">🏆</div>
        <h2 className="victory-text">
          <span className="victory-line">IT'S</span>
          <span className="victory-line">GAME</span>
          <span className="victory-line">TIME!</span>
        </h2>
        <div className="victory-subtext">Os jogos começam agora! 🏈</div>
      </div>
    </div>
  )
}

export default VictoryAnimation
