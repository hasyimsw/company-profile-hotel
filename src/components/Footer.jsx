import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '/img/logo-white.svg'

const Footer = () => {
    return (
        <footer className='bg-primary py-10'>
            <div className='container mx-auto'>
                <div className='text-white md:flex md:justify-between md:items-center'>
                    {/* logo */}
                    <Link to="/" className='mb-2'>
                        <img src={LogoWhite} alt="Logo" />
                    </Link>
                    <span>Copyright &copy; 2023. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer