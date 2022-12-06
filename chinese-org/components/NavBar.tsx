import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-white'>
            <h1 className='w-full text-2xl text-[#F26C4F]'>Chinese.org</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 text-[#F26C4F]'>HOME</li>
                <li className='p-4'>ABOUT</li>
                <li className='p-4'>FUNCTIONS</li>
                <li className='p-4'>GALLERY</li>
                <li className='p-4'>FAQ</li>
                <li className='p-4 whitespace-nowrap'>JOIN US</li>
                <li className='p-4'>LOGIN</li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#F26C4F] m-4'>Chinese.org.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 text-[#F26C4F]'>HOME</li>
                    <li className='p-4  border-b border-gray-600'>ABOUT</li>
                    <li className='p-4  border-b border-gray-600'>FUNCTIONS</li>
                    <li className='p-4  border-b border-gray-600'>GALLERY</li>
                    <li className='p-4  border-b border-gray-600'>FAQ</li>
                    <li className='p-4  border-b border-gray-600 whitespace-nowrap'>JOIN US</li>
                    <li className='p-4  border-b border-gray-600'>LOGIN</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar