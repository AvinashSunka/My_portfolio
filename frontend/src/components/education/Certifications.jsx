import React from 'react'
import Card from './CertiCards'
import img1 from '../../assets/images/Certifications/Standford.png'
import img2 from '../../assets/images/Certifications/gsds.png'
import img3 from '../../assets/images/Certifications/mlds.png'
import { IoGlobeOutline } from "react-icons/io5";

const Certifications = () => {
  return (
<div className='w-[100%] h-auto my-20' >
        <h1 className=' text-5xl lg:text-6xl p-12 lg:pl-32 font-bold text-[#C4CFDE] '>Certifications:</h1>
            <div className="flex justify-center">
            <div className='w-[90%] lg:m-10 grid justify-center md:grid-cols-2 xl:grid-cols-3 gap-20'>

      <Card 
        Icon={<IoGlobeOutline />}
        Header={'Machine Learning Specialization'} 
        text={'A machine learning specialization course offered by standford university'}
        image={img1}
        link={"https://www.coursera.org/account/accomplishments/verify/E7LJFA5E6CGW"}
        />

    <Card 
      Icon={<IoGlobeOutline/>}
      Header={'Getting Started with Enterprise Data Science'} 
      text={'A Data science specialization course offered by IBM'}
      image={img2}
      link={"https://www.coursera.org/account/accomplishments/verify/E7LJFA5E6CGW"}
        />

    <Card 
      Icon={<IoGlobeOutline />}
      Header={'Machine Learning Certification'} 
      text={'A machine learning specialization course offered by IBM'}
      image={img3}
      link={"https://www.coursera.org/account/accomplishments/verify/E7LJFA5E6CGW"}
        />

    </div>  
      </div>
    </div>
  )
}

export default Certifications
