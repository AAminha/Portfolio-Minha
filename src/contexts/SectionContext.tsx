'use client'

import { createContext, useContext, useRef } from 'react'

export interface SectionContextType {
  intro: React.RefObject<HTMLElement>
  aboutMe: React.RefObject<HTMLElement>
  archiving: React.RefObject<HTMLElement>
  skills: React.RefObject<HTMLElement>
  projects: React.RefObject<HTMLElement>
}

// context 생성
export const SectionContext = createContext<SectionContextType | null>(null)

// value로 ref를 전달하는 provider
export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const sectionRefs = {
    intro: useRef<HTMLElement>(null),
    aboutMe: useRef<HTMLElement>(null),
    archiving: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
  }

  return <SectionContext.Provider value={sectionRefs}>{children}</SectionContext.Provider>
}

// ref를 반환하는 hook
export const useSectionRefs = () => {
  const context = useContext(SectionContext)
  if (!context) {
    throw new Error('useSectionRefs must be used within a SectionProvider')
  }
  return context
}
