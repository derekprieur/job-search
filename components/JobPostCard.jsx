import company from '../assets/companylogo.png'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { RiSuitcaseLine } from 'react-icons/ri'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { TextBubble } from '.'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const JobPostCard = ({ number }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const apiData = useSelector(state => state.apiData.value)

    return (
        <div className={`${isDark ? 'bg-[#1C1C24]' : 'bg-white'} px-4 py-6 mt-8 rounded-lg max-w-md`}>
            <div className='flex gap-6 justify-between items-center'>
                <div>
                    <div className={`${isDark ? 'bg-[#1C1C24] border border-[#21212B]' : 'bg-[#FAFAFB]'} p-2 rounded-lg`}>
                        <img src={apiData[number]?.employer_logo || company} alt='company' className='object-contain w-[50px] h-[50px]' />
                    </div>
                </div>
                <div className='flex-1 flex-col'>
                    <div className='flex justify-between'>
                        <h2 className={`font-semibold text-lg ${isDark && 'text-white'}`}>{apiData[number]?.job_title}</h2>
                        <HiOutlineDotsHorizontal className='text-[#B5B5BE] text-xl' />
                    </div>
                    <div className='flex gap-1 mt-4'>
                        <TextBubble text='PHP' />
                        <TextBubble text='Laravel' />
                        <TextBubble text='CSS' />
                        <TextBubble text='React' />
                    </div>
                </div>
            </div>
            {apiData[number]?.job_highlights.Responsibilities != undefined ? <p className='mt-7 font-normal text-[#696974] text-lg'>{apiData[number]?.job_highlights?.Responsibilities[0]}</p> : <p className='mt-7 font-normal text-[#696974] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>}
            <div className='flex gap-1 mt-7 justify-center'>
                <TextBubble text={apiData[number]?.job_employment_type.toLowerCase()} icon={<RiSuitcaseLine />} />
                <TextBubble text='45 Applied' icon={<MdOutlinePeopleAlt />} />
                <TextBubble text='3 days left' icon={<AiOutlineClockCircle />} />
            </div>
            <div className='flex justify-between mt-7 items-center'>
                <p className={`font-extrabold text-xl ${isDark && 'text-white'}`}>$15k-20k<span className={`${isDark ? 'text-white' : 'text-[#696974]'}  font-normal text-lg`}>/month</span></p>
                <Link href={apiData[number]?.job_apply_link || '/'} target='_blank' >
                    <button className='bg-[#0BAB7C] text-white px-4 py-2 rounded-lg font-medium text-lg'>Apply Now</button>
                </Link>
            </div>
        </div>
    )
}

export default JobPostCard