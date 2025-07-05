import React from 'react'

const Icon = ({icon, link}) => {
  return (
    <div>
        <div className='hover:text-green-500 w-auto h-auto shadow-md shadow-black flex justify-center items-center p-5 text-5xl transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:duration-500 ... rounded-2xl bg-[#1b2244] hover:shadow-[0_0_1px_#fff,inset_0_0_2px_#fff,0_0_1px_#08f,0_0_3px_#08f,0_0_5px_#08f]'>
            <a href={link} className='hover:text-green-500 text-white'>{icon}</a>
        </div>
      
    </div>
  )
}

export default Icon
