import React from 'react'
import logo from '../assets/logo2.webp'
const Header = () => {
  return (
    <div className='b-bottom flex justify-between text-red-200 md:text-3xl bg-gray-700 hover:bg-red-100 md:max-w-[1250px] max-w-[500px] m-auto hover:text-gray-800 p-4 md:p-6 '>
        <div className='flex'><img className='h-[40px] md:h-[60px] rounded-full' src={logo}/>
        <div className='text-center text-2xl text-blue-400'>FreeLearn</div>
        </div>
    <nav className=' list gap-3 md:gap-5 flex md:text-2xl'>
        <li><a href="#home"></a>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>contact Us</li>
    </nav>
    </div>
  )
}

export default Header