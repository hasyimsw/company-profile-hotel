import Rooms from '../../components/Rooms'
import React from 'react'
import { Link } from 'react-router-dom'
import BookForm from '../../components/BookForm'
import HeroSlider from '../../components/HeroSlider'

const RoomList = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 z-10 h-[600px] lg:h-[860px] w-full bg-black/70'>
        <div className='text-center text-white pt-60 lg:pt-72'>
          <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] mb-4 flex justify-center mx-auto'>
            Butuh kata-kata bosss
          </h1>
        </div>
      </div>
      <HeroSlider />
      <div className="container relative mx-auto">
        <div className='p-4 mt-4 bg-accent/20 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12'>
          <BookForm />
        </div>
      </div>
      <Rooms />
    </div>
  )
}

export default RoomList