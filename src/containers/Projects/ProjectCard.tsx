import Image from 'next/image'

import { Project } from '@src/containers/Projects'
import { Button } from '@src/containers/Projects/Button'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex w-full max-w-[500px] flex-col overflow-hidden rounded-[20px] bg-white shadow-blackShadow">
      <Image
        src={project.image}
        alt="프로젝트 이미지"
        className="h-[284px] object-cover object-top"
      />
      <div className="flex h-full min-h-[331px] flex-col gap-5 bg-white p-[22px]">
        <div className="flex gap-2.5 overflow-hidden">
          {project.skill.map((item) => (
            <span
              key={item}
              className="label-6 whitespace-pre rounded-lg bg-primary-300 px-3 py-1.5 text-primary-400"
            >
              {item}
            </span>
          ))}
        </div>
        <div>
          <h2 className="header-1 mb-1.5 text-black">{project.title}</h2>
          <h4 className="label-2 text-black">{project.subtitle}</h4>
        </div>
        <p className="label-2 text-gray-500">{project.description}</p>
        <div className="mt-auto flex gap-3 xs:gap-1.5">
          {project.github && <Button variant="github" link={project.github} />}
          <Button variant="default" link="" />
          {project.service && <Button variant="service" link={project.service} />}
          {project.youtube && <Button variant="youtube" link={project.youtube} />}
        </div>
      </div>
    </div>
  )
}
