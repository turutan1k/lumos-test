import { cn } from "./../../../lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React, { ElementType, ComponentPropsWithoutRef } from "react"

const buttonVariants = cva(
    "flex items-center justify-center rounded-[0.5rem] gap-[1rem] duration-300",
    {
        variants: {
            variant: {
                primary:
                    "text-[2.4rem] leading-[3.2rem] bg-orange text-white rounded-[1.6rem] hover:bg-hover transition py-[1.6rem] poppins font-[700]",
                blue: "text-[1.4rem] leading-[1.8rem] bg-blue text-white rounded-[2.4rem] py-[1.1rem] px-[2.6rem] roboto font-[600]",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
)

type ButtonProps<T extends ElementType = "button"> = {
    as?: T
    className?: string
    disabled?: boolean
} & VariantProps<typeof buttonVariants> &
    ComponentPropsWithoutRef<T>

const Button = <T extends ElementType = "button">({
    as,
    className,
    variant,
    disabled,
    ...properties
}: ButtonProps<T>) => {
    const Component = as || "button"
    return (
        <Component
            className={cn(
                disabled
                    ? "user-select-none pointer-events-none opacity-50"
                    : "",
                buttonVariants({ variant, className })
            )}
            disabled={disabled}
            {...properties}
        />
    )
}

export { Button, buttonVariants }
