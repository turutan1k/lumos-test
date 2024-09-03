import localFont from "next/font/local"

export const poppins = localFont({
    src: [
        {
            path: "./Poppins-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./Poppins-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./Poppins-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./Poppins-Regular.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-poppins",
    display: "swap",
    adjustFontFallback: false,
})
