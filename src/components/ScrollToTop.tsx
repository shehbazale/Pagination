'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState<boolean | null>(false);
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <>
            {isVisible && (<button
                className="fixed flex justify-center items-center animate-pulse bottom-12 right-0 bg-slate-300 rounded-full  mr-6  z-50 opacity-85  text-xs  gap-2 w-12 h-12 transition-all ease-in-out duration-500 hover:opacity-100 hover:shadow-lg"
                onClick={scrollTop}
            >
                <FaArrowUp size={15} />
            </button>)}
        </>
    )
}

export default ScrollToTop