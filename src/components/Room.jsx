import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowsFullscreen, BsPeople, } from 'react-icons/bs'

const Room = ({ room }) => {
    const { id, name, image, size, maxPerson, description, price } = room

    return (
        <div className='bg-white shadow-2xl min-h-[500px] group'>
            {/* image */}
            <div className='overflow-hidden'>
                <img className='w-full transition-all duration-500 group-hover:scale-110' src={image} alt="image" />
            </div>
            {/* Details */}
            <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex items-center justify-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
                <div className='flex justify-between w-[80%]'>
                    {/* size */}
                    <div className='flex items-center gap-x-2'>
                        <div className='text-accent'>
                            <BsArrowsFullscreen className='text-base' />
                        </div>
                        <div className='flex text-sm gap-x-1'>
                            <p>Size</p>
                            <p>{size}m2</p>
                        </div>
                    </div>
                    {/* room capacity */}
                    <div className='flex items-center gap-x-2'>
                        <div className='text-accent'>
                            <BsPeople className='text-base' />
                        </div>
                        <div className='flex text-sm gap-x-1'>
                            <p>Max People</p>
                            <p>{maxPerson}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* name & description */}
            <div className='text-center'>
                <Link to={`/room/${id}`}>
                    <h3 className='h3'>{name}</h3>
                </Link>
                <p className='max-w-[300px] mx-auto mb-3 lg:mb-6 text-sm text-slate-500'>{description.slice(0, 60)}<Link to={`/room/${id}`} className='ml-1 underline cursor-pointer text-sky-500 hover:text-sky-600'>see more..</Link></p>
            </div>
            {/* button */}
            <Link to={`/room/${id}`} className='btn btn-secondary btn-sm max-w-[240px] mx-auto shadow-md'>
                Book now from ${price}
            </Link>
        </div>
    )
}

export default Room