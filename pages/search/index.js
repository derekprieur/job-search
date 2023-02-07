import React from 'react'

import { FindJobsCard, JobAlert, Navbar, SearchedJobs, Title } from 'components'
import { useSelector } from 'react-redux'

const Search = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <main>
            <Navbar />
            <div className={`mt-20 px-6 ${!isDark ? 'bg-[#FAFAFB]' : 'bg-[#13131A]'} min-h-screen`}>
                <Title title="Let's find your dream job" />
                <FindJobsCard btnTitle='Find Jobs' />
                <JobAlert />
                <SearchedJobs />
            </div>
        </main>

    )
}

export default Search