import { FindJobsCard, JobDetailsCard, Navbar, Title } from 'components'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from 'redux/isMobileSlice'

const JobDetails = () => {
    const isMobile = useSelector(state => state.isMobile.value)
    const isDark = useSelector(state => state.darkMode.value)
    const dispatch = useDispatch()

    useEffect(() => {
        const checkSize = () => {
            if (window.innerWidth <= 768) {
                dispatch(update(true))
            } else {
                dispatch(update(false))
            }
        }

        window.addEventListener('resize', checkSize)

        checkSize()

        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, [])
    return (
        <main>
            <Navbar />
            <div className={`mt-20 px-6 md:px-20 ${!isDark ? 'bg-[#FAFAFB]' : 'bg-[#13131A]'} min-h-screen`}>
                <Title title="Let's find your dream job" />
                <FindJobsCard btnTitle='Find Jobs' />
                <JobDetailsCard />
            </div>
        </main>
    )
}

export default JobDetails