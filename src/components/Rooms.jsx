import { useContext, useState } from 'react'
import Room from './Fragments/Room'
import { RoomContext } from '../context/RoomContext'
import { SpinnerDotted } from 'spinners-react'
import Button from './Elements/Button'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext)
  const [loadMore, setLoadMore] = useState(3)

  const slice = rooms.slice(0, loadMore)

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
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='text-center'
        >
          <div className='font-tertiary text-base uppercase tracking-[6px]'>Hotel Esex-Esex</div>
          <h2 className='font-primary text-[45px] mb-4'>Rooms &#38; Suites</h2>
        </motion.div>
        {/* Grid */}
        <div className='grid max-w-sm grid-cols-1 mx-auto gap-7 lg:grid-cols-3 lg:max-w-none lg:mx-0'>
          {slice.map(room => {
            return <Room room={room} key={room.id} />
          })}
        </div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          className='pt-10 flex justify-center'
        >
          {loadMore < rooms.length &&
            <Button
              variant="h-[48px] rounded-sm shadow-lg absolute bg-accent hover:bg-accent-hover"
              onClick={() => setLoadMore(loadMore + 3)}>
              Load more
            </Button>}
        </motion.div>
      </div>
    </section>
  )
}

export default Rooms