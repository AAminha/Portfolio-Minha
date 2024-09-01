'use client'

import { createContext, useContext, useState } from 'react'

import { Project } from '@src/types'

interface ProjectContextType {
  activeProject: Project | null
  setActiveProject: (project: Project | null) => void
}

export const ProjectContext = createContext<ProjectContextType | null>(null)

export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <ProjectContext.Provider value={{ activeProject, setActiveProject }}>
      {children}
    </ProjectContext.Provider>
  )
}

export const useProject = () => {
  const context = useContext(ProjectContext)
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider')
  }
  return context
}
