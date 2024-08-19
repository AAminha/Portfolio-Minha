import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
          black: 'rgb(0, 0, 0, 0.25)',
          primary: 'rgb(31, 27, 84, 0.7)',
          white: 'rgb(255, 255, 255, 0.3)',
        },
        github: '#1F2328',
        velog: '#20C997',
      },
      fontFamily: {
        Kanit: ['Kanit', 'sans-serif'],
        NanumSquareNeo: ['NanumSquareNeo', 'sans-serif'],
        SpoqaHanSansNeo: ['SpoqaHanSansNeo', 'sans-serif'],
      },
      screens: {},
    },
  },
  plugins: [],
}
export default config
