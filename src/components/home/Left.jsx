import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../../App.css'
import Icons from './Icons';

const Left = () => {
  const colors = ["#ff0000", "#00ff00", "#0000ff"]; // Red, Green, Blue

  const [text, count] = useTypewriter({
    words: [
      "Full Stack Web-Developer",
      "AI Enthusiast",
      "Embedded System Trainee",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
  });
  return (
    <div className='w-[100%] lg:w-2/3 lg:mx-16 my-32'>
      <h1 className='subtitle text-2xl'>WELCOME TO MY WORLD</h1>
      <br />
      <h1 className='title text-7xl lg:text-9xl font-bold'>
        Hi, I'm <span className='text-[#1DE5A0]'>Avinash</span>,
      </h1>
      <br />
      <h1 className='text-5xl md:text-7xl'>a  {' '}
      <span className='text-yellow-400 drop-shadow-[0_0_0px_#08f] font-bold'>{text}</span>
      <span><Cursor cursorStyle='|' /></span>
      </h1>
      <br />
      <h1>I'm Self-taught Programmer And an open-source enthusiast and maintainer.</h1>

      <Icons />
    </div>
  )
}

export default Left
