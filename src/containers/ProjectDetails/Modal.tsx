'use client'

import { useEffect } from 'react'

import { CancelIcon } from '@public/icons'

interface ModalProps {
  children: React.ReactNode
}

export const Modal = ({ children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-10 h-screen w-screen bg-shadow-black">
      <div className="absolute inset-[2%] flex gap-[26px]">
        <div className="w-[80px]" />
        <section className="grow bg-white">{children}</section>
        <aside className="my-[25px] flex w-[80px] flex-col items-center gap-[30px]">
          <button className="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-gray-400 hover:bg-gray-300">
            <CancelIcon />
          </button>
          {/* TODO: 모달 내용마다 적절한 버튼이 위치하도록 수정 */}
          {/* <Button text="배포 링크">
            <LinkIcon />
          </Button>
          <Button text="유튜브">
            <YoutubeBlackIcon />
          </Button>
          <Button text="깃허브">
            <GithubBlackIcon />
          </Button>
          <Button text="관련 벨로그">
            <VelogBlackIcon />
          </Button> */}
        </aside>
      </div>
    </div>
  )
}
