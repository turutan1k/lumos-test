"use client"

import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
import { Logo } from "../../assets/svgs"

export const HeaderLogo = () => {
    const pathname = usePathname()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === "/") {
            e.preventDefault()
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
    }

    return (
        <Link
            href='/'
            className='flex items-center justify-start gap-[0.4rem]'
            onClick={handleClick}>
            <Logo />
            <span className='text-[1.6rem] leading-[2.4rem] font-poppins font-[600]'>
                VPN
            </span>
        </Link>
    )
}

export default HeaderLogo
