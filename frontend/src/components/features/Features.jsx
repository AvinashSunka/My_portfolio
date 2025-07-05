import React from 'react'
import Card from './Card'
import { IoGlobeOutline } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";






const Features = () => {
  return (
    <div className='w-[100%] h-auto mt-32' id='FEATURES' >
                    <div className='hidden lg:block'>
      <br /><br /> <br />
      </div>
        <h1 className='text-6xl lg:text-8xl lg:pl-32text-6xl font-bold mx-12 lg:mx-32 my-12 lg:my-8'>Tech Skills :</h1>
            <div className="flex justify-center">
            <div className='w-[90%] lg:m-20 grid justify-center lg:grid-cols-2 xl:grid-cols-3 gap-y-20'>

        <Card 
        
            Icon={<MdOutlineDeveloperMode />}
            Header={'Full Stack Web Development'} 
            text={'HTML, CSS, BootStrap, Tailwind CSS, JavaScript, React JS, Django, RestFrameword, API, MYSQL'}
        />


        <Card 
            Icon={<FaPenNib />}
            Header={'Embedded Systems'} 
            text={'C, C++, X86, Assembly-language, ARM, AMBA Protocols'}
        />

        <Card 
            Icon={<IoGlobeOutline />}
            Header={'Machine Learning'} 
            text={'Python, Numpy, Pandas, Matplotlib, Seaborn, SKLearn, Deeplearning, Neural Networks, OpenCV'}
        />

        <Card 
            Icon={<FaCamera />}
            Header={'DSA'} 
            text={'Arrays, Strings, Bit manipulation, Dynamic Programming, HashTables etc  '}
        />

        <Card 
            Icon={<FaLinux />}
            Header={'Unix Programming'} 
            text={'Unix Commands, Cshell, Perl, TCL'}
        />

        <Card 
            Icon={<FaChalkboardTeacher />}
            Header={'MentorShip'} 
            text={''}
        />

    </div>  
      </div>
    </div>
  )
}

export default Features
