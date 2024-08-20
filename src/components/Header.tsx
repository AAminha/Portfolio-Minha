import { LogoWhite } from '@public/svg'

const HeaderContent = [
  { title: 'About Me' },
  { title: 'Archiving' },
  { title: 'Skills' },
  { title: 'Projects' },
]

export const Header = () => {
  return (
    <header className="bg-shadow-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-14 py-5">
        {/* TODO: 로고 클릭 시 스크롤 최상단으로 이동 */}
        <LogoWhite className="cursor-pointer" />
        <nav className="">
          <ul className="header-4 flex gap-x-10 text-white">
            {/* TODO: 스크롤 위치에 따라 메뉴 활성화 */}
            {/* TODO: 메뉴 클릭 시 해당 섹션으로 스크롤 이동 */}
            {HeaderContent.map((content) => (
              <li key={content.title} className="cursor-pointer">
                {content.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
