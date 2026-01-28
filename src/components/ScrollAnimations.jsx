import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const ParallaxSection = ({ children, speed = 0.5 }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed])

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  )
}

export const FadeInWhenVisible = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export const ScaleOnHover = ({ children, scale = 1.05 }) => {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  )
}

export const FloatingElement = ({ children, duration = 3 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}
