'use client'

import { useState } from 'react'

import clsx from 'clsx'

import { LogoWhite, MenuIcon } from '@public/svg'
import { SectionContextType, useSectionRefs } from '@src/contexts/SectionContext'
import { useSectionObserver } from '@src/hooks/useSectionObserver'
import { useWindowWidth } from '@src/hooks/useWindowWidth'

interface NavContentProps {
  title: string
  key: keyof SectionContextType
}

const NAV_CONTENT: NavContentProps[] = [
  { title: 'About Me', key: 'aboutMe' },
  { title: 'Archiving', key: 'archiving' },
  { title: 'Skills', key: 'skills' },
  { title: 'Projects', key: 'projects' },
]

export const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  const currentWidth = useWindowWidth()
  const sectionRefs = useSectionRefs()
  const activeSection = useSectionObserver([
    sectionRefs.intro,
    sectionRefs.aboutMe,
    sectionRefs.archiving,
    sectionRefs.skills,
    sectionRefs.projects,
  ])

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed z-10 w-full bg-shadow-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-14 py-4 sm:px-5 xs:px-5">
        <LogoWhite
          className="h-12 cursor-pointer sm:h-[34px] xs:h-[34px]"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
        <nav className="">
          <ul className="header-4 flex gap-x-10 text-white sm:hidden md:hidden lg:hidden xs:hidden">
            {NAV_CONTENT.map((content) => (
              <li
                key={content.title}
                className={clsx(
                  'cursor-pointer hover:text-secondary-300',
                  activeSection === content.key && 'text-secondary-900'
                )}
                onClick={() => scrollToSection(content.key)}
              >
                {content.title}
              </li>
            ))}
          </ul>
          <MenuIcon
            className="h-11 cursor-pointer xl:hidden 2xl:hidden xs:h-10 3xl:hidden"
            onClick={() => setIsOpenMobileMenu((prev) => !prev)}
          />
        </nav>
      </div>
      {isOpenMobileMenu && currentWidth <= 960 && (
        <nav className="mx-14 py-2">
          <ul className="header-4 text-white">
            {NAV_CONTENT.map((content) => (
              <li
                key={content.title}
                className={clsx(
                  'cursor-pointer px-12 py-6',
                  activeSection === content.key && 'text-secondary-900'
                )}
                onClick={() => {
                  scrollToSection(content.key)
                  setIsOpenMobileMenu(false)
                }}
              >
                {content.title}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
