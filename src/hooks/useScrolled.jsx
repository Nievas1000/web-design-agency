import { useEffect, useState } from 'react'

export const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll () {
      if (window.scrollY > 50) {
        if (!scrolled) {
          setScrolled(true)
        }
      } else {
        if (scrolled) {
          setScrolled(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return { scrolled }
}
