/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "hsl(var(--button) /<alpha-value>)",
        movie: "hsl(var(--movie) /<alpha-value>)",
        navHover: "hsl(var(--navHover) /<alpha-value>)",
        background: "hsl(var(--background) /<alpha-value>)",
        foreground: "hsl(var(--foreground) /<alpha-value>)",
      },
      textColor: {
        background: "hsl(var(--background) /<alpha-value>)",
        foreground: "hsl(var(--foreground) /<alpha-value>)",
      },
      fontFamily: {
        button: "var(--ff-btn)",
        global: "var(--ff-global)",
      },
      maxWidth: {
        ch: "60ch",
      },
      aspectRatio: {
        card: "1 / 1.25",
      },
      backgroundImage: {
        shape: "url('./assets/bgshapes.svg')",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  plugins: [],
};
