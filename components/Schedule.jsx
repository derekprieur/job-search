import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { ScheduleCard } from '.'

const Schedule = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className={`mt-10 flex flex-col justify-between rounded-lg px-4 py-5 gap-4 ${isDark ? 'bg-[#1C1C24]' : 'bg-white'}`}>
            <div className='flex justify-between items-center'>
                <h1 className={`font-semibold text-[22px] ${isDark && 'text-white'}`}>Schedule</h1>
                <div className='flex items-center'>
                    <p className='text-[#92929D]'>Sort by: <span className='text-[#0BAB7C]'>This Week</span></p>
                    <MdOutlineKeyboardArrowDown className='text-xl text-[#808191]' />
                </div>
            </div>
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <div className='flex justify-center mt-4'>
                <button className={`w-full text-[#92929D] py-4 rounded-lg ${isDark ? 'bg-[#21212B]' : 'bg-[#F5F5F8]'}`}>See All Schedule</button>
            </div>
        </div>
    )
}

export default Schedule