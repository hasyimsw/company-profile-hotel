import { NavLink } from "react-router-dom"
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const MobileMenu = (proops) => {
  const { onClick } = proops
  const NavItems = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Rooms", to: "/rooms" },
    { text: "Gallery", to: "/gallery" },
    { text: "Contact", to: "/contact" },
  ]

  return (
    <motion.div
      initial={{ display: 'hidden', opacity: 0 }}
      animate={{ display: 'block', opacity: 1 }}
      exit={{ opacity: 0, display: 'hidden' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`w-full bg-black/70 absolute top-0 right-0 z-20 transition-transform duration-300 ease-linear`}>
      <div className="w-3/4 z-10 ml-auto h-screen bg-white">
        <nav className="flex flex-col w-1/2 mx-auto text-center space-y-6 pt-40 font-tertiary tracking-[3px] text-2xl uppercase">
          {NavItems.map((item, index) => {
            return (
              <NavLink key={index} to={item.to} className="transition hover:text-accent nav-link" onClick={onClick}>
                {item.text}
              </NavLink>
            )
          })}
        </nav>
        <AiOutlineClose
          className="h-7 w-7 text-accent cursor-pointer absolute top-0 right-0 m-4"
          onClick={onClick}
        />
      </div>
    </motion.div>
  )
}

export default MobileMenu