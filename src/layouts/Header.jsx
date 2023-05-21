import React, { useState, useEffect } from 'react'
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
                    <NavLink to="/" className='transition hover:text-accent nav-link'>Home</NavLink>
                    <NavLink to="/about" className='transition hover:text-accent nav-link'>About</NavLink>
                    <NavLink to="/room" className='transition hover:text-accent nav-link'>Rooms</NavLink>
                    <NavLink to="/gallery" className='transition hover:text-accent nav-link'>Gallery</NavLink>
                    <NavLink to="/contact" className='transition hover:text-accent nav-link'>Contact</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header