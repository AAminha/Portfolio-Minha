import clsx from 'clsx'
import { useRouter } from 'next/navigation'

import { GithubWhiteIcon, YoutubeIcon } from '@public/icons'

interface ButtonProps {
  variant: 'default' | 'github' | 'youtube' | 'service'
  link: string
}

interface ButtonText {
  text: string
  icon: JSX.Element | null
}

const BUTTON_TEXT: { [key: string]: ButtonText } = {
  default: { text: '상세 설명', icon: null },
  github: { text: '깃허브', icon: <GithubWhiteIcon width={25} className="xs:hidden" /> },
  youtube: { text: '유튜브', icon: <YoutubeIcon width={25} className="xs:hidden" /> },
  service: { text: '배포 링크', icon: null },
}

export const Button = ({ variant, link }: ButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (link.includes('https://')) {
      window.open(link, '_blank')
    } else {
      router.push(link)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'flex h-[50px] w-full items-center justify-center gap-[7px] rounded-xl border-2',
        variant === 'github' &&
          'border-github bg-github text-white hover:border-black hover:bg-black',
        variant === 'default' &&
          'border-primary-400 bg-primary-400 text-white hover:border-primary-500 hover:bg-primary-500',
        variant === 'service' && 'border-primary-400 bg-white text-primary-400 hover:bg-gray-150',
        variant === 'youtube' &&
          'border-youtube bg-youtube hover:border-youtubeDark hover:bg-youtubeDark text-white'
      )}
    >
      {BUTTON_TEXT[variant].icon}
      <span className="label-5">{BUTTON_TEXT[variant].text}</span>
    </button>
  )
}
