import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Navbar, SalaryInput, Title } from "components";
import { update } from '../../redux/isMobileSlice'
import chartlight from '../../assets/chartlight.png'
import chartdark from '../../assets/chartdark.png'
import Image from "next/image";

export default function Salaries() {
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
            <div className={`${!isDark ? 'bg-[#FAFAFB]' : 'bg-[#13131A]'}  h-full py-20 ${!isMobile ? 'flex px-20' : 'px-6'}`}>
                <div className="mt-6">
                    <Title title="Estimated Salaries" />
                </div>
                <div className="mt-8">
                    <SalaryInput title='Job Title' />
                    <SalaryInput title='Location' />
                    <SalaryInput title='Radius' />
                </div>
                {isDark
                    ? <Image src={chartdark} alt='chart' className="w-full object-contain mt-10" />
                    : <Image src={chartlight} alt='chart' className="w-full object-contain mt-10" />}
            </div>

        </main>
    )
}