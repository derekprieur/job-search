import React from 'react'
import { useSelector } from 'react-redux'

const SalaryInput = ({ title }) => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className='mb-5'>
            <h3 className={`${isDark ? 'text-[#E2E2EA]' : 'text-[#92929D]'}`}>{title}</h3>
            <input type="text" placeholder='Enter value' className={`px-5 py-3 mt-2 rounded-lg  outline-none w-full border max-w-md ${isDark ? 'bg-[#1C1C24] text-[#696974] border-[#44444F]' : 'bg-[#F1F1F5] border-[#F1F1F5] text-[#44444F]'}`} />
        </div>
    )
}

export default SalaryInput