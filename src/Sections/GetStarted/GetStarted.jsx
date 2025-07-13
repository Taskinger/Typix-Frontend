import React from 'react'
import Button from '../../Components/Button/Button'

const GetStarted = () => {
  return (
    <div className='py-7 flex flex-col items-center justify-center gap-3'>
      <p className='text-white text-xl md:text-2xl text-center font-jockey'>Got Stories to tell ? Join a community of writers and thinkers</p>
      <Button className={'border border-white py-2 px-6 rounded-[12px] text-white cursor-pointer hover:bg-white/10 hover:backdrop-blur-lg hover:border hover:border-white/20 duration-500'}>Get Started</Button>
    </div>
  )
}

export default GetStarted
