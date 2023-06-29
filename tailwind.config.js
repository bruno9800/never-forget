/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-side': " linear-gradient(225deg, rgba(255, 255, 255, 0.80) 0%, rgba(97, 83, 204, 0.16) 97.40%)",
        'gradient-red-black': '#5E0000, #B51313'
      },
    },
  },
  plugins: [],
}
