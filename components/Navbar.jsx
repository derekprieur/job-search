import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/jobit.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BiSun } from 'react-icons/bi'
import { BsMoon } from 'react-icons/bs'
import { toggle } from 'redux/darkModeSlice'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const isDark = useSelector(state => state.darkMode.value)
    const dispatch = useDispatch()
    return (
        <div className={`px-6 md:px-20 py-8 border-b ${isDark ? 'border-[#21212B]' : 'border-[#E2E2EA]'} text-[#92929D] ${isDark ? 'bg-[#13131A]' : 'bg-white'} fixed top-0 w-full z-50`}>
            <div className='flex justify-between items-center'>
                <RxHamburgerMenu className='text-2xl flex md:hidden' />
                <Image alt='logo' src={logo} className='w-[90px] h-[22px] object-contain hidden md:flex' />
                <div className='gap-8 font hidden md:flex'>
                    <Link href='/'>
                        <div className='text-[#0BAB7C] font-bold text-base relative'>
                            Overview
                            <div className='h-[2px] w-[70px] bg-[#0BAB7C] bottom-[-33px] left-0 absolute' />
                        </div>
                    </Link>
                    <Link href='/salaries'>
                        <p>Estimated Salaries</p>
                    </Link>
                    <Link href='/search'>
                        <p>Job Search</p>
                    </Link>
                </div>
                <div className='flex items-center gap-3'>
                    <BiSun className='text-xl' />
                    <button className={`${isDark ? 'bg-[#21212B]' : 'bg-[#F1F1F5]'} w-[44px] h-6 rounded-full relative`} onClick={() => dispatch(toggle())}>
                        <div className={`h-5 w-5 rounded-full bg-[#0BAB7C] ${isDark && 'translate-x-[23px]'}`} />
                    </button>
                    <BsMoon className='text-xl' />
                </div>
            </div>
        </div>
    )
}

export default Navbar