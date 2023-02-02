import Image from 'next/image'
import React from 'react'
import apple from '../assets/apple.png'
import { BsBookmarkDashFill } from 'react-icons/bs'

const SimilarJobsCard = () => {
    return (
        <div className='bg-white my-5 p-5 rounded-xl'>
            <div className='flex gap-3 items-center'>
                <Image src={apple} className='w-12' alt='logo' />
                <div className='flex flex-col gap-2 flex-1'>
                    <div className='flex justify-between '>
                        <h2>iOS Developer</h2>
                        <p className='mr-8'>$19 <span> / Hr</span></p>
                    </div>
                    <p className='font-normal text-[#92929D]'>San Francisco, US</p>
                </div>
            </div>
            <div className='mt-7 flex justify-between items-center'>
                <p className='text-[#92929D]'>5 days left</p>
                <div className='flex gap-4'>
                    <div className='border p-3 rounded-lg'>
                        <BsBookmarkDashFill className='text-[#92929D] text-xl' />
                    </div>
                    <button className='text-[#0BAB7C] bg-[rgba(11,171,124)]/10 px-5 py-2 rounded-lg'>View</button>
                </div>
            </div>
        </div>
    )
}

export default SimilarJobsCard