import React from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { CiBellOn } from 'react-icons/ci'
import { RecentJobPostCard } from '.'
import { useSelector } from 'react-redux'

const CompanyJobs = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className={`mx-4 mt-8 px-4 py-5 rounded-xl ${isDark ? 'bg-[#1C1C24]' : 'bg-white'}`}>
            <div className={`flex items-center justify-between py-3 px-3 gap-2 rounded-xl ${isDark ? 'bg-[#21212B]' : 'bg-[#FAFAFB]'}`}>
                <RxMagnifyingGlass className='text-[#757D8A] text-xl' />
                <input type="text" placeholder='Search Job title or Keyword' className='bg-transparent flex-1' />
                <button className='bg-[#0BAB7C] py-1 px-3 rounded-lg text-white'>Search</button>
            </div>
            <div className={`flex items-center bg-transparent border py-3 px-3 gap-2 rounded-xl mt-4 ${isDark && 'border-[#757D8A]'}`}>
                <CiBellOn className='text-[#757D8A] text-xl' />
                <p className='text-[#757D8A]'>Create Job Alert</p>
            </div>
            <h2 className={`font-semibold text-lg mt-8 ${isDark ? 'text-white' : 'text-[#171725]'}`}>Recently Posted Job</h2>
            <RecentJobPostCard />
            <RecentJobPostCard />
            <RecentJobPostCard />
            <RecentJobPostCard />
        </div>
    )
}

export default CompanyJobs