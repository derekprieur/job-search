import React, { useEffect, useState } from 'react'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md'
import { useSelector } from 'react-redux'

const FilterOption = ({ title, count, type }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const searchFilter = useSelector(state => state.searchFilter.value)
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (type == 'employment') {
            // check if title is in searchFilter.employment[]
            if (searchFilter.employment.includes(title)) {
                setActive(true)
            } else {
                setActive(false)
            }
        }
    }, [])


    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
                {active ? (<MdOutlineCheckBox className='text-2xl text-[#0BAB7C]' />) : (<MdOutlineCheckBoxOutlineBlank className='text-[#92929D] text-2xl' />)}
                <h3 className={`${isDark ? 'text-[#E2E2EA]' : 'text-[#44444F]'}`}>{title}</h3>
            </div>
            <div className={`py-1 px-2 rounded-xl ${isDark ? 'bg-[#21212B] text-[#F1F1F5]' : 'bg-[#F1F1F5]'}`}>{count}</div>
        </div>
    )
}

export default FilterOption