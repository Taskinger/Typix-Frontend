import React from 'react'
import Button from '../Button/Button'
import bannerImg from '../../assets/banner.svg'

const HeaderInfo = () => {
    return (
        <div className="headerInfo md:pl-10 lg:pl-16 flex flex-col justify-center gap-4 sm:gap-2.5">
            <img src={bannerImg} className='sm:hidden' alt="bannerImg" />
            <h1 className="text-6xl lg:text-8xl text-white font-jockey tracking-wide font-bold">Where Ideas <br /> Meets a Voice . </h1>
            <p className='font-jetbrains text-white font-extralight text-[15px] lg:text-2xl'>A platform for creators and writers . <br />
                Share your stories, or explore blogs</p>
            <div className="buttons flex flex-col lg:flex-row gap-4 m-1">
                <Button className={'px-8 py-4 font-jetbrains outline-1 text-white cursor-pointer rounded-xl hover:bg-[#7EC8E3] duration-500 transition'}>Explore Blogs</Button>
                <Button className={'px-8 py-4 font-jetbrains hover:outline-1 text-white cursor-pointer rounded-xl  bg-[#7EC8E3] hover:bg-transparent duration-500 transition'}>Start Writing</Button>
            </div>
        </div>
    )
}

export default HeaderInfo
