import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import AdultsDropdown from '../../components/AdultsDropdown'
import CheckIn from '../../components/CheckIn'
import CheckOut from '../../components/CheckOut'
import KidsDropdown from '../../components/KidsDropdown'
import ScrollToTop from '../../components/ScrollToTop'
import { RoomContext } from '../../context/RoomContext'
import { FaCheck } from 'react-icons/fa'
import NotFound from '../NotFound'

const RoomDetails = () => {
    const { rooms } = useContext(RoomContext)
    const { id } = useParams()

    const room = rooms.find((room) => {
        return room.id === Number(id)
    })

    if (!room) return <NotFound />

    const { name, description, facilities, imageLg, price } = room

    return (
        <>
            <section>
                <ScrollToTop />
                {/* Banner */}
                <div className='relative flex items-center justify-center h-screen bg-center bg-cover bg-room-details'>
                    {/* overlay */}
                    <div className='absolute w-full h-full bg-black/70'></div>
                    {/* title */}
                    <h1 className='z-20 text-6xl text-center text-white font-primary'>{name} Details</h1>
                </div>
                <div className='container mx-auto'>
                    <div className='flex flex-col h-full py-24 lg:flex-row'>
                        {/* left */}
                        <div className='w-full h-full lg:w-[60%] px-6'>
                            <h2 className='h2'>{name}</h2>
                            <p className='mb-8'>{description}</p>
                            <img className='mb-8' src={imageLg} alt="Image" />
                            {/* Fasilitas */}
                            <div className='mt-12'>
                                <h3 className='mb-2 h3'>Room Facilities</h3>
                                <p className='mb-10'>Kamar ini memiliki beberapa fasilitas yang dapat anda pilih:</p>
                                {/* Grid */}
                                <div className='grid grid-cols-3 gap-4 mb-12'>
                                    {facilities.map((item, index) => {
                                        const { name, icon } = item
                                        return <div key={index} className='flex items-center flex-1 gap-x-3'>
                                            <div className='text-3xl text-accent'>{icon}</div>
                                            <div className='text-base text-accent'>{name}</div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* right */}
                        <div className='w-full h-full lg:w-[40%]'>
                            {/* reservation */}
                            <div className='px-6 py-8 mb-12 bg-accent/20'>
                                <div className='flex flex-col mb-4 space-y-4'>
                                    <h3>Your Reservation</h3>
                                    <div className='h-[60px]'>
                                        <CheckIn />
                                    </div>
                                    <div className='h-[60px]'>
                                        <CheckOut />
                                    </div>
                                    <div className='h-[60px]'>
                                        <AdultsDropdown />
                                    </div>
                                    <div className='h-[60px]'>
                                        <KidsDropdown />
                                    </div>
                                </div>
                                <button className='w-full btn btn-lg btn-primary'>book now for ${price}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RoomDetails