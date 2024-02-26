/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '128': '32rem',  // 添加自定义的最小宽度值
        '144': '36rem',  // 你可以根据需要继续添加更大的值
      },
    },
  },
  plugins: [],
}

