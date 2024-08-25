import { RefObject, useEffect, useState } from 'react'

export const useSectionObserver = (sectionRefs: RefObject<HTMLElement>[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
      }
    )

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current)
      })
    }
  }, [sectionRefs])

  return activeSection
}
