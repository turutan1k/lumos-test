"use client"

import { InputLock } from "@/app/assets/svgs"
import React, { useState, ChangeEvent } from "react"

type InputProps = {
    type?: string
    label: string
    placeholder: string
    id: string
    onChange: (value: string) => void
    checkValid?: (isValid: boolean) => void
}

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const Input: React.FC<InputProps> = ({
    type = "text",
    label,
    placeholder,
    id,
    onChange,
    checkValid,
}) => {
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.trim()
        setValue(newValue)
        onChange(newValue)
    }

    const handleBlur = () => {
        let inputValid = true
        if (type === "text") {
            inputValid = value !== ""
        }
        if (type === "email") {
            inputValid = value === "" || isValidEmail(value)
        }
        setError(!inputValid)
        if (checkValid) checkValid(inputValid)
    }

    return (
        <div className='flex flex-col gap-[0.8rem]'>
            <input
                type={type}
                value={value}
                id={id}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder}
                className='hover:border-hover transition outline-none p border-[0.1rem] border-grey rounded-[1.6rem] bg-[#F8F8F8] px-[1.6rem] pt-[1.4rem] pb-[2rem] sm:pt-[1.6rem] sm:pb-[1.2rem] text-[#B5B5B5] focus:text-black'
            />
            {error && (
                <div className='flex gap-[0.8rem] items-center justify-start'>
                    <span className='text-[1.3rem] leading-[1.8rem] text-[#FF0000] font-[500]'>
                        Check that the entered data is correct
                    </span>
                </div>
            )}
            {label && (
                <div className='flex gap-[0.8rem] items-center justify-start'>
                    <InputLock />{" "}
                    <span className='text-[1.3rem] leading-[1.8rem] text-[#646464] font-[500]'>
                        {label}
                    </span>
                </div>
            )}
        </div>
    )
}

export default Input
