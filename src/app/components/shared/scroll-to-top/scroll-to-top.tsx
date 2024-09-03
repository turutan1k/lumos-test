"use client"

import { useEffect } from "react"
import React from "react"

export const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [])
    return null
}

export default ScrollToTop
