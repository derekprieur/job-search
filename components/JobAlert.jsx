import React from 'react'
import { useSelector } from 'react-redux'

const JobAlert = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className={` mt-7 p-5 rounded-xl ${isDark ? 'bg-[#1C1C24]' : 'bg-white'}`}>
            <h2 className={`font-semibold ${isDark && 'text-white'}`}>Create Job Alert</h2>
            <p className={`mt-1  max-w-[50%] ${isDark ? 'text-[#92929D]' : 'text-[#696974]'}`}>Increase an opportunity to get chance for new jobs.</p>
            <input type="text" placeholder='Type Your Email' className={`py-3 px-5 w-full mt-5 rounded-xl ${isDark ? 'bg-[#13131A]' : 'bg-[#F5F5F8]'}`} />
            <button className='mt-5 w-full text-[#0BAB7C] border-2 border-[#0BAB7C] py-4 rounded-xl font-bold'>Create Job Alert</button>
        </div>
    )
}

export default JobAlert