import React from 'react'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md'

const FilterOption = ({ active, title, count }) => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
                {active ? (<MdOutlineCheckBox className='text-2xl text-[#0BAB7C]' />) : (<MdOutlineCheckBoxOutlineBlank className='text-[#92929D] text-2xl' />)}
                <h3 className='text-[#44444F]'>{title}</h3>
            </div>
            <div className='bg-[#F1F1F5] py-1 px-2 rounded-xl'>{count}</div>
        </div>
    )
}

export default FilterOption