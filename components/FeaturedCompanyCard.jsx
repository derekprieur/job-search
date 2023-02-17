import Image from 'next/image'
import React from 'react'
import apple from '../assets/apple.png'
import { BsStarHalf } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { RiSuitcaseLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const FeaturedCompanyCard = ({ number }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const apiData = useSelector(state => state.apiData.value)

    return (
        <div className={`mt-10 ${isDark ? 'bg-[#1C1C24]' : 'bg-white'} px-4 py-6 rounded-lg`}>
            <Link href='/companydetails'>
                <div className='flex gap-6 items-center'>
                    <img src={apiData[number].employer_logo} alt='company' className='w-12 h-12 object-contain' />
                    <div>
                        <h2 className={`font-semibold text-lg ${isDark && 'text-white'}`}>{apiData[number].employer_name}</h2>
                        <div className='flex items-center gap-2'>
                            <BsStarHalf className='text-[#FFC542]' />
                            <p className='text-[#92929D]'>4.8k</p>
                        </div>
                    </div>
                </div>
            </Link>
            <div className='mt-4 flex md:flex-col gap-3 text-[#92929D] items-center md:items-start ml-10 md:ml-0'>
                <div className='flex items-center gap-3'>
                    <IoLocationOutline />
                    <p>{apiData[number].job_city} {apiData[number].job_city != null && ','} {apiData[number].job_country}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <RiSuitcaseLine />
                    <p>05 Job Vacancy</p>
                </div>
            </div>
            <div className='flex justify-center md:justify-start mt-4'>
                <button className={`${isDark ? 'bg-[#21212B]' : 'bg-[#F5F5F8]'} w-full md:w-60 text-[#92929D] py-4 rounded-lg`}>See All</button>
            </div>
        </div>
    )
}

export default FeaturedCompanyCard