import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { update } from "redux/activePageSlice"
import { toggle as toggleMobile } from 'redux/mobileMenuOpenSlice'

const MobileMenu = () => {
    const isMobileMenuOpen = useSelector(state => state.mobileMenuOpen.value)
    const isDark = useSelector(state => state.darkMode.value)
    const activePage = useSelector(state => state.activePage.value)
    const dispatch = useDispatch()
    return (
        <div className={`fixed md:hidden h-screen w-full transition-transform duration-500 z-40 ${!isMobileMenuOpen ? '-translate-y-[1000px]' : 'translate-x-0'} ${isDark ? 'bg-[#13131A]' : 'bg-white'}`}>
            <ul className={`flex items-center justify-center w-full h-screen flex-col gap-10 text-3xl ${isDark && 'text-white'}`}>
                <Link href='/' onClick={() => {
                    dispatch(toggleMobile())
                    dispatch(update('home'))
                }}>
                    <li className="cursor-pointer relative" >
                        Overview
                        {activePage === 'home' && <div className='h-[2px] w-full bg-[#0BAB7C] bottom-[-10px] left-0 absolute' />}
                    </li>
                </Link>
                <Link href='/salaries'>
                    <li className="cursor-pointer relative" onClick={() => {
                        dispatch(toggleMobile())
                        dispatch(update('salaries'))
                    }} >
                        Estimated Salaries
                        {activePage === 'salaries' && <div className='h-[2px] w-full bg-[#0BAB7C] bottom-[-10px] left-0 absolute' />}
                    </li>
                </Link>
                <Link href='/search'>
                    <li className="cursor-pointer relative" onClick={() => {
                        dispatch(toggleMobile())
                        dispatch(update('search'))
                    }} >
                        Job Search
                        {activePage === 'search' && <div className='h-[2px] w-full bg-[#0BAB7C] bottom-[-10px] left-0 absolute' />}
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default MobileMenu