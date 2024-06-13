const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        cloudfly: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(400px)" },
        },
        riseup: {
          "0%": { transform: "translateY(-px)" },
          "10%": { backgroundColor: "#FF99CC" },
          "20%": {
            backgroundColor: "#FF66B2",
            transform: "translateY(-130px)",
          },
          "30%": { backgroundColor: "#FF99CC" },
          "40%": { transform: "translateY(-0px)" },
          "100%": {},
        },
        rotateplus: {
          "0%": { transform: "rotate(0deg)", backgroundColor: "white" },
          "100%": { transform: "rotate(90deg)", backgroundColor: "black" },
        },
        rotateplusback: {
          "0%": { transform: "rotate(90deg)", backgroundColor: "black" },
          "100%": { transform: "rotate(0deg)", backgroundColor: "white" },
        },
        trianglescale: {
          "0%": {},
          "100%": { top: "40px" },
        },
        trianglescaleback: {
          "0%": { top: "40px" },
          "100%": {},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cloud-fly": "cloudfly 2s 1s linear infinite",
        "rise-up": "riseup 2s 0s ease-in-out infinite",
        "rise-up-1": "riseup 2s 0.4s ease-in-out infinite",
        "rise-up-2": "riseup 2s 0.8s ease-in-out infinite",
        "rise-up-3": "riseup 2s 1.2s ease-in-out infinite",
        "rise-up-4": "riseup 2s 1.6s ease-in-out infinite",
        "rotate-plus": "rotateplus .5s forwards",
        "rotate-plus-back": "rotateplusback .2s forwards",
        "triangle-scale": "trianglescale .2s forwards",
        "triangle-scale-back": "trianglescaleback .2s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
