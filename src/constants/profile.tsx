import { GithubBlackIcon, VelogGreenIcon } from '@public/icons'
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
import { ArchivingInformation } from '@src/types'

export const INTRO_DESCRIPTION = [
  '새로운 도전을 통해 학습하고 성장하는 것을 즐기는 ',
  '예비 프론트엔드 개발자입니다.\n현재에 안주하지 않고 끊임없이 개발자의 역량을 발전시키는 것을 목표로 하고 있습니다.',
  '언제나 사용자의 관점에서 바라보며,\n제가 만든 세상에서 편리함과 즐거움을 느낄 수 있는 사용자 경험을 만들어 가겠습니다.',
]

export const DEFAULT_PROFILE_INFORMATION = {
  이름: '안민하',
  생년월일: '1999. 05. 19',
  거주지: '인천광역시 연수구',
  연락처: '010-4857-0677',
  메일: 'dks4857@gmail.com',
  '학교 / 전공': '숭실대학교 소프트웨어학부',
}

export const ARCHIVING_INFORMATION: ArchivingInformation[] = [
  {
    title: 'Github',
    icon: <GithubBlackIcon />,
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
    icon: <VelogGreenIcon />,
    subtitle: '공부한 내용 정리 및 공유 목적의 블로그',
    description: [
      '공부한 것을 정리하기 위한 기록',
      '나의 경험과 지식을 공유하기 위한 기록',
      '프로젝트 경험 공유 및 회고를 위한 기록',
    ],
    link: 'https://velog.io/@min_ha',
  },
]

export const SKILL = [
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
