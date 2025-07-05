import React from 'react'
import avatar from '../assets/images/avatar.png'
import { IoMenu } from "react-icons/io5";
import resume from "../assets/images/Avinash\ resume.pdf"

const NavBar = () => {
        
  return (
    <div className=''>
        <header className="lg:flex justify-between items-center shadow-lg shadow-zinc-900 bg-[#02061e] h-auto px-8 lg:px-16 py-1 w-full" style={{position:'fixed', zIndex:'999999'}}>
            <div className='flex justify-between items-center'>
            <div className="flex items-center text-sm">
                <img src={avatar} className='w-16 lg:w-20 mr-4 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 ... rounded-[20%] ' onClick={()=>{
                    document.getElementById('HOME').scrollIntoView({ behavior: 'smooth' })
                }}/> <h1 className='hidden md:block text-4xl hover:text-green-500 hover:duration-300' onClick={()=>{
                    document.getElementById('HOME').scrollIntoView({ behavior: 'smooth' })
                }}>Avinash</h1>
            </div>
            <button type="button" className='lg:hidden w-24 h-20 text-6xl items-center border-none' onClick={()=>{
                const nav = document.getElementById('nav')
                nav.classList.toggle('hidden')
                nav.classList.toggle('flex')
                
            }}><IoMenu className='w-20' /></button>
            </div>
            {/* <div className='flex justify-center'> */}
            <ul id='nav' className=' hidden flex-col justify-center w-full items-center lg:flex-row lg:justify-between lg:w-1/2 xl:w-1/3 lg:flex'>

                <li className='hover:text-green-500 text-white' onClick={()=>{
                    document.getElementById('HOME').scrollIntoView({ behavior: 'smooth' })
                }}>Home</li>

                {/* <li className='hover:text-green-500 text-white' onClick={()=>{
                    document.getElementById('ABOUT').scrollIntoView({ behavior: 'smooth' })
                }}>About me</li> */}

                <li className='hover:text-green-500 text-white' onClick={()=>{
                    document.getElementById('FEATURES').scrollIntoView({ behavior: 'smooth' })
                }}>Tech Skills</li>

                {/* <li className='hover:text-green-500 text-white' onClick={()=>{
                    document.getElementById('EDUCATION').scrollIntoView({ behavior: 'smooth' })
                }}>Education</li> */}

                <li className='hover:text-green-500 text-white' onClick={()=>{
                    document.getElementById('PROJECTS').scrollIntoView({ behavior: 'smooth' })
                }}>Projects</li>

                {/* <li className='hover:text-green-500 text-white' onClick={()=>{
                    document.getElementById('CONTACT').scrollIntoView({ behavior: 'smooth' })
                }}>Contact</li> */}

                <li className="flex items-center">
                <a className="text-2xl shadow-md shadow-black px-6 py-6 rounded-md text-[#1FDE7F] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-500 ..." href={resume} target="_blank" rel="noopener noreferrer">RESUME</a>

                </li>

            </ul>
            {/* </div> */}
            
        </header>
      
    </div>
  )
}

export default NavBar
