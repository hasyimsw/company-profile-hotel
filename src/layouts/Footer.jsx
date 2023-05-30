// import LogoWhite from '/img/logo.svg'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import Button from "../components/Elements/Button"

const Footer = () => {
    return (
        <footer className='pt-8 bg-primary'>
            <div className='container pb-5 mx-auto'>
                <div className='space-y-4 text-white md:space-y-0 md:flex md:justify-between'>
                    <div>
                        <h1 className='text-3xl font-primary'>Phone Support</h1>
                        <p className='mb-1 text-xs uppercase md:mb-2 text-white/60'>24 Hours A Day</p>
                        <span className='text-lg font-tertiary'>+0123 456 789</span>
                    </div>
                    <div>
                        <h1 className='text-3xl font-primary'>Follow Us</h1>
                        <p className='mb-1 text-xs uppercase md:mb-4 text-white/60'>Social Media Channels</p>
                        <div className='flex items-center text-md gap-x-3'>
                            <BsFacebook />
                            <FaTiktok />
                            <BsInstagram />
                            <BsTwitter />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-3xl font-primary'>Our Newsletter</h1>
                        <p className='mb-1 text-xs uppercase md:mb-4 text-white/60'>Sign Up For Special Offer</p>
                        <div className='flex'>
                            <input type="email" className='w-full px-4 py-2 text-black bg-grey-200 focus:outline-none' placeholder='Email' />
                            <Button variant="bg-accent hover:bg-accent-hover">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t-[0.1px] border-white/30'>
                <div className='container pt-2 pb-4 mx-auto text-sm text-white/60'>
                    Copyright &copy; 2023 - Hotel Esex-Esex. All Right Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer