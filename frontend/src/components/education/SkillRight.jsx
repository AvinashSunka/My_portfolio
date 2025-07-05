import React from 'react'

const SkillRight = () => {
  return (
    <div className='w-full xl:w-[35%] h-auto flex justify-center'>
      <div className="w-[90%]">
      <div className="xl:flex gap-8 w-full">
        <div className="relative w-96 aspect-auto ">
  <svg className="w-full h-full" viewBox="0 0 100 100">
    {/* <!-- Background circle --> */}
    <circle
      className="text-gray-200 stroke-current"
      stroke-width="10"
      
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
    ></circle>
    {/* <!-- Progress circle --> */}
    <circle
      className="text-yellow-600  progress-ring__circle stroke-current"
      stroke-width="10"
      stroke-linecap="round"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
      stroke-dashoffset="calc(400 - (400 * 50) / 100)"
    ></circle>
    
    {/* <!-- Center text --> */}
    <text x="50" y="50" font-family="Verdana" font-size="20" text-anchor="middle" alignment-baseline="middle">80%</text>

  </svg>
</div>
<div className="text-7xl font-bold flex items-center justify-center w-1/2">
    Front-End
</div>
        </div>


{/* ------------------------------------------------------------------------ */}

<div className="xl:flex gap-8">
        <div className="relative w-96 h-96 ">
  <svg className="w-full h-full" viewBox="0 0 100 100">
    {/* <!-- Background circle --> */}
    <circle
      className="text-gray-200 stroke-current"
      stroke-width="10"
      
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
    ></circle>
    {/* <!-- Progress circle --> */}
    <circle
      className="text-yellow-600  progress-ring__circle stroke-current"
      stroke-width="10"
      stroke-linecap="round"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
      stroke-dashoffset="calc(400 - (400 * 47) / 100)"
    ></circle>
    
    {/* <!-- Center text --> */}
    <text x="50" y="50" font-family="Verdana" fontWeight='' font-size="20" text-anchor="middle" alignment-baseline="middle">70%</text>

  </svg>
</div>
<div className="text-7xl font-bold flex items-center justify-center w-1/2">
    Back-End
</div>
        </div>

{/* ----------------------------------------------------------------------------------------- */}

<div className="xl:flex gap-8">
        <div className="relative w-96 h-96 ">
  <svg className="w-full h-full" viewBox="0 0 100 100">
    {/* <!-- Background circle --> */}
    <circle
      className="text-gray-200 stroke-current"
      stroke-width="10"
      
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
    ></circle>
    {/* <!-- Progress circle --> */}
    <circle
      className="text-yellow-600  progress-ring__circle stroke-current"
      stroke-width="10"
      stroke-linecap="round"
      cx="50"
      cy="50"
      r="40"
      fill="transparent"
      stroke-dashoffset="calc(400 - (400 * 40) / 100)"
    ></circle>
    
    {/* <!-- Center text --> */}
    <text x="50" y="50" font-family="Verdana" font-size="20" text-anchor="middle" alignment-baseline="middle">60%</text>

  </svg>
</div>
<div className="text-5xl lg:text-7xl font-bold flex items-center justify-center w-1/2">
    Machine Learning
</div>
        </div>
      
      </div>
    </div>
  )
}

export default SkillRight
