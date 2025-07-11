import React from 'react'

const Icon = ({h1ClassName, imgClassName}) => {
    return (
        <div>
            <div className="icon flex gap-1 items-center">
                <img src="/logo.svg" className={imgClassName} alt="" />
                <h1 className={h1ClassName}>Typix.</h1>
            </div>
        </div>
    )
}

export default Icon
