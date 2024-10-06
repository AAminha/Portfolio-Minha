import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        screen: '125vw',
      },
      height: {
        screen: '125vh',
      },
      colors: {
        default: {
          black: '#000000',
          white: '#FFFFFF',
        },
        gray: {
          950: '#100B0D',
          900: '#171717',
          800: '#242424',
          700: '#333333',
          600: '#555555',
          500: '#6F6F6F',
          400: '#8B8B8B',
          300: '#A5A5A5',
          250: '#C1C1C1',
          200: '#DFDFDF',
          150: '#EFEFEF',
          100: '#F7F7F7',
          50: '#FBFBFB',
        },
        primary: {
          900: '#1F1B54',
          500: '#31398E',
          400: '#3D49C6',
          300: '#EAE9FF',
          100: '#F0EFF4',
        },
        secondary: {
          900: '#EFCB6D',
          300: '#FAECC8',
        },
        shadow: {
          black: 'rgb(0, 0, 0, 0.4)',
          primary: 'rgb(31, 27, 84, 0.7)',
          white: 'rgb(255, 255, 255, 0.3)',
        },
        github: '#2D3239',
        velog: '#20C997',
        velogDark: '#1BAB81',
        youtube: '#E7161A',
        youtubeDark: '#B31215',
      },
      fontFamily: {
        Kanit: ['Kanit', 'sans-serif'],
        NanumSquareNeo: ['NanumSquareNeo', 'sans-serif'],
        SpoqaHanSansNeo: ['SpoqaHanSansNeo', 'sans-serif'],
      },
      screens: {
        xs: { max: '375px' },
        sm: { min: '375px', max: '640px' },
        md: { min: '640px', max: '768px' },
        lg: { min: '768px', max: '960px' },
        xl: { min: '961px', max: '1024px' },
        '2xl': { min: '1024px', max: '1280px' },
        '3xl': { min: '1280px' },
      },
      boxShadow: {
        blackShadow: '5px 5px 20px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
export default config
