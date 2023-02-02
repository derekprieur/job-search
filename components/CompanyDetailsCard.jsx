import Image from 'next/image'
import React from 'react'
import background from '../assets/background.png'
import companylogo from '../assets/companylogo.png'
import { BsDot } from 'react-icons/bs'
import people from '../assets/people.png'

const CompanyDetailsCard = () => {
    return (
        <div>
            <div className='w-full relative'>
                <Image src={background} alt='background' className='w-full rounded-t-3xl mt-7' />
                <div className='absolute bg-[#FAFAFB] bottom-[-30px] rounded-lg border left-4'>
                    <Image src={companylogo} alt='company logo' width={60} className='object-cover p-[1px]' />
                </div>
            </div>
            <h1 className='mt-12 px-4 font-semibold text-2xl'>UIHUT</h1>
            <div className='px-4 mt-4 flex items-center gap-2 text-[#696974]'>
                <p>UIHUT Technologies LLC </p>
                <BsDot />
                <p>Sylhet, BD</p>
            </div>
            <div className='px-4 mt-2 flex items-center gap-2 text-[#696974]'>
                <p>Design Resources Platform</p>
                <BsDot />
                <p className='text-[#92929D]'>203,765 Followers</p>
            </div>
            <div className='border-b border-[#F1F1F5] mt-6' />
            <Image className='ml-4 mt-6' src={people} />
        </div>
    )
}

export default CompanyDetailsCard