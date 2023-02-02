import Image from 'next/image'
import React from 'react'
import company from '../assets/companylogo.png'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { RiSuitcaseLine } from 'react-icons/ri'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { TextBubble } from '.'
import { useSelector } from 'react-redux'

const JobPostCard = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className={`${isDark ? 'bg-[#1C1C24]' : 'bg-white'} px-4 py-6 mt-8 rounded-lg max-w-md`}>
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
                        <TextBubble text='React' />
                    </div>
                </div>
            </div>
            <p className='mt-7 font-normal text-[#696974] text-lg'>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us.</p>
            <div className='flex gap-1 mt-7 justify-center'>
                <TextBubble text='Full Time' icon={<RiSuitcaseLine />} />
                <TextBubble text='45 Applied' icon={<MdOutlinePeopleAlt />} />
                <TextBubble text='3 days left' icon={<AiOutlineClockCircle />} />
            </div>
            <div className='flex justify-between mt-7 items-center'>
                <p className={`font-extrabold text-xl ${isDark && 'text-white'}`}>$15k-20k<span className={`${isDark ? 'text-white' : 'text-[#696974]'}  font-normal text-lg`}>/month</span></p>
                <button className='bg-[#0BAB7C] text-white px-4 py-2 rounded-lg font-medium text-lg'>Apply Now</button>
            </div>
        </div>
    )
}

export default JobPostCard