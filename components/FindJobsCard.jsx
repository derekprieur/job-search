import React from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiSuitcaseLine } from 'react-icons/ri'

const FindJobsCard = ({ btnTitle }) => {
    return (
        <div className='bg-white w-full rounded-2xl'>
            <div className='flex items-center w-full px-8 gap-4 py-6'>
                <RxMagnifyingGlass className='text-3xl text-[#92929D]' />
                <input type="text" placeholder='Job Title, Company or Keywords' className='flex-1 font-bold placeholder:text-[#92929D]' />
            </div>
            <div className='border-b mx-6 border-[#FAFAFB]' />
            <div className='flex items-center justify-between w-full px-8 gap-4 py-6'>
                <div className='flex gap-4 items-center'>
                    <IoLocationOutline className='text-3xl text-[#92929D]' />
                    <p className='font-bold text-[#92929D]'>Select Location</p>
                </div>
                <MdOutlineKeyboardArrowDown className='text-2xl text-[#92929D]' />
            </div>
            <div className='border-b mx-6 border-[#FAFAFB]' />
            <div className='flex items-center w-full px-8 gap-4 py-6'>
                <RiSuitcaseLine className='text-3xl text-[#92929D]' />
                <p className='font-bold text-[#92929D]'>Job Type</p>
            </div>
            <div className='border-b mx-6 border-[#FAFAFB]' />
            <div className='px-8 py-6'>
                <button className='bg-[#0BAB7C] w-full text-white py-4 rounded-lg'>{btnTitle}</button>
            </div>
        </div>
    )
}

export default FindJobsCard