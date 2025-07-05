import React from 'react'
import './Cards.css'


const Cards = ({image, text, link, title}) => {
  return (
    <div className='outer my-6 sm:my-0' >
      <div className="container1 w-full aspect-square " >
      <div className="card h-[100%] flex justify-center">
          <div className="front bg-transparent flex justify-center items-center p-6 w-full h-full" >
            <img src={image}  alt="" className='w-[100%] h-[100%]  rounded-2xl'/>
          </div>
          <div className="back bg-transparent h-[100%] w-full" >
            <h1 className='text-white text-7xl lg:text-8xl text-center'>{title}</h1>
            <p>{text}</p>
            <button type='submit' className='w-1/2 p-8 hover:bg-green-700 text-4xl font-bold hover:text-white text-center '><a href={link} className='hover:text-white text-center'>Website</a></button>
          </div>
    </div>
  </div>
    </div>
  )
}

export default Cards
