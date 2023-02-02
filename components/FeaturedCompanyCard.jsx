import Image from 'next/image'
import React from 'react'
import apple from '../assets/apple.png'
import { BsStarHalf } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { RiSuitcaseLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'

const FeaturedCompanyCard = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className={`mt-10 ${isDark ? 'bg-[#1C1C24]' : 'bg-white'} px-4 py-6 rounded-lg`}>
            <div className='flex gap-6 items-center'>
                <Image src={apple} alt='company' />
                <div>
                    <h2 className={`font-semibold text-lg ${isDark && 'text-white'}`}>Apple Inc.</h2>
                    <div className='flex items-center gap-2'>
                        <BsStarHalf className='text-[#FFC542]' />
                        <p className='text-[#92929D]'>4.8k</p>
                    </div>
                </div>
            </div>
            <div className='mt-4 flex gap-3 text-[#92929D] items-center ml-10'>
                {/* <CiLocationOn /> */}
                <p>New york, USA</p>
                <RiSuitcaseLine />
                <p>05 Job Vacancy</p>
            </div>
            <div className='flex justify-center mt-4'>
                <button className={`${isDark ? 'bg-[#21212B]' : 'bg-[#F5F5F8]'} w-full text-[#92929D] py-4 rounded-lg`}>See All</button>
            </div>
        </div>
    )
}

export default FeaturedCompanyCard