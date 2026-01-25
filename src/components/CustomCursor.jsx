import React, { useEffect, useState } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [trail, setTrail] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Add to trail
      setTrail(prev => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id: Date.now() }])

      // Check if hovering over clickable element
      const target = e.target
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      )
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div
        className={`custom-cursor ${isPointer ? 'pointer' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="custom-cursor-follower"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: index / trail.length,
            transform: `scale(${index / trail.length})`,
          }}
        />
      ))}
    </>
  )
}

export default CustomCursor
