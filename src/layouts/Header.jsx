import { useState, useEffect } from 'react'
import LogoWhite from '/img/logo.svg'
import LogoDark from '/img/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [nav, setNav] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setNav(true) : setNav(false)
    })
  })

  const NavItems = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Rooms", to: "/rooms" },
    { text: "Gallery", to: "/gallery" },
    { text: "Contact", to: "/contact" },
  ]

  return (
    <header className={`${nav ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-500`}>
      <div className='container flex flex-col items-center mx-auto gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
        {/* logo */}
        <NavLink to={'/'}>
          {nav ? (
            <img src={LogoDark} className='w-[100px]' />
          ) : (
            <img src={LogoWhite} className='w-[100px]' />
          )}
        </NavLink>
        {/* nav */}
        <nav className={`${nav ? 'text-primary' : 'text-white'} flex gap-x-4 lg:gap-x-8 items-center font-tertiary tracking-[3px] text-base uppercase`}>
          {NavItems.map((item, index) => {
            return (
              <NavLink key={index} to={item.to} className='transition hover:text-accent nav-link'>
                {item.text}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header