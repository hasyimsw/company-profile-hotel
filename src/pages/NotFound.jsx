import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <section className='relative flex flex-col items-center justify-center not-found gap-y-2'>
        <div className='absolute w-full h-full bg-black/70'></div>
        <h1 className='z-10 font-bold text-white text-7xl'>404</h1>
        <h3 className='z-10 text-5xl font-semibold text-white'>Page Not Found</h3>
        <Link to={'/'} className='z-10 text-center text-white underline'>Go to home</Link>
      </section>
    </>
  )
}

export default NotFound