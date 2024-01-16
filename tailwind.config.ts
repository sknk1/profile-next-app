import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-light-custom': '#555555',
        'gray-custom': '#151515',
        'yellow-custom': '#FDB827'
      }
    },
  },
  plugins: [],
}
export default config
