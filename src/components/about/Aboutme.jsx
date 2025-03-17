import React from 'react'

const Aboutme = () => {
  return (
    <div className='my-14 lg:my-20' id='ABOUT'>
      <div className='hidden lg:block'>
      <br /><br /> <br />
      </div>
        <h1 className='text-6xl lg:text-8xl font-bold mx-12 lg:mx-32 my-12 lg:my-8 '>About Me :</h1>
        <div className="flex justify-center">
        <div className='w-[90%]'>
      <p className=' text-white py-8 px-4  lg:py-14 lg:px-10 rounded-3xl text-2xl lg:text-3xl' style={{border:'2px solid blue'}}>
      I am an aspiring Software Engineer and an Embedded System Trainee at VEDA IIT, passionate about building scalable and efficient solutions. My expertise spans <span className='font-bold text-violet-600'>full-stack web development</span> with <span className='font-bold text-violet-600'>React.js, Django, and REST framework,</span> as well as <span className='font-bold text-violet-600'>machine learning and deep learning applications</span>.
<br />
With a <span className='font-bold text-violet-600'>strong foundation in computer science fundamentals</span>, I enjoy solving complex problems and have tackled <span className='font-bold text-violet-600'>100+ DSA questions in leetcode and other coding platforms</span>. My goal is to continuously learn, innovate, and contribute to impactful projects in the software and embedded systems domain.
      </p>
    </div>
        </div>
    </div>
  )
}

export default Aboutme
