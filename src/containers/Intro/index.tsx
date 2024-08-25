'use client'

import Image from 'next/image'

import BackgroundImg from '@public/images/intro.webp'
import MemojiImg from '@public/images/memoji.webp'
import { useSectionRefs } from '@src/contexts/SectionContext'

const DESCRIPTION = [
  '새로운 도전을 통해 학습하고 성장하는 것을 즐기는 ',
  '예비 프론트엔드 개발자입니다.\n현재에 안주하지 않고 끊임없이 개발자의 역량을 발전시키는 것을 목표로 하고 있습니다.',
  '언제나 사용자의 관점에서 바라보며,\n제가 만든 세상에서 편리함과 즐거움을 느낄 수 있는 사용자 경험을 만들어 가겠습니다.',
]

export const Intro = () => {
  const sectionRef = useSectionRefs()

  return (
    <section
      id="intro"
      ref={sectionRef.intro}
      className="relative bg-primary-900 px-5 py-[200px] sm:py-36 md:py-[180px] xs:py-36"
    >
      <div className="relative z-[2] flex h-full flex-col items-center justify-center pt-12">
        <div className="sm:header-2 xs:header-2 2xl:title-2 3xl:title-2 title-6 mb-20 text-white sm:mb-10 xs:mb-10">
          <h1 className="">안녕하세요.</h1>
          <h1>
            <span className="sm:header-2 xs:header-2 2xl:title-1 3xl:title-1 title-5 text-secondary-900">
              프론트엔드 개발자
            </span>
            를 꿈꾸는{' '}
            <span className="sm:header-2 xs:header-2 2xl:title-1 3xl:title-1 title-5 text-secondary-900 sm:whitespace-pre md:whitespace-pre lg:whitespace-pre xs:whitespace-pre">
              {'\n안민하'}
            </span>
            입니다.
          </h1>
        </div>
        <div className="flex items-center gap-5 sm:flex-col md:flex-col lg:flex-col xs:flex-col">
          <Image src={MemojiImg} alt="미모지" width={202} height={208} />
          <div className="3xl:body-5 2xl:body-5 label-5 flex flex-col gap-[27px] whitespace-pre-line rounded-xl bg-shadow-white p-5 text-white sm:w-full md:w-full xs:w-full">
            <p>
              <span className="3xl:body-2 2xl:body-2 label-3 text-secondary-900">
                {DESCRIPTION[0]}
              </span>
              {DESCRIPTION[1]}
            </p>
            <p className="">{DESCRIPTION[2]}</p>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 h-full">
        <div className="relative h-full w-screen">
          <div className="absolute z-[1] h-full w-full bg-gradient-to-l from-primary-900" />
          <Image
            src={BackgroundImg}
            alt="배경 이미지"
            className="absolute h-full object-cover opacity-30"
          />
        </div>
      </div>
    </section>
  )
}
