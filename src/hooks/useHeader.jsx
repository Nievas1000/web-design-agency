import { useEffect, useState } from 'react'

export const useHeader = () => {
  const [wordIndex, setWordIndex] = useState(0)
  const words = ['coaches', 'mentors', 'entrepreneurs', 'influencers']

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [words.length])

  return { words, wordIndex }
}
