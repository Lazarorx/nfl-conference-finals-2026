import React, { useEffect, useState } from 'react'
import EpicHero from './components/EpicHero'
import InteractiveParticles from './components/InteractiveParticles'
import CustomCursor from './components/CustomCursor'
import ThemeToggle from './components/ThemeToggle'
import LoadingScreen from './components/LoadingScreen'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Add touch device class to body
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.classList.add('touch-device')
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          className="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ThemeToggle />
          <CustomCursor />
          <InteractiveParticles />
          <EpicHero />
        </motion.div>
      )}
    </>
  )
}

export default App
