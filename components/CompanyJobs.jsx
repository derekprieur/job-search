import React from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { CiBellOn } from 'react-icons/ci'
import { RecentJobPostCard } from '.'

const CompanyJobs = () => {
    return (
        <div className='bg-white mx-4 mt-8 px-4 py-5 rounded-xl'>
            <div className='flex items-center justify-between bg-[#FAFAFB] py-3 px-3 gap-2 rounded-xl'>
                <RxMagnifyingGlass className='text-[#757D8A] text-xl' />
                <input type="text" placeholder='Search Job title or Keyword' className='bg-transparent flex-1' />
                <button className='bg-[#0BAB7C] py-1 px-3 rounded-lg text-white'>Search</button>
            </div>
            <div className='flex items-center bg-transparent border py-3 px-3 gap-2 rounded-xl mt-4'>
                <CiBellOn className='text-[#757D8A] text-xl' />
                <p className='text-[#757D8A]'>Create Job Alert</p>
            </div>
            <h2 className='text-[#171725] font-semibold text-lg mt-8'>Recently Posted Job</h2>
            <RecentJobPostCard />
            <RecentJobPostCard />
            <RecentJobPostCard />
            <RecentJobPostCard />
        </div>
    )
}

export default CompanyJobs