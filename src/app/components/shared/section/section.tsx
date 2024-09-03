import React, { ReactNode } from "react"

type SectionProps = {
    id?: string
    children: ReactNode
}
export const Section = ({ id, children }: SectionProps) => {
    return (
        <section id={id} className='global-container pt-[7.2rem] sm:pt-[4rem]'>
            <div className='container'>{children}</div>
        </section>
    )
}

export default Section
