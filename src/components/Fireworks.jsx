import React, { useEffect, useRef } from 'react'
import './Fireworks.css'

const Fireworks = ({ active, onComplete }) => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const fireworksRef = useRef([])

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = ['#ff0044', '#0077ff', '#ff6b00', '#00d4ff', '#ffd700', '#9d00ff']

    class Firework {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height
        this.targetY = Math.random() * canvas.height * 0.5
        this.speed = 5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.exploded = false
      }

      update() {
        if (!this.exploded) {
          this.y -= this.speed
          if (this.y <= this.targetY) {
            this.explode()
          }
        }
      }

      draw() {
        if (!this.exploded) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, 3, 0, Math.PI * 2)
          ctx.fillStyle = this.color
          ctx.fill()
        }
      }

      explode() {
        this.exploded = true
        const particleCount = 50
        for (let i = 0; i < particleCount; i++) {
          particlesRef.current.push(new Particle(this.x, this.y, this.color))
        }
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 5 + 2
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.gravity = 0.1
        this.friction = 0.98
        this.opacity = 1
        this.size = Math.random() * 3 + 2
      }

      update() {
        this.vx *= this.friction
        this.vy *= this.friction
        this.vy += this.gravity
        this.x += this.vx
        this.y += this.vy
        this.opacity -= 0.01
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
      }
    }

    // Launch fireworks
    let fireworkCount = 0
    const maxFireworks = 8
    const fireworkInterval = setInterval(() => {
      if (fireworkCount < maxFireworks) {
        fireworksRef.current.push(new Firework())
        fireworkCount++
      } else {
        clearInterval(fireworkInterval)
      }
    }, 500)

    let animationId
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      fireworksRef.current.forEach((firework, index) => {
        firework.update()
        firework.draw()
        if (firework.exploded) {
          fireworksRef.current.splice(index, 1)
        }
      })

      particlesRef.current = particlesRef.current.filter(particle => {
        particle.update()
        particle.draw()
        return particle.opacity > 0
      })

      if (fireworksRef.current.length > 0 || particlesRef.current.length > 0) {
        animationId = requestAnimationFrame(animate)
      } else {
        if (onComplete) onComplete()
      }
    }

    animate()

    return () => {
      clearInterval(fireworkInterval)
      if (animationId) cancelAnimationFrame(animationId)
      particlesRef.current = []
      fireworksRef.current = []
    }
  }, [active, onComplete])

  if (!active) return null

  return <canvas ref={canvasRef} className="fireworks-canvas" />
}

export default Fireworks
