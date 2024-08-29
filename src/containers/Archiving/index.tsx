'use client'

import { ARCHIVING_INFORMATION } from '@src/constants/profile'
import { Card } from '@src/containers/Archiving/Card'
import { useSectionRefs } from '@src/contexts/SectionContext'

export const Archiving = () => {
  const sectionRef = useSectionRefs()

  return (
    <section
      id="archiving"
      ref={sectionRef.archiving}
      className="flex flex-col items-center bg-secondary-300 px-[30px] py-[120px]"
    >
      <h1 className="sm:title-4 xs:title-4 title-3 mb-[70px] text-primary-500">Archiving</h1>
      <div className="flex w-full max-w-[936px] flex-wrap items-center justify-between gap-[30px] sm:justify-center md:justify-center lg:justify-center xs:justify-center">
        {ARCHIVING_INFORMATION.map((info) => (
          <Card key={info.title} information={info} />
        ))}
      </div>
    </section>
  )
}
