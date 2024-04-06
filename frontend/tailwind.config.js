/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        globalText: "hsl(var(--globalText) /<alpha-value>)",
        background: "hsl(var(--background) /<alpha-value>)",

        navBackground: "hsl(var(--navBackground) /<alpha-value>)",
        navHover: "hsl(var(--navHover) /<alpha-value>)",

        searchPlaceholder: "hsl(var(--searchPlaceholder) /<alpha-value>)",
        searchBackground: "hsl(var(--searchBackground) /<alpha-value>)",
        focusSearchBackground: "hsl(var(--focus-searchBackground) /<alpha-value>)",
        searchIcon: "hsl(var(--searchIcon) /<alpha-value>)",

        buttonBackground: "hsl(var(--buttonBackground) /<alpha-value>)",
        buttonText: "hsl(var(--buttonText) /<alpha-value>)",
        buttonBorder: "hsl(var(--buttonBorder) /<alpha-value>)",
        hoverButtonBackground: "hsl(var(--hover-buttonBackground) /<alpha-value>)",
        hoverButtonText: "hsl(var(--hover-buttonText) /<alpha-value>)",

        buttonMovietext: "hsl(var(--buttonMovieText) /<alpha-value>)",
        hoverButtonMovieBackground: "hsl(var(--hover-buttonMovieBackground) /<alpha-value>)",
        hoverButtonMovieText: "hsl(var(--hover-buttonMovieText) /<alpha-value>)",
        
        accountIcon: "hsl(var(--accountIcon) /<alpha-value>)",

        footerBackground: "hsl(var(--footerBackground) /<alpha-value>)",
      },
      textColor: {
        background: "hsl(var(--background) /<alpha-value>)",
      },
      fontFamily: {
        globalFont: "var(--ff-global)",
      },
    },
  },
  plugins: [],
};
