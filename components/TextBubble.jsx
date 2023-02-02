import React from 'react'
import { useSelector } from 'react-redux'

const TextBubble = ({ text, icon }) => {
    const isDark = useSelector(state => state.darkMode.value)
    return (
        <div className={`text-[#92929D] ${isDark ? 'bg-[#21212B]' : 'bg-[#FAFAFB]'}  px-2 py-1 rounded-lg flex items-center gap-2`}>{icon}{text}</div>
    )
}

export default TextBubble