/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hypiq-accent': '#4ade80',
        'hypiq-accent-hover': '#22c55e',
        'hypiq-background': '#0a1a15',
        'hypiq-card': '#12191d',
        'hypiq-border': '#1a2125',
        'kalshi-accent': '#4ade80',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom 6s ease-in-out infinite',
        'star-movement-top': 'star-movement-top 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
