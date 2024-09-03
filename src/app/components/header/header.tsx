import React from "react"
import Link from "next/link"
import { Button } from "../shared"
import { HeaderLogo } from "../header-logo"

export const Header = () => {
    return (
        <div className='bg-white z-[10] fixed w-full top-0 py-[1.8rem] px-[1.6rem] shadow-[0rem_0.4rem_1.6rem_0_rgba(0,0,0,0.14)] flex items-center justify-between'>
            <HeaderLogo />
            <Button
                as={Link}
                href={"#choose-your-name"}
                variant='blue'
                className='flex items-center justify-center'>
                Get VPN
            </Button>
        </div>
    )
}

export default Header
