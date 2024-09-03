"use client"

import React, { useState } from "react"
import { RadioButton } from "../../shared"
import { Button, Input, Modal } from "../../shared"

type User = {
    id: number
    name: string
}

type UsersBlockProps = {
    data: User[]
}
export const UsersBlock = ({ data }: UsersBlockProps) => {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isValidEmail, setIsValidEmail] = useState(false)
    return (
        data?.length > 0 && (
            <>
                <div className='w-full flex flex-col gap-[1.6rem]'>
                    {data?.map((item) => (
                        <RadioButton
                            checked={name === item?.name}
                            key={item?.id}
                            text={item?.name}
                            onClick={() => setName(item?.name)}
                        />
                    ))}
                </div>
                <Button
                    onClick={() => {
                        setOpen(true)
                    }}
                    disabled={name === ""}
                    variant='primary'
                    className='w-full flex items-center justify-center'>
                    Get VPN
                </Button>
                {open && (
                    <Modal
                        onClose={() => {
                            setOpen(false)
                        }}>
                        <div className='pt-[4rem] flex flex-col gap-[3.2rem]'>
                            <span className='h2'>Your name</span>
                            <p>{name}</p>
                            <Input
                                placeholder='Enter your email'
                                label='Your information is 100% secure. We don’t share your personal information.'
                                type='email'
                                id='modal-email'
                                onChange={setEmail}
                                checkValid={setIsValidEmail}
                            />
                            <Button
                                disabled={email === "" || !isValidEmail}
                                variant='primary'
                                onClick={() => {
                                    console.log("email:", email)
                                    setName("")
                                    setOpen(false)
                                }}
                                className='w-full flex items-center justify-center mt-[0.8rem]'>
                                Continue
                            </Button>
                        </div>
                    </Modal>
                )}
            </>
        )
    )
}

export default UsersBlock
