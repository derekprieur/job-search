import React, { useEffect } from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { FiBell } from 'react-icons/fi'
import { RecentJobPostCard } from '.'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../redux/companyJobsSlice'

const CompanyJobs = () => {
    const isDark = useSelector(state => state.darkMode.value)
    const isMobile = useSelector(state => state.isMobile.value)
    const currentCompanyData = useSelector(state => state.currentCompanyData.value)
    const companyJobs = useSelector(state => state.companyJobs.value)
    const dispatch = useDispatch()

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(`https://jsearch.p.rapidapi.com/search?query=${currentCompanyData?.employer_name}&num_pages=1`, options)
            .then(response => response.json())
            .then(response => {
                dispatch(update(response.data))
            })
            .catch(err => console.error(err));
    }, [])


    return (
        <div className={`mx-4 mt-8 px-4 py-5 rounded-xl ${isDark ? 'bg-[#1C1C24]' : 'bg-white'}`}>
            <div className={`${!isMobile && 'flex justify-between'}`}>
                <div className={`flex items-center justify-between py-3 px-3 gap-2 rounded-xl ${isDark ? 'bg-[#21212B]' : 'bg-[#FAFAFB]'} ${!isMobile && 'w-[60%]'}`}>
                    <RxMagnifyingGlass className='text-[#757D8A] text-xl' />
                    <input type="text" placeholder='Search Job title or Keyword' className='bg-transparent flex-1' />
                    <button className='bg-[#0BAB7C] py-1 px-3 rounded-lg text-white'>Search</button>
                </div>
                <div className={`flex items-center bg-transparent border py-3 px-3 gap-2 rounded-xl mt-4 ${isDark && 'border-[#757D8A]'}`}>
                    <FiBell className='text-[#757D8A] text-xl' />
                    <p className='text-[#757D8A]'>Create Job Alert</p>
                </div>
            </div>
            <h2 className={`font-semibold text-lg mt-8 ${isDark ? 'text-white' : 'text-[#171725]'}`}>Recently Posted Job</h2>
            <div className='flex flex-wrap justify-between gap-7'>
                <RecentJobPostCard number={0} />
                <RecentJobPostCard number={1} />
                <RecentJobPostCard number={2} />
                <RecentJobPostCard number={3} />
            </div>
            {!isMobile && <div className='flex justify-center items-center mt-16'>
                <div className={`flex  items-center justify-center bg-transparent border py-2 px-3 gap-2 rounded-xl ${isDark && 'border-[#757D8A]'} text-[#757D8A]`}>
                    See All Jobs
                </div>
            </div>}
        </div>
    )
}

export default CompanyJobs