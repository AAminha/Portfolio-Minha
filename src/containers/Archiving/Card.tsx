import clsx from 'clsx'

import { ArrowRightIcon } from '@public/svg'
import { ArchivingInformation } from '@src/containers/Archiving'

interface CardProps {
  information: ArchivingInformation
}

export const Card = ({ information }: CardProps) => {
  return (
    <div className="flex min-h-[348px] w-[415px] flex-col items-center justify-center rounded-[20px] bg-white px-10 pb-[35px] pt-[50px] shadow-blackShadow sm:px-5 sm:pb-5 sm:pt-[30px] xs:px-5 xs:pb-5 xs:pt-[30px]">
      <h2 className="header-2 mb-10 flex gap-[15px] text-black">
        {information.icon} {information.title}
      </h2>
      <div className="mb-[30px]">
        <div className="label-4 mb-[15px] text-black">
          <span className="label-3">{information.subtitle}</span>입니다.
        </div>
        <ul className="label-5 flex list-outside list-disc flex-col gap-[5px] pl-[18px] text-gray-500">
          {information.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <button
        className={clsx(
          'label-4 flex w-full items-center justify-between rounded-lg px-5 py-3.5 text-white',
          information.title === 'Github' && 'bg-github hover:bg-black',
          information.title === 'Velog' && 'bg-velog hover:bg-velogDark'
        )}
        onClick={() => window.open(information.link, '_blank')}
      >
        <div className="h-5 w-5" />
        {information.title} 바로가기
        <ArrowRightIcon />
      </button>
    </div>
  )
}
