import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import google from '../assets/google.png'

const RecommendedJobCard = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className={`${isDark ? 'bg-[#21212B]' : 'bg-[#FAFAFB]'} px-4 py-5 rounded-lg`}>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4'>
                    <Image src={google} alt='google' width={40} className='object-contain' />
                    <div className='flex flex-col gap-1'>
                        <h2 className={`${isDark && 'text-white'} font-semibold text-lg`}>Product Design</h2>
                        <div className='flex gap-2 text-[#696974] items-center'>
                            <p>Google</p>
                            <p>California, USA</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 items-end'>
                    <h3 className={`font-semibold ${isDark && 'text-white'}`}>$70-80 <span className={`font-normal ${isDark && 'text-[#696974]'}`}>/ Hr</span></h3>
                    <p className='text-[#696974]'>Full-Time</p>
                </div>
            </div>
        </div>
    )
}

export default RecommendedJobCard