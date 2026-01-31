/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B3A65', // Deep Blue
        secondary: '#F2A900', // Orange-Gold (CTA)
        accent: '#0A4D2E', // Dark Green (Highlights)
        light: '#F7F9FC', // Off White Section BG
        dark: '#111827', // Heading Text
        body: '#374151', // Body Text
        muted: '#6B7280', // Muted Text
        border: '#E5E7EB', // Borders
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, rgba(11,58,101,0.92), rgba(10,77,46,0.72))',
      }
    },
  },
  plugins: [],
}
