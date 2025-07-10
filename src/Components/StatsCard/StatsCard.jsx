import React from 'react'

const StatsCard = ({ title, value }) => {
    return (
        <div className='bg-[#7EC8E3] p-4 rounded-lg shadow-md w-[320px] h-80 flex flex-col items-center justify-center'>
            <h2 className='font-josefin text-8xl font-medium text-white m-0'>{value}+</h2>
            <p className='font-jetbrains text-white text-5xl m-0 font-extralight opacity-60'>{title}+</p>
        </div>
    )
}

export default StatsCard
