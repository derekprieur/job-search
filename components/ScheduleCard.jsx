import Image from 'next/image'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import googlemeet from '../assets/google meet.png'

const ScheduleCard = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className={`px-4 py-5 rounded-lg flex gap-3 items-center ${isDark ? 'bg-[#21212B]' : 'bg-[#FAFAFB]'}`}>
            <div className={`flex flex-col px-3 py-1 rounded-lg items-center ${isDark ? 'bg-[#1C1C24]' : 'bg-white'}`}>
                <p className={`text-lg font-bold ${isDark && 'text-white'}`}>20</p>
                <p className={`${isDark && 'text-[#44444F]'}`}>Tue</p>
            </div>
            <div className='flex-1 flex flex-col gap-4'>
                <h3 className={`font-semibold text-lg ${isDark && 'text-white'}`}>UIHUT Job Interview</h3>
                <div className='flex items-center gap-2 text-[#92929D]'>
                    <AiOutlineClockCircle />
                    <p>09.00-10.00</p>
                    <Image src={googlemeet} alt='google meet' />
                    <p>Google Meet</p>
                </div>
            </div>
        </div>
    )
}

export default ScheduleCard