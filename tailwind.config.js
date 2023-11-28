/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          "theme-base": "var(--color-text-theme-base)",
          "theme-muted": "var(--color-text-theme-muted)",
          "lm-base": "var( --color-text-lm-base)",
          "lm-muted": "var( --color-text-lm-muted)",
          "dm-base": "var( --color-text-dm-base)",
          "dm-muted": "var( --color-text-dm-muted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "dm-fill": "var(--color-dm-fill)",
          "lm-fill": "var(--color-lm-fill)",
          "dm-fill-hover": "var(--color-dm-fill-hover)",
          "lm-fill-hover": "var(--color-lm-fill-hover)",
          "theme-fill": "var(--color-theme-fill)",
        },
      },
    },
  },
  plugins: [],
};
