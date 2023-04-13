import React, { useState } from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiSuitcaseLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

import { update } from '../redux/apiDataSlice'
import Loader from './Loader'

const FindJobsCard = ({ btnTitle }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const apiData = useSelector(state => state.apiData.value)
    const dispatch = useDispatch()
    const [search, setSearch] = useState({
        jobTitle: '',
        location: '',
        jobType: ''
    })

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const handleSearch = () => {
        fetch(`https://jsearch.p.rapidapi.com/search?query=${search.jobTitle}%20in%20USA&num_pages=2`, options)
            .then(response => response.json())
            .then(response => {
                dispatch(update(response.data))
            })
            .catch(err => console.error(err));
    }

    if (apiData.length === 0) return (<div className="h-screen w-full items-center justify-center flex"><Loader /></div>)

    return (
        <div className={`w-full rounded-2xl md:flex ${isDark ? 'bg-[#1C1C24]' : 'bg-white'}`}>
            <div className='flex items-center w-full px-8 gap-4 py-6 md:border-r'>
                <RxMagnifyingGlass className='text-3xl shrink-0 text-[#92929D]' />
                <input type="text" value={search.jobTitle} onChange={(e) => {
                    setSearch({ ...search, jobTitle: e.target.value })
                }} placeholder='Job Title, Company or Keywords' className='flex-1 font-bold placeholder:text-[#92929D] bg-transparent' />
            </div>
            <div className={`border-b mx-6 md:hidden ${isDark ? 'border-[#92929D]/30' : 'border-[#FAFAFB]'}`} />
            <div className='flex items-center justify-between w-full px-8 gap-4 py-6 md:border-r'>
                <div className='flex gap-4 items-center'>
                    <IoLocationOutline className='text-3xl text-[#92929D]' />
                    <p className='font-bold text-[#92929D]'>Select Location</p>
                </div>
                <MdOutlineKeyboardArrowDown className='text-2xl text-[#92929D]' />
            </div>
            <div className={`border-b mx-6 md:hidden ${isDark ? 'border-[#92929D]/30' : 'border-[#FAFAFB]'}`} />
            <div className='flex items-center w-full px-8 gap-4 py-6'>
                <RiSuitcaseLine className='text-3xl text-[#92929D]' />
                <p className='font-bold text-[#92929D]'>Job Type</p>
            </div>
            <div className={`border-b mx-6 md:hidden ${isDark ? 'border-[#92929D]/30' : 'border-[#FAFAFB]'}`} />
            <div className='px-8 py-6 min-w-fit'>
                <button onClick={handleSearch} className='bg-[#0BAB7C] w-full text-white py-4 rounded-lg md:px-8'>{btnTitle}</button>
            </div>
        </div>
    )
}

export default FindJobsCard