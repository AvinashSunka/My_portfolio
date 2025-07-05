import React from 'react'

const Aboutme = (props) => {
  return (
    <div className='my-14 lg:my-20' id='ABOUT'>
      <div className='hidden lg:block'>
      <br /><br /> <br />
      </div>
        <h1 className='text-6xl lg:text-8xl font-bold mx-12 lg:mx-32 my-12 lg:my-8 '>About Me :</h1>
        <div className="flex justify-center">
        <div className='w-[90%]'>
      <p className=' text-white py-8 px-4  lg:py-14 lg:px-10 rounded-3xl text-2xl lg:text-3xl' style={{border:'2px solid blue'}}>
      {props.bio}
      </p>
    </div>
        </div>
    </div>
  )
}

export default Aboutme
