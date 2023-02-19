import React, { useEffect } from 'react'

import { FindJobsCard, JobAlert, Loader, Navbar, SearchedJobs, SearchFilterList, Title } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { update } from 'redux/apiDataSlice'

const Search = () => {
    const isDark = useSelector(state => state.darkMode.value)
    const apiData = useSelector(state => state.apiData.value)
    const dispatch = useDispatch()

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://jsearch.p.rapidapi.com/search?query=React%20developer%20in%20USA&num_pages=2', options)
            .then(response => response.json())
            .then(response => {
                dispatch(update(response.data))
            })
            .catch(err => console.error(err));
    }, [])

    if (apiData.length === 0) return (<div className="h-screen w-full items-center justify-center flex"><Loader /></div>)

    return (
        <main>
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