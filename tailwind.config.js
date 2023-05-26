/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        image: '16 / 9',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
