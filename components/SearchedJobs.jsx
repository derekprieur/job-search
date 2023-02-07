import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { SearchedJobCard } from '.'


const SearchedJobs = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className='flex flex-col'>
            <div className='my-9 flex flex-col'>
                <div className='flex justify-between'>
                    <p className='text-[#92929D]'>Showing: <span className={`font-bold ${isDark ? 'text-white' : 'text-[#171725]'}`}>125 Jobs</span></p>
                    <div className={`flex items-center ${isDark ? 'text-[#E2E2EA]' : 'text-[#171725]'}`}>Relevance <MdOutlineKeyboardArrowDown className='text-xl' /></div>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <SearchedJobCard />
                <SearchedJobCard />
                <SearchedJobCard />
                <SearchedJobCard />
                <SearchedJobCard />
            </div>
        </div>
    )
}

export default SearchedJobs