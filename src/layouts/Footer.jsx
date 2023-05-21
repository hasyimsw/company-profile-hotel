import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '/img/logo.svg'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='pt-8 bg-primary'>
            <div className='container pb-5 mx-auto'>
                <div className='items-start space-y-6 text-white md:flex md:justify-between'>
                    <div>
                        <h1 className='mt-2 text-3xl font-primary'>Phone Support</h1>
                        <p className='mb-2 text-xs uppercase text-white/60'>24 Hours A Day</p>
                        <span className='text-2xl font-tertiary'>+0123 456 789</span>
                    </div>
                    <div>
                        <h1 className='text-3xl font-primary'>Follow Us</h1>
                        <p className='mb-4 text-xs uppercase text-white/60'>Social Media Channels</p>
                        <div className='flex items-center pb-1 mt-2 text-md gap-x-3'>
                            <BsFacebook />
                            <FaTiktok />
                            <BsInstagram />
                            <BsTwitter />
                        </div>
                    </div>
                    <div className='mt-3 md:mt-0'>
                        <h1 className='text-3xl font-primary'>Our Newsletter</h1>
                        <p className='mb-4 text-xs uppercase text-white/60'>Sign Up For Special Offer</p>
                        <div className='flex'>
                            <input type="email" className='w-full px-4 py-2 text-black bg-grey-200 focus:outline-none' placeholder='Email' />
                            <button className='btn btn-primary'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t-[0.1px] border-white/30'>
                <div className='container pt-2 pb-4 mx-auto text-white/60'>
                    Copyright &copy; 2023 - Hotel Esex-Esex. All Right Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer