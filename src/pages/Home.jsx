import React from 'react'
import BookForm from '../components/BookForm'
import HeroSlider from '../components/HeroSlider'
import Rooms from '../components/Rooms'

const Home = () => {
    return (
        <div>
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

export default Home