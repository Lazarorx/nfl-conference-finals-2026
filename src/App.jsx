import React from 'react'
import EpicHero from './components/EpicHero'
import InteractiveParticles from './components/InteractiveParticles'
import CustomCursor from './components/CustomCursor'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  useEffect(() => {
    // Add touch device class to body
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.classList.add('touch-device')
    }
  }, [])

  return (
    <div className="app">
      <ThemeToggle />
      <CustomCursor />
      <InteractiveParticles />
      <EpicHero />
    </div>
  )
}

export default App
