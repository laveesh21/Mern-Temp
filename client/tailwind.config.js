/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white-soft': '0 -2px 4px rgba(255, 255, 255, 0.2), 0 8px 12px rgba(255, 255, 255, 0.15)',
      },
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

