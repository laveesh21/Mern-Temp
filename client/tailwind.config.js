/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '108': '27rem',   // 27rem (432px)
        '116': '29rem',   // 29rem (464px)
        '124': '31rem',   // 31rem (496px)
        '132': '33rem',
        '136': '34rem',
        '144': '36rem',   // 36rem (576px)
        '160': '40rem',   // 40rem (640px)
        '168': '42rem',
        '176': '44rem',
      },
      height: {
        '108': '27rem',   // 27rem (432px)
        '116': '29rem',   // 29rem (464px)
        '124': '31rem',   // 31rem (496px)
        '144': '36rem',   // 36rem (576px)
        '160': '40rem',   // 40rem (640px)
      }
    }
  },
  plugins: [],
}

