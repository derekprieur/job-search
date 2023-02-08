import React from 'react'

import { FindJobsCard, JobAlert, Navbar, SearchedJobs, SearchFilterList, Title } from 'components'
import { useSelector } from 'react-redux'

const Search = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <main>
            <Navbar />
            <div className={`mt-20 px-6 md:px-20 ${!isDark ? 'bg-[#FAFAFB]' : 'bg-[#13131A]'} min-h-screen`}>
                <Title title="Let's find your dream job" />
                <FindJobsCard btnTitle='Find Jobs' />
                <div className='md:flex gap-20 items-start'>
                    <div className='flex flex-col'>
                        <JobAlert />
                        <div className='hidden md:flex mt-4'>
                            <SearchFilterList />
                        </div>
                    </div>
                    <SearchedJobs />
                </div>
            </div>
        </main>

    )
}

export default Search