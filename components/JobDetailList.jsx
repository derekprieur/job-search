import React from 'react'

const responsibilitiesList = ["Design, build, test, and deploy software applications and features", "Carry software products through the software development life cycle (SDLC)", "Write clean, concise, and efficient code", "Manage code documentation and version control", "Troubleshoot and debug software", "Participate in on-call rotation to respond to production issues"]

const skillList = ["3+ years of professional experience working on this field", "Bachelor's degree in computer science, software engineering, or related field", "Proficiency in at least one programming language (e.g., Java, C#, C++)", "Back-end development expertise", "Strong problem-solving and communication skills", "Experience with build tools such as Gradle and Maven", "Good working knowledge of the Linux operating system"]

const JobDetailList = ({ title, list }) => {
    console.log(list, 'list')
    
    return (
        <div className='px-4 flex flex-col gap-3'>
            <h2 className='text-[#171725] font-semibold text-lg'>{title}</h2>
            {title === 'Responsibilities' && responsibilitiesList.map((item, index) => (
                <div key={index} className='flex gap-3'>
                    <div className='w-3 h-3 border-2 border-[#0BAB7C] rounded-full mt-2 shrink-0' />
                    <p className='text-[#696974] font-normal'>{item}
                    </p>
                </div>
            ))}
            {title === 'Qualifications and Skill Sets' && skillList.map((item, index) => (
                <div key={index} className='flex gap-3'>
                    <div className='w-3 h-3 border-2 border-[#0BAB7C] rounded-full mt-2 shrink-0' />
                    <p className='text-[#696974] font-normal'>{item}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default JobDetailList