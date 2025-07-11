import React from 'react'
import bannerImg from '../../assets/banner.svg';
import HeaderInfo from '../HeaderInfo/HeaderInfo';

const Header = () => {
    return (
        <div className="header grid grid-cols-1 md:grid-cols-2 px-4 md:px-0.5 lg:px-6 pb-10 md:py-10 lg:p-y15 border-b border-[#9E9E9E] pt-15 lg:pt-28">
            <HeaderInfo />
            <div className="banner-img hidden md:block place-content-center md:w-full lg:w-[80svh]">
                <img src={bannerImg} className='w-full' alt="bannerImg" />
            </div>
        </div>
    )
}

export default Header
