/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        technical: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#3498db',
          hover: '#2980b9',
          foreground: '#ffffff',
        },
        brand: {
          navy: '#0e3146',   // Para tu nombre "Pedro Carranza"
          blue: '#2a99c9',   // Para "Bits" y tecnología
          orange: '#e9691e', // Para "Bots", IA y botones de acción
          geekeando: '#e67e22',
          bitsabots: '#2ecc71',
        },
        background: {
          dark_main: '#0b1a21',
          dark_terminal: '#050c0f',
          light_paper: '#ffffff',
        },
        status: {
          error: '#e74c3c',
          warning: '#f1c40f',
          success: '#27ae60',
          info: '#3498db',
        },
      },
    },
  },
  plugins: [],
}