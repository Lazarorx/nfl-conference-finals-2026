import React from 'react'
import EpicHero from './components/EpicHero'
import InteractiveParticles from './components/InteractiveParticles'
import CustomCursor from './components/CustomCursor'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
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
