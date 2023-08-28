/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Cormorant Upright"],
      },
      colors: {
        mainText: "#dcca87",
      },
      keyframes: {
        downMenu: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        overlay: {
          from: { height: "0vh" },
          to: { height: "100vh" },
        },
        increase: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        landing: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0px)", opacity: "1" },
        },
        delay: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        downMenu: "downMenu 0.5s linear",
        delayedOpacity: "downMenu 1s ease-in",
        overlay: "overlay 0.2s linear forwards",
        "landing-content": "landing 0.8s linear",
        increase: "increase 0.5s linear forwards",
        loader: "delay 4s linear infinite",
      },
    },
  },
  plugins: [],
};
