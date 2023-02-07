import React from 'react'
import { useSelector } from 'react-redux'

const JobAlert = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className='bg-white mt-7 p-5'>
            <h2 className='font-semibold'>Create Job Alert</h2>
            <p className='mt-1 text-[#696974] max-w-[50%]'>Increase an opportunity to get chance for new jobs.</p>
            <input type="text" placeholder='Type Your Email' className='py-3 px-5 bg-[#F5F5F8] w-full mt-5 rounded-xl' />
            <button className='mt-5 w-full text-[#0BAB7C] border-2 border-[#0BAB7C] py-4 rounded-xl font-bold'>Create Job Alert</button>
        </div>
    )
}

export default JobAlert