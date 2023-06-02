import { useState } from "react"
import ScrollToTop from "../components/ScrollToTop"

const Gallery = () => {
  const [tab, setTab] = useState(0)

  const toggleTab = (index) => {
    setTab(index)
  }

  return (
    <>
      <section className='py-24 bg-black text-white'>
        <ScrollToTop />
        <div className="container h-screen mx-auto">
          <h1 className='pt-24 pb-8 font-bold text-center text-7xl'>Durung Enek Halamane Bosss</h1>
          <p>Lorem ipsummm dolor sit amet consectetur adipisicing elit. Veniam tempora minima facilis iusto est, quasi laudantium assumenda, amet deserunt dolores, necessitatibus laborum pariatur. Molestias impedit suscipit, nesciunt debitis sit, eos quo nostrum quas eveniet ratione ab odit cupiditate iusto reiciendis veniam laboriosam aut minus eius rem vitae ipsam ullam? Non labore autem temporibus odit et! Sed, necessitatibus! Unde cum ullam ipsum modi veniam fugit repudiandae! Facere sit odit ipsum unde nemo dicta, exercitationem doloribus! Odio omnis ratione, labore quos et atque, nulla numquam dolor laboriosam tempora similique soluta ex molestiae iste reiciendis vitae veritatis deserunt. Velit corporis suscipit nemo dolor?</p>
        </div>

        <div className="flex space-x-4">
          <button onClick={() => toggleTab(1)} className={tab === 1 ? 'bg-red-500' : 'bg-black'}>satu</button>
          <button onClick={() => toggleTab(2)} className={tab === 2 ? 'bg-red-500' : 'bg-black'}>dua</button>
          <button onClick={() => toggleTab(3)} className={tab === 3 ? 'bg-red-500' : 'bg-black'}>tiga</button>
        </div>
        <div>
          <p className={tab === 1 ? 'block' : 'hidden'}>Tab 1</p>
          <p className={tab === 2 ? 'block' : 'hidden'}>Tab 2</p>
          <p className={tab === 3 ? 'block' : 'hidden'}>Tab 3</p>
        </div>
      </section>
    </>
  )
}

export default Gallery