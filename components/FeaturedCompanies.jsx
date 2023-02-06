import React from 'react'
import { useSelector } from 'react-redux'
import FeaturedCompanyCard from './FeaturedCompanyCard'

const FeaturedCompanies = () => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className='mt-10'>
            <h1 className={`font-semibold text-[22px] ${isDark && 'text-white'}`}>Featured Companies</h1>
            <div className='md:flex md:flex-wrap gap-9 '>
                <FeaturedCompanyCard />
                <FeaturedCompanyCard />
                <FeaturedCompanyCard />
            </div>
        </div>
    )
}

export default FeaturedCompanies