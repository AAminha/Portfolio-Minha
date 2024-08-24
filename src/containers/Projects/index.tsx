'use client'

import { useSectionRefs } from '@src/contexts/SectionContext'

export const Projects = () => {
  const sectionRef = useSectionRefs()

  return (
    <section
      id="projects"
      ref={sectionRef.projects}
      className="flex flex-col items-center bg-white px-[30px] py-[120px]"
    >
      Projects
    </section>
  )
}
