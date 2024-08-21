'use client'

import { useState } from 'react'

import { LogoWhite, MenuIcon } from '@public/svg'
import { useWindowWidth } from '@src/hooks/useWindowWidth'

const NavContent: { [key: string]: string }[] = [
  { title: 'About Me' },
  { title: 'Archiving' },
  { title: 'Skills' },
  { title: 'Projects' },
]

export const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  const currentWidth = useWindowWidth()

  return (
    <header className="fixed w-full bg-shadow-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-14 py-4 sm:px-5 xs:px-5">
        {/* TODO: 로고 클릭 시 스크롤 최상단으로 이동 */}
        <LogoWhite className="h-12 cursor-pointer sm:h-[34px] xs:h-[34px]" />
        <nav className="">
          <ul className="header-4 flex gap-x-10 text-white sm:hidden md:hidden lg:hidden xs:hidden">
            {/* TODO: 스크롤 위치에 따라 메뉴 활성화 */}
            {/* TODO: 메뉴 클릭 시 해당 섹션으로 스크롤 이동 */}
            {NavContent.map((content) => (
              <li key={content.title} className="cursor-pointer hover:text-secondary-300">
                {content.title}
              </li>
            ))}
          </ul>
          <MenuIcon
            className="h-11 cursor-pointer xl:hidden 2xl:hidden xs:h-10 3xl:hidden"
            onClick={() => setIsOpenMobileMenu((prev) => !prev)}
          />
        </nav>
      </div>
      {isOpenMobileMenu && currentWidth <= 960 && (
        <nav className="mx-14 py-2">
          <ul className="header-4 text-white">
            {/* TODO: 스크롤 위치에 따라 메뉴 활성화 */}
            {/* TODO: 메뉴 클릭 시 해당 섹션으로 스크롤 이동 + 메뉴바 닫히도록 */}
            {NavContent.map((content) => (
              <li key={content.title} className="cursor-pointer px-12 py-6">
                {content.title}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
