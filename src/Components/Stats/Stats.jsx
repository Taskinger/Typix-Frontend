import React from 'react'
import StatsCard from '../StatsCard/StatsCard'

const Stats = () => {
    return (
        <div className='grid md:grid-cols-3 gap-4 py-10 md:py-20 lg:py-36 place-items-center border-b border-[#9E9E9E]'>
            <StatsCard title="Users" value="30" />
            <StatsCard title="Readers" value="320" />
            <StatsCard title="Articles" value="300" />
        </div>
    )
}

export default Stats
    