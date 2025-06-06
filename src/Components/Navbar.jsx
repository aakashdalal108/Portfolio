import React from 'react'
import { motion } from "motion/react"

const Navbar = () => {
  return (
    
    <motion.nav
    className="flex justify-around items-center  w-full "
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    <div >
          <a className='flex items-center' href="/">
          <img className='w-20' src="/logo1.png" alt="" />
            
            <span className='hidden md:block'>Aakash Dalal</span>
            </a>
        </div>
        
        <ul className='flex md:gap-8 gap-4 hover: '>
  
        <a href="#projects" >
          
            <li className='cursor-pointer hover:scale-110 transition-transform duration-200'>Projects</li>
        </a>
        
        <a href="#about" >

            <li className='cursor-pointer hover:scale-110 transition-transform duration-200'>About</li>
        </a>
        
        <a href="#contact" >
            <li className='cursor-pointer hover:scale-110 transition-transform duration-200'>Contact Me</li>
        </a>
        </ul>
  </motion.nav>
  )
}

export default Navbar
