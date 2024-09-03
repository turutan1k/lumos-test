"use client"

import React, { useState } from "react"
import Radio from "../radio/radio"

type RadioButtonProps = {
    text: string
    checked: boolean
    onClick: () => void
}

export const RadioButton = ({ text, checked, onClick }: RadioButtonProps) => {
    return (
        <div
            onClick={onClick}
            className='cursor-pointer w-full py-[3.2rem] px-[1rem] flex items-center justify-start gap-[0.8rem] rounded-[1.6rem] bg-white shadow-[0rem_0.209rem_1.106rem_0_rgba(0,0,0,0.25)]'>
            <Radio id={text} isChecked={checked} />
            <span className='h4'>{text}</span>
        </div>
    )
}

export default RadioButton
