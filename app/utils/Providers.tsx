"use client"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

interface Props {
    children: React.ReactNode
}


export const Providers = ({ children }: Props) => {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default Providers