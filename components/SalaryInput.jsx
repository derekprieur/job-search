import React from 'react'
import { useSelector } from 'react-redux'

const SalaryInput = ({ title, salaryInput, setSalaryInput, field }) => {
    const isDark = useSelector(state => state.darkMode.value)

    const handleChange = (e) => {
        setSalaryInput({ ...salaryInput, [field]: e.target.value })
    }
    return (
        <div className='mb-5 md:w-full'>
            <h3 className={`${isDark ? 'text-[#E2E2EA]' : 'text-[#92929D]'}`}>{title}</h3>
            <input type="text" value={salaryInput.title} onChange={(handleChange)} placeholder='Enter value' className={`px-5 py-3 mt-2 rounded-lg  outline-none w-full border  placeholder:font-normal font-bold ${isDark ? 'bg-[#1C1C24] text-[#696974] border-[#44444F]' : 'bg-[#F1F1F5] border-[#F1F1F5] text-[#44444F]'}`} />
        </div>
    )
}

export default SalaryInput