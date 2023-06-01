import { Link } from 'react-router-dom'
import HeroSlider from '../components/Fragments/HeroSlider'
import Button from '../components/Elements/Button'
import ScrollToTop from '../components/ScrollToTop'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section className='relative'>
      <ScrollToTop />
      <div className='absolute top-0 z-10 h-[600px] lg:h-[860px] w-full bg-black/70'>
        <div className='text-center text-white pt-60 lg:pt-72'>
          <motion.div
            initial={{ x: 70 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className='uppercase font-tertiary tracking-[6px] mb-5'
          >
            Just Enjoy and Relax
          </motion.div>
          <motion.div
            initial={{ y: 70 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] mb-4 flex justify-center mx-auto'>
              Your Luxury Hotel For Vacation
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant='mx-auto h-[60px] bg-accent'>
              <Link to={'/rooms'}>
                See Our Rooms
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <HeroSlider />
      <div>
        <h1 className='text-6xl font-bold text-center py-52 animate-spin'>iki yo butuh kata-kata</h1>
      </div>
    </section>
  )
}

export default Home