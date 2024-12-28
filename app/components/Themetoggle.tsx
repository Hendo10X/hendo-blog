"use client"
import { useTheme } from 'next-themes'


const Themetoggle = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className='flex gap-2'>
            <button onClick={() => setTheme('light')}>L</button>
            <span>|</span>
            <button onClick={() => setTheme('dark')}>D</button>
        </div>
    )
}

export default Themetoggle