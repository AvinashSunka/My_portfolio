import React, { useState } from 'react'
import Edu from './Edu';
import Skill from './Skill';
import Experience from './Experience';
import Certifications from './Certifications';

const Education = () => {
    const [edu, setedu] = useState(false);
    const [skill, setskill] = useState(false);
    const [exp, setexp] = useState(true);
    const [certi, setcerti] = useState(false);





    const calledu = () =>{
        setskill(false);
        setexp(false);
        setedu (true)
        setcerti(false)
    }

    const callskills =()=>{
        setedu(false);
        setexp(false);
        setskill (true)
        setcerti(false)
    }

    const callexp =()=>{
        setedu(false);
        setskill (false)
        setexp(true);
        setcerti(false)
    }

    const callCertificates = () =>{
      setedu(false);
      setskill (false)
      setexp(false);
      setcerti(true)
    }


  return (
    <div className='h-auto my-10' id='EDUCATION'>
        {/* <h1 className='text-6xl lg:text-8xl p-12 lg:pl-32 font-extrabold'>Education:</h1> */}
        <br /><br /> <br /><br />

        <div className="flex justify-center">
        <div className="flex flex-col md:flex-row w-[90%] text-3xl font-semibold shadow-md shadow-black ">
            
        <button  className="border-none w-[100%] md:w-1/3 text-center p-10 hover:text-blue-400 hover:shadow-lg hover:shadow-black hover:duration-500 rounded-xl " onClick={calledu}>Education</button>

        <button className="border-none w-[100%] md:w-1/3 text-center p-10 hover:text-blue-400 hover:shadow-lg hover:shadow-black hover:duration-500 rounded-xl" onClick={callskills}>Professional Skills</button>

        <button className="border-none w-[100%] md:w-1/3 text-center p-10 hover:text-blue-400 hover:shadow-lg hover:shadow-black hover:duration-500 rounded-xl" onClick={callexp}>Experience</button>

        <button  className="border-none w-[100%] md:w-1/3 text-center p-10 hover:text-blue-400 hover:shadow-lg hover:shadow-black hover:duration-500 rounded-xl " onClick={callCertificates}>Certifications</button>
      </div>
        </div>

        {edu && <Edu />}
        {skill && <Skill />}
        {exp && <Experience />}
        {certi && <Certifications/>}
    </div>
  )
}

export default Education
