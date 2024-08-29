import { StaticImageData } from 'next/image'

export interface ArchivingInformation {
  title: string
  icon: JSX.Element
  subtitle: string
  description: string[]
  link: string
}

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
