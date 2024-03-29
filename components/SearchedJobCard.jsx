import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsBookmark, BsDot, BsFillBookmarkFill } from 'react-icons/bs'

import { TextBubble } from '.'
import Link from 'next/link'
import { update } from 'redux/currentCompanyDataSlice'

const SearchedJobCard = ({ number }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const apiData = useSelector(state => state.apiData.value)
    const [isSaved, setIsSaved] = useState(false)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(update(apiData[number]))
    }

    const handleSaveJob = () => {
        if (isSaved) {
            let savedJobs = JSON.parse(localStorage.getItem('savedJobs'))
            let newSavedJobs = savedJobs.filter(job => job.job_id != apiData[number].job_id)
            localStorage.setItem('savedJobs', JSON.stringify(newSavedJobs))
            setIsSaved(false)
        } else {
            if (localStorage.getItem('savedJobs') == null) {
                localStorage.setItem('savedJobs', JSON.stringify([apiData[number]]))
                setIsSaved(true)
            } else {
                let savedJobs = JSON.parse(localStorage.getItem('savedJobs'))
                savedJobs.push(apiData[number])
                localStorage.setItem('savedJobs', JSON.stringify(savedJobs))
                setIsSaved(true)
            }
        }
    }

    useEffect(() => {
        // check if job is saved
        if (localStorage.getItem('savedJobs') != null) {
            let savedJobs = JSON.parse(localStorage.getItem('savedJobs'))
            savedJobs.forEach(job => {
                if (job.job_id == apiData[number].job_id) {
                    setIsSaved(true)
                }
            })
        }
    }, [])


    return (
        <div className={`p-5 rounded-xl ${isDark ? 'bg-[#1C1C24]' : 'bg-white'}`}>
            <div className='flex gap-3 items-start'>
                <Link href='/companydetails' onClick={handleClick}>
                    <img src={apiData[number]?.employer_logo} alt='company' className={`p-2 rounded-lg w-14 h-14 object-contain ${isDark ? 'bg-[#21212B]' : 'bg-[#FAFAFB]'}`} />
                </Link>
                <div className='flex flex-col gap-1 flex-1'>
                    <div className='flex justify-between items-center'>
                        <h2 className={`font-bold text-lg ${isDark && 'text-white'}`}>{apiData[number]?.job_title}</h2>
                        <div className={`flex cursor-pointer items-center gap-2 md:px-3 md:py-2 rounded-xl ${isDark ? 'md:bg-[#21212B]' : 'md:bg-[#FAFAFB]'}`} onClick={handleSaveJob}>
                            <p className='hidden md:block text-[#92929D]'>{isSaved ? 'Saved' : 'Save job'}</p>
                            {isSaved
                                ? <BsFillBookmarkFill className='text-[#92929D] text-xl md:text-lg' />
                                : <BsBookmark className='text-[#92929D] text-xl md:text-lg' />}
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center'>
                        <h3 className={`${isDark ? 'text-[#92929D]' : 'text-[#696974]'}`}>{apiData[number]?.employer_name}</h3>
                        <BsDot className='hidden md:flex' />
                        <div className={`flex items-center ${isDark ? 'text-[#92929D]' : 'text-[#696974]'}`}>
                            <h4>{apiData[number]?.job_city}, {apiData[number]?.job_country}</h4>
                            <BsDot />
                            <p>3 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
            {apiData[number]?.job_highlights.Responsibilities != undefined ? <p className={`mt-6 pr-8 ${isDark ? 'text-white' : 'text-[#44444F]'}`}>{apiData[number]?.job_highlights?.Responsibilities[0]}</p> : <p className={`mt-6 pr-8 ${isDark ? 'text-white' : 'text-[#44444F]'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>}
            <div className='flex gap-1 mt-5'>
                <TextBubble text='PHP' />
                <TextBubble text='Laravel' />
                <TextBubble text='CSS' />
                <TextBubble text='React' />
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center md:gap-60 md:mt-5'>
                <div className='flex flex-col sm:flex-row md:gap-8 mt-5 md:mt-0 justify-between whitespace-nowrap'>
                    <p className={`font-bold ${isDark && 'text-white'}`}>$15k-20k<span className='text-[#696974] font-normal'>/month</span></p>
                    <p className={`font-bold ${isDark && 'text-white'}`}>54 <span className='text-[#696974] font-normal'>People Applied</span></p>
                </div>
                <div className='flex flex-col sm:flex-row mt-8 md:mt-0 justify-between md:justify-end gap-5 flex-1'>
                    <button className={`text-[#696974] px-8 py-2 rounded-xl w-full text-lg md:px-8 md:w-fit ${isDark ? 'bg-[#21212B]' : 'bg-[#F5F5F8]'} whitespace-nowrap`}>Message</button>
                    <button className='bg-[#0BAB7C] text-white px-8 w-full py-2 rounded-xl text-lg md:w-fit whitespace-nowrap'>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default SearchedJobCard