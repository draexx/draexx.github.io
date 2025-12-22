/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0e3146',   // Para tu nombre "Pedro Carranza"
          blue: '#2a99c9',   // Para "Bits" y tecnología
          orange: '#e9691e', // Para "Bots", IA y botones de acción
        },
      },
    },
  },
  plugins: [],
}