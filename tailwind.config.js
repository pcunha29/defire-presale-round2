module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xsTiny: ".375rem",
        xsExtra: ".625rem",
      },
      colors: {
        "defire-dark": "#182120",
        "defire-purple": "#2D3266",
        "defire-light-purple": "#ADCEFF",
        "defire-blue": "#4855AD",
        "defire-cyan": "#61E0FF",
        "defire-red": "#F64B51",
        "defire-water": "#ECF4FF",
      },
      width: {
        630: "39.375rem",
        485: "30.313rem",
        352: "22rem",
      },
      inset: {
        "465px": "465px",
        "485px": "485px",
      },
    },
    fontFamily: {
      SpaceGrotesk: ["Space Grotesk, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1366px",
        xl: "1366px",
        "2xl": "1366px",
      },
    },
  },
  plugins: [],
};
