import React from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

import { FilterOption } from '.'

const SearchFilterList = () => {
    const isDark = useSelector(state => state.darkMode.value)
    const searchFilter = useSelector(state => state.searchFilter.value)
    console.log(searchFilter, 'searchFilter searchFilterList')
    return (
        <div className='w-full flex flex-col'>
            <div className='flex items-center justify-between w-full'>
                <h2 className={`font-bold text-lg ${isDark && 'text-white'}`}>Type Of Employment</h2>
                <MdOutlineKeyboardArrowUp className='text-[#808191] text-2xl' />
            </div>
            <div className='mt-5 flex flex-col gap-3'>
                <FilterOption title='Full Time' count='103' type='employment' />
                <FilterOption title='Part Time' count='142' type='employment' />
                <FilterOption title='Internship' count='142' type='employment' />
                <FilterOption title='Freelance' count='142' type='employment' />
                <FilterOption title='Remote' count='142' type='employment' />
                <FilterOption title='Co-founder' count='142' type='employment' />
                <FilterOption title='Contract' count='142' type='employment' />
            </div>
            <div className='flex items-center justify-between w-full mt-8'>
                <h2 className={`font-bold text-lg ${isDark && 'text-white'}`}>Experience Level</h2>
                <MdOutlineKeyboardArrowUp className='text-[#808191] text-2xl' />
            </div>
            <div className='mt-5 flex flex-col gap-3'>
                <FilterOption title='Senior Level' count='103' type='experience' />
                <FilterOption title='Entry Level' count='142' type='experience' />
                <FilterOption title='Mid Level' count='142' type='experience' />
                <FilterOption title='Student Level' count='142' type='experience' />
                <FilterOption title='Directors' count='142' type='experience' />
                <FilterOption title='VP or Above' count='142' type='experience' />
                <FilterOption title='Contract' count='142' type='experience' />
            </div>
            <div className='flex items-center justify-between w-full mt-8'>
                <h2 className={`font-bold text-lg ${isDark && 'text-white'}`}>Salary Range</h2>
                <MdOutlineKeyboardArrowUp className='text-[#808191] text-2xl' />
            </div>
            <div className='mt-5 flex flex-col gap-3'>
                <FilterOption title='$0 - $100' count='103' type='salaryRange' />
                <FilterOption title='$101 - $200' count='142' type='salaryRange' />
                <FilterOption title='$201 - $500' count='142' type='salaryRange' />
                <FilterOption title='$501 - $750' count='142' type='salaryRange' />
                <FilterOption title='$751 - $1000' count='142' type='salaryRange' />
                <FilterOption title='$1000 Above' count='142' type='salaryRange' />
            </div>
            <div className='flex items-center justify-between w-full mt-8'>
                <h2 className={`font-bold text-lg ${isDark && 'text-white'}`}>Location</h2>
                <MdOutlineKeyboardArrowDown className='text-[#808191] text-2xl' />
            </div>
            <div className='flex items-center justify-between w-full mt-8'>
                <h2 className={`font-bold text-lg ${isDark && 'text-white'}`}>Language</h2>
                <MdOutlineKeyboardArrowDown className='text-[#808191] text-2xl' />
            </div>
            <div className='flex items-center justify-between w-full mt-8'>
                <h2 className={`font-bold text-lg ${isDark && 'text-white'}`}>Facility</h2>
                <MdOutlineKeyboardArrowDown className='text-[#808191] text-2xl' />
            </div>
        </div>
    )
}

export default SearchFilterList