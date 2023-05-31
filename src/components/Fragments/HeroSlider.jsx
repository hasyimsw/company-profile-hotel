import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Autoplay } from 'swiper'
import Img1 from '/img/heroSlider/1.jpg'
import Img2 from '/img/heroSlider/2.jpg'
import Img3 from '/img/heroSlider/3.jpg'
import Img4 from '/img/heroSlider/4.jpg'

const slides = [
  {
    bg: Img1,
  },
  {
    bg: Img2,
  },
  {
    bg: Img3,
  },
  {
    bg: Img4,
  },
]

const HeroSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} className='heroSlider h-[600px] lg:h-[860px]'>
      {slides.map((slide, index) => {
        const { bg } = slide
        return (
          <SwiperSlide key={index} className='relative flex items-center justify-center h-full'>
            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover w-full h-full' src={bg} alt="image" />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default HeroSlider