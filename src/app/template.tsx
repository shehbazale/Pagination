'use client'
import { motion } from 'framer-motion'
import React from 'react'

const Template = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.90 }}
        >
            {children}
        </motion.div>
    )
}

export default Template