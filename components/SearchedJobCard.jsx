import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { BsBookmark, BsDot } from 'react-icons/bs'

import company from '../assets/companylogo.png'
import { TextBubble } from '.'

const SearchedJobCard = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className={`p-5 rounded-xl ${isDark ? 'bg-[#1C1C24]' : 'bg-white'}`}>
            <div className='flex gap-3 items-start'>
                <Image src={company} width={56} height={56} className={`p-2 rounded-lg ${isDark ? 'bg-[#21212B]' : 'bg-[#FAFAFB]'}`} />
                <div className='flex flex-col gap-1 flex-1'>
                    <div className='flex justify-between items-center'>
                        <h2 className={`font-bold text-lg ${isDark && 'text-white'}`}>Passionate Programmer</h2>
                        <BsBookmark className='text-[#92929D] text-xl' />
                    </div>
                    <div>
                        <h3 className={`${isDark ? 'text-[#92929D]' : 'text-[#696974]'}`}>UIHUT Technologies LLC</h3>
                        <div className={`flex items-center ${isDark ? 'text-[#92929D]' : 'text-[#696974]'}`}>
                            <h4>Sylhet, BD</h4>
                            <BsDot />
                            <p>3 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={`mt-6 pr-8 ${isDark ? 'text-white' : 'text-[#44444F]'}`}>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us.</p>
            <div className='flex gap-1 mt-5'>
                <TextBubble text='PHP' />
                <TextBubble text='Laravel' />
                <TextBubble text='CSS' />
                <TextBubble text='React' />
            </div>
            <div className='flex justify-between mt-5'>
                <p className={`font-bold ${isDark && 'text-white'}`}>$15k-20k<span className='text-[#696974] font-normal'>/month</span></p>
                <p className={`font-bold ${isDark && 'text-white'}`}>54 <span className='text-[#696974] font-normal'>People Applied</span></p>
            </div>
            <div className='flex mt-8 justify-between gap-5'>
                <button className={`text-[#696974] px-8 py-2 rounded-xl  w-full text-lg ${isDark ? 'bg-[#21212B]' : 'bg-[#F5F5F8]'}`}>Message</button>
                <button className='bg-[#0BAB7C] text-white px-8 w-full py-2 rounded-xl text-lg'>Apply Now</button>
            </div>
        </div>
    )
}

export default SearchedJobCard