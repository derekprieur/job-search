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
                <FilterOption title='Full Time' count='103' />
                <FilterOption title='Part Time' count='142' />
                <FilterOption title='Internship' count='142' />
                <FilterOption title='Freelance' count='142' />
                <FilterOption title='Remote' count='142' />
                <FilterOption title='Co-founder' count='142' />
                <FilterOption title='Contract' count='142' />
            </div>
            <div className='flex items-center justify-between w-full mt-8'>
                <h2 className={`font-bold text-lg ${isDark && 'text-white'}`}>Experience Level</h2>
                <MdOutlineKeyboardArrowUp className='text-[#808191] text-2xl' />
            </div>
            <div className='mt-5 flex flex-col gap-3'>
                <FilterOption active title='Senior Level' count='103' />
                <FilterOption title='Entry Level' count='142' />
                <FilterOption title='Mid Level' count='142' />
                <FilterOption title='Student Level' count='142' />
                <FilterOption title='Directors' count='142' />
                <FilterOption title='VP or Above' count='142' />
                <FilterOption title='Contract' count='142' />
            </div>
            <div className='flex items-center justify-between w-full mt-8'>
                <h2 className={`font-bold text-lg ${isDark && 'text-white'}`}>Salary Range</h2>
                <MdOutlineKeyboardArrowUp className='text-[#808191] text-2xl' />
            </div>
            <div className='mt-5 flex flex-col gap-3'>
                <FilterOption active title='$0 - $100' count='103' />
                <FilterOption title='$101 - $200' count='142' />
                <FilterOption title='$201 - $500' count='142' />
                <FilterOption title='$501 - $750' count='142' />
                <FilterOption title='$751 - $1000' count='142' />
                <FilterOption title='$1000 Above' count='142' />
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