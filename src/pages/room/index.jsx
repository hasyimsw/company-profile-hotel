import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Rooms from '../../components/Rooms'

const RoomList = () => {
  return (
    <>
      <Header />
      <section className='py-24 bg-black/30'>
        <Rooms />
      </section>
      <Footer />
    </>
  )
}

export default RoomList