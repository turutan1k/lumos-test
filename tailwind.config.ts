import type { Config } from "tailwindcss"
import type { PluginAPI } from "tailwindcss/types/config"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        {
            pattern: /grid-cols-/,
            variants: ["md", "sm"],
        },
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            blue: "rgba(var(--color-blue), <alpha-value>)",
            orange: "rgba(var(--color-orange), <alpha-value>)",
            black: "rgba(var(--color-black), <alpha-value>)",
            grey: "rgba(var(--color-grey), <alpha-value>)",
            white: "rgba(var(--color-white), <alpha-value>)",
            hover: "rgba(var(--color-hover), <alpha-value>)",
        },
        screens: {
            md: { max: "768px" },
            sm: { max: "480px" },
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        ({ addComponents }: PluginAPI) => {
            addComponents({
                ".container": {
                    maxWidth: "89.2rem",
                    "@screen md": {
                        maxWidth: "89.2rem",
                    },
                    "@screen sm": {
                        maxWidth: "39.6rem",
                    },
                },
            })
        },
    ],
}
export default config
