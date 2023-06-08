import { useState } from "react"
import ScrollToTop from "../components/ScrollToTop"
import { Disclosure } from "@headlessui/react"
import { RiArrowDropDownLine } from 'react-icons/ri'

const Gallery = () => {
  const [tab, setTab] = useState(1)

  const toggleTab = (index) => {
    setTab(index)
  }

  return (
    <>
      <section className='py-24 bg-black text-white'>
        <ScrollToTop />
        <div className="container min-h-screen mx-auto">
          <h1 className='pt-24 pb-8 font-bold text-center text-7xl'>Durung Enek Halamane Bosss</h1>
          <p>Lorem ipsummm dolor sit amet consectetur adipisicing elit. Veniam tempora minima facilis iusto est, quasi laudantium assumenda, amet deserunt dolores, necessitatibus laborum pariatur. Molestias impedit suscipit, nesciunt debitis sit, eos quo nostrum quas eveniet ratione ab odit cupiditate iusto reiciendis veniam laboriosam aut minus eius rem vitae ipsam ullam? Non labore autem temporibus odit et! Sed, necessitatibus! Unde cum ullam ipsum modi veniam fugit repudiandae! Facere sit odit ipsum unde nemo dicta, exercitationem doloribus! Odio omnis ratione, labore quos et atque, nulla numquam dolor laboriosam tempora similique soluta ex molestiae iste reiciendis vitae veritatis deserunt. Velit corporis suscipit nemo dolor?</p>

          <Disclosure as={'div'}>
            {({ open }) => (
              <div className={`w-full lg:w-2/6 mx-auto mt-10 rounded-md ${open ? 'bg-white text-black' : ''}`}>
                <Disclosure.Button className="flex items-center justify-between w-full px-2 py-2 text-base font-medium white border-b-[1px] border-slate-300">
                  <span>What is your refund policy?</span>
                  <RiArrowDropDownLine
                    className={`${open ? 'rotate-180 transform text-black transition-all duration-200' : 'text-white'
                      } h-6 w-6`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                  If youre unhappy with your purchase for any reason, email us
                  within 90 days and well refund you in full, no questions asked.
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          <>
            <div className="flex space-x-4 pt-10 pb-4">
              <button onClick={() => toggleTab(1)} className={`${tab === 1 ? 'bg-white text-black' : 'bg-black'} p-2 px-4 rounded-md`}>
                Content 1
              </button>
              <button onClick={() => toggleTab(2)} className={`${tab === 2 ? 'bg-white text-black' : 'bg-black'} p-2 px-4 rounded-md`}>
                Content 2
              </button>
              <button onClick={() => toggleTab(3)} className={`${tab === 3 ? 'bg-white text-black' : 'bg-black'} p-2 px-4 rounded-md`}>
                Content 3
              </button>
            </div>
            <div>
              <p className={tab === 1 ? 'block' : 'hidden'}>Tab 1</p>
              <p className={tab === 2 ? 'block' : 'hidden'}>Tab 2</p>
              <p className={tab === 3 ? 'block' : 'hidden'}>Tab 3</p>
            </div>
          </>
        </div>
      </section>
    </>
  )
}

export default Gallery