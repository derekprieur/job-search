import { useSelector } from "react-redux";
import Image from "next/image";

import { Navbar, SalaryInput, Title } from "components";
import chartlight from '../../assets/chartlight.png'
import chartdark from '../../assets/chartdark.png'
import chartlightlarge from '../../assets/chartlightlarge.png'
import chartdarklarge from '../../assets/chartdarklarge.png'
import { useEffect, useState } from "react";
import BarChart from "../../utils/barchart";

export default function Salaries() {
    const isDark = useSelector(state => state.darkMode.value)

    return (
        <main>
            <Navbar />
            <div className={`${!isDark ? 'bg-[#FAFAFB]' : 'bg-[#13131A]'}  h-full md:h-screen py-20 md:flex md:gap-20 md:px-20 px-6`}>
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
                <div className="md:w-[50%] md:flex md:pt-12 max-h-96 md:mt-16">
                    <BarChart />
                </div>
            </div>

        </main>
    )
}