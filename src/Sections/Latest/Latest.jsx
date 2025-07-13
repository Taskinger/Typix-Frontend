import React from 'react'
import Blogs from '../../Components/Blogs/Blogs.jsx'
import Button from '../../Components/Button/Button.jsx'

const Latest = () => {
  return (
    <div id='explore' className='w-full text-center p-5 border-b border-white'>
      <div className="latetsHead x py-5 text-white font-jersey text-6xl">
        <h1>Featured / Latest Blogs</h1>
      </div>
      <Blogs />
      <Button className={'border border-white rounded-[15px] py-3 px-8 text-white'}>Explore More ➤</Button>
    </div>
  )
}

export default Latest
