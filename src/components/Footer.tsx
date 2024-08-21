import React from 'react'

import { LogoDark } from '@public/svg'

const menuItems = [
  { title: 'Github', link: 'https://github.com/AAminha' },
  { title: 'Velog', link: 'https://velog.io/@min_ha' },
  { title: 'Instagram', link: 'https://www.instagram.com/dksminha/' },
  { title: 'Feedback', link: 'https://forms.gle/pdvgGXyC2pAQ2Tcu6' },
]

export const Footer = () => {
  return (
    <footer className="bg-gray-150">
      <div className="mx-auto flex max-w-[1218px] flex-col gap-[25px] px-[100px] py-[50px] sm:px-0 xs:px-5">
        <div className="flex items-center gap-[30px] sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse xl:gap-[50px] 2xl:gap-[50px] xs:flex-col-reverse 3xl:gap-[50px]">
          <LogoDark height="40" />
          <ul className="label-4 flex items-center gap-[15px] text-gray-700 sm:gap-2 xs:gap-2">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.title}>
                <li className="cursor-pointer">
                  <a
                    href={item.link}
                    key={item.title}
                    className="menu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                </li>
                {index < menuItems.length - 1 && (
                  <li>
                    <hr className="h-4 w-0 border-[1px] border-gray-700" />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="label-5 flex items-center justify-between sm:flex-col sm:gap-5 md:flex-col md:gap-5 lg:flex-col lg:gap-5 xl:items-end 2xl:items-end xs:flex-col xs:gap-5 3xl:items-end">
          <div className="text-gray-700">
            <p>전화번호 : 010-4857-0677</p>
            <p>이메일 : dks4857@gmail.com</p>
          </div>
          <p className="text-center text-gray-300">
            Copyright © 2024 Minha An.{` `}
            <br className="hidden sm:block xs:block" />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
