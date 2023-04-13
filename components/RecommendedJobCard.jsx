import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { update } from 'redux/currentCompanyDataSlice'

const RecommendedJobCard = ({ hidden, number }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const apiData = useSelector(state => state.apiData.value)
    const dispatch = useDispatch()
    const [estimatedSalary, setEstimatedSalary] = useState(null)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const handleClickCompany = () => {
        dispatch(update(apiData[number]))
    }

    useEffect(() => {
        fetch(`https://jsearch.p.rapidapi.com/estimated-salary?job_title=${apiData[number].job_title}&location=${apiData[number].job_city}&radius=100`, options)
            .then(response => response.json())
            .then(response => {
                setEstimatedSalary(response.data)
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div className={`${isDark ? 'bg-[#21212B]' : 'bg-[#FAFAFB]'} px-4 py-5 rounded-lg ${hidden && 'hidden md:block'}`}>
            <div className='flex items-center justify-between gap-1'>
                <div className='flex gap-2 sm:gap-4 items-center'>
                    <Link href='/companydetails' onClick={handleClickCompany}>
                        <img src={apiData[number]?.employer_logo || 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt='job' className='object-contain w-10 h-10' />
                    </Link>
                    <div className='flex flex-col gap-1'>
                        <h2 className={`${isDark && 'text-white'} font-semibold text-lg max-w-xs`}>{apiData[number]?.job_title}</h2>
                        <div className='flex flex-col sm:flex-row gap-2 text-[#696974] sm:items-center text-sm sm:text-base whitespace-nowrap'>
                            <p>Google</p>
                            <p>California, USA</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 items-end flex-shrink-0'>
                    <h3 className={`font-semibold ${isDark && 'text-white'}`}>{estimatedSalary && estimatedSalary.length > 0 ? `$${(estimatedSalary[0].min_salary / 2000).toFixed(0)}-${(estimatedSalary[0].max_salary / 2000).toFixed(0)}` : '$70-80'} <span className={`font-normal ${isDark && 'text-[#696974]'}`}>/ Hr</span></h3>
                    <p className='text-[#696974]'>Full-Time</p>
                </div>
            </div>
        </div>
    )
}

export default RecommendedJobCard