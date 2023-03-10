import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Link from "next/link";

import { CompanyDetailsCard, SimilarCompanyCard } from "components";
import { update } from '../../../redux/isMobileSlice'

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
            <div className={`${!isDark ? 'bg-[#FAFAFB]' : 'bg-[#13131A]'}  h-full py-20 ${!isMobile ? 'flex px-20' : 'px-6'}`}>
                <div className={`${!isMobile && 'w-[60%]'}`}>
                    <Link href='/'>
                        <button className={`mt-12 flex items-center gap-3  text-[#92929D] px-3 py-2 rounded-lg ${isDark ? 'bg-[#21212B]' : 'bg-[#F1F1F5]'}`}>
                            <MdOutlineKeyboardArrowLeft className="text-2xl" />
                            <p>Back</p>
                        </button>
                    </Link>
                    <CompanyDetailsCard />
                </div>
                <div className={`${!isMobile && 'w-[40%]'}`}>
                    <h1 className={`font-bold px-4 text-[22px] mt-10 mb-8 ${isDark && 'text-white'}`}>Similar Companies</h1>
                    <SimilarCompanyCard number={0} />
                    <SimilarCompanyCard number={1} />
                    <SimilarCompanyCard number={2} />
                    <SimilarCompanyCard number={3} />
                    <SimilarCompanyCard number={4} />
                    <SimilarCompanyCard number={5} />
                    <SimilarCompanyCard number={6} />
                    <SimilarCompanyCard number={7} />
                </div>
            </div>
        </main>
    )
}