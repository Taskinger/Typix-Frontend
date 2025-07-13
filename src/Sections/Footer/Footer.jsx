import React from 'react'
import Icon from '../../Components/Icon/Icon.jsx'

const Footer = () => {
    return (
        <div className='bg-white/10 backdrop-blur-lg border border-white/20 py-10 grid grid-cols-2 items-center justify-between px-5 md:px-32'>
            <div className="leftFooter flex flex-col gap-2">
                <Icon imgClassName={'w-10'} h1ClassName={'text-2xl md:text-4xl font-medium font-jockey text-white'} />
                <p className='text-white font-light'>Where Ideas Meets a Voice . </p>
            </div>
            <div className="rightFooter flex flex-col gap-2 items-end">
                <div className="media flex gap-3">
                    <i className="uil uil-instagram text-white text-3xl hover:text-gray-700 duration-500"></i>
                    <i className="uil uil-github-alt text-white text-3xl hover:text-gray-700 duration-500"></i>
                    <i className="uil uil-whatsapp text-white text-3xl hover:text-gray-700 duration-500"></i>
                </div>
                <p className='text-white'>&copy; 2025 | <a href="#">Inkuit</a> </p>
            </div>
        </div>
    )
}

export default Footer
