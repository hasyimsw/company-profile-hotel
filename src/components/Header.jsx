import React, { useState, useEffect } from 'react'
import LogoWhite from '/img/logo-white.svg'
import LogoDark from '/img/logo-dark.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    const [nav, setNav] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setNav(true) : setNav(false)
        })
    }, [])

    return (
        <header className={`${nav ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-500`}>
            <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
                {/* logo */}
                <Link to={'/'}>
                    {nav ? (
                        <img src={LogoDark} className='w-[160px]' />
                    ) : (
                        <img src={LogoWhite} className='w-[160px]' />
                    )}
                </Link>
                {/* nav */}
                <nav className={`${nav ? 'text-primary' : 'text-white'} flex gap-x-4 lg:gap-x-8 items-center font-tertiary tracking-[3px] text-base uppercase`}>
                    <Link to="/" className='hover:text-accent transition'>Home</Link>
                    <Link to="/about" className='hover:text-accent transition'>About</Link>
                    <Link to="/room" className='hover:text-accent transition'>Rooms</Link>
                    <Link to="/" className='hover:text-accent transition'>Spa</Link>
                    <Link to="/contact" className='hover:text-accent transition'>Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header