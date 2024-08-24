import { AboutMe } from '@src/containers/AboutMe'
import { Archiving } from '@src/containers/Archiving'
import { Intro } from '@src/containers/Intro'
import { Projects } from '@src/containers/Projects'
import { Skills } from '@src/containers/Skills'

export default function Page() {
  return (
    <main>
      <Intro />
      <AboutMe />
      <Archiving />
      <Skills />
      <Projects />
    </main>
  )
}
