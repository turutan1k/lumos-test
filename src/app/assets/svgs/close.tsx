import React, { SVGProps } from "react"

export const Close = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='2.4rem'
            height='2.4rem'
            viewBox='0 0 24 24'
            fill='none'>
            <path
                opacity='0.5'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19 6.4L17.6 5L12 10.6L6.4 5L5 6.4L10.6 12L5 17.6L6.4 19L12 13.4L17.6 19L19 17.6L13.4 12L19 6.4Z'
                fill='currentColor'
            />
        </svg>
    )
}

export default Close
