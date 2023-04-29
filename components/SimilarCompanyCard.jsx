import { BsPlus, BsStarHalf } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const SimilarCompanyCard = ({ number }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const apiData = useSelector(state => state.apiData.value)

    console.log(apiData, 'apiData similar company card')

    return (
        <div className={`mx-4 p-6 mb-5 rounded-xl ${isDark ? 'bg-[#21212B]' : 'bg-white'}`}>
            <div className='flex justify-between flex-wrap'>
                <div className='flex items-center gap-3'>
                    <img src={apiData[number]?.employer_logo} alt='company' className='w-12 h-12' />
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <h2 className={`font-semibold text-lg ${isDark && 'text-white'}`}>{apiData[number]?.employer_name}</h2>
                            <BsStarHalf className='text-[#FFC542]' />
                            <p className='text-[#92929D]'>4.8k</p>
                        </div>
                        <h2 className='text-[#92929D]'>Apple LLC</h2>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center border border-[#0BAB7C] text-[#0BAB7C] justify-center rounded-2xl py-1 px-4'>
                        <BsPlus className='text-3xl' />
                        <p>Follow</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimilarCompanyCard