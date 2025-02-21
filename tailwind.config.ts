import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fern_green: {
          DEFAULT: '#4b7f52',
          100: '#0f1a11',
          200: '#1e3321',
          300: '#2d4d32',
          400: '#3c6742',
          500: '#4b7f52',
          600: '#65a46d',
          700: '#8bbb92',
          800: '#b2d2b6',
          900: '#d8e8db',
        },
        bright_pink_crayola: {
          DEFAULT: '#ff5964',
          100: '#440005',
          200: '#890009',
          300: '#cd000e',
          400: '#ff1222',
          500: '#ff5964',
          600: '#ff7881',
          700: '#ff9aa1',
          800: '#ffbcc0',
          900: '#ffdde0',
        },
        alabaster: {
          DEFAULT: '#ede7d9',
          100: '#3e341d',
          200: '#7b683a',
          300: '#b3995d',
          400: '#d0c09b',
          500: '#ede7d9',
          600: '#f1ece0',
          700: '#f4f1e8',
          800: '#f8f5f0',
          900: '#fbfaf7',
        },
        lapis_lazuli: {
          DEFAULT: '#38618c',
          100: '#0b131c',
          200: '#162637',
          300: '#213953',
          400: '#2c4c6f',
          500: '#38618c',
          600: '#4a7fb7',
          700: '#779fc9',
          800: '#a5bfdb',
          900: '#d2dfed',
        },
        argentinian_blue: {
          DEFAULT: '#35a7ff',
          100: '#00233d',
          200: '#00457a',
          300: '#0068b8',
          400: '#008bf5',
          500: '#35a7ff',
          600: '#5cb8ff',
          700: '#85caff',
          800: '#addcff',
          900: '#d6edff',
        }
      },
      fontFamily: {
        bodoni: ['"Bodoni Moda SC"', 'serif'],
        
      },
    },
  },
  plugins: [],
} satisfies Config;
