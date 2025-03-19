import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './Card.css'


const Card = ({Icon, Header, text}) => {
  return (
    <div className='glass w-[100%] h-auto lg:w-[90%] border border-[#3C4452] pb-20 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 hover:duration-700 ...'>
        <div className='flex flex-col items-start justify-star text-6xl lg:text-8xl pl-20 pt-20 text-green-500'>
        {Icon}
        </div>
        <div className='m-10'>
        <h1 className='text-5xl md:text-6xl font-bold'>{Header}</h1>
        <br />
        <p className=' font-bold'>Skills : </p>
        <p className='text-3xl w-[90%] text-white'>{text}</p>
        </div>
        </div>
  )
}

export default Card
