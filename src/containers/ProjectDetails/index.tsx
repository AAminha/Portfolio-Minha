import { SELPIECE } from '@src/constants/projectDetails'

import './index.css'

export default function ProjectDetails({ project }: { project: string }) {
  console.log(project)

  return (
    <main className="relative flex w-full flex-col items-center">
      <div
        className="absolute inset-0 z-0 h-[412px] w-full"
        style={{ background: `linear-gradient(to bottom, ${SELPIECE.mainColor}80, #FFFFFFFF)` }}
      />
      <div className="z-[1] flex flex-col gap-20 bg-gray-100 py-36 3xl:w-[1000px]">
        <section>
          <header className="mb-[60px] flex items-center gap-10">
            <div className="h-[136px] w-[136px] rounded-2xl border-[1px] border-gray-400 bg-yellow-400" />
            <div>
              <h1 className="title-2 mb-2.5 text-black">{SELPIECE.title}</h1>
              <h3 className="header-3 text-gray-600">{SELPIECE.subtitle}</h3>
            </div>
          </header>
          <div className="flex flex-col gap-5 p-5">
            <div className="flex">
              <span className="outline-title">기술 스택</span>
              <div className="flex items-center gap-3.5">
                {SELPIECE.skills.map((skill) => (
                  <span
                    key={skill}
                    className="body-4 rounded-lg bg-primary-500 px-3.5 py-[5px] text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="outline-title">참여 인원</span>
              <span className="header-6 text-gray-600">{SELPIECE.participant}</span>
            </div>
            <div>
              <span className="outline-title">진행 기간</span>
              <span className="header-6 text-gray-600">{SELPIECE.period}</span>
            </div>
          </div>
          <hr
            className="mt-2.5 h-0 w-full border-[1px]"
            style={{ borderColor: `${SELPIECE.mainColor}` }}
          />
        </section>
      </div>
    </main>
  )
}
