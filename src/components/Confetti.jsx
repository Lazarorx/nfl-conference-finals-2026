import React, { useEffect, useRef } from 'react'
import './Confetti.css'

const Confetti = ({ active, onComplete }) => {
  const canvasRef = useRef(null)
  const confettiRef = useRef([])

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = ['#ff0044', '#0077ff', '#ff6b00', '#00d4ff', '#ffd700', '#9d00ff']

    class ConfettiPiece {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = -20
        this.size = Math.random() * 10 + 5
        this.speedY = Math.random() * 3 + 2
        this.speedX = Math.random() * 2 - 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.rotation = Math.random() * 360
        this.rotationSpeed = Math.random() * 10 - 5
        this.opacity = 1
      }

      update() {
        this.y += this.speedY
        this.x += this.speedX
        this.rotation += this.rotationSpeed
        
        if (this.y > canvas.height - 100) {
          this.opacity -= 0.02
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate((this.rotation * Math.PI) / 180)
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        ctx.restore()
      }
    }

    // Create confetti
    for (let i = 0; i < 150; i++) {
      setTimeout(() => {
        confettiRef.current.push(new ConfettiPiece())
      }, i * 10)
    }

    let animationId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      confettiRef.current = confettiRef.current.filter(piece => {
        piece.update()
        piece.draw()
        return piece.opacity > 0 && piece.y < canvas.height + 50
      })

      if (confettiRef.current.length > 0) {
        animationId = requestAnimationFrame(animate)
      } else {
        if (onComplete) onComplete()
      }
    }

    animate()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      confettiRef.current = []
    }
  }, [active, onComplete])

  if (!active) return null

  return <canvas ref={canvasRef} className="confetti-canvas" />
}

export default Confetti
