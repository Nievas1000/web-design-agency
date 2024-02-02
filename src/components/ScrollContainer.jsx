import { useAnimation, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const ScrollAnimationContainer = ({ children, direction, initial }) => { //eslint-disable-line
  const controls = useAnimation()
  const containerRef = useRef(null)

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollY = window.scrollY
      const containerPosition = containerRef.current.offsetTop - 800
      const offset = 100

      if (scrollY > containerPosition - offset) {
        controls.start({ opacity: 1, [direction]: 0 })
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, [direction]: initial }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}
