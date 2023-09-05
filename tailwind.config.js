/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#018191',
        secondary: 'rgba(1, 129, 145, 0.17)',
         secondary: 'rgba(1, 129, 145, 0.17)',
         iconBackground: 'rgba(1, 129, 145, 0.17)',
        button: "#931602",
        login_background:"#FAEEE0",
        featuredTorquoise:'#003E71',
        featuredBackground:'#003e71',
        featuredBackground:'#931602'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  }
}
