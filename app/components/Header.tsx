"use client"
import React, { useState, useEffect } from 'react';

interface Props {
    title: string;
}

const Header = ({ title = "" }: Props) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedDate = currentDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    const formattedTime = currentDate.toLocaleTimeString();

    return (
        <div className='font-inter text-3xl font-bold tracking-tight'>
            {title}
            <div className='mt-2 text-sm font-normal font-jetBrains text-[#969292]'>
                {formattedDate} <span>|</span> {formattedTime}
            </div>
        </div>
    );
}

export default Header;