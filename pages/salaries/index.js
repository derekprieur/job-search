import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

import { Navbar, SalaryInput, Title } from "components";
import { update } from '../../redux/isMobileSlice'
import chartlight from '../../assets/chartlight.png'
import chartdark from '../../assets/chartdark.png'
import chartlightlarge from '../../assets/chartlightlarge.png'
import chartdarklarge from '../../assets/chartdarklarge.png'

export default function Salaries() {
    const isDark = useSelector(state => state.darkMode.value)

    return (
        <main>
            <Navbar />
            <div className={`${!isDark ? 'bg-[#FAFAFB]' : 'bg-[#13131A]'}  h-full py-20 md:flex md:gap-20 md:px-20 px-6`}>
                <div className="md:flex-col md:w-[50%]">
                    <div className="mt-6">
                        <Title title="Estimated Salaries" />
                    </div>
                    <div className="mt-8">
                        <SalaryInput title='Job Title' />
                        <div className="md:flex gap-14">
                            <SalaryInput title='Location' />
                            <SalaryInput title='Radius' />
                        </div>
                    </div>
                </div>
                <div className="md:w-[50%] md:flex md:items-end md:justify-end">
                    <div className="block md:hidden">
                        {isDark
                            ? <Image src={chartdark} alt='chart' className="w-full object-contain mt-10 md:hidden" />
                            : <Image src={chartlight} alt='chart' className="w-full object-contain mt-10 md:hidden" />}
                    </div>
                    <div className="hidden md:block">
                        {isDark
                            ? <Image src={chartdarklarge} alt='chart' className="w-full object-contain mt-10 " />
                            : <Image src={chartlightlarge} alt='chart' className="w-full object-contain mt-10 " />}
                    </div>
                </div>
            </div>

        </main>
    )
}