import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
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
                success: {
                    DEFAULT: "#10b981",
                    foreground: "#ffffff",
                },
                warning: {
                    DEFAULT: "#f59e0b",
                    foreground: "#ffffff",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", ...fontFamily.sans],
                mono: ["var(--font-mono)", ...fontFamily.mono],
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
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-in-from-top": {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(0)" },
                },
                "slide-in-from-bottom": {
                    "0%": { transform: "translateY(100%)" },
                    "100%": { transform: "translateY(0)" },
                },
                "slide-in-from-left": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" },
                },
                "slide-in-from-right": {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0)" },
                },
                "scale-in": {
                    "0%": { opacity: "0", transform: "scale(0.9)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                "bounce-gentle": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-5px)" },
                },
                "pulse-soft": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.8" },
                },
                "gradient-shift": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.5s ease-out",
                "slide-in-from-top": "slide-in-from-top 0.5s ease-out",
                "slide-in-from-bottom": "slide-in-from-bottom 0.5s ease-out",
                "slide-in-from-left": "slide-in-from-left 0.5s ease-out",
                "slide-in-from-right": "slide-in-from-right 0.5s ease-out",
                "scale-in": "scale-in 0.3s ease-out",
                "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
                "pulse-soft": "pulse-soft 2s ease-in-out infinite",
                "gradient-shift": "gradient-shift 3s ease infinite",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-primary": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "gradient-secondary": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                "gradient-success": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config
