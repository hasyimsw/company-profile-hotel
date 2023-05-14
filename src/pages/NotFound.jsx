import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <section className='not-found relative flex flex-col gap-y-2 items-center justify-center'>
        <div className='absolute w-full h-full bg-black/70'></div>
        <h1 className='text-7xl text-white font-bold z-10'>404</h1>
        <h3 className='text-5xl text-white font-semibold z-10'>Page Not Found</h3>
        <Link to={'/'} className='text-center underline text-white z-10'>go to home</Link>
      </section>
    </>
  )
}

export default NotFound