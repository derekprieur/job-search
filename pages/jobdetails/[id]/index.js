import { useSelector } from 'react-redux'

import { FindJobsCard, JobDetailsCard, Navbar, Title } from 'components'

const JobDetails = () => {
    const isDark = useSelector(state => state.darkMode.value)

    return (
        <main>
            <div className={`mt-20 px-6 md:px-20 ${!isDark ? 'bg-[#FAFAFB]' : 'bg-[#13131A]'} min-h-screen`}>
                <Title title="Let's find your dream job" />
                <FindJobsCard btnTitle='Find Jobs' />
                <JobDetailsCard />
            </div>
        </main>
    )
}

export default JobDetails