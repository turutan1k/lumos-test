import localFont from "next/font/local"

export const roboto = localFont({
    src: [
        {
            path: "./Roboto-Medium.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-roboto",
    display: "swap",
    adjustFontFallback: false,
})
