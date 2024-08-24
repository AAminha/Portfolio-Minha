'use client'

import Image from 'next/image'

import ProfileImg from '@public/images/profile.webp'
import { useSectionRefs } from '@src/contexts/SectionContext'

const PROFILE_INFORMATION = {
  이름: '안민하',
  생년월일: '1999. 05. 19',
  거주지: '인천광역시 연수구',
  연락처: '010-4857-0677',
  메일: 'dks4857@gmail.com',
  '학교 / 전공': '숭실대학교 소프트웨어학부',
}

export const AboutMe = () => {
  const sectionRef = useSectionRefs()

  return (
    <section
      id="aboutMe"
      ref={sectionRef.aboutMe}
      className="flex flex-col items-center bg-white px-[30px] py-[120px]"
    >
      <h1 className="title-3 sm:title-4 xs:title-4 mb-[70px] text-primary-500">About Me</h1>
      <div className="flex w-full max-w-[750px] items-center justify-between gap-[50px] sm:flex-col md:flex-col xs:flex-col">
        <div className="relative h-[300px] w-[300px] overflow-hidden rounded-md rounded-br-[100px] rounded-tl-[100px] border-[5px] border-primary-500 bg-red-400 sm:h-[235px] sm:w-[235px] xs:h-[235px] xs:w-[235px]">
          <Image src={ProfileImg} alt="프로필 이미지" className="absolute top-[-25px]" />
        </div>
        <div className="flex flex-col gap-[25px]">
          {Object.entries(PROFILE_INFORMATION).map(([key, value]) => (
            <div
              key={key}
              className="flex gap-[30px] sm:flex-col sm:gap-2.5 xs:flex-col xs:gap-2.5"
            >
              <div className="body-1 w-[91px] text-primary-500">{key}</div>
              <div className="body-4 text-black">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
