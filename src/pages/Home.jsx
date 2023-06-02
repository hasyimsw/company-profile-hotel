import { Link } from 'react-router-dom'
import HeroSlider from '../components/Fragments/HeroSlider'
import Button from '../components/Elements/Button'
import ScrollToTop from '../components/ScrollToTop'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <section className='relative'>
      <ScrollToTop />
      <div className='absolute top-0 z-10 h-[600px] lg:h-[860px] w-full bg-black/70'>
        <div className='text-center text-white pt-60 lg:pt-72'>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='uppercase font-tertiary tracking-[6px] mb-5'
          >
            Just Enjoy and Relax
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] mb-4 flex justify-center mx-auto'>
              Your Luxury Hotel For Vacation
            </h1>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Button variant='mx-auto h-[60px] bg-accent hover:bg-accent-hover rounded-sm'>
              <Link to={'/rooms'}>
                See Our Rooms
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <HeroSlider />
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className='text-6xl font-bold text-center py-52'>iki yo butuh kata-kata</h1>
      </motion.div>
    </section>
  )
}

export default Home