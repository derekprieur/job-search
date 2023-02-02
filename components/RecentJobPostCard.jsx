import Image from 'next/image'
import React from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import company from '../assets/companylogo.png'
import TextBubble from './TextBubble'

const RecentJobPostCard = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className={`${isDark ? 'bg-[#1C1C24]' : 'bg-white'} px-4 py-6 mt-4 rounded-lg max-w-md shadow-xl`}>
            <div className='flex gap-6 justify-between items-center'>
                <div>
                    <div className={`${isDark ? 'bg-[#1C1C24] border border-[#21212B]' : 'bg-[#FAFAFB]'} p-2 rounded-lg`}>
                        <Image src={company} alt='company' width={50} className='object-contain' />
                    </div>
                </div>
                <div className='flex-1 flex-col'>
                    <div className='flex justify-between'>
                        <h2 className={`font-semibold text-lg ${isDark && 'text-white'}`}>Passionate Programmer</h2>
                        <HiOutlineDotsHorizontal className='text-[#B5B5BE] text-xl' />
                    </div>
                    <div className='flex gap-1 mt-4'>
                        <TextBubble text='PHP' />
                        <TextBubble text='Laravel' />
                        <TextBubble text='CSS' />
                    </div>
                </div>
            </div>
            <p className='mt-7 font-normal text-[#92929D] text-lg'>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us.</p>
            <div className='flex justify-between mt-7 items-center'>
                <p className={`font-extrabold text-xl ${isDark && 'text-white'}`}>$15k-20k<span className={`${isDark ? 'text-white' : 'text-[#696974]'}  font-normal text-lg`}>/month</span></p>
                <button className='bg-[#0BAB7C]/10 text-[#0BAB7C] px-4 py-2 rounded-lg font-medium text-lg'>Apply Now</button>
            </div>
        </div>
    )
}

export default RecentJobPostCard