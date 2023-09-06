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
         nearme:'#01819140',
        button: "#931602",
        login_background:"#FAEEE0",
        featuredTorquoise:'#003E71',
        featuredBackground:'#931602',
        searchPageText:'#018191',
        Background:'#01819140',
        SearchResultText:'#78828a',
        Text:'#F0E4F4',
        paginationButton:"#A37F4F",
        Mscorebg:"#93160240",
        sortbybg:"#0181911f"
      },
      fontSize:{
        'custom':'3.39375rem',
        'custom1':'1.1875rem'
      },
      fontWeight:{
        'custom':'800',
        'custom1':'400'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
