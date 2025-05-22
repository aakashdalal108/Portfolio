import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './Components/Project'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import About from './Components/About'


function App() {
  

  return (
    <>
    <Navbar/>
    <Main/>
     <Project/>
    <About/>
    <Contact/>
    <footer className="bg-gray-800 text-white p-2 text-center">
      <p>&copy; 2023 Aakash Dalal. All rights reserved.</p>
      
    </footer>
   </>
  )
}

export default App
