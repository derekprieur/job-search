import { useSelector } from "react-redux"

const MobileMenu = () => {
    const isMobileMenuOpen = useSelector(state => state.mobileMenuOpen.value)
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className={`fixed h-screen w-full transition-all duration-500 ${isMobileMenuOpen ? '-translate-y-[1000px]' : 'translate-x-0'} ${isDark ? 'bg-[#13131A]' : 'bg-white'}`}>
            <ul className={`flex items-center justify-center w-full h-screen flex-col gap-10 text-3xl ${isDark && 'text-white'}`}>
                <li className="cursor-pointer">Overview</li>
                <li className="cursor-pointer">Estimated Salaries</li>
                <li className="cursor-pointer">Job Search</li>
            </ul>
        </div>
    )
}

export default MobileMenu