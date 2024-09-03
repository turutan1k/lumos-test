import React, { SVGProps } from "react"

export const Star = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.4rem'
            height='1.4rem'
            viewBox='0 0 14 14'
            fill='none'>
            <g clipPath='url(#clip0_439_117)'>
                <path
                    d='M8.81117 4.42068L12.9539 6.67787L8.81117 8.95319L6.54492 13.0868L4.27867 8.95319L0.135959 6.67787L4.27867 4.42068L6.54492 0.268906L8.81117 4.42068Z'
                    fill='#FF5D17'
                    stroke='white'
                    strokeWidth='0.748118'
                    strokeMiterlimit='10'
                />
            </g>
            <defs>
                <clipPath id='clip0_439_117'>
                    <rect
                        width='9.25594'
                        height='9.25594'
                        fill='white'
                        transform='translate(6.54492 0.142029) rotate(45)'
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Star
