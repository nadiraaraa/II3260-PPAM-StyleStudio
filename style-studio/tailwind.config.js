/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'lgreen1': '#DEDD91',
      'mgreen1': '#616219',
      'dgreen1': '#354A15',
      'cream1': '#FDF9EC',
      'white1': '#FDFDF9',
      'grey1': '#D9D9D9',
      'brown1': '#595454',
      'black1': '#1C1B1F'
    }
  },
  plugins: [],
}

