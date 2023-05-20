import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Autoplay } from 'swiper'
import Img1 from '/img/heroSlider/1.jpg'
import Img2 from '/img/heroSlider/2.jpg'
import Img3 from '/img/heroSlider/3.jpg'
import { Link } from 'react-router-dom'

const slides = [
    {
        title: 'Your Luxury Hotel For Vacation With fucking people',
        bg: Img1,
        btnText: 'See our rooms',
    },
    {
        title: 'Your Luxury Hotel For Vacation With fucking people',
        bg: Img2,
        btnText: 'See our rooms',
    },
    {
        title: 'Your Luxury Hotel For Vacation With fucking people',
        bg: Img3,
        btnText: 'See our rooms',
    },
]

const HeroSlider = () => {
    return (
        <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} className='heroSlider h-[600px] lg:h-[860px]'>
            {slides.map((slide, index) => {
                const { title, bg, btnText } = slide
                return (
                    <SwiperSlide key={index} className='relative flex items-center justify-center h-full'>
                        <div className='z-20 text-center text-white'>
                            <div className='uppercase font-tertiary tracking-[6px] mb-5'>
                                Just Enjoy and Relax
                            </div>
                            <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] mb-4'>
                                {title}
                            </h1>
                            <button className='mx-auto btn btn-lg btn-primary'>
                                <Link to={'/room'} className='mx-auto btn btn-lg btn-primary'>{btnText}</Link>
                            </button>
                        </div>
                        <div className='absolute top-0 w-full h-full'>
                            <img className='object-cover w-full h-full' src={bg} alt="image" />
                        </div>
                        {/* overlay */}
                        <div className='absolute w-full h-full bg-black/70'></div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default HeroSlider