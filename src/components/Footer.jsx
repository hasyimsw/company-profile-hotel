import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '/img/logo-white.svg'

const Footer = () => {
    return (
        <footer className='bg-primary py-12'>
            <div className='container mx-auto text-white md:flex md:justify-between'>
                {/* logo */}
                <Link to="/" className='mb-4'>
                    <img src={LogoWhite} alt="Logo" />
                </Link>
                <span>Copyright &copy; 2023. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer