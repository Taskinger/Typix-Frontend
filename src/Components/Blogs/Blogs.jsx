import React from 'react'
import Card from '../BlogCard/BlogCard'
import { cardDetails } from '../../assets/assets'

const Blogs = () => {
    return (
        <div className="py-10 flex flex-col items-center justify-center px-4">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {cardDetails.map((card) =>(
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </div>
    )
}

export default Blogs
