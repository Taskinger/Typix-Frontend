import React from 'react'
import Button from '../Button/Button.jsx';
import bannerImg from '../../assets/banner.svg';

const Header = () => {
    return (
        <div className="header grid grid-cols-2 p-15">
            <div className="headerInfo  pl-16 flex flex-col justify-center gap-2.5">
                <h1 className="text-9xl text-white font-jockey tracking-wide font-bold">Where Ideas <br /> Meets a Voice . </h1>
                <p className='font-jetbrains text-white font-extralight text-2xl'>A platform for creators and writers . <br />
                    Share your stories, or explore blogs</p>
                <div className="buttons flex gap-4">
                    <Button className={'px-8 py-4 font-jetbrains outline-1 text-white cursor-pointer rounded-xl hover:bg-[#7EC8E3] duration-500 transition'}>Explore Blogs</Button>
                    <Button className={'px-8 py-4 font-jetbrains hover:outline-1 text-white cursor-pointer rounded-xl  bg-[#7EC8E3] hover:bg-transparent duration-500 transition'}>Starts Writing</Button>
                </div>
            </div>
            <div className="banner-img  w-4/5 flex justify-center items-center">
                <img src={bannerImg} className='w-full' alt="bannerImg" />
            </div>
        </div>
    )
}

export default Header
