import React from "react"

type InfoCardProps = {
    data: {
        count: number
        description: string
        logo: React.ReactNode
    }
}

export const InfoCard = ({
    data: { count, description, logo },
}: InfoCardProps) => {
    return (
        <div className='flex gap-[1rem] items-center'>
            {logo}
            <div className='flex flex-col items-start justify-center'>
                <span className='h3'>{count}+</span>
                <p className='text-grey'>{description}</p>
            </div>
        </div>
    )
}

export default InfoCard
