import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around    items-center  '>
        <div >
          <a className='flex items-center' href="/">
          <img className='w-20' src="/logo1.png" alt="" />
            {/* <span className='text-xl cursor-pointer'>
                Aakash's Portfolio
            </span> */}
            <span className='hidden md:block'>Aakash Dalal</span>
            </a>
        </div>
        <ul className='flex md:gap-8 gap-4 '>
  
        <a href="#projects" >
            <li className='cursor-pointer'>Projects</li>
        </a>
        
        <a href="#about" >

            <li className='cursor-pointer'>About</li>
        </a>
        
        <a href="#contact" >
            <li className='cursor-pointer'>Contact Me</li>
        </a>
        </ul>
    </nav>
  )
}

export default Navbar
