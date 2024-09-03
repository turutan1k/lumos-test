import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer, Header, ScrollToTop } from "./components"
import { poppins } from "./assets/fonts/poppins"
import { roboto } from "./assets/fonts/roboto"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Lumos Test",
    description: "developed by Nikita Turuta",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className={`${poppins.variable} ${roboto.variable}`} lang='en'>
            <head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
            </head>
            <body>
                {/* <ScrollToTop /> */}
                <Header />
                <main className='relative min-h-[100vh] pt-[7.9rem] pb-[7.5rem] sm:pt-[4.2rem]'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
