import React from 'react'
import { useSelector } from 'react-redux'

const JobDetailList = ({ title, list }) => {
    const isDark = useSelector(state => state.darkMode.value)
    console.log(list, 'list')
    return (
        <div className='px-4 flex flex-col gap-3'>
            <h2 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-[#171725]'}`}>{title}</h2>
            {list && list.map((item, index) => (
                <div key={index} className='flex gap-3'>
                    <div className='w-3 h-3 border-2 border-[#0BAB7C] rounded-full mt-2 shrink-0' />
                    <p className={`font-normal ${isDark ? 'text-[#E2E2EA]' : 'text-[#696974]'}`}>{item}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default JobDetailList