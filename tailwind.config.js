module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      // primary: "#ffc107",
      primary: "#ecc707",
      secondary: "#fd7e14",
      yellow: "#ecc707",
      gray: {
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        9001: "#888",
      },
      error: {
        400: "#ef233c",
        800: "#d80032",
      },
      info: {
        400: "#5fbff9",
        800: "#5863f8",
      },
      overlay: "#1432585CE6",
    },
    fontFamily: {
      reg: "ModernEra-Regular",
      med: "ModernEra-Medium",
    },
    fontSize: {
      xss: ["12px", "18px"],
      xs: ["14px", "20px"],
      sm: ["16px", "22px"],
      base: ["18px", "24px"],
      lg: ["24px", "28px"],
      xl: ["26px", "32px"],
      "2xl": ["28px", "35px"],
      "3xl": ["32px", "38px"],
    },

    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
