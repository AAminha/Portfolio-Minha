import clsx from 'clsx'

import { ArrowRightIcon } from '@public/svg'
import { ArchivingInformation } from '@src/containers/Archiving'

interface CardProps {
  information: ArchivingInformation
}

export const Card = ({ information }: CardProps) => {
  return (
    <div className="flex min-h-[348px] w-[415px] flex-col items-center justify-center rounded-[20px] bg-white px-[40px] pb-[35px] pt-[50px] shadow-md sm:px-[20px] sm:pb-[20px] sm:pt-[30px] xs:px-[20px] xs:pb-[20px] xs:pt-[30px]">
      <h2 className="header-2 mb-[40px] flex gap-[15px] text-black">
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
          'label-4 flex w-full items-center justify-between rounded-[12px] px-[20px] py-[14px] text-white',
          information.title === 'Github' && 'bg-github hover:bg-black',
          information.title === 'Velog' && 'hover:bg-velogDark bg-velog'
        )}
        onClick={() => window.open(information.link, '_blank')}
      >
        <div className="h-[20px] w-[20px]" />
        {information.title} 바로가기
        <ArrowRightIcon />
      </button>
    </div>
  )
}
