import { useEffect, useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { RiSuitcaseLine } from 'react-icons/ri'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

import { TextBubble } from '.'
import { update } from 'redux/currentCompanyDataSlice'
import { update as updateJob } from 'redux/currentJobDataSlice'

const JobPostCard = ({ number }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const apiData = useSelector(state => state.apiData.value)
    const dispatch = useDispatch()
    const [estimatedSalary, setEstimatedSalary] = useState([])

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

    const handleClickJob = () => {
        dispatch(updateJob(apiData[number]))
    }

    useEffect(() => {
        fetch(`https://jsearch.p.rapidapi.com/estimated-salary?job_title=${apiData[number].job_title}&location=${apiData[number].job_city}&radius=100`, options)
            .then(response => response.json())
            .then(response => {
                setEstimatedSalary(response.data)
            })
            .catch(err => console.error(err));
    }, [apiData])


    return (
        <div className={`${isDark ? 'bg-[#1C1C24]' : 'bg-white'} px-4 py-6 mt-8 rounded-lg max-w-md flex flex-col justify-between w-full`}>
            <div>
                <div className='flex gap-6 justify-between items-center'>
                    <Link href={`/companydetails/${apiData[number]?.employer_name.toLowerCase()}`} onClick={handleClickCompany}>
                        <div>
                            <div className={`${isDark ? 'bg-[#1C1C24] border border-[#21212B]' : 'bg-[#FAFAFB]'} p-2 rounded-lg`}>
                                <img src={apiData[number]?.employer_logo || 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt='company' className='object-contain w-[50px] h-[50px]' />
                            </div>
                        </div>
                    </Link>
                    <div className='flex-1 flex-col'>
                        <div className='flex justify-between'>
                            <Link href={`/jobdetails/${apiData[number]?.job_title.toLowerCase()}`} onClick={handleClickJob}>
                                <h2 className={`font-semibold text-lg ${isDark && 'text-white'}`}>{apiData[number]?.job_title}</h2>
                            </Link>
                            <HiOutlineDotsHorizontal className='text-[#B5B5BE] text-xl' />
                        </div>
                        <div className='flex gap-1 mt-4'>
                            <TextBubble text={apiData[number]?.job_required_skills && apiData[number]?.job_required_skills[0] || 'React'} />
                            <TextBubble text={apiData[number]?.job_required_skills && apiData[number]?.job_required_skills[1] || 'Laravel'} />
                            <TextBubble text={apiData[number]?.job_required_skills && apiData[number]?.job_required_skills[2] || 'CSS'} />
                            <TextBubble text={apiData[number]?.job_required_skills && apiData[number]?.job_required_skills[3] || 'PHP'} />
                        </div>
                    </div>
                </div>
                {apiData[number]?.job_highlights.Responsibilities != undefined ? <p className='mt-7  font-normal text-[#696974] text-lg'>{apiData[number]?.job_highlights?.Responsibilities[0]}</p> : <p className='mt-7  font-normal text-[#696974] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>}
            </div>
            <div>
                <div className='flex gap-1 mt-7 justify-center'>
                    <TextBubble text={apiData[number]?.job_employment_type.toLowerCase()} icon={<RiSuitcaseLine />} />
                    <TextBubble text='45 Applied' icon={<MdOutlinePeopleAlt />} />
                    <TextBubble text='3 days left' icon={<AiOutlineClockCircle />} />
                </div>
                <div className='flex justify-between mt-7 items-center'>
                    <p className={`font-extrabold text-xl ${isDark && 'text-white'}`}>{estimatedSalary && estimatedSalary.length > 0 ? `$${(estimatedSalary[0].min_salary / 12000).toFixed(0)}k-${(estimatedSalary[0].max_salary / 12000).toFixed(0)}k` : '$15k-20k'}<span className={`${isDark ? 'text-white' : 'text-[#696974]'}  font-normal text-lg`}>/month</span></p>
                    <Link href={apiData[number]?.job_apply_link || '/'} target='_blank' >
                        <button className='bg-[#0BAB7C] text-white px-4 py-2 rounded-lg font-medium text-lg'>Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobPostCard