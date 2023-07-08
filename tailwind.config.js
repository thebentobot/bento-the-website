/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme: {
      extend: {
        animation: {
          'pulse-bento': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'bounce200': 'bounce 1s infinite 200ms',
          'bounce400': 'bounce 1s infinite 400ms',
        },
        colors: {
          discordBlue: '#7289da',
          typescript: '#007acc',
          postgresql: '#008bb9',
          tailwindcss: '#06B6D4',
          kofi: '#29ABE0',
          patreon: '#FF424D'
        }
      },
    },
  },
  plugins: [],
}
