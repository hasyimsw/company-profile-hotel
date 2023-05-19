import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '/img/logo-white.svg'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='py-10 bg-primary'>
            <div className='container mx-auto'>
                <div className='text-white md:flex md:justify-between md:items-center'>
                    {/* logo */}
                    <Link to="/" className='mb-2'>
                        <img src={LogoWhite} alt="Logo" />
                    </Link>
                    <div className='mt-3 md:mt-0'>
                        <span>Copyright &copy; 2023. All rights reserved.</span>
                        <div className='flex items-center mt-2 text-md gap-x-2'>
                            <BsFacebook />
                            <FaTiktok />
                            <BsInstagram />
                            <BsTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer