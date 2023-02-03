import Image from 'next/image'
import React from 'react'
import background from '../assets/background.png'
import companylogo from '../assets/companylogo.png'
import { BsDot, BsPlus } from 'react-icons/bs'
import people from '../assets/people.png'
import { CompanyJobs } from '.'
import { useSelector } from 'react-redux'

const CompanyDetailsCard = () => {
    const isDark = useSelector(state => state.darkMode.value)
    const isMobile = useSelector(state => state.isMobile.value)
    return (
        <div>
            <div className='w-full relative'>
                <Image src={background} alt='background' className='w-full rounded-t-3xl mt-7 max-h-48' />
                <div className='absolute bg-[#FAFAFB] bottom-[-30px] rounded-lg border left-4'>
                    <Image src={companylogo} alt='company logo' width={60} className='object-cover p-[1px]' />
                </div>
            </div>
            <div className={`${!isMobile && 'flex justify-between'}`}>
                <div>
                    <h1 className={`mt-12 px-4 font-semibold text-2xl ${isDark && 'text-white'}`}>UIHUT</h1>
                    <div className={`px-4 mt-4 flex items-center gap-2  ${isDark ? 'text-[#92929D]' : 'text-[#696974]'}`}>
                        <p>UIHUT Technologies LLC </p>
                        <BsDot />
                        <p>Sylhet, BD</p>
                    </div>
                    <div className={`px-4 mt-2 flex items-center gap-2  ${isDark ? 'text-[#92929D]' : 'text-[#696974]'}`}>
                        <p>Design Resources Platform</p>
                        <BsDot />
                        <p className='text-[#92929D]'>203,765 Followers</p>
                    </div>
                </div>
                {isMobile && <div className={`border-b mt-6 ${isDark ? 'border-[#44444F]' : 'border-[#F1F1F5]'}`} />}
                <div className={`${!isMobile && 'mt-6 mr-6'}`}>
                    <Image className='ml-4 mt-6' src={people} />
                    <div className='flex items-center border border-[#0BAB7C] text-[#0BAB7C] justify-center rounded-xl py-1 mt-6 w-[90%] mx-auto'>
                        <BsPlus className='text-3xl' />
                        <p>Follow</p>
                    </div>
                </div>
            </div>
            <div className='mt-10 px-4 flex gap-2'>
                <button className={`border bg-transparent text-[#696974] px-3 py-1 rounded-lg ${isDark ? 'border-[#696974]' : 'border-[#F1F1F5]'}`}>About</button>
                <button className={`border bg-[#44444F] text-white px-3 py-1 rounded-lg ${isDark ? 'border-[#44444F]' : 'border-[#F1F1F5]'}`}>Jobs</button>
                <button className={`border bg-transparent text-[#696974] px-3 py-1 rounded-lg ${isDark ? 'border-[#696974]' : 'border-[#F1F1F5]'}`}>Products</button>
                <button className={`border bg-transparent text-[#696974] px-3 py-1 rounded-lg ${isDark ? 'border-[#696974]' : 'border-[#F1F1F5]'}`}>Employees</button>
                {!isMobile && <button className={`border bg-transparent text-[#696974] px-3 py-1 rounded-lg ${isDark ? 'border-[#696974]' : 'border-[#F1F1F5]'}`}>Locations</button>}
                {!isMobile && <button className={`border bg-transparent text-[#696974] px-3 py-1 rounded-lg ${isDark ? 'border-[#696974]' : 'border-[#F1F1F5]'}`}>Reviews</button>}
            </div>
            <CompanyJobs />
        </div>
    )
}

export default CompanyDetailsCard