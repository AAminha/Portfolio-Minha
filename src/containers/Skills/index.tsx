'use client'

import clsx from 'clsx'

import {
  CSSBadge,
  FigmaBadge,
  GitBadge,
  GithubBadge,
  HTMLBadge,
  JavaScriptBadge,
  ReactBadge,
  ReactQueryBadge,
  RecoilBadge,
  SASSBadge,
  StyledComponentsBadge,
  TailwindBadge,
  TypeScriptBadge,
  VercelBadge,
} from '@public/images'
import { useSectionRefs } from '@src/contexts/SectionContext'

const SKILL = [
  {
    title: 'Language',
    skills: {
      HTML: <HTMLBadge />,
      CSS: <CSSBadge />,
      JavaScript: <JavaScriptBadge />,
      TypeScript: <TypeScriptBadge />,
    },
  },
  {
    title: 'Frontend',
    skills: {
      React: <ReactBadge />,
      'styled-components': <StyledComponentsBadge />,
      SASS: <SASSBadge />,
      'Tailwind CSS': <TailwindBadge />,
      'React Query': <ReactQueryBadge />,
      Recoil: <RecoilBadge />,
    },
  },
  {
    title: 'ETC',
    skills: {
      Git: <GitBadge />,
      Github: <GithubBadge />,
      Vercel: <VercelBadge />,
      Figma: <FigmaBadge />,
    },
  },
]

export const Skills = () => {
  const sectionRef = useSectionRefs()

  return (
    <section
      id="skills"
      ref={sectionRef.skills}
      className="flex flex-col items-center bg-primary-100 px-14 py-[120px] sm:px-5 xs:px-5"
    >
      <h1 className="title-3 sm:title-4 xs:title-4 mb-[70px] text-primary-500">Skills</h1>
      <div className="flex flex-col gap-[70px]">
        {SKILL.map((item) => (
          <div
            key={item.title}
            className="w-full max-w-[1030px] rounded-[20px] bg-white px-[55px] py-[50px] shadow-blackShadow sm:px-[30px] xs:px-[30px]"
          >
            <h3 className="header-2 pl-4 text-primary-500">{item.title}</h3>
            <hr className="mb-[55px] mt-2.5 w-[270px] border-2 border-primary-500 sm:w-[220px] xs:w-[220px]" />
            <div className="align-center flex flex-wrap gap-10 sm:gap-5 xs:justify-center xs:gap-5">
              {Object.entries(item.skills).map(([key, value]) => (
                <div
                  key={key}
                  className="flex w-[120px] flex-col items-center gap-[4px] sm:w-20 xs:w-20"
                >
                  {value}
                  <span
                    className={clsx(
                      'flex h-[46px] w-full items-center justify-center text-center text-black',
                      key.length > 8
                        ? 'label-1 sm:label-6 xs:label-6'
                        : 'body-3 sm:label-5 xs:label-5'
                    )}
                  >
                    {key}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
