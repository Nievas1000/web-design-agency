import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useHeader = () => {
  const [wordIndex, setWordIndex] = useState(0)
  const { i18n } = useTranslation()
  const words = i18n.language === 'en' ? ['Coaching', 'Mentor', 'Entrepreneur', 'Consultant'] : ['Coaching', 'Mentor', 'Emprendedor', 'Consultor']

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [words.length])

  return { words, wordIndex }
}
