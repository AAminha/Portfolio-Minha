'use client'

import { PROJECTS } from '@src/constants/project'
import { ProjectCard } from '@src/containers/Projects/ProjectCard'
import { useSectionRefs } from '@src/contexts/SectionContext'

export const Projects = () => {
  const sectionRef = useSectionRefs()

  return (
    <section
      id="projects"
      ref={sectionRef.projects}
      className="flex flex-col items-center bg-primary-300 px-[30px] py-[120px]"
    >
      <h1 className="sm:title-4 xs:title-4 title-3 mb-[70px] text-primary-500">Projects</h1>
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-1 md:grid-cols-1 xl:gap-20 2xl:gap-20 xs:grid-cols-1 3xl:gap-20">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </section>
  )
}
