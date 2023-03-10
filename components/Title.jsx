import React from 'react'
import { useSelector } from 'react-redux'

const Title = ({ title }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const date = new Date()
    return (
        <div className='py-7'>
            <h1 className={`font-bold text-[22px] md:text-3xl ${isDark && 'text-[#F5F5F8]'}`}>{title}</h1>
            <p className='text-[#92929D] md:text-lg mt-2'>{date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
    )
}

export default Title