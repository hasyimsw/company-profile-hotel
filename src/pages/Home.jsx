import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'

const Home = () => {
    return (
        <div className='relative'>
            <div className='absolute top-0 z-10 h-[600px] lg:h-[860px] w-full bg-black/70'>
                <div className='text-center text-white pt-60 lg:pt-72'>
                    <div className='uppercase font-tertiary tracking-[6px] mb-5'>
                        Just Enjoy and Relax
                    </div>
                    <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] mb-4 flex justify-center mx-auto'>
                        Your Luxury Hotel For Vacation
                    </h1>
                    <button className='mx-auto btn btn-lg btn-primary'>
                        <Link to={'/room'} className='mx-auto btn btn-lg btn-primary'>See Our Rooms</Link>
                    </button>
                </div>
            </div>
            <HeroSlider />
            <div>
                <h1 className='text-6xl font-bold text-center py-52'>iki yo butuh kata-kata</h1>
            </div>
        </div>
    )
}

export default Home