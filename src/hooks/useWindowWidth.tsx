import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return width
}
