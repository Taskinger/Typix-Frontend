import React from 'react'
import { logo } from '../../assets/assets'
import './Navbar.css'
import Icon from '../Icon/Icon'
import Navigation from '../Navigation/Navigation'

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between items-center w-full bg-[#1A1A2E] h-[85px] p-4">
        <Icon
          h1ClassName={'text-4xl font-medium font-jockey text-white'}
          imgClassName={'w-12 h-12 rounded-full shadow-lg'}
        />
        <Navigation />
      </div>
    </>
  )
}

export default Navbar
