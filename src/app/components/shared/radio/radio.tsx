import { Checked } from "@/app/assets/svgs"
import React from "react"

type RadioButton = {
    id: string
    isChecked: boolean
}

export const Radio = ({ id, isChecked }: RadioButton) => {
    return (
        <div className='radio' aria-hidden>
            <label
                htmlFor={id}
                className='relative flex items-center justify-center w-[2.4rem] h-[2.4rem] overflow-hidden'>
                <input
                    type='radio'
                    aria-hidden
                    id={id}
                    name={id}
                    checked={isChecked}
                    readOnly
                />
                {isChecked && (
                    <div className='absolute z-2 w-[1.3rem] h-[1rem]'>
                        <Checked />
                    </div>
                )}
            </label>
        </div>
    )
}

export default Radio
