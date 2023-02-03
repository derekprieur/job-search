import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

import { CompanyDetailsCard, FeaturedCompanies, LatestPosts, Navbar, RecommendedJobs, Schedule, SimilarCompanyCard, Title } from "components";
import { update } from '../../redux/isMobileSlice'

export default function CompanyDetails() {
    const isMobile = useSelector(state => state.isMobile.value)
    const isDark = useSelector(state => state.darkMode.value)
    const dispatch = useDispatch()

    useEffect(() => {
        const checkSize = () => {
            if (window.innerWidth <= 768) {
                dispatch(update(true))
            } else {
                dispatch(update(false))
            }
        }

        window.addEventListener('resize', checkSize)

        checkSize()

        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, [])

    return (
        <main>
            <Navbar />
            <div className={`${!isDark ? 'bg-[#FAFAFB]' : 'bg-[#13131A]'} px-6 h-full py-20`}>
                <button className="mt-12 flex items-center gap-3 bg-[#F1F1F5] text-[#92929D] px-3 py-2 rounded-lg">
                    <MdOutlineKeyboardArrowLeft className="text-2xl" />
                    <p>Back</p>
                </button>
                <CompanyDetailsCard />
                <h1 className={`font-bold px-4 text-[22px] mt-10 mb-8 ${isDark && 'text-white'}`}>Similar Companies</h1>
                <SimilarCompanyCard />
                <SimilarCompanyCard />
                <SimilarCompanyCard />
                <SimilarCompanyCard />
                <SimilarCompanyCard />
                <SimilarCompanyCard />
                <SimilarCompanyCard />
                <SimilarCompanyCard />
            </div>
        </main>
    )
}