import React from 'react'

const HamburgerButton = ({ onClick }) => {
    return (
        <button className="p-2 md:hidden" onClick={onClick}>
            <div className="w-6 h-0.5 bg-white my-1"></div>
            <div className="w-6 h-0.5 bg-white my-1"></div>
            <div className="w-6 h-0.5 bg-white my-1"></div>
        </button>
    )
}

export default HamburgerButton
