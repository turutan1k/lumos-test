import React from "react"
import { Star } from "@/app/assets/svgs"

type AdvantagesCardProps = {
    data: {
        title: string
        description: string
        logo: React.ReactNode
    }
}

export const AdvantagesCard = ({
    data: { title, description, logo },
}: AdvantagesCardProps) => {
    const [titleOrange, ...titleBlueArray] = title.split(" ")
    const titleBlue = titleBlueArray.join(" ")

    return (
        <div className='w-[42.4rem] flex flex-col gap-[0.8rem] items-center py-[1.6rem]'>
            <div className='w-[10.4rem] h-[5.2rem] flex items-center justify-center gap-[1.3rem] sm:mb-[0.8rem]'>
                <Star />
                <div className='w-[5rem] h-[5rem] bg-blue rounded-full flex items-center justify-center'>
                    {logo}
                </div>
                <Star />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span className='h2 text-orange'>{titleOrange}</span>
                <span className='h2 text-blue'>{titleBlue}</span>
            </div>
            <p className='text-center text-grey'>{description}</p>
        </div>
    )
}

export default AdvantagesCard
