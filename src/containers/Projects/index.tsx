'use client'

import { StaticImageData } from 'next/image'

import AdminImg from '@public/images/projects/admin.webp'
import IGotItImg from '@public/images/projects/igotit.webp'
import LandingImg from '@public/images/projects/landing.webp'
import QtudyImg from '@public/images/projects/qtudy.webp'
import RecruitingImg from '@public/images/projects/recruiting.webp'
import SelpieceImg from '@public/images/projects/selpiece.webp'
import { ProjectCard } from '@src/containers/Projects/ProjectCard'
import { useSectionRefs } from '@src/contexts/SectionContext'

export interface Project {
  key: string
  title: string
  image: StaticImageData
  subtitle: string
  description: string
  skill: string[]
  github?: string
  service?: string
  youtube?: string
}

const PROJECTS: Project[] = [
  {
    key: 'qtudy',
    title: '큐터디 (Q-tudy)',
    image: QtudyImg,
    subtitle: '"AI가 생성한 퀴즈와 요약으로 효율적인 학습을 돕는 서비스"',
    description:
      '업로드한 pdf, 이미지 파일 혹은 입력한 텍스트를 기반으로 ChatGPT를 활용한 AI가 퀴즈나 요약을 생성해줍니다. 또한, 카테고리로 퀴즈나 요약을 관리할 수 있습니다.',
    skill: ['React', 'TypeScript', 'styled-components', 'etc'],
    github: 'https://github.com/capstone-five-ai/Qtudy-FE',
    service: 'https://www.qtudy.com/',
  },
  {
    key: 'selpiece',
    title: '셀피스 (SELPIECE)',
    image: SelpieceImg,
    subtitle: '나만의 조각을 찾아 고유한 브랜드를 디자인하는 공간',
    description:
      '퍼스널 브랜딩의 초기 여정에서 겪는 방향 설정의 어려움에 대한 솔루션을 제공하기 위한 서비스입니다. 테스트를 통해 나만의 조각을 찾아내고 맞춤 프로그램을 확인할 수 있습니다.',
    skill: ['React', 'TypeScript', 'styled-components', 'etc'],
    github: 'https://github.com/KUSITMS-29th-TEAM-D/Frontend',
    youtube: 'https://www.youtube.com/watch?v=jgDSXNzTFo4',
  },
  {
    key: 'landing',
    title: 'IT 동아리 랜딩 페이지',
    image: LandingImg,
    subtitle: '함께 만들어가는 당신의 숭실, YOURSSU',
    description:
      '숭실대학교 IT 동아리 유어슈를 소개하기 위한 페이지로, 유어슈 부서, 인재상, 프로젝트, 유어슈 문화 등을 확인할 수 있습니다. 현재도 유어슈를 소개하는 페이지로 사용하고 있습니다.',
    skill: ['Gatsby', 'Tailwind CSS', 'GraphQL'],
    github: 'https://github.com/yourssu/Yourssu-landing-page',
    service: 'https://yourssu.com',
  },
  {
    key: 'recruiting',
    title: 'IT 동아리 리쿠르팅 페이지',
    image: RecruitingImg,
    subtitle: '당신의 손으로 바꿔나갈 당신의 숭실, YOURSSU ',
    description:
      '리쿠르팅 페이지를 통해 각 부서별로 필요한 역량과 리쿠르팅 일정을 확인할 수 있습니다. 현재도 매 학기 리쿠르팅 시즌에 맞춰 정보를 업데이트 하며 운영하고 있습니다.',
    skill: ['Gatsby', 'Tailwind CSS', 'GraphQL', 'Sanity CMS'],
    github: 'https://github.com/yourssu/Yourssu-landing-page',
    service: 'https://yourssu.com/recruiting',
  },
  {
    key: 'admin',
    title: 'IT 동아리 어드민 페이지',
    image: AdminImg,
    subtitle: '숭실대학교 IT 동아리 유어슈를 위한 관리자 페이지',
    description:
      '숭실대 IT 동아리 유어슈는 ‘숨쉴때’라는 앱 서비스를 개발 및 런칭해오고 있습니다. 어드민 페이지는 ‘숨쉴때’ 서비스를 관리하기 제작되었으며, 인증 메일, 컨텐츠 등을 관리하고 있습니다.',
    skill: ['React', 'TypeScript', 'Tailwind CSS', 'etc'],
  },
  {
    key: 'igotit',
    title: '아가릿 (i-got-it)',
    image: IGotItImg,
    subtitle: '말로만 결심하는 사람들을 위한 결심 공유 서비스',
    description:
      '모두가 볼 수 있도록 결심을 외치고 주변 친구들에게 결심에 대한 비밀 응원 편지를 받을 수 있습니다. 3주 후에 받은 응원 편지를 확인하며 결심에 대한 결의를 다질 수 있게 도와줍니다.',
    skill: ['React', 'TypeScript', 'SCSS', 'etc'],
    github: 'https://github.com/yourssu/i-got-it-frontend',
  },
]

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
