import Image from 'next/image'
import React from 'react'
import background from '../assets/background.png'
import companylogo from '../assets/companylogo.png'
import { BsBookmark, BsDot, BsPlus } from 'react-icons/bs'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { JobDetailList, SimilarJobsCard } from '.'
import { useSelector } from 'react-redux'

const JobDetailsCard = () => {
    const currentJobData = useSelector(state => state.currentJobData.value)
    console.log(currentJobData, 'currentJobData')

    return (
        <div className='flex flex-col md:flex-row md:gap-10'>
            <div className='bg-white px-4 py-5 mt-8 rounded-2xl md:w-[70%]'>
                <div className='w-full relative'>
                    <Image src={background} alt='background' className='w-full rounded-t-3xl mt-2 md:max-h-48' />
                    <div className='absolute bg-[#FAFAFB] bottom-[-30px] rounded-lg border left-4'>
                        <img src={companylogo} alt='company logo' className='object-contain p-[1px] w-[60px]' />
                    </div>
                </div>
                <div className='mt-14 px-4 flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <h2 className='text-[#171725] font-semibold text-lg'>Passionate Programmer</h2>
                        <BsBookmark className='text-[#92929D] text-2xl' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='bg-[#0BAB7C] text-white px-8 py-2 rounded-xl text-lg hidden md:flex'>Apply Now</button>
                        <button className='bg-transparent text-[#696974] border px-8 py-2 rounded-xl text-lg hidden md:flex'>Message</button>
                        <BiDotsVerticalRounded className='text-[#92929D] text-3xl' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <h3 className='px-4 md:pr-0 py-2 text-[#696974]'>UIHUT Technologies LLC</h3>
                    <div className='px-4 md:pl-0 py-1 text-[#696974] flex items-center'>
                        <BsDot className='hidden md:flex' />
                        <p>Sylhet, BD</p>
                        <BsDot />
                        <p>3 days ago</p>
                    </div>
                </div>
                <div className='bg-[#FAFAFB] w-[70%] p-3 flex flex-col rounded-2xl mt-7 mx-4'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#92929D]'>Experience</p>
                            <p className='font-semibold'>Minimum 1 Year</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#92929D]'>Work Level</p>
                            <p className='font-semibold'>Senior Level</p>
                        </div>
                    </div>
                    <div className='border-b my-4' />
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#92929D]'>Employee Type</p>
                            <p className='font-semibold'>Full Time Jobs</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#92929D]'>Offer Salary</p>
                            <p className='font-semibold'>$2150,0 / M</p>
                        </div>
                    </div>
                </div>
                <div className='px-4 mt-4 flex gap-10'>
                    <button className='bg-[#0BAB7C] text-white px-8 py-2 rounded-xl text-lg'>Apply Now</button>
                    <button className='bg-transparent text-[#696974] border px-8 py-2 rounded-xl text-lg'>Message</button>
                </div>
                <div className='mt-8 px-4 flex flex-col gap-2 mb-14'>
                    <h2 className='text-[#171725] font-semibold text-lg'>About The Job</h2>
                    <p className='text-[#696974] font-normal'>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us. In this role, you would use various tech stacks, including Laravel, Node JS (Adonis JS), Vue JS, React JS, Nuxt JS, Redis, MySQL, MongoDB, and CSS. You will be engaged across the software development life cycle to create and modify platforms and capabilities in a collaborative and agile environment.</p>
                </div>
                <JobDetailList title='Responsibilities' />
                <div className='border-b py-6 mb-8' />
                <JobDetailList title='Qualifications and Skill Sets' />
                <div className='px-4 pt-8'>
                    <h2 className='text-[#171725] font-semibold text-lg'>About The Company</h2>
                    <div className='mt-5 flex gap-5 items-center'>
                        <Image src={companylogo} className='w-10 h-10' alt='company' />
                        <div className='flex flex-col gap-1'>
                            <h2 className='font-semibold text-lg'>UI HUT</h2>
                            <p className='text-[#696974]'>203,765 Followers</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center border border-[#0BAB7C] text-[#0BAB7C] justify-center w-[50%] rounded-xl py-1 mt-6 mx-4'>
                    <BsPlus className='text-3xl' />
                    <p>Follow</p>
                </div>
                <p className='text-[#696974] font-normal mt-6 px-4'>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us. In this role, you would use various tech stacks, including Laravel, Node JS (Adonis JS), Vue JS, React JS, Nuxt JS, Redis, MySQL, MongoDB, and CSS. You will be engaged across the software development life cycle to create and modify platforms and capabilities in a collaborative and agile environment.</p>
            </div>
            <div className='md:w-[30%]'>
                <h2 className='text-[#171725] font-semibold text-lg mt-10'>Similar Jobs</h2>
                <SimilarJobsCard />
                <SimilarJobsCard />
                <SimilarJobsCard />
                <SimilarJobsCard />
                <SimilarJobsCard />
                <SimilarJobsCard />
                <SimilarJobsCard />
                <SimilarJobsCard />
                <SimilarJobsCard />
            </div>
        </div>
    )
}

export default JobDetailsCard