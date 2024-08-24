'use client'

import { GithubIcon, VelogIcon } from '@public/svg'
import { Card } from '@src/containers/Archiving/Card'
import { useSectionRefs } from '@src/contexts/SectionContext'

export interface ArchivingInformation {
  title: string
  icon: JSX.Element
  subtitle: string
  description: string[]
  link: string
}

const ARCHIVING_INFORMATION: ArchivingInformation[] = [
  {
    title: 'Github',
    icon: <GithubIcon />,
    subtitle: '소스코드 저장소',
    description: [
      '팀 프로젝트, 개인 프로젝트의 소스코드 저장',
      '코딩 연습을 위해 작업했던 코드 저장',
      '학부 전공 수업으로 작성했던 코드 저장',
    ],
    link: 'https://github.com/AAminha',
  },
  {
    title: 'Velog',
    icon: <VelogIcon />,
    subtitle: '공부한 내용 정리 및 공유 목적의 블로그',
    description: [
      '공부한 것을 정리하기 위한 기록',
      '나의 경험과 지식을 공유하기 위한 기록',
      '프로젝트 경험 공유 및 회고를 위한 기록',
    ],
    link: 'https://velog.io/@min_ha',
  },
]

export const Archiving = () => {
  const sectionRef = useSectionRefs()

  return (
    <section
      id="archiving"
      ref={sectionRef.archiving}
      className="flex flex-col items-center bg-secondary-300 px-[30px] py-[120px]"
    >
      <h1 className="title-3 mb-[70px] text-primary-500">Archiving</h1>
      <div className="flex w-full max-w-[936px] flex-wrap items-center justify-between gap-[30px] sm:justify-center md:justify-center lg:justify-center xs:justify-center">
        {ARCHIVING_INFORMATION.map((info) => (
          <Card key={info.title} information={info} />
        ))}
      </div>
    </section>
  )
}
