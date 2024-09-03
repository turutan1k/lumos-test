"use client"

import { Close } from "@/app/assets/svgs"
/* eslint-disable unicorn/prevent-abbreviations */

import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock"
import React, { ReactNode, useEffect } from "react"

type ModalProps = {
    onClose: () => void
    children: ReactNode
}

export const Modal = ({ onClose, children }: ModalProps) => {
    const scrollDivRef = React.useRef(null)

    useEffect(() => {
        if (scrollDivRef.current) {
            disableBodyScroll(scrollDivRef.current, {
                reserveScrollBarGap: true,
            })
        }

        return () => {
            clearAllBodyScrollLocks()
        }
    }, [])

    return (
        <div
            className='py-[9.8rem] fixed inset-0 z-[9] flex cursor-pointer items-start justify-center bg-white transition sm:z-[11] sm:py-[2.4rem]'
            onClick={onClose}
            role='dialog'
            aria-modal='true'>
            <div
                className='scrolled-container w-full relative container h-full overflow-y-auto bg-[#fff]'
                onClick={(event) => {
                    event.stopPropagation()
                }}
                ref={scrollDivRef}>
                <div
                    className='absolute right-[0] top-[0] flex items-center justify-center cursor-pointer w-[2.4rem] h-[2.4rem] text-grey hover:text-orange transition'
                    onClick={onClose}>
                    <Close />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal
