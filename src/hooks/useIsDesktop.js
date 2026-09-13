import { useState, useEffect } from 'react'

const BREAKPOINT = 900 // px — above this = desktop/laptop/TV, below = mobile

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= BREAKPOINT)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= BREAKPOINT)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isDesktop
}