import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { JobPostCard } from '.'

const LatestPosts = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className='mt-12'>
            <div className='flex justify-between items-center'>
                <h1 className={`font-semibold text-[22px] ${isDark && 'text-white'}`}>Latest Job Posts</h1>
                <div className={`flex items-center border ${isDark && 'border-[#696974]'} gap-2 px-3 py-2 text-[#696974] rounded-lg`}>See All <MdOutlineKeyboardArrowDown className='text-xl' /></div>
            </div>
            <div className='flex flex-wrap gap-8'>
                <JobPostCard />
                <JobPostCard />
                <JobPostCard />
                <JobPostCard />
            </div>
        </div>
    )
}

export default LatestPosts