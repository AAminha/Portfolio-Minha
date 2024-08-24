import { Metadata } from 'next'

import { Footer } from '@src/components/Footer'
import { Header } from '@src/components/Header'
import { SectionProvider } from '@src/contexts/SectionContext'
import '@src/styles/font.css'
import '@src/styles/globals.css'

export const metadata: Metadata = {
  title: {
    template: "%s | 민하's 포트폴리오",
    default: "민하's 포트폴리오",
  },
  description: '안녕하세요. 프론트 개발자를 꿈꾸는 안민하입니다.',
  icons: {
    icon: '/logo/favicon.svg',
  },
  /* robots: 'index, follow',
  openGraph: {
    title: "민하's 포트폴리오",
    description: '안녕하세요. 프론트 개발자를 꿈꾸는 안민하입니다.',
    type: 'website',
    locale: 'ko_KR',
    url: '미정',
    siteName: "민하's 포트폴리오",
    images: [
      {
        url: '/svgs/favicon.svg',
        width: 800,
        height: 600,
        alt: "민하's 포트폴리오",
      },
    ],
  }, */
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <SectionProvider>
          <Header />
          <main>{children}</main>
        </SectionProvider>
        <Footer />
      </body>
    </html>
  )
}
