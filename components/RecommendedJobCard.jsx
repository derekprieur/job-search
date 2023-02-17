import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import google from '../assets/google.png'

const RecommendedJobCard = ({ hidden, number }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const apiData = useSelector(state => state.apiData.value)
    return (
        <div className={`${isDark ? 'bg-[#21212B]' : 'bg-[#FAFAFB]'} px-4 py-5 rounded-lg ${hidden && 'hidden md:block'}`}>
            <div className='flex items-center justify-between gap-1'>
                <div className='flex gap-4 items-center'>
                    <img src={apiData[number].employer_logo} alt='job' className='object-contain w-10 h-10' />
                    <div className='flex flex-col gap-1'>
                        <h2 className={`${isDark && 'text-white'} font-semibold text-lg max-w-xs`}>{apiData[number].job_title}</h2>
                        <div className='flex gap-2 text-[#696974] items-center'>
                            <p>Google</p>
                            <p>California, USA</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 items-end flex-shrink-0'>
                    <h3 className={`font-semibold ${isDark && 'text-white'}`}>$70-80 <span className={`font-normal ${isDark && 'text-[#696974]'}`}>/ Hr</span></h3>
                    <p className='text-[#696974]'>Full-Time</p>
                </div>
            </div>
        </div>
    )
}

export default RecommendedJobCard