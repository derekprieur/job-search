import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { RecommendedJobCard } from '.'

const RecommendedJobs = () => {
    const isDark = useSelector(state => state.darkMode.value)
    const isMobile = useSelector(state => state.isMobile.value)
    return (
        <>
            <div className='mt-12 flex justify-between items-center'>
                <h1 className={`font-semibold text-[22px] ${isDark && 'text-white'}`}>Recommended For You</h1>
                <div className={`flex items-center border ${isDark && 'border-[#696974]'} gap-2 px-3 py-2 text-[#696974] rounded-lg`}>See All <MdOutlineKeyboardArrowDown className='text-xl' /></div>
            </div>
            <div className={`${isDark ? 'bg-[#1C1C24]' : 'bg-white'} mt-8 rounded-lg px-4 py-5 flex flex-col gap-4`}>
                <RecommendedJobCard number={7} />
                <RecommendedJobCard number={8} />
                <RecommendedJobCard number={9} />
                <RecommendedJobCard number={10} />
                <RecommendedJobCard number={11} />
                <RecommendedJobCard hidden number={12} />
                <RecommendedJobCard hidden number={13} />
                <RecommendedJobCard hidden number={14} />
                <RecommendedJobCard hidden number={15} />
                <RecommendedJobCard hidden number={16} />
            </div>
        </>
    )
}

export default RecommendedJobs