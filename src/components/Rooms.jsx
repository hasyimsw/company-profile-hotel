import React, { useContext } from 'react'
import Room from './Room'
import { RoomContext } from '../context/RoomContext'
import { SpinnerDotted } from 'spinners-react'

const Rooms = () => {
    const { rooms, loading } = useContext(RoomContext)

    return (
        <section className='py-24'>
            {/* overlay & spinner */}
            {loading && (
                <div className='fixed top-0 bottom-0 z-50 flex items-center justify-center w-full h-screen bg-black/90'>
                    <div className='flex flex-col items-center justify-center'>
                        <SpinnerDotted color='#ffc000' />
                        <span className='mt-3 text-white uppercase font-secondary'>Loading...</span>
                    </div>
                </div>
            )}
            <div className="container mx-auto lg:px-0">
                <div className='text-center'>
                    <div className='font-tertiary text-base uppercase tracking-[6px]'>Hotel &#38; Spa Adina</div>
                    <h2 className='font-primary text-[45px] mb-4'>Rooms &#38; Suites</h2>
                </div>
                {/* Grid */}
                <div className='grid max-w-sm grid-cols-1 mx-auto gap-7 lg:grid-cols-3 lg:max-w-none lg:mx-0'>
                    {rooms.map(room => {
                        return <Room room={room} key={room.id} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Rooms