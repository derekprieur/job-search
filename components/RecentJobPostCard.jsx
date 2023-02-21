import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { useSelector } from 'react-redux'

import TextBubble from './TextBubble'

const RecentJobPostCard = ({ number }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const companyJobs = useSelector(state => state.companyJobs.value)
    const [estimatedSalary, setEstimatedSalary] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    useEffect(() => {
        if (companyJobs) {
            fetch(`https://jsearch.p.rapidapi.com/estimated-salary?job_title=${companyJobs[number]?.job_title}&location=${companyJobs[number]?.job_city}&radius=100`, options)
                .then(response => response.json())
                .then(response => {
                    setEstimatedSalary(response.data)
                })
                .catch(err => console.error(err));
        }
        console.log(companyJobs, 'companyJobs')
    }, [companyJobs])

    if (!companyJobs) return null

    return (
        <div className={`${isDark ? 'bg-[#1C1C24]' : 'bg-white'} px-4 py-6 mt-4 rounded-lg max-w-md shadow-xl w-full flex flex-col justify-between`}>
            <div>
                <div className='flex gap-6 justify-between items-center'>
                    <div>
                        <div className={`${isDark ? 'bg-[#1C1C24] border-2 border-[#44444F]' : 'bg-[#FAFAFB]'} p-2 rounded-lg`}>
                            <img src={companyJobs[number]?.employer_logo} alt='company' className='object-contain w-[50px] h-[50px]' />
                        </div>
                    </div>
                    <div className='flex-1 flex-col'>
                        <div className='flex justify-between'>
                            <h2 className={`font-semibold text-lg ${isDark && 'text-white'}`}>{companyJobs[number]?.job_title}</h2>
                            <HiOutlineDotsHorizontal className='text-[#B5B5BE] text-xl' />
                        </div>
                        <div className='flex gap-1 mt-4'>
                            <TextBubble text='PHP' />
                            <TextBubble text='Laravel' />
                            <TextBubble text='CSS' />
                        </div>
                    </div>
                </div>
                {companyJobs[number]?.job_highlights.Responsibilities != undefined ? <p className='mt-7  font-normal text-[#696974] text-lg'>{companyJobs[number]?.job_highlights?.Responsibilities[0]}</p> : <p className='mt-7  font-normal text-[#696974] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>}
            </div>
            <div className='flex justify-between mt-7 items-center'>
                <p className={`font-extrabold text-xl ${isDark && 'text-white'}`}>{estimatedSalary && estimatedSalary.length > 0 ? `$${(estimatedSalary[0].min_salary / 12000).toFixed(0)}k-${(estimatedSalary[0].max_salary / 12000).toFixed(0)}k` : '$15k-20k'}<span className={`${isDark ? 'text-white' : 'text-[#696974]'}  font-normal text-lg`}>/month</span></p>
                <button className='bg-[#0BAB7C]/10 text-[#0BAB7C] px-4 py-2 rounded-lg font-medium text-lg'>Apply Now</button>
            </div>
        </div>
    )
}

export default RecentJobPostCard