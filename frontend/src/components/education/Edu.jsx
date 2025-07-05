import React from 'react'
import EduLeft from "./EduLeft";
import EduRight from "./EduRight";
const Edu = () => {
  return (
<div className="flex justify-center">

    <div className=" flex w-[80%] lg:w-[90%] justify-around">

        <div className="w-[100%] lg:w-[40%]">
        <EduLeft />
        </div>

        <div className=" w-[40%] hidden lg:block">
        <EduRight />
        </div>

    </div>
</div>
  )
}

export default Edu
