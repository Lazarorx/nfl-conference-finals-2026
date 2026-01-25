import React from 'react'
import EpicHero from './components/EpicHero'
import InteractiveParticles from './components/InteractiveParticles'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <InteractiveParticles />
      <EpicHero />
    </div>
  )
}

export default App
